'use server';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import postgres from "postgres";
import { z } from "zod";

const sql = postgres(process.env.POSTGRES_URL!);

export type State = {
  errors?: {
    company?: string[];
  };
  message?: string | null;
};

const FormSchema = z.object({
  id: z.string(),
  company: z.string().min(1, { message: "Please enter the comapany's name" }),
  position: z.string().nullable().transform(x => x || null).transform(x => x || null),
  stage: z.string(),
  link: z.string().nullable().transform(x => x || null),
  ref_id: z.string().nullable().transform(x => x || null),
  apply_date: z.string().nullable().transform(x => x || null),
  location: z.string().nullable().transform(x => x || null),
  location_colors: z.string().min(5).nullable().transform(x => x || null),
  description: z.string().nullable().transform(x => x || null),
  created_date: z.string(),
  last_updated: z.string(),
});

const CreateNewApplication = FormSchema.omit({
  id: true,
  created_date: true,
  last_updated: true,
});

const EditApplication = FormSchema.omit({
  id: true,
  created_date: true,
  last_updated: true,
});


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
      messsage: 'Missing Fields. Failed to Create Invoice.',
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

  try {
    await sql`
    INSERT INTO applications (company, position, stage, link, ref_id, apply_date, location, location_colors, description)
    VALUES (
      ${company}, 
      ${position}, 
      ${stage}, 
      ${link}, 
      ${ref_id}, 
      ${apply_date}, 
      ${location},
      ${location_colors},
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
  const validatedFields = EditApplication.safeParse({
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
      messsage: 'Missing Fields. Failed to Create Invoice.',
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
  const date = new Date().toISOString().split('T')[0];

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
    location_colors = ${location_colors},
    description ${description}
    last_updated = ${date}
    )
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
  const email = formData.get('email');
  const password = formData.get('password');

  console.log(email);
  console.log(password);

  if (email === "test@email.com" && password === "12345678") {
    revalidatePath('/dashboard');
    redirect('/dashboard')
  } else {
    await new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
    return "Wrong email or password.";
  }
}
