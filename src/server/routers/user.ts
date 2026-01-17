import { z } from 'zod';
import { router, publicProcedure, protectedProcedure } from '../trpc';
import { updateProfileSchema } from '@/lib/validations/user';

export const userRouter = router({
  me: protectedProcedure.query(({ ctx }) => {
    return ctx.user;
  }),

  updateProfile: protectedProcedure
    .input(updateProfileSchema)
    .mutation(async ({ ctx, input }) => {
      // TODO: Implement database update
      return {
        ...ctx.user,
        ...input,
      };
    }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      // TODO: Implement database query
      return null;
    }),
});
