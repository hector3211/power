import FederationSelect from "@/components/Federationselector";
import { useFederationStore } from "@/lib/store";

useFederationStore.setState({ currentFederation: "NONE" });
export default function Home() {
  return (
    <main className="flex max-w-full flex-col justify-start items-center mt-10">
      <FederationSelect />
    </main>
  );
}
