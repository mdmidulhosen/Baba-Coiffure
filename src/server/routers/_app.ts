import { router } from '../trpc';
import { authRouter } from './auth';
import { userRouter } from './user';
import { clientRouter } from './client';
import { providerRouter } from './provider';
import { businessRouter } from './business';

export const appRouter = router({
  auth: authRouter,
  user: userRouter,
  client: clientRouter,
  provider: providerRouter,
  business: businessRouter,
});

export type AppRouter = typeof appRouter;
