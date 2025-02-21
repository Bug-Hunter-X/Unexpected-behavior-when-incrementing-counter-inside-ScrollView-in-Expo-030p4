import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, useCallback } from 'react-native';

export default function App() {
  const [count, setCount] = React.useState(0);

  const handleIncrement = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.paragraph}>
          {count}
        </Text>
        <Text onPress={handleIncrement}>
            Increment
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
