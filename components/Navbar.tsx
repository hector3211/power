import Link from "next/link";
import { Button } from "./ui/button";

export default function Nav() {
  return (
    <div className="flex w-full justify-between items-center px-5 py-3 bg-zinc-300">
      <h1 className="text-3xl font-extrabold">Power</h1>
      <div className="flex justify-between text-lg font-semibold">
        <Link href={"/"}>
          <Button variant={"link"}>Home</Button>
        </Link>
        <Link href={"/about"}>
          <Button variant={"link"}>About</Button>
        </Link>
        <Link href={"/contact"}>
          <Button variant={"link"}>Contact</Button>
        </Link>
      </div>
    </div>
  );
}
