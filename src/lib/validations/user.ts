import { z } from 'zod';

export const updateProfileSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').optional(),
  email: z.string().email('Invalid email address').optional(),
  phone: z.string().optional(),
  avatar: z.string().url().optional(),
});

export const userRoleSchema = z.enum(['client', 'provider', 'business_owner']);

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
