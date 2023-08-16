import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput placeholder='Your study goal!!!'/>
        <Button title='Add Goal'/>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,

  }
});
