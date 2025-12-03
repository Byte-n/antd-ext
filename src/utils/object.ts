export function isNil(v: unknown) {
  return v === null || v === undefined;
}

export function cloneDeepByJSON<T>(v: T): T {
  return JSON.parse(JSON.stringify(v)) as T;
}

/**
 * is objected && !isNil
 * @param v
 */
export function isObject(v: unknown) {
  return !isNil(v) && typeof v === 'object';
}
