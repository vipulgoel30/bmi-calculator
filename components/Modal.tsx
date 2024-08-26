// Core imports
import {Modal, StyleSheet, Text, View} from 'react-native';

// User imports
import Button from './Button';
import {calc, clamp} from './Dimenions';

type ModalProps = {
  state: boolean;
  weight: number;
  height: number;
  closeModal: () => void;
};

const BMIModal = ({
  state,
  weight,
  height,
  closeModal,
}: ModalProps): React.ReactNode => {
  const BMI: number = (weight * 100 * 100) / (height * height);
  const formatBMI: number = Math.floor(BMI * 100) / 100;

  return (
    <Modal
      visible={state}
      animationType="slide"
      transparent={true}
      onRequestClose={closeModal}>
      <View style={styles.wrapper}>
        <View style={styles.contentWrapper}>
          <Text style={styles.text}>BMI : {formatBMI}</Text>
          <Button style={styles.button} title="Close" onPress={closeModal} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  contentWrapper: {
    alignItems: 'center',
    borderRadius: clamp(12, 16, 24),
    gap: clamp(20, 28, 36),
    backgroundColor: '#fff',
    paddingVertical: clamp(10, 48, 72),
    width: '50%',
    minWidth: calc(420),
    maxWidth: calc(760),
  },

  text: {
    color: '#8f8f98',
    fontSize: clamp(36, 48, 64),
    fontWeight: '500',
    letterSpacing: 2,
  },

  button: {
    paddingVertical: clamp(12, 16, 24),
    paddingHorizontal: clamp(12, 72, 96),
  },
});

export default BMIModal;
