import AppRoutes from '@/constants/appRoutes';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

const performSignOut = async () => {
  const supabase = createClientComponentClient();

  const { error } = await supabase.auth.signOut();

  if (error) throw error;

  return {
    status: 'success',
  };
};

export default function useSignOut() {
  const router = useRouter();

  return useMutation({
    mutationFn: performSignOut,
    onSuccess: () => {
      router.push(AppRoutes.ROOT.INDEX);
    },
  });
}
