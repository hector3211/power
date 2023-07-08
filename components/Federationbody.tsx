import { FedType, Product, ProductNamesType, productNames } from "@/lib/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useFederationStore } from "@/lib/store";
import { ScrollArea } from "./ui/scroll-area";
export function createFakeData(): Product[] {
  const productList: Product[] = [];
  const fedList: FedType[] = ["C", "A", "B"];
  const productName: ProductNamesType[] = ["chalk", "sleeves", "stiffbar"];
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

type FedBodyProps = {
  fed: FedType;
};

export default function FederationBody({ fed }: FedBodyProps) {
  const data = createFakeData();
  console.log(`current fed from body: ${fed}`);
  return (
    <div className="w-full mt-5">
      <ScrollArea className="h-[500px] rounded-md">
        {data
          .filter((item) => {
            if (fed) {
              if (item.federationSupport.includes(fed)) {
                return item;
              } else {
                return item;
              }
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
