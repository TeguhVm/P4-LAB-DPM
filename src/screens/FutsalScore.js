import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import styles from '../styles/styles';

const FutsalScore = () => {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);

  const incrementScore = (team) => {
    if (team === 'A') {
      const newScore = teamAScore + 1;
      setTeamAScore(newScore);
      if (newScore === 10) {
        Alert.alert('Selamat!', 'Team Laravel Menang!');
      }
    } else {
      const newScore = teamBScore + 1;
      setTeamBScore(newScore);
      if (newScore === 10) {
        Alert.alert('Selamat!', 'Team B Phyton Menang!');
      }
    }
  };

  const decrementScore = (team) => {
    if (team === 'A') {
      setTeamAScore(Math.max(0, teamAScore - 1));
    } else {
      setTeamBScore(Math.max(0, teamBScore - 1));
    }
  };

  const resetScores = () => {
    setTeamAScore(0);
    setTeamBScore(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Score Pertandingan Futsal</Text>

      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>Team A Laravel</Text>
        <Text style={styles.score}>{teamAScore}</Text>
        <View style={styles.buttonRow}>
          <Button title="+" onPress={() => incrementScore('A')} />
          <Button title="-" onPress={() => decrementScore('A')} />
        </View>
      </View>

      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>Team B Phyton</Text>
        <Text style={styles.score}>{teamBScore}</Text>
        <View style={styles.buttonRow}>
          <Button title="+" onPress={() => incrementScore('B')} />
          <Button title="-" onPress={() => decrementScore('B')} />
        </View>
      </View>

      <View style={styles.resetButtonContainer}>
        <Button title="Reset" onPress={resetScores} />
      </View>
    </View>
  );
};

export default FutsalScore;