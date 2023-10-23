import AppRoutes from '@/constants/appRoutes';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { SignUpWithPasswordCredentials } from '@supabase/supabase-js';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/Toaster/hooks/useToast';

const performSignUp = async (payload: SignUpWithPasswordCredentials) => {
  const supabase = createClientComponentClient();

  const { data, error } = await supabase.auth.signUp(payload);

  if (error) throw error;

  return data;
};

export default function useSignUp() {
  const { toast } = useToast();
  const router = useRouter();

  return useMutation({
    mutationFn: performSignUp,
    onSuccess: () => {
      router.push(AppRoutes.AUTH.SIGN_IN.INDEX);

      toast({
        title: 'Sign up successful',
        description: 'Check your email for further instructions',
      });
    },
  });
}
