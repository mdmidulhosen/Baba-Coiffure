import type { UserRole } from '@/types';

export const ROLES: Record<UserRole, { label: string; description: string }> = {
  client: {
    label: 'Client',
    description: 'Book appointments and manage your bookings',
  },
  provider: {
    label: 'Provider',
    description: 'Offer services and manage your schedule',
  },
  business_owner: {
    label: 'Business Owner',
    description: 'Manage your business, staff, and analytics',
  },
};

export const ROLE_ROUTES: Record<UserRole, string> = {
  client: '/client',
  provider: '/provider',
  business_owner: '/business',
};
