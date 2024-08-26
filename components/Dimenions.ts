// Third party imports
import {Dimensions} from 'react-native';

const {width}: {width: number} = Dimensions.get('window');
const BASE_SIZE: number = 520;

export function calc(value: number): number {
  return (value * width) / BASE_SIZE;
}

export function clamp(
  minValue: number,
  value: number,
  maxValue: number,
): number {
  return Math.max(minValue, Math.min(calc(value), maxValue));
}

export function max(value: number, maxValue: number): number {
  return Math.max(calc(value), maxValue);
}

export function min(value: number, minValue: number): number {
  return Math.min(calc(value), minValue);
}
