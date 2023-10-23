'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import useValidation from '@/hooks/useValidation';

import { Button } from '@/components/ui/Button/Button';
import { Form } from '@/components/ui/Form/Form';
import FormField from '@/components/ui/Form/FormField/FormField';
import useSignIn from '@/_api/mutations/signIn';

function SignInForm() {
  const { fieldRequired, emailFieldRequired } = useValidation();

  const FormSchema = z.object({
    email: emailFieldRequired,
    password: fieldRequired,
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const { mutate, isPending: isLoading } = useSignIn();

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    mutate({
      email: values.email,
      password: values.password,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
        <FormField
          name='email'
          control={form.control}
          placeholder='Email'
          hasError={!!form.formState.errors.email}
        />
        <FormField
          name='password'
          control={form.control}
          type='password'
          placeholder='Password'
          hasError={!!form.formState.errors.password}
        />
        <Button isLoading={isLoading} type='submit' className='w-full'>
          Sign In
        </Button>
      </form>
    </Form>
  );
}

export default SignInForm;
