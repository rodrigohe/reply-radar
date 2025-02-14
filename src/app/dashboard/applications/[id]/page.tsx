'use client';

import { applications } from "@/app/lib/placeholder-data"
import Breadcrumbs from "@/app/ui/applications/breadcrumbs"
import { notFound, usePathname } from "next/navigation"

export default function Page() {
  const tokens = usePathname().split('/')
  const uuid = tokens[tokens.length - 1]
  const data = applications.find(app => app.uuid == uuid);

  if (!data) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Applications', href: '/dashboard/applications' },
          {
            label: `${data?.company} - ${data?.position}`,
            href: '',
            active: true,
          },
        ]}
      />
    </main>
  )
}