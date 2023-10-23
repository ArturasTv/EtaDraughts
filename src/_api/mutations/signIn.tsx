import AppRoutes from '@/constants/appRoutes';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { SignInWithPasswordCredentials } from '@supabase/supabase-js';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

const performSignIn = async (payload: SignInWithPasswordCredentials) => {
  const supabase = createClientComponentClient();

  const { data, error } = await supabase.auth.signInWithPassword(payload);

  if (error) throw error;

  return data;
};

export default function useSignIn() {
  const router = useRouter();

  return useMutation({
    mutationFn: performSignIn,
    onSuccess: () => {
      router.push(AppRoutes.ROOT.INDEX);
    },
  });
}
