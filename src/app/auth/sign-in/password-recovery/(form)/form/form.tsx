'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as z from 'zod';
import useValidation from '@/hooks/useValidation';
import { Button } from '@/components/ui/Button/Button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/Form/Form';
import { Input } from '@/components/ui/Input/Input';
import { DEFAULT_EMAIL } from '@/constants/form';

function PasswordRecoveryForm() {
  const { emailFieldRequired } = useValidation();

  const FormSchema = z.object({
    email: emailFieldRequired,
  });

  type ValidationSchema = z.infer<typeof FormSchema>;

  const form = useForm<ValidationSchema>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = () => {
    // TODO add logic
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type='email'
                  placeholder={DEFAULT_EMAIL}
                  {...field}
                  hasError={!!form.formState.errors.email}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='w-full'>
          Send email
        </Button>
      </form>
    </Form>
  );
}

export default PasswordRecoveryForm;
