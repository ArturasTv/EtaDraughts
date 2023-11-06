'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as z from 'zod';
import useValidation from '@/hooks/forms/useValidation';
import { Button } from '@/components/ui/Button/Button';
import { Form } from '@/components/ui/Form/Form';
import { DEFAULT_EMAIL } from '@/constants/form';
import FormField from '@/components/ui/Form/FormField/FormField';
import useResetPassword from '@/_api/mutations/resetPassword';

function PasswordRecoveryForm() {
  const { emailFieldRequired } = useValidation();

  const FormSchema = z.object({
    email: emailFieldRequired,
  });

  type ValidationSchema = z.infer<typeof FormSchema>;

  const form = useForm<ValidationSchema>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(FormSchema),
  });

  const { mutate, isPending: isLoading } = useResetPassword();

  const onSubmit: SubmitHandler<ValidationSchema> = (values) => {
    mutate({
      email: values.email,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
        <FormField
          name='email'
          control={form.control}
          type='email'
          placeholder={DEFAULT_EMAIL}
          hasError={!!form.formState.errors.email}
        />
        <Button isLoading={isLoading} type='submit' className='w-full'>
          Send email
        </Button>
      </form>
    </Form>
  );
}

export default PasswordRecoveryForm;
