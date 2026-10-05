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

        <Text style={styles.title}>G-Connect</Text>

        <Text style={styles.subtitle}>
          Connect. Create. Grow.
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },

  logoCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },

  logoText: {
    color: '#ffffff',
    fontSize: 50,
    fontWeight: 'bold',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111111',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 35,
  },

  button: {
    backgroundColor: '#111111',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});