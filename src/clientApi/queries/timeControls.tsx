import { QUERIES } from '@/constants/queries';
import { useQuery } from '@tanstack/react-query';
import supabase from '../common/supabase';

const fetchTimeControls = async () => {
  const { data, error } = await supabase.from('time_controls').select('*');

  if (error) throw error;

  return data;
};

function useGetTimeControls() {
  return useQuery({
    queryKey: [QUERIES.TIME_CONTROLS],
    queryFn: () => fetchTimeControls(),
  });
}

export default useGetTimeControls;
