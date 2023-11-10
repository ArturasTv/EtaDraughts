import AppRoutes from '@/constants/appRoutes';
import LOCAL_STORAGE_KEYS from '@/constants/localStorage';
import { SignInWithPasswordCredentials } from '@supabase/supabase-js';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { setLocalStorageItem } from '@/lib/localstorage';
import supabase from '../common/supabase';

const performSignIn = async (payload: SignInWithPasswordCredentials) => {
  const { data, error } = await supabase.auth.signInWithPassword(payload);

  if (error) throw error;

  return data;
};

export default function useSignIn() {
  const router = useRouter();

  return useMutation({
    mutationFn: performSignIn,
    onSuccess: (response) => {
      const { user } = response;

      setLocalStorageItem(LOCAL_STORAGE_KEYS.USER_ID, user.id);

      router.push(AppRoutes.ROOT.INDEX);
    },
  });
}
