/* eslint-disable react-native/no-inline-styles */
import React, { useMemo, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { ITextInput } from './types';
import {
  DEFAULT_INPUT,
  INPUTS_CONTAINER,
} from '@src/atoms/theme/constants/input';
import { stylesUtils } from '@src/atoms/theme/constants/common';
import { Typography } from '@src/components/Typography';
import { COLORS } from '@src/atoms/theme/constants/colors';
import Box from '@src/components/Box';
import {
  BORDER_ERROR,
  BORDER_TOUCHED,
  BORDER_VALIDATING,
  INPUT_CONTENT,
} from './style';
import IconSvg from '@src/components/Icon';
import { fireEvent } from '@testing-library/react-native';
const InputText: React.FC<ITextInput> = ({
  meta,
  label,
  suffix,
  prefix,
  placeholder,
  padding,
  margin,
  disabled,
  clearable,
  type,
  onChange,
  required,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  console.log('fireEvent', fireEvent);
  const styleInputContainer = useMemo(() => {
    let marginValues, paddingValues, typeValue;
    if (margin) {
      marginValues = stylesUtils.margin(stylesUtils.normalizeOptions(margin));
    }
    if (padding) {
      paddingValues = stylesUtils.padding(
        stylesUtils.normalizeOptions(padding),
      );
    }
    if (disabled) {
      typeValue = INPUTS_CONTAINER;
    }
    return StyleSheet.flatten([marginValues, paddingValues, typeValue]);
  }, [margin, padding, disabled]);

  const styleInputItem = useMemo(() => {
    return StyleSheet.flatten([DEFAULT_INPUT, props.style && props.style]);
  }, [props.style]);

  const onClear = () => {
    onChange && onChange('');
  };
  const [secure, setSecure] = useState(type === 'password' ? true : false);
  const toggle = () => {
    setSecure(!secure);
  };

  return (
    <>
      <View style={styleInputContainer}>
        {label && (
          <Typography
            color={COLORS.GOLBAT_80}
            margin={[16, 0, 4, 0]}
            type="body3"
          >
            {label}
            {required && <Typography color="red">{' *'}</Typography>}
          </Typography>
        )}
        <Box
          style={StyleSheet.flatten([
            INPUT_CONTENT,
            props.style && props.style,
            focused && meta && meta.touched && BORDER_TOUCHED,
            meta && meta.validating && BORDER_VALIDATING,
            meta && meta.errors && meta.errors[0] && BORDER_ERROR,
          ])}
          pointerEvents={disabled ? 'none' : 'auto'}
        >
          {suffix && <>{suffix}</>}
          <Box style={{ flex: 1, padding: 16 }}>
            <TextInput
              style={styleInputItem}
              secureTextEntry={secure}
              editable={!disabled}
              onFocus={() => {
                onChange(props.value);
                setFocused(true);
              }}
              onBlur={() => {
                setFocused(false);
              }}
              placeholder={placeholder}
              onChangeText={(value: string) => {
                onChange && onChange(value);
              }}
              value={props.value}
              {...props}
            />
          </Box>
          {clearable && props.value && (
            <Typography onPress={onClear} style={styles.iconClearInput}>
              <IconSvg name="iconClearInput" size="24" />
            </Typography>
          )}
          {type === 'password' && (
            <Box pressable onPress={toggle} style={styles.iconToggleInput}>
              <IconSvg name="iconClearInput" size="24" color={'red'} />
            </Box>
          )}
          {prefix && <>{prefix}</>}
        </Box>
        {meta?.errors && (
          <Typography color="#D80027">{meta?.errors}</Typography>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  iconClearInput: {
    display: 'flex',
    marginRight: 10,
    marginTop: 18,
  },
  iconToggleInput: {
    display: 'flex',
    marginRight: 10,
    marginTop: 18,
  },
});

// error touched disabled info
// prefix => react node
// suffix => react node
// clear optional

export default InputText;
