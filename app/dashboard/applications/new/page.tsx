import { getUserLocationColors } from '@/app/lib/data';
import { defaultLocations } from '@/app/lib/utils';
import Breadcrumbs from '@/app/ui/applications/breadcrumbs';
import CreateForm from '@/app/ui/applications/create-form';
import { auth } from '@/auth';

export default async function NewApplication() {
  // const customers = await fetchCustomers();
  const session = await auth();
  const user_id = session?.user?.id || '-1';
  const result = await getUserLocationColors(user_id);
  const userDefaultLocations = result != null && result.location_colors != null ? defaultLocations.concat(result.location_colors) : defaultLocations;

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: '..', href: '/dashboard/applications' },
          {
            label: 'New',
            href: '/dashboard/applications/new',
            active: true,
          },
        ]}
      />
      <CreateForm defaultLocations={userDefaultLocations}/>
    </main>
  );
}