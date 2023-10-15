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
import { useSearchParams } from 'next/navigation';

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

  const onSubmit: SubmitHandler<ValidationSchema> = () => {
    // TODO: Implement sign up logic
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
                  hasError={!!form.formState.errors.email}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type='text'
                  hasError={!!form.formState.errors.username}
                  placeholder='Username'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type='password'
                  hasError={!!form.formState.errors.password}
                  placeholder='Password'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='confirmPassword'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type='password'
                  hasError={!!form.formState.errors.confirmPassword}
                  placeholder='Confirm Password'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='w-full'>
          Sign Up
        </Button>
      </form>
    </Form>
  );
}

export default SignUpSecondStepForm;
