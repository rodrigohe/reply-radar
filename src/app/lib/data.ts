import postgres from "postgres";
import { ApplicationRaw, Locations, Stages } from "./definitions";

const sql = postgres(process.env.POSTGRES_URL!);

const ITEMS_PER_PAGE = 10;
export async function fetchAllApplications(
  // query: string,
  // currentPage: number,
) {
  // const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const allLocations = await sql<Locations[]>`SELECT * FROM locations`;
    const allStages = await sql<Stages[]>`SELECT * FROM stages`;

    const applications_raw = await sql<ApplicationRaw[]>`
      SELECT * FROM applications
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${0}
    `;

    const applications = applications_raw.map((application) => ({
      ...application,
      stage: allStages.find(stages => application.stage === stages.name) ?? <Stages>{},
      location: application.location == null ? <Locations[]>{} : application.location.split(', ').map((loc) => {
        return allLocations.find((l) => l.name === loc) ?? <Locations>{}
      })
    }));

    return applications;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch applications.');
  }
}

export async function fetchApplication(
  id: string
) {
  try {
    const allLocations = await sql<Locations[]>`SELECT * FROM locations`;
    const allStages = await sql<Stages[]>`SELECT * FROM stages`;

    const applications_raw = await sql<ApplicationRaw[]>`
      SELECT * FROM applications WHERE id = ${id}
      LIMIT 1
    `;

    const applications = applications_raw.map((application) => ({
      ...application,
      stage: allStages.find(stages => application.stage === stages.name) ?? <Stages>{},
      location: application.location == null ? <Locations[]>{} : application.location.split(', ').map((loc) => {
        return allLocations.find((l) => l.name === loc) ?? <Locations>{}
      })
    }));

    return applications[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch applications.');
  }
}