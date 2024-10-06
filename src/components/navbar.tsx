import Link from "next/link";
import { Button } from "@/components/ui/button";
import handlesSignOut from "@/app/authActions";
import { getServerSession } from "next-auth";
import { authConfig } from "@/pages/api/auth/[...nextauth]";

export default async function Navbar() {
  const session = await getServerSession(authConfig);
  return (
    <nav className="flex justify-between items-center py-3 px-4 fixed top-0 left-0 right-0 z-50 bg-slate-100">
      <Link href="/" className="text-xl font-bold">
        Exo_Ulife.ai
      </Link>
      {!session ? (
        <div className="flex gap-2 justify-center">
          <Link href="/auth/signin">
            <Button variant="default">Sign In</Button>
          </Link>
          <Link href="/auth/signup">
            <Button variant="default">Sign Up</Button>
          </Link>
        </div>
      ) : (
        <form action={handlesSignOut}>
          <Button variant="default" type="submit">
            Sign Out
          </Button>
        </form>
      )}
    </nav>
  );
}
