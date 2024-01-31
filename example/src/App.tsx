import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import RealmStorage from 'rn-persistor';

export default function App() {
  React.useEffect(() => {
    const realmPersist = new RealmStorage();
    (async () => {
      try {
        const key = 'kcb';
        await realmPersist.setItem(
          key,
          JSON.stringify({ name: 'Bharath K C' })
        );
        const storedItem = realmPersist.getItem(key);
        console.log(
          'storedItem',
          typeof storedItem === 'string' ? JSON.parse(storedItem) : storedItem
        );
      } catch (error) {
        console.log('realm persist error', error);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
