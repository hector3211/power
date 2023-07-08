"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FedType } from "@/lib/types";
import FederationBody from "./Federationbody";
import { useFederationStore } from "@/lib/store";

export default function FederationSelect() {
  const { currentFederation, setFederation } = useFederationStore();

  return (
    <div>
      <Select onValueChange={(e: FedType) => setFederation(e)}>
        <SelectTrigger className="w-96 text-white text-lg">
          <SelectValue
            placeholder={
              currentFederation === "NONE" ? "ALL" : `${currentFederation}`
            }
          />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="A">A</SelectItem>
          <SelectItem value="B">B</SelectItem>
          <SelectItem value="C">C</SelectItem>
          <SelectItem value="NONE">ALL</SelectItem>
        </SelectContent>
      </Select>
      <FederationBody />
    </div>
  );
}
