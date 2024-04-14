export interface Grouped<T> {
  [key: string]: T[];
}

export function groupBy<T>(data: T[], fn: (value: T) => string | number): Grouped<T> {
  const result = data.reduce((acc, item) => {
    const key = fn(item);

    const isKeyAlreadyExists = acc[key] !== undefined;

    if (!isKeyAlreadyExists) return { ...acc, [key]: [item] };

    const dataKey = [...acc[key], item];

    return { ...acc, [key]: dataKey };
  }, {});

  return result;
}
