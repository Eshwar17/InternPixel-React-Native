import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <Text style={{margin: 16, fontSize: 20, borderColor: 'blue', borderWidth: 2, padding: 16}}>Another text</Text>
      <Text style={styles.text}>Hello Eshwar! Welcome to React Native App</Text>
      <Button title='Click Me'/>
      <StatusBar style="auto" />
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
  text: {
    color: 'black',
    fontSize: 25,
    borderColor: '#ccc',
    borderWidth: 3,
    padding: 16,
    margin: 16,
  },
});
