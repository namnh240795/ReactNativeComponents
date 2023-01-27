import React from 'react';
import {
  TouchableOpacityProps,
  TouchableNativeFeedbackProps,
} from 'react-native';
import { IconSvgType } from './types';

export interface IconSvgProps
  extends TouchableOpacityProps,
    TouchableNativeFeedbackProps {
  name: IconSvgType;
  color?: string;
}

export default class IconSvg extends React.Component<IconSvgProps, any> {}
