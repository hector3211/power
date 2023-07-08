import Link from "next/link";
import { Button } from "./ui/button";
import { MobileNavButton } from "./Mobilenav";

export default function Nav() {
  return (
    <div className="flex w-full justify-between items-center px-5 lg:px-8 py-3 bg-zinc-300">
      <h1 className="text-3xl font-extrabold">Power</h1>
      <div className="hidden md:flex md:justify-between">
        <Link href={"/"}>
          <Button variant={"link"} className="lg:text-lg">
            Home
          </Button>
        </Link>
        <Link href={"/about"}>
          <Button variant={"link"} className="lg:text-lg">
            About
          </Button>
        </Link>
        <Link href={"/contact"}>
          <Button variant={"link"} className="lg:text-lg">
            Contact
          </Button>
        </Link>
      </div>
      <MobileNavButton />
    </div>
  );
}
