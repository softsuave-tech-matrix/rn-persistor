# rn-persistor

rn-persistor is a lightweight and efficient package that seamlessly integrates Realm into your React Native applications, providing a robust solution for persistent data storage. This package simplifies the integration process and allows developers to focus on building engaging user experiences

## Installation

```sh
npm install rn-persistor
```
Install the realm dependency

```sh
npm install realm
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
