import 'server-only';

import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { headers } from 'next/headers';
import superjson from 'superjson';
import type { AppRouter } from '@/server/routers/_app';

function getBaseUrl() {
  if (typeof window !== 'undefined') return '';
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export const serverTrpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${getBaseUrl()}/api/trpc`,
      transformer: superjson,
      headers: async () => {
        const h = await headers();
        return {
          cookie: h.get('cookie') ?? '',
        };
      },
    }),
  ],
});
