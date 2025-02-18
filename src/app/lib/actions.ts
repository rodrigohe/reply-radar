'use server';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import postgres from "postgres";
import { z } from "zod";
import { auth, signIn } from "../../auth";
import { AuthError } from "next-auth";
import { hash } from "bcryptjs";

const sql = postgres(process.env.POSTGRES_URL!);

export type State = {
  errors?: {
    company?: string[];
    position?: string[];
    stage?: string[];
    link?: string[];
    ref_id?: string[];
    apply_date?: string[];
    location?: string[];
    location_colors?: string[];
    description?: string[];
  };
  message?: string | null;
};

const FormSchemaApplication = z.object({
  id: z.string(),
  user_id: z.string(),
  company: z.string().min(1, { message: "Please enter the company's name" }),
  position: z.string().nullable().transform((val) => val ==='' ? null : val),
  stage: z.string(),
  link: z.string().nullable().transform((val) => val ==='' ? null : val),
  ref_id: z.string().nullable().transform((val) => val ==='' ? null : val),
  apply_date: z.string().nullable().transform((val) => val ==='' ? null : val),
  location: z.string().nullable().transform((val) => val ==='' ? null : val),
  location_colors: z.string().nullable().transform((val) => val ==='' ? null : val),
  description: z.string().nullable().transform((val) => val ==='' ? null : val),
  created_date: z.string(),
  last_updated: z.string(),
});

const CreateNewApplication = FormSchemaApplication.omit({
  id: true,
  user_id: true,
  created_date: true,
  last_updated: true,
});

const EditApplication = FormSchemaApplication.omit({
  user_id: true,
  created_date: true,
  last_updated: true,
});

export async function createUser(prevState: string | undefined, formData: FormData) {
  const parsedCredentials = z
    .object({ email: z.string().email(), password: z.string().min(8) })
    .safeParse({
      email: formData.get('email'),
      password: formData.get('password')
    });

  if (parsedCredentials.success) {
    const { email, password } = parsedCredentials.data;
    const hashedPassword = await (hash(password, 10));
    try {
      await sql`
        INSERT INTO users (email, password)
        VALUES (${email}, ${hashedPassword})
      `
    } catch (error) {
      console.error('Duplicate email', error);
      return 'The email address you entered is already in use';
    }
  } else {
    return 'The email address you entered is already in use';
  }
  revalidatePath('/');
  redirect('/');
}


export async function createApplication(prevState: State, formData: FormData) {
  const validatedFields = CreateNewApplication.safeParse({
    company: formData.get('company'),
    position: formData.get('position'),
    stage: formData.get('stage'),
    link: formData.get('link'),
    ref_id: formData.get('ref_id'),
    apply_date: formData.get('apply_date'),
    location: formData.get('location'),
    location_colors: formData.get('location_colors'),
    description: formData.get('description'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    }
  }

  const {
    company,
    position,
    stage,
    link,
    ref_id,
    apply_date,
    location,
    location_colors,
    description,
  } = validatedFields.data;

  const session = await auth();
  const user_id = session?.user?.id || '-1'

  try {
    await sql`
    INSERT INTO applications (user_id, company, position, stage, link, ref_id, apply_date, location, location_colors, description)
    VALUES (
      ${user_id},
      ${company}, 
      ${position}, 
      ${stage}, 
      ${link}, 
      ${ref_id}, 
      ${apply_date}, 
      ${location},
      ${location === null ? null : JSON.parse(location_colors || '[]')},
      ${description}
    )
  `;
  } catch (error) {
    console.log(error);
    return {
      message: 'Database Error: Failed to Create Application Record.',
    };
  }

  revalidatePath('/dashboard/applications');
  redirect('/dashboard/applications');
}

export async function updateApplication(prevState: State, formData: FormData) {
  console.log("Incoming FormData:", Object.fromEntries(formData.entries())); // Debug FormData

  const validatedFields = EditApplication.safeParse({
    id: formData.get('id'),
    company: formData.get('company'),
    position: formData.get('position'),
    stage: formData.get('stage'),
    link: formData.get('link'),
    ref_id: formData.get('ref_id'),
    apply_date: formData.get('apply_date'),
    location: formData.get('location'),
    location_colors: formData.get('location_colors'),
    description: formData.get('description'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    }
  }

  console.log("Parsed Fields:", validatedFields);

  const {
    id,
    company,
    position,
    stage,
    link,
    ref_id,
    apply_date,
    location,
    location_colors,
    description,
  } = validatedFields.data;
  const date = new Date().toISOString().split('T')[0];
  const session = await auth();
  const user_id = session?.user?.id || '-1'

  console.log("UPDATING values:", { user_id, company, position, stage, link, ref_id, apply_date, location, location_colors, description });

  try {
    await sql`
    UPDATE applications 
    SET
      company = ${company}, 
      position = ${position}, 
      stage = ${stage}, 
      link = ${link}, 
      ref_id = ${ref_id}, 
      apply_date = ${apply_date},
      location = ${location},
      location_colors = ${location === null ? null : JSON.parse(location_colors || '[]')},
      description = ${description},
      last_updated = ${date}
    WHERE id = ${id} AND user_id = ${user_id}
  `;
  } catch (error) {
    console.log(error);
    return {
      message: 'Database Error: Failed to Edit Application Record.',
    };
  }

  revalidatePath('/dashboard/applications');
  redirect('/dashboard/applications');
}

export async function deleteApplication(id: string) {
  await sql`DELETE FROM applications WHERE id = ${id}`;
  revalidatePath('/dashboard/applications');
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
