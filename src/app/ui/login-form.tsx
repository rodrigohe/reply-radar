'use client';

import { Button } from "@/app/ui/button";
import { geistMono } from "@/app/ui/fonts";
import { ArrowRightIcon, AtSymbolIcon, ExclamationCircleIcon, EyeIcon, EyeSlashIcon, KeyIcon } from "@heroicons/react/24/outline";
import { useActionState, useState } from "react";
import { authenticate } from "@/app/lib/actions";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
  const [message, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  const [password, setPassword] = useState("");
  const [type, setType] = useState('password');
  const handleToggle = () => { type === 'password' ? setType('text') : setType('password') };

  return (
    <form action={formAction} className="space-y-3">
      <div className="flex-1 rounded-lg bg-yellow-50 px-6 pb-4 pt-8">
        <h1 className={`${geistMono.className} mb-3 text-2xl font-medium`}>
          Sign in
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

          <div>
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
          </div>

          <div className="text-xs font-medium justify-items-end">
            <Link href="/reset-password" className="mb-3 mt-5 block text-blue-600 hover:text-blue-500">Forgot password?</Link>

          </div>
        </div>
        <div>
          <input type="hidden" name="redirectTo" value={callbackUrl} />
          <Button className="mt-4 w-full" aria-disabled={isPending}>
            Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
          </Button>
          <div className="flex h-8 items-end space-x-1 font-medium" aria-live="polite" aria-atomic="true" >
            {message && (
              <>
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                <p className="text-sm text-red-500">{message}</p>
              </>
            )}
          </div>
        </div>
        <div>
          <hr className="mb-8"></hr>
          <div className="flex justify-center text-xs font-medium">
            <label className="mb-3 block text-gray-700" htmlFor="password" >
              Don't have an account?
            </label>
            <Link href="/register" className="mb-3 ml-2 block text-blue-600 hover:text-blue-500">Sign up now</Link>
          </div>
        </div>
      </div>
    </form>
  );
}