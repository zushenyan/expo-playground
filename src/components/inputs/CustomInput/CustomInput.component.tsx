import React from "react";
import { Content, Item, Label, Input, Text } from "native-base";
import { ErrorMessage, FieldProps } from "formik";

type Props = FieldProps & {
  label: string;
};

const CustomInput: React.FC<Props> = ({
  label,
  field,
  form,
  meta, // eslint-disable-line
  ...props
}) => {
  return (
    <Content>
      <Item stackedLabel>
        <Label>{label}</Label>
        <Input
          {...field}
          {...props}
          onChangeText={(v): void => {
            form.setFieldValue(field.name, v);
            form.setFieldTouched(field.name, true);
          }}
          onBlur={(): void => {
            form.setFieldTouched(field.name, true);
          }}
        />
      </Item>
      <Text style={{ color: "red", height: 20 }}>
        <ErrorMessage name={field.name} />
      </Text>
    </Content>
  );
};

export default CustomInput;
