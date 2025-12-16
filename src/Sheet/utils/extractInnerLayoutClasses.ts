export function extractInnerLayoutClasses(className?: string) {
  if (!className) {
    return [];
  }

  const left = [];
  const right = [];
  for (const name of className.split(' ')) {
    if (name.endsWith('-cell-inner-layout')) {
      left.push(name);
      continue;
    }
    right.push(name);
  }
  return [left.length ? left.join(' ') : undefined, right.length ? right.join(' ') : undefined];
}
