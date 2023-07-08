import { create } from "zustand";
import { FedType } from "./types";

interface FederationState {
  currentFederation: FedType;
  setFederation: (federation: FedType) => void;
}

export const useFederationStore = create<FederationState>()((set) => ({
  currentFederation: "NONE",
  setFederation: (federation: FedType) =>
    set((state) => ({
      currentFederation: (state.currentFederation = federation),
    })),
}));
