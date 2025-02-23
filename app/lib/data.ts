import postgres from "postgres";
import { Application, AppsCountPerYearMonth, CountByStage, UsersLocationColors } from "./definitions";
import { auth } from "@/auth";

const sql = postgres(process.env.POSTGRES_URL!);
const ITEMS_PER_PAGE = 10;

export async function fetchApplicationsPages(query: string) {
  const session = await auth();
  const user_id = session?.user?.id || '-1'

  try {
    const data = await sql`
      SELECT COUNT(*)
      FROM applications
      WHERE
        user_id = ${user_id} AND (
        company ILIKE ${`%${query}%`} OR
        position ILIKE ${`%${query}%`} OR
        location ILIKE ${`%${query}%`})
    `;
    const totalPages = Math.ceil(Number(data[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of applications.');
  }
}

export async function fetchApplication(id: string) {
  const session = await auth();
  const user_id = session?.user?.id || '-1'
  try {
    const applications = await sql<Application[]>`
      SELECT * FROM applications WHERE id = ${id} and user_id = ${user_id}
      LIMIT 1
    `;
    return applications[0];

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch applications.');
  }
}

export async function fetchFilteredApplications(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const session = await auth();
  const user_id = session?.user?.id || '-1'

  try {
    const applications = await sql<Application[]>`
      SELECT *
      FROM applications
      WHERE
        user_id = ${user_id} AND (
        company ILIKE ${`%${query}%`} OR
        position ILIKE ${`%${query}%`} OR
        location ILIKE ${`%${query}%`} OR
        stage ILIKE ${`%${query}%`})
      ORDER BY company
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;
    return applications;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch filtered applications');
  }
}

export async function getUserLocationColors(user_id: string) {
  try {
    const result = await sql<UsersLocationColors[]>`
      SELECT * 
      FROM users_location_colors
      WHERE user_id = ${user_id}`;
    return result[0];

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to User\'s LocationColors');
  }
}

export async function getApplicationsCountByStage(user_id: string) {
  try {
    const result = await sql<CountByStage[]>`
      SELECT stage, count(*), NULL as color_hex
      FROM applications
      WHERE user_id = ${user_id}
      GROUP BY stage`;
    return result;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to User\'s LocationColors');
  }
}

export async function getApplicationsByStage(user_id: string, stage: string){
  try {
    const result = await sql<Application[]>`
      SELECT *
      FROM applications
      WHERE user_id = ${user_id} AND stage = ${stage} LIMIT 5`;
    return result;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to User\'s LocationColors');
  }
}

export async function getApplicationCountPerMonth(user_id: string){
  try {
    const result = await sql<AppsCountPerYearMonth[]>`
      SELECT TO_CHAR(apply_date, 'Mon') AS mon, DATE_PART('month', apply_date) AS month, DATE_PART('year', apply_date) AS year, COUNT(*)
      FROM applications
      WHERE user_id = ${user_id}
      GROUP BY mon, month, year
      ORDER BY year, month
      `;
      console.log(result);
    return result;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to User\'s LocationColors');
  }
}