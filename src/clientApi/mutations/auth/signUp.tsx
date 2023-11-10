import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/components/ui/Toaster/hooks/useToast';
import AppRoutes from '@/constants/appRoutes';
import { useRouter } from 'next/navigation';
import supabase from '../../common/supabase';

interface Payload {
  email: string;
  password: string;
  options?:
    | {
        emailRedirectTo?: string | undefined;
        data: {
          username: string;
        };
        captchaToken?: string | undefined;
      }
    | undefined;
}

const performSignUp = async (payload: Payload) => {
  const { data, error } = await supabase.auth.signUp(payload);

  if (error) throw error;

  return data;
};

export default function useSignUp() {
  const router = useRouter();

  const { toast } = useToast();

  return useMutation({
    mutationFn: performSignUp,
    onSuccess: () => {
      toast({
        title: 'Sign up successful',
        description: 'Check your email for further instructions',
      });
      router.push(AppRoutes.AUTH.SIGN_IN.INDEX);
    },
  });
}
