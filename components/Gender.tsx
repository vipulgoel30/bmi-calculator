// Core imports
import React, {useState} from 'react';
import {Image, StyleSheet, TouchableHighlight} from 'react-native';

// User imports
import Heading from './Heading';
import {clamp} from './Dimenions';
import Grid from './Grid';

enum Genders {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

type GenderData = {
  gender: Genders;
  source: any;
};

const gendersData: [GenderData, GenderData] = [
  {
    gender: Genders.MALE,
    source: require('./../assets/male.png'),
  },
  {
    gender: Genders.FEMALE,
    source: require('./../assets/female.png'),
  },
];

const Gender = (): React.ReactNode => {
  const [activeGender, setActiveGender] = useState<Genders>(Genders.MALE);

  return (
    <Grid>
      {gendersData.map(({gender, source}: GenderData) => (
        <TouchableHighlight
          key={gender}
          style={[
            styles.genderItem,
            activeGender === gender && styles.genderItemActive,
          ]}
          onPress={() => setActiveGender(gender)}>
          <>
            <Image style={styles.genderImage} source={source} />
            <Heading>{gender}</Heading>
          </>
        </TouchableHighlight>
      ))}
    </Grid>
  );
};

const styles = StyleSheet.create({
  genderItem: {
    backgroundColor: '#0f1338',
    flex: 1,
    alignItems: 'center',
    gap: clamp(20, 28, 36),
    paddingVertical: clamp(36, 40, 56),
    paddingHorizontal: clamp(10, 12, 14),
    borderRadius: clamp(12, 16, 24),
  },
  genderItemActive: {
    backgroundColor: '#1c059d',
  },
  genderImage: {
    height: clamp(72, 96, 132),
    objectFit: 'contain',
  },
});

export default Gender;
