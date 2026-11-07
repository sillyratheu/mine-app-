import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { WebView } from 'react-native-webview';

export default function App() {
  const [screen, setScreen] = useState('home');

  if (screen === 'editor') {
    return (
      <View style={{ flex: 1, paddingTop: 40 }}>
        <WebView source={{ uri: 'https://snack.expo.dev' }} style={{ flex: 1 }} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My App Builder 🚀</Text>
      <TouchableOpacity style={styles.button} onPress={() => setScreen('editor')}>
        <Text style={styles.buttonText}>Open Editor</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  button: { backgroundColor: '#2563eb', paddingHorizontal: 24, paddingVertical: 14, borderRadius: 10 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});