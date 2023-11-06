'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as z from 'zod';
import useValidation from '@/hooks/forms/useValidation';
import { Button } from '@/components/ui/Button/Button';
import { Form } from '@/components/ui/Form/Form';
import { useSearchParams } from 'next/navigation';
import FormField from '@/components/ui/Form/FormField/FormField';
import useSignUp from '@/_api/mutations/signUp';

function SignUpSecondStepForm() {
  const searchParams = useSearchParams();

  // eslint-disable-next-line operator-linebreak
  const { emailFieldRequired, fieldRequired, passwordFieldRequired } =
    useValidation();

  const email = searchParams.get('email') || '';

  const FormSchema = z
    .object({
      email: emailFieldRequired,
      username: fieldRequired,
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
      email,
    },
    resolver: zodResolver(FormSchema),
  });

  const { mutate, isPending: isLoading } = useSignUp();

  const onSubmit: SubmitHandler<ValidationSchema> = (values) => {
    mutate({
      email: values.email,
      password: values.password,
      options: {
        data: {
          username: values.username,
        },
      },
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
        <FormField
          name='email'
          control={form.control}
          type='email'
          hasError={!!form.formState.errors.email}
          placeholder='Email'
        />
        <FormField
          name='username'
          control={form.control}
          hasError={!!form.formState.errors.username}
          placeholder='Username'
        />
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
          Sign Up
        </Button>
      </form>
    </Form>
  );
}

export default SignUpSecondStepForm;
