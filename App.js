import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.card}>Birthday Card</Text>
      <View style={styles.body}>
        <Text>
          Happy birthday We wish 
          you the best in this day and many more years to come. 
          Enjoy and know that we love you to the fullest 
          and never let anyone ruin it for you.
          </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'magenta',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  body: {
    marginLeft: '15%',
    marginRight: '15%',
  }
});
