import Schema, { ValidateError } from '@rc-component/async-validator';
import { Rule } from '@rc-component/async-validator/es';
import { AsyncValidationError } from '@rc-component/async-validator/es/util';
import type { AnyObject } from 'antd/es/_util/type';
import { ColumnType, DataColumnType } from '../index';

export interface ValidateDataParams<RecordType extends AnyObject = AnyObject> {
  newValue: RecordType[];
  columns: ColumnType<RecordType>[];
  setCellStatus: (status: Record<number, Record<number, string>>) => void;
}

export async function validateData<RecordType extends AnyObject = AnyObject>(
  params: ValidateDataParams<RecordType>,
): Promise<AsyncValidationError | undefined> {
  const { newValue, columns, setCellStatus } = params;
  const newErrorStatus = {} as Record<number, Record<number, string>>;

  const descriptor: Record<string, { rule: Rule; idx: number }> = {};

  columns.forEach((column, colIndex) => {
    const col = column as DataColumnType<any, any>;
    if (!col.rule) {
      return;
    }
    descriptor[col.dataIndex as string] = { rule: col.rule, idx: colIndex };
  });

  if (Object.keys(descriptor).length === 0) {
    setCellStatus(newErrorStatus);
    return;
  }

  const errors: ValidateInfo[] = [];
  for (let rowIndex = 0; rowIndex < newValue.length; rowIndex++) {
    const row = newValue[rowIndex];
    for (const [k, v] of Object.entries(descriptor)) {
      if (!row.hasOwnProperty(k)) {
        continue;
      }
      try {
        await new Schema({ [k]: v.rule }).validate(row, { suppressWarning: true, suppressValidatorError: true });
      } catch (error: any) {
        console.warn('sheet validate error:', rowIndex, { ...error });
        if (error instanceof AsyncValidationError) {
          error.errors.forEach((err: ValidateError) => {
            if (!newErrorStatus[v.idx]) {
              newErrorStatus[v.idx] = {};
            }
            newErrorStatus[v.idx][rowIndex] = err.message!;
            errors.push({
              row: rowIndex,
              column: err.field!,
              message: err.message!,
              fieldValue: err.fieldValue,
            });
          });
          continue;
        }
        throw error;
      }
    }
  }
  setCellStatus(newErrorStatus);
  if (errors.length) {
    throw new SheetValidateError('ValidateError', errors);
  }
}

export interface ValidateInfo {
  row: number;
  column: string;
  message: string;
  fieldValue: string;
}

export class SheetValidateError extends Error {
  errors: ValidateInfo[];

  constructor(message: string, errors: ValidateInfo[]) {
    super(message);
    this.errors = errors;
  }
}
