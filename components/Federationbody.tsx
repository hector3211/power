"use client";
import { FedType, Product, ProductNamesType, productNames } from "@/lib/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { useFederationStore } from "@/lib/store";
export function createFakeData(): Product[] {
  const productList: Product[] = [];
  const fedList: FedType[] = ["C", "A", "B"];
  const productName: ProductNamesType[] = ["sleeves", "stiffbar", "chalk"];
  const products = 8;
  for (let i = 0; i < products; i++) {
    const randomNum = Math.floor(Math.random() * 3);
    const randomPrice = Math.floor(Math.random() * (100 - 20) + 20);
    let newProduct: Product = {
      price: randomPrice,
      name: productName[randomNum],
      federationSupport: fedList.slice(randomNum, fedList.length),
      website: "website.com",
    };
    productList.push(newProduct);
  }

  return productList;
}

// type FedBodyProps = {
//   fed: FedType;
// };

export default function FederationBody() {
  const data = createFakeData();
  const { currentFederation } = useFederationStore();
  return (
    <div className="mt-5">
      <ScrollArea className="h-[500px] rounded-md">
        {data
          .filter((item) => {
            if (currentFederation !== "NONE") {
              if (item.federationSupport.includes(currentFederation)) {
                return item;
              }
            } else {
              return item;
            }
          })
          .map((item, idx) => (
            <Card key={idx} className="w-full my-2">
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <div className="flex">
                    <p className="font-semibold mr-1">Price:</p>
                    <p>${item.price}.99</p>
                  </div>
                  <div className="flex">
                    <p className="font-semibold mr-1">Site:</p>
                    <p>{item.website}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex">
                  <p className="font-semibold mr-1">Federation Supporting:</p>
                  <p>{item.federationSupport}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
      </ScrollArea>
    </div>
  );
}
