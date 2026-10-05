import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <View style={styles.logoCircle}>
          <Text style={styles.logoText}>G</Text>
        </View>

        <Text style={styles.title}>Get</Text>
        <Text style={styles.subtitle}>
          Your all-in-one platform
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },

  logoCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },

  logoText: {
    color: '#ffffff',
    fontSize: 55,
    fontWeight: 'bold',
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 17,
    color: '#666666',
    marginBottom: 35,
  },

  button: {
    backgroundColor: '#000000',
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 30,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});