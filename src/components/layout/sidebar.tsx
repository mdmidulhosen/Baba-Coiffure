'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils/cn';
import type { UserRole } from '@/types';

interface SidebarProps {
  role: UserRole;
}

const navigationItems: Record<UserRole, { label: string; href: string }[]> = {
  client: [
    { label: 'Dashboard', href: '/client' },
    { label: 'Bookings', href: '/client/bookings' },
    { label: 'Favorites', href: '/client/favorites' },
    { label: 'Profile', href: '/client/profile' },
  ],
  provider: [
    { label: 'Dashboard', href: '/provider' },
    { label: 'Schedule', href: '/provider/schedule' },
    { label: 'Appointments', href: '/provider/appointments' },
    { label: 'Services', href: '/provider/services' },
    { label: 'Profile', href: '/provider/profile' },
  ],
  business_owner: [
    { label: 'Dashboard', href: '/business' },
    { label: 'Analytics', href: '/business/analytics' },
    { label: 'Staff', href: '/business/staff' },
    { label: 'Services', href: '/business/services' },
    { label: 'Settings', href: '/business/settings' },
  ],
};

export function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();
  const items = navigationItems[role];

  return (
    <aside className="hidden w-64 flex-shrink-0 border-r bg-card md:block">
      <div className="flex h-full flex-col">
        <div className="flex h-16 items-center border-b px-6">
          <Link href="/" className="text-xl font-bold">
            Baba Coiffure
          </Link>
        </div>
        <nav className="flex-1 space-y-1 p-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors',
                pathname === item.href
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
