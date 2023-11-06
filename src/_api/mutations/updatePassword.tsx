import AppRoutes from '@/constants/appRoutes';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/Toaster/hooks/useToast';
import { UserAttributes } from '@supabase/supabase-js';
import supabase from '../common/supabase';

const performChangePassword = async (payload: UserAttributes) => {
  const { error } = await supabase.auth.updateUser(payload);

  if (error) throw error;

  return {
    status: 'success',
  };
};

export default function useChangePassword() {
  const { toast } = useToast();

  const router = useRouter();

  return useMutation({
    mutationFn: performChangePassword,
    onSuccess: () => {
      toast({
        title: 'Password updated',
        description: 'Your password has been updated',
      });

      router.push(AppRoutes.ROOT.INDEX);
    },
  });
}
