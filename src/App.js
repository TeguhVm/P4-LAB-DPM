import React from 'react';
import { ImageBackground } from 'react-native';
import FutsalScore from './screens/FutsalScore';
import styles from './styles/styles';

const App = () => {
  return (
    <ImageBackground
      source={require('./assets/futsal.jpg')}
      style={styles.backgroundImage}
    >
      <FutsalScore />
    </ImageBackground>
  );
};

export default App;