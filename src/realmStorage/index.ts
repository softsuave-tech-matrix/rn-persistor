import Realm from 'realm';
import { RealmSchema } from '../models/RealmSchema';
import { type MaybePromise } from './types';

export class RealmStorage {
  private static instance: RealmStorage;
  private static realm: Realm;

  constructor() {
    if (!RealmStorage.instance) {
      RealmStorage.instance = this;
    }
    if (!RealmStorage.realm) {
      RealmStorage.realm = new Realm({ schema: [RealmSchema] });
    }
    return RealmStorage.instance;
  }

  getItem = (passedKey: string): Promise<string | undefined | null> => {
    return new Promise((resolve, reject) => {
      try {
        const item = RealmStorage.realm
          .objects('Data')
          .find((dataItem: Record<string, unknown>) => {
            return passedKey === dataItem?.key;
          });
        resolve(item?.value as string);
      } catch (error) {
        reject(error);
      }
    });
  };

  setItem = (passedKey: string, value: string): MaybePromise<unknown> => {
    return new Promise((resolve, reject) => {
      try {
        RealmStorage.realm.write(() => {
          RealmStorage.realm.create(
            'Data',
            {
              key: passedKey,
              value: value,
            },
            true
          );
        });
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  };

  removeItem = (passedKey: string): MaybePromise<void> => {
    return new Promise((resolve, reject) => {
      try {
        RealmStorage.realm.write(() => {
          const item = RealmStorage.realm
            .objects('Data')
            .find((dataItem: Record<string, unknown>) => {
              return passedKey === dataItem?.key;
            });
          RealmStorage.realm.delete(item);
        });
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };
}
