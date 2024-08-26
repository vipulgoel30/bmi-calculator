// Core imports
import React, {useState} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';

// User imports
import Gender from './components/Gender';
import {clamp, min} from './components/Dimenions';
import SlideInput from './components/SlideInput';
import IncDecInput from './components/IncDecInput';
import Grid from './components/Grid';
import Button from './components/Button';
import BMIModal from './components/Modal';

const App = (): React.ReactNode => {
  const [height, setHeight] = useState<number>(182.28);
  const [weight, setWeight] = useState<number>(50);
  const [age, setAge] = useState<number>(18);
  const [modalState, setModalState] = useState<boolean>(false);

  const closeModal = (): void => setModalState(false);
  const openModal = (): void => setModalState(true);

  const heightHandler = (value: number): void => setHeight(value);

  return (
    <>
      <Text style={styles.title}>BMI CALCULATOR</Text>
      <ScrollView>
        <Grid style={styles.wrapper} direction="column">
          <Gender />
          <SlideInput
            roundOffTo={2}
            title="Height"
            value={height}
            valueHandler={heightHandler}
            unit="cm"
          />
          <Grid>
            <IncDecInput title="Weight" value={weight} setValue={setWeight} />
            <IncDecInput title="Age" value={age} setValue={setAge} />
          </Grid>
          <Button
            title="Calculate"
            onPress={openModal}
            style={styles.calcBtn}
          />
        </Grid>
      </ScrollView>
      <BMIModal
        weight={weight}
        height={height}
        closeModal={closeModal}
        state={modalState}
      />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    backgroundColor: '#0c1035',
    padding: clamp(16, 36, 48),
    fontSize: min(24, 32),
    letterSpacing: 2,
  },

  wrapper: {
    padding: clamp(12, 32, 48),
    backgroundColor: '#0b1024',
  },
  calcBtn: {
    paddingVertical: clamp(16, 20, 24),
  },
});

export default App;
