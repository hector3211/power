export const federations = {
  A: "A",
  B: "B",
  C: "C",
  NONE: "NONE",
} as const;

export const productNames = {
  sleeves: "sleeves",
  stiffbar: "stiffbar",
  chalk: "chalk",
} as const;

export type FedType = (typeof federations)[keyof typeof federations];
export type ProductNamesType = keyof typeof productNames;
export type Product = {
  price: number;
  name: ProductNamesType;
  federationSupport: FedType[];
  website: string;
};
