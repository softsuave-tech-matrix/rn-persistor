export type MaybePromise<T> = T | Promise<T>;

export interface realmStorageType<TStorageValue = string> {
  getItem: (key: string) => Promise<TStorageValue | undefined | null>;
  setItem: (key: string, value: TStorageValue) => MaybePromise<unknown>;
  removeItem: (key: string) => MaybePromise<void>;
}
