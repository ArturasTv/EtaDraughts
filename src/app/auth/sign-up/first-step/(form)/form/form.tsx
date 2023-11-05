'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as z from 'zod';
import useValidation from '@/hooks/forms/useValidation';
import { Button } from '@/components/ui/Button/Button';
import FormField from '@/components/ui/Form/FormField/FormField';
import { DEFAULT_EMAIL } from '@/constants/form';
import { useRouter } from 'next/navigation';
import AppRoutes from '@/constants/appRoutes';
import { Form } from '@/components/ui/Form/Form';

function SignUpFirstStepForm() {
  const router = useRouter();

  const { emailFieldRequired } = useValidation();

  const FormSchema = z.object({
    email: emailFieldRequired,
  });

  type ValidationSchema = z.infer<typeof FormSchema>;

  const form = useForm<ValidationSchema>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    router.push(AppRoutes.AUTH.SIGN_UP.SECOND_STEP.EMAIL(data.email));
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
        <FormField
          name='email'
          control={form.control}
          type='email'
          hasError={!!form.formState.errors.email}
          placeholder={DEFAULT_EMAIL}
        />
        <Button type='submit' className='w-full'>
          Sign Up with Email
        </Button>
      </form>
    </Form>
  );
}

export default SignUpFirstStepForm;
