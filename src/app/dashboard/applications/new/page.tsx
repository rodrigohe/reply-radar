import Form from '@/app/ui/applications/create-form';
import Breadcrumbs from '@/app/ui/applications/breadcrumbs';

export default async function Page() {
  // const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Applications', href: '/dashboard/applications' },
          {
            label: 'New',
            href: '/dashboard/applications/new',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}