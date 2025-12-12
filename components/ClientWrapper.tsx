'use client';

import { ReactNode } from 'react';
import { useLenisScroll } from '@/hooks/useLenisScroll';

interface ClientWrapperProps {
  children: ReactNode;
}

export function ClientWrapper({ children }: ClientWrapperProps) {
  useLenisScroll();

  return <>{children}</>;
}
