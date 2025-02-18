import Breadcrumbs from '@/app/ui/applications/breadcrumbs';
import CreateForm from '@/app/ui/applications/create-form';

export default async function NewApplication() {
  // const customers = await fetchCustomers();

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
      <CreateForm />
    </main>
  );
}