declare type Dictionary<T> = { [key: string]: T }

declare module global {
  type Dictionary<T> = { [key: string]: T }
}
