import { initTRPC, TRPCError } from '@trpc/server';
import superjson from 'superjson';
import type { User } from '@/types';

export interface Context {
  user: User | null;
}

const t = initTRPC.context<Context>().create({
  transformer: superjson,
});

export const router = t.router;
export const publicProcedure = t.procedure;

export const protectedProcedure = t.procedure.use(({ ctx, next }) => {
  if (!ctx.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return next({
    ctx: {
      user: ctx.user,
    },
  });
});

export const clientProcedure = protectedProcedure.use(({ ctx, next }) => {
  if (ctx.user.role !== 'client') {
    throw new TRPCError({ code: 'FORBIDDEN', message: 'Client access required' });
  }
  return next({ ctx });
});

export const providerProcedure = protectedProcedure.use(({ ctx, next }) => {
  if (ctx.user.role !== 'provider') {
    throw new TRPCError({ code: 'FORBIDDEN', message: 'Provider access required' });
  }
  return next({ ctx });
});

export const businessOwnerProcedure = protectedProcedure.use(({ ctx, next }) => {
  if (ctx.user.role !== 'business_owner') {
    throw new TRPCError({ code: 'FORBIDDEN', message: 'Business owner access required' });
  }
  return next({ ctx });
});
