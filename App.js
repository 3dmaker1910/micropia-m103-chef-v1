import { registerRootComponent } from 'expo';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const LOGO_URL = 'https://static.prod-images.emergentagent.com/jobs/b09505ba-190e-4ca7-9d47-23f73249f18b/images/ead6be8a705c5bff1249e23b0e7accce78ef17c453ae9a93a98fbca30f7ed3ae.png';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: LOGO_URL }} style={styles.logo} />
        <Text style={styles.title}>M103: MICRO-CHEF</Text>
        <Text style={styles.subtitle}>Cushuro: El Oro de los Andes</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>La Ciencia del Sabor</Text>
          <Text style={styles.cardText}>Descubre cómo los microorganismos crean los alimentos más nutritivos del planeta, desde el pan hasta el increíble Cushuro.</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.founderText}>"Un mundo dentro de tu mundo."</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0b0c10' },
  header: { padding: 50, alignItems: 'center', backgroundColor: '#1f2833' },
  logo: { width: 100, height: 100, borderRadius: 50, marginBottom: 20 },
  title: { color: '#ffD700', fontSize: 28, fontWeight: 'bold' },
  subtitle: { color: '#66fcf1', fontSize: 16 },
  content: { padding: 30 },
  card: { backgroundColor: '#1f2833', padding: 25, borderRadius: 15, borderLeftWidth: 5, borderLeftColor: '#ffD700' },
  cardTitle: { color: '#ffD700', fontWeight: 'bold', fontSize: 20, marginBottom: 10 },
  cardText: { color: '#c5c6c7', fontSize: 16 },
  footer: { padding: 40, alignItems: 'center' },
  founderText: { color: '#45a29e', fontSize: 14, fontStyle: 'italic' }
});

registerRootComponent(App);