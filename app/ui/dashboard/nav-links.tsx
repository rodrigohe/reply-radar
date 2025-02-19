'use client';

import {
  HomeIcon,
  PresentationChartBarIcon,
  ClipboardDocumentListIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Applications',
    href: '/dashboard/applications',
    icon: ClipboardDocumentListIcon,
  },
  { name: 'Analytics', href: '/dashboard/analytics', icon: PresentationChartBarIcon},
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-stone-400 p-3 text-sm font-medium hover:bg-yellow-50 hover:text-[#292121] md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-yellow-50 text-[#292121]': pathname.split("/").slice(0, 3).join("/") === link.href
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
