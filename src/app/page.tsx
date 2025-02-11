import LoginForm from "./ui/login-form";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen bg-[#292121]">
      <div className="relative mx-auto flex w-full md:max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <LoginForm />
      </div>
    </main>
  );
}
