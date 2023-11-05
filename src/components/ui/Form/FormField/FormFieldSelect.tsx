import React from 'react';
import { FieldValues, FieldPath, UseFormReturn } from 'react-hook-form';
import { FormControl, FormFieldCommon, FormItem, FormMessage } from '../Form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../Select/Select';

type SelectOption = {
  value: string;
  label: string;
};

type FormFieldProps<TFieldValues extends FieldValues> = {
  name: FieldPath<TFieldValues>;
  placeholder?: string;
  options?: SelectOption[];
};

function FormFieldSelect<TFieldValues extends FieldValues>({
  control,
  name,
  placeholder,
  options = [],
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
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default FormFieldSelect;
