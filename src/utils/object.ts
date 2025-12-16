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

/**
 * Creates an object composed of the own enumerable property paths of object that are not omitted.
 * @param obj The source object.
 * @param keys The property paths to omit.
 * @returns Returns the new object.
 */
export function omit<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  const result = { ...obj };
  keys.forEach(key => {
    delete result[key];
  });
  return result;
}