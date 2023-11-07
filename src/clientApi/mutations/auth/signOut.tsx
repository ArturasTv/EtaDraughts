import AppRoutes from '@/constants/appRoutes';
import LOCAL_STORAGE_KEYS from '@/constants/localStorage';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import supabase from '../../common/supabase';

const performSignOut = async () => {
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
      localStorage?.removeItem(LOCAL_STORAGE_KEYS.USER_ID);

      router.push(AppRoutes.ROOT.INDEX);
    },
  });
}
