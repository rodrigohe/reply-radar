'use client';

import { Button } from "@/app/ui/button";
import { geistMono } from "@/app/ui/fonts";
import { ArrowRightIcon, AtSymbolIcon, ExclamationCircleIcon, EyeIcon, EyeSlashIcon, KeyIcon } from "@heroicons/react/24/outline";
import { useActionState, useState } from "react";
import { createUser } from "@/app/lib/actions";
import Link from "next/link";
import { Checkbox } from "@headlessui/react";

export default function RegisterForm() {
  const [message, formAction, isPending] = useActionState(
    createUser,
    undefined,
  );

  const [enabled, setEnabled] = useState(false)
  const [password, setPassword] = useState("");
  const [type, setType] = useState('password');
  const handleToggle = () => {
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
  };

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmType, setConfirmType] = useState('password');
  const handleConfirmToggle = () => {
    if (confirmType === 'password') {
      setConfirmType('text');
    } else {
      setConfirmType('password');
    }
  };

  return (
    <form action={formAction} className="space-y-3">
      <div className="flex-1 rounded-lg bg-yellow-50 px-6 pb-4 pt-8">
        <h1 className={`${geistMono.className} mb-3 text-2xl font-medium`}>
          Registration
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-sm font-medium text-gray-900"
              htmlFor="email"
            >
              Email address
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="email"
                required
                minLength={6}
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>

          <div className="mt-4">
            <label className="mb-3 mt-5 block text-sm font-medium text-gray-900" htmlFor="password" >
              Password
            </label>
            <div>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="password"
                  type={type}
                  name="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                />
                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                <span onClick={handleToggle}>
                  <EyeIcon className={`cursor-pointer absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 ${type === 'password' ? 'hidden' : ''}`} />
                  <EyeSlashIcon className={`cursor-pointer absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 ${type === 'password' ? '' : 'hidden'}`} />
                </span>
              </div>
            </div>


            <label className="mb-3 mt-5 block text-sm font-medium text-gray-900" htmlFor="confirm-password" >
              Confirm Password
            </label>

            <div>
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="confirm-password"
                  type={confirmType}
                  name="confirm-password"
                  placeholder="confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  minLength={6}
                />
                <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                <span onClick={handleConfirmToggle}>
                  <EyeIcon className={`cursor-pointer absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 ${confirmType === 'password' ? 'hidden' : ''}`} />
                  <EyeSlashIcon className={`cursor-pointer absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 ${confirmType === 'password' ? '' : 'hidden'}`} />
                </span>
              </div>
              <div className={`flex content-center mt-2 ${password === confirmPassword || confirmPassword.length === 0 ? 'hidden' : ''} text-xs text-red-500`} aria-live="polite" aria-atomic="true" >
                <ExclamationCircleIcon className="h-[18px] w-[18px]" />
                <p className="ml-1"> Passwords do not match
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <div>
              <label className="mb-3 mt-5 block text-xs font-medium text-gray-900" htmlFor="tos" >
                I agree with the
                <a href="https://tinyurl.com/2p9nj3hd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 underline"
                >
                  terms of service
                </a>
              </label>
            </div>

            <Checkbox
              checked={enabled}
              onChange={setEnabled}
              name="terms-of-service"
              className="mb-3 mt-5 group block size-4 rounded border bg-white data-[checked]:bg-blue-500"
            >
              <svg className="stroke-white opacity-0 group-data-[checked]:opacity-100" viewBox="0 0 14 14" fill="none">
                <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Checkbox>
          </div>
        </div>

        <div className={`mt-6 flex justify-between gap-4`}>
          <Link
            href="/"
            className="flex h-10 items-center rounded-lg bg-red-500 px-4 text-sm font-medium text-white transition-colors hover:bg-red-400"
          >
            Cancel
          </Link>
          <Button className={`${!enabled ? 'bg-gray-600 pointer-events-none' : ''}`} aria-disabled={isPending}>
            Register <ArrowRightIcon className="ml-4 h-5 w-5 text-gray-50" />
          </Button>
        </div>
        <div className={`mt-6 flex h-8 items-end space-x-1 font-medium text-red-500 ${message ? '' : 'hidden'}`} aria-live="polite" aria-atomic="true" >
          {message && (
            <>
              <ExclamationCircleIcon className="pointer-events-none left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2" />
              <p className="text-xs">{message}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}