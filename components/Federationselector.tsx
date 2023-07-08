"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FedType } from "@/lib/types";
import { useState } from "react";
import FederationBody from "./Federationbody";

export default function FederationSelect() {
  const [currFed, setCurrFed] = useState<FedType>("NONE");

  return (
    <div>
      <Select onValueChange={(e: FedType) => setCurrFed(e)}>
        <SelectTrigger className="w-96 text-white text-lg">
          <SelectValue
            placeholder={currFed === "NONE" ? "ALL" : `${currFed}`}
          />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="A">A</SelectItem>
          <SelectItem value="B">B</SelectItem>
          <SelectItem value="C">C</SelectItem>
          <SelectItem value="NONE">ALL</SelectItem>
        </SelectContent>
      </Select>
      <FederationBody fed={currFed} />
    </div>
  );
}
