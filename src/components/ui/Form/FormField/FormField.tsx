import React, { InputHTMLAttributes } from 'react';
import { FieldValues, FieldPath, UseFormReturn } from 'react-hook-form';
import { FormControl, FormFieldCommon, FormItem, FormMessage } from '../Form';
import { Input } from '../../Input/Input';

type FormFieldProps<TFieldValues extends FieldValues> = {
  name: FieldPath<TFieldValues>;
  hasError?: boolean;
  placeholder?: string;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
};

function FormField<TFieldValues extends FieldValues>({
  control,
  name,
  hasError,
  type = 'text',
  placeholder,
}: FormFieldProps<TFieldValues> & {
  control: UseFormReturn<TFieldValues>['control'];
}) {
  return (
    <FormFieldCommon
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
              type={type}
              hasError={hasError}
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default FormField;
