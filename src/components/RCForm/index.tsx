import React from 'react';
import Form, { FormProps } from 'rc-field-form';
import { View } from 'react-native';

const TForm: React.FC<FormProps> = props => {
  return <Form component={View} {...props} />;
};

export default TForm;
