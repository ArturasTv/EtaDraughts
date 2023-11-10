import LOCAL_STORAGE_KEYS from '@/constants/localStorage';
import { QUERIES } from '@/constants/queries';
import { useQuery } from '@tanstack/react-query';
import { getLocalStorageItem } from '@/lib/localStorage';
import supabase from '../common/supabase';

type Payload = {
  userId: string;
};

const fetchUserDetails = async (payload: Payload) => {
  const { userId } = payload;

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error) throw error;

  return data;
};

function useGetUserDetails() {
  const userId = getLocalStorageItem<string>(LOCAL_STORAGE_KEYS.USER_ID) || '';

  const payload = { userId };

  return useQuery({
    queryKey: [QUERIES.USER_DETAILS],
    queryFn: () => fetchUserDetails(payload),
  });
}

export default useGetUserDetails;
