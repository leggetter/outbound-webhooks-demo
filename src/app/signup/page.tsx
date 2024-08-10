import Link from "next/link";
import { signup } from "./actions";

export default function SignupPage() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center flex-grow">
      <h1 className="text-2xl mb-8">Sign Up for SupaHooks</h1>
      <form className="flex flex-col gap-4">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="text-slate-900 min-w-[400px] rounded-md p-2"
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="text-slate-900 min-w-[400px] rounded-md p-2"
        />
        <button
          formAction={signup}
          className="bg-slate-700 p-2 rounded-lg cursor-pointer"
        >
          Sign up
        </button>
      </form>
      <p className="mt-4">
        Already have an account? <Link href="/login">Login</Link>.
      </p>
    </div>
  );
}
