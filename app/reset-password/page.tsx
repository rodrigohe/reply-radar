import { FaceFrownIcon } from '@heroicons/react/24/outline';
 
export default function Page() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-2 bg-[#292121] text-yellow-50">
      <FaceFrownIcon className="w-10" />
      <p className='pt-6'>You are not allowed reset your password!</p>
    </main>
  );
}