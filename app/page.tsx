import FederationSelect from "@/components/Federationselector";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import { useFederationStore } from "@/lib/store";

useFederationStore.setState({ currentFederation: "NONE" });
export default function Home() {
  return (
    <main className="flex max-w-full flex-col justify-start items-center mt-10">
      <Hero />
      <Partners />
      <h1 className="text-white text-3xl py-5 underline underline-offset-2">
        Federation Equipment
      </h1>
      <FederationSelect />
    </main>
  );
}
