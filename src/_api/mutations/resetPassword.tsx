import AppRoutes from '@/constants/appRoutes';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/Toaster/hooks/useToast';
import ApiRoutes from '@/constants/apiRoutes';
import supabase from '../common/supabase';

type Payload = {
  email: string;
};

const performResetPassword = async (payload: Payload) => {
  const { email } = payload;

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}${ApiRoutes.AUTH.UPDATE_PASSWORD.INDEX}`,
  });

  if (error) throw error;

  return {
    status: 'success',
  };
};

export default function useResetPassword() {
  const { toast } = useToast();

  const router = useRouter();

  return useMutation({
    mutationFn: performResetPassword,
    onSuccess: () => {
      toast({
        title: 'Reset password email sent',
        description: 'Check your inbox for further instructions',
      });

      router.push(AppRoutes.AUTH.SIGN_IN.INDEX);
    },
  });
}
