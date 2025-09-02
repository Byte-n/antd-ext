/**
 * 根据指定的函数对数组进行去重，保留最后一个重复项
 * @param array 要处理的数组
 * @param iteratee 用于获取去重值的函数
 * @returns 去重后的新数组
 *
 * @example
 * ```ts
 * const users = [
 *   { id: 1, name: 'Alice' },
 *   { id: 2, name: 'Bob' },
 *   { id: 1, name: 'Alice Updated' }
 * ];
 *
 * // 根据 id 去重，保留最后一个，保持相对顺序
 * unionBy(users, user => user.id);
 * // => [{ id: 2, name: 'Bob' }, { id: 1, name: 'Alice Updated' }]
 *
 * // 根据 name 去重，保留最后一个，保持相对顺序
 * unionBy(users, user => user.name);
 * // => [{ id: 2, name: 'Bob' }, { id: 1, name: 'Alice Updated' }]
 *
 * const numbers = [1, 2, 3, 2, 4, 1, 5];
 *
 * // 数字去重，保留最后一个，保持相对顺序
 * unionBy(numbers, num => num);
 * // => [3, 2, 4, 1, 5]
 * ```
 */
export declare function unionBy<T>(array: T[], iteratee: (item: T) => any): T[];
