export function isNil(v: unknown) {
  return v === null || v === undefined;
}

export function isEmpty(v: unknown) {
  if (isNil(v)) {
    return true;
  }

  if (typeof v === 'string') {
    return v.length === 0;
  }

  if (Array.isArray(v)) {
    return v.length === 0;
  }

  if (typeof v === 'object') {
    return Object.keys(v).length === 0;
  }

  if (typeof v === 'number') {
    return isNaN(v);
  }

  return false;
}

export function cloneDeep<T>(v: T): T {
  return JSON.parse(JSON.stringify(v)) as T;
}

/**
 * is objected && !isNil
 * @param v
 */
export function isObject (v: unknown) {
  return !isNil(v) && typeof v === 'object';
}
