function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
export function isNil(v) {
  return v === null || v === undefined;
}
export function isEmpty(v) {
  if (isNil(v)) {
    return true;
  }
  if (typeof v === 'string') {
    return v.length === 0;
  }
  if (Array.isArray(v)) {
    return v.length === 0;
  }
  if (_typeof(v) === 'object') {
    return Object.keys(v).length === 0;
  }
  if (typeof v === 'number') {
    return isNaN(v);
  }
  return false;
}
export function cloneDeep(v) {
  return JSON.parse(JSON.stringify(v));
}

/**
 * is objected && !isNil
 * @param v
 */
export function isObject(v) {
  return !isNil(v) && _typeof(v) === 'object';
}