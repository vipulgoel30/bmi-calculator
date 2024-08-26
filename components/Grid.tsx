// Core imports
import {StyleProp, View, ViewStyle} from 'react-native';

// Third party imports
import {clamp} from './Dimenions';

type GridProps = {
  children: React.ReactNode;
  direction?: 'row' | 'column';
  style?: StyleProp<ViewStyle>;
};

export default function Grid({children, direction = 'row', style}: GridProps) {
  return (
    <View
      style={[
        {flex: 1, flexDirection: direction, gap: clamp(12, 24, 32)},
        style,
      ]}>
      {children}
    </View>
  );
}
