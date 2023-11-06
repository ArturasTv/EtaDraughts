'use client';

import { PropsWithChildren, createContext, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { Database } from '@/types/supabase';

export const AuthContext = createContext({});

interface Props extends PropsWithChildren {
  accessToken: string | null;
}

function AuthProvider({ accessToken, children }: Props) {
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription: authListener },
    } = supabase.auth.onAuthStateChange((_, session) => {
      if (session?.access_token !== accessToken) {
        router.refresh();
      }
    });

    return () => {
      authListener?.unsubscribe();
    };
  }, [accessToken, supabase, router]);

  return children;
}

export default AuthProvider;
