import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '@/server/routers/_app';
import type { Context } from '@/server/trpc';

const createContext = async (): Promise<Context> => {
  // TODO: Implement session/auth logic here
  return {
    user: null,
  };
};

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext,
  });

export { handler as GET, handler as POST };
