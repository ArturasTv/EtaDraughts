import { useToast } from '@/components/ui/Toaster/hooks/useToast';
import useModalStore from '@/stores/ui/useModalStore';
import { useMutation } from '@tanstack/react-query';
import useSignOut from '../auth/signOut';
import supabase from '../../common/supabase';

type Payload = {
  userId: string;
};

const performDeleteAccount = async (payload: Payload) => {
  const { userId } = payload;

  const { data, error } = await supabase
    .from('profiles')
    .update({ deletion_initiated: true })
    .eq('user_id', userId);

  if (error) throw error;

  return data;
};

export default function useDeleteAccount() {
  const { mutate: signOutMutate } = useSignOut();
  const { deleteAccount } = useModalStore();
  const { toast } = useToast();

  return useMutation({
    mutationFn: performDeleteAccount,
    onSuccess: () => {
      deleteAccount.close();

      signOutMutate();

      toast({
        title: 'Account deleted',
        description: 'We are sorry to see you go',
      });
    },
  });
}
