'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as z from 'zod';
import useValidation from '@/hooks/forms/useValidation';
import { Button } from '@/components/ui/Button/Button';
import { Form } from '@/components/ui/Form/Form';
import FormField from '@/components/ui/Form/FormField/FormField';
import useChangePassword from '@/clientApi/mutations/auth/updatePassword';

function PasswordChangeForm() {
  const { passwordFieldRequired } = useValidation();

  const FormSchema = z
    .object({
      password: passwordFieldRequired,
      confirmPassword: passwordFieldRequired,
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ['confirmPassword'],
    });

  type ValidationSchema = z.infer<typeof FormSchema>;

  const form = useForm<ValidationSchema>({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(FormSchema),
  });

  const { mutate, isPending: isLoading } = useChangePassword();

  const onSubmit: SubmitHandler<ValidationSchema> = (values) => {
    mutate({
      password: values.password,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
        <FormField
          name='password'
          control={form.control}
          type='password'
          hasError={!!form.formState.errors.password}
          placeholder='Password'
        />
        <FormField
          name='confirmPassword'
          control={form.control}
          type='password'
          hasError={!!form.formState.errors.confirmPassword}
          placeholder='Confirm Password'
        />
        <Button isLoading={isLoading} type='submit' className='w-full'>
          Change password
        </Button>
      </form>
    </Form>
  );
}

export default PasswordChangeForm;
