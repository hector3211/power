import { Label } from "./ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function Hero() {
  return (
    <div className="relative ">
      <img
        src="/lift.jpg"
        alt="power lifter"
        className="w-full object-center  z-0"
      />
      <div className="mt-5 px-3 md:mt-0">
        <Card className=" md:w-[350px] lg:w-[550px] lg:h-[650px] md:absolute md:top-28 md:left-5 lg:top-60 lg:left-10 md:bg-transparent md:backdrop-blur-md">
          <CardHeader className="text-center text-white">
            <CardTitle className="font-bold text-black md:text-white lg:text-5xl">
              Pinellas Barbell
            </CardTitle>
            <CardDescription>Get access to our open gym 24/7</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center text-white gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label
                    id="name"
                    className="text-black md:text-white lg:text-xl"
                  >
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Full Name Here"
                    className="lg:h-16"
                  />
                </div>
                <div className="flex flex-col space-y-1.5 ">
                  <Label
                    id="name"
                    className="text-black md:text-white lg:text-xl"
                  >
                    Rate
                  </Label>
                  <Select>
                    <SelectTrigger className="lg:h-16">
                      <SelectValue placeholder="Select" />
                      <SelectContent position="popper">
                        <SelectItem value="next">$50.00 Mounthly</SelectItem>
                        <SelectItem value="sveltekit">
                          $150.00 Yearly
                        </SelectItem>
                      </SelectContent>
                    </SelectTrigger>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" className="w-full lg:h-16 lg:text-2xl">
              Register
            </Button>
          </CardFooter>
          <div className="hidden md:flex flex-col justify-center items-center">
            <h3 className="text-gray-500 text-sm font-semibold md:text-white lg:text-2xl underline underline-offset-2">
              Our partners
            </h3>
            <div className="py-2 w-full flex justify-evenly items-center lg:mt-5">
              <img
                src="/nike-icon.png"
                className="h-16 lg:h-24 animate-pulse"
              />
              <img
                src="/adidas-icon.png"
                className="h-16 lg:h-24 animate-pulse"
              />
              <img
                src="/nike-icon.png"
                className="h-16 lg:h-24 animate-pulse"
              />
              <img
                src="/adidas-icon.png"
                className="h-16 lg:h-24 animate-pulse"
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
