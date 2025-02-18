import { fetchApplication } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/applications/breadcrumbs"
import EditForm from "@/app/ui/applications/edit-form";
import { notFound } from "next/navigation"

export default async function EditApplication(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const data = await fetchApplication(id);

  if (!data) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: '..', href: '/dashboard/applications' },
          {
            label: `${data.company}`,
            href: '',
            active: true,
          },
        ]}
      />
      <EditForm data={data} readOnly={false}/>
    </main>
  )
}