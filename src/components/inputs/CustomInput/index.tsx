import React from "react";
import { Item, Label, Input, Text } from "native-base";
import { ErrorMessage, FieldProps } from "formik";

type Props = FieldProps & {
  label: string;
};

const CustomInput: React.FC<Props> = ({ label, field, form }) => {
  return (
    <Item>
      <Label>{label}</Label>
      <Input
        {...field}
        onChangeText={form.handleChange(field.name)}
        onBlur={form.handleBlur(field.name)}
      />
      <Text>
        <ErrorMessage name={field.name} />
      </Text>
    </Item>
  );
};

export default CustomInput;
