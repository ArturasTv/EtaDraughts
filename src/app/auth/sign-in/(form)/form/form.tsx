'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import useValidation from '@/hooks/useValidation';

import { Button } from '@/components/ui/Button/Button';
import { Form } from '@/components/ui/Form/Form';
import FormField from '@/components/ui/Form/FormField/FormField';

function SignInForm() {
  const { fieldRequired } = useValidation();

  const FormSchema = z.object({
    username: fieldRequired,
    password: fieldRequired,
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit() {
    return null;
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
        <FormField
          name='username'
          control={form.control}
          placeholder='Username'
          hasError={!!form.formState.errors.username}
        />
        <FormField
          name='password'
          control={form.control}
          type='password'
          placeholder='Password'
          hasError={!!form.formState.errors.password}
        />
        <Button type='submit' className='w-full'>
          Sign In
        </Button>
      </form>
    </Form>
  );
}

export default SignInForm;
