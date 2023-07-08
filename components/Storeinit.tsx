"use client";

import { useFederationStore } from "@/lib/store";
import { FedType, Product, ProductNamesType } from "@/lib/types";
import { useRef } from "react";

type StoreProps = {
  fed: FedType;
};

export default function StoreInit({ fed }: StoreProps) {
  const init = useRef(false);
  if (!init.current) {
    useFederationStore.setState({ currentFederation: fed });
    init.current = true;
  }

  return null;
}
