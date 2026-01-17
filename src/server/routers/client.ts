import { z } from 'zod';
import { router, clientProcedure } from '../trpc';

export const clientRouter = router({
  getBookings: clientProcedure.query(async ({ ctx }) => {
    // TODO: Fetch client bookings from database
    return [];
  }),

  createBooking: clientProcedure
    .input(
      z.object({
        serviceId: z.string(),
        providerId: z.string(),
        dateTime: z.string().datetime(),
        notes: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // TODO: Create booking in database
      return {
        id: 'booking-id',
        ...input,
        clientId: ctx.user.id,
        status: 'pending',
      };
    }),

  cancelBooking: clientProcedure
    .input(z.object({ bookingId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      // TODO: Cancel booking in database
      return { success: true };
    }),

  getFavoriteProviders: clientProcedure.query(async ({ ctx }) => {
    // TODO: Fetch favorite providers
    return [];
  }),
});
