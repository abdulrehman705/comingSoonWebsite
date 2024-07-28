'use client';

import {
  type DefaultOptions,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import React from 'react';

interface QueryClientProvidersProps {
  children: React.ReactNode;
}

const queryConfig: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: Infinity,
  },
};

const queryClient = new QueryClient({ defaultOptions: queryConfig });

const QueryClientProviders: React.FC<QueryClientProvidersProps> = ({
  children,
}) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default QueryClientProviders;
