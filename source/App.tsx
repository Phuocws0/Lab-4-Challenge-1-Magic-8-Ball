import { useState } from 'react';
import { Image, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const answers = [
  require('./assets/answers/answer-1.png'),
  require('./assets/answers/answer-2.png'),
  require('./assets/answers/answer-3.png'),
  require('./assets/answers/answer-4.png'),
  require('./assets/answers/answer-5.png'),
];

export default function App() {
  const [answer, setAnswer] = useState(0);
  const shakeBall = () => setAnswer(current => (current + 1 + Math.floor(Math.random() * 4)) % 5);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#09254e" />
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.eyebrow}>A LITTLE GUIDANCE</Text>
          <Text style={styles.title}>Magic 8 Ball</Text>
          <Text style={styles.subtitle}>Ask a question. Trust the answer.</Text>
        </View>
        <Pressable accessibilityRole="button" accessibilityLabel="Shake the Magic 8 Ball" onPress={shakeBall} style={({ pressed }) => [styles.ballButton, pressed && styles.pressed]}>
          <Image source={answers[answer]} style={styles.ballImage} resizeMode="contain" />
        </Pressable>
        <View style={styles.footer}>
          <Text style={styles.answerCount}>ANSWER {answer + 1} OF 5</Text>
          <Text style={styles.hint}>TAP THE BALL TO SHAKE</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#09254e' },
  container: { flex: 1, alignItems: 'center', justifyContent: 'space-evenly', paddingHorizontal: 22, paddingVertical: 28 },
  heading: { alignItems: 'center' },
  eyebrow: { color: '#a8c5e5', fontSize: 11, fontWeight: '700', letterSpacing: 3 },
  title: { color: '#ffffff', fontSize: 32, fontWeight: '800', marginTop: 12 },
  subtitle: { color: '#c2d1e3', fontSize: 15, marginTop: 8 },
  ballButton: { borderRadius: 24, padding: 10 },
  pressed: { opacity: 0.7, transform: [{ scale: 0.97 }] },
  ballImage: { width: 330, height: 296 },
  footer: { alignItems: 'center', gap: 9 },
  answerCount: { color: '#9fc8ef', fontSize: 12, fontWeight: '800', letterSpacing: 2 },
  hint: { color: '#ffffff', fontSize: 13, fontWeight: '700', letterSpacing: 2 },
});
