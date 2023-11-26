import { Database } from '@/types/supabase';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { PostgrestError } from '@supabase/supabase-js';

const supabase = createClientComponentClient<Database>();

export type DbResult<T> = T extends PromiseLike<infer U> ? U : never;
export type DbResultOk<T> = T extends PromiseLike<{ data: infer U }>
  ? Exclude<U, null>
  : never;
export type DbResultErr = PostgrestError;

export default supabase;
