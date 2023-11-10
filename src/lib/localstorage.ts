export function getLocalStorageItem<T>(key: string) {
  if (typeof localStorage === 'undefined') {
    return null;
  }

  const item = localStorage?.getItem(key);
  if (item) {
    return JSON.parse(item) as T;
  }
  return null;
}

export function setLocalStorageItem(key: string, value: unknown) {
  if (typeof localStorage === 'undefined') {
    return;
  }

  localStorage?.setItem(key, JSON.stringify(value));
}
