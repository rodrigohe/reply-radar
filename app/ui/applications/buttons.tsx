import { deleteApplication } from "@/app/lib/actions";
import { LinkIcon, PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function CreateApplication({ msg }: { msg: string }) {
  return (
    <Link
      href="/dashboard/applications/new"
      className={`flex h-10 items-center justify-between rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 `}
    >
      <span className="hidden md:block">{msg}</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  )
}

export function ApplicationURL({ url }: { url: string }) {
  return (
    <a
      href={url}
      className="rounded-md border p-2 hover:bg-gray-100"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkIcon className="w-5" />
    </a>
  )
}

export function UpdateApplication({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/applications/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteApplication({ id }: { id: string }) {
  const deleteApplicationWithId = deleteApplication.bind(null, id);
  return (
    <form action={deleteApplicationWithId}>
      <button type="submit" className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
