'use server';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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