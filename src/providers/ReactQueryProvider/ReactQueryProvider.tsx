'use client';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useToast } from '@/components/ui/Toaster/hooks/useToast';

import React, { PropsWithChildren, useState } from 'react';

interface Props extends PropsWithChildren {}

function ReactQueryProvider({ children }: Props) {
  const { toast } = useToast();

  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        mutations: {
          onError: (error) => {
            toast({
              title: 'Error',
              description: error.message,
              variant: 'destructive',
            });
          },
        },
      },
    }),
  );

  return (
    <QueryClientProvider client={client}>
      {children}
      {process.env.NEXT_PUBLIC_ENVIRONMENT === 'local' && (
        <ReactQueryDevtools
          buttonPosition='bottom-left'
          position='bottom'
          initialIsOpen={false}
        />
      )}
    </QueryClientProvider>
  );
}

export default ReactQueryProvider;
