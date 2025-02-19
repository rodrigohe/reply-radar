import { fetchApplication, getUserLocationColors } from "@/app/lib/data";
import { defaultLocations } from "@/app/lib/utils";
import Breadcrumbs from "@/app/ui/applications/breadcrumbs"
import EditForm from "@/app/ui/applications/edit-form";
import { auth } from "@/auth";
import { notFound } from "next/navigation"

export default async function ViewApplication(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const data = await fetchApplication(id);
  const session = await auth();
  const user_id = session?.user?.id || '-1';
  const result = await getUserLocationColors(user_id);
  const userDefaultLocations = result != null && result.location_colors != null ? defaultLocations.concat(result.location_colors) : defaultLocations;


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
      <EditForm data={data} readOnly={true} defaultLocations={userDefaultLocations}/>
    </main>
  )
}