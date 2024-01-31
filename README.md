# rn-persistor

A persistor package built from realm for react native applications.

## Installation

```sh
npm install rn-persistor
```

## Usage

```ts
import RealmStorage from 'rn-persistor';

const realmStorage = new RealmStorage();

//  For persistance
const persister = createAsyncStoragePersister({
    storage: realmStorage,   // pass to your storage option
  });

//  For Data storage

  async function test() {
    const key = 'token';
    await realmStorage.setItem(key, JSON.stringify('abcdefsdf54s5df4ds5f'));
    const persistedData = await realmStorage.getItem(key);
    await realmStorage.removeItem(key);
  }
  test();

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
