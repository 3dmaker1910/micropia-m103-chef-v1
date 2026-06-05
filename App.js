import { registerRootComponent } from 'expo';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

// LOGO OFICIAL DE MICROPIA
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
          <Text style={styles.cardText}>Descubre cómo los microorganismos transforman los alimentos. Desde el pan más crujiente hasta el Cushuro más nutritivo de las lagunas andinas.</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Dra. Micra dice:</Text>
          <Text style={styles.infoText}>"¡Hola, explorador! Las bacterias benéficas son las chefs más talentosas del planeta. ¡Aprende sus secretos aquí!"</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.founderText}>"La vida vibra en lo profundo."</Text>
        <Text style={styles.founderName}>- Nando, Fundador</Text>
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
  card: { backgroundColor: '#1f2833', padding: 25, borderRadius: 15, borderLeftWidth: 5, borderLeftColor: '#ffD700', marginBottom: 20 },
  cardTitle: { color: '#ffD700', fontWeight: 'bold', fontSize: 20, marginBottom: 10 },
  cardText: { color: '#c5c6c7', fontSize: 16, lineHeight: 24 },
  infoBox: { backgroundColor: '#0b0c10', padding: 20, borderRadius: 15, borderWidth: 1, borderColor: '#45a29e' },
  infoTitle: { color: '#66fcf1', fontWeight: 'bold', marginBottom: 5 },
  infoText: { color: '#fff', fontStyle: 'italic' },
  footer: { padding: 40, alignItems: 'center' },
  founderText: { color: '#45a29e', fontSize: 14, fontStyle: 'italic', textAlign: 'center' },
  founderName: { color: '#666', fontSize: 12, marginTop: 5 }
});

registerRootComponent(App);