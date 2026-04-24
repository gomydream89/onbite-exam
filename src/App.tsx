import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "./lib/utils";

import "./App.css";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function App() {
  const isActive = true;

  return (
    <div className="p-5">
      <Toaster />

      <Carousel className="mx-10">
        <CarouselContent>
          <CarouselItem className="basis-1/3">1</CarouselItem>
          <CarouselItem>2</CarouselItem>
          <CarouselItem>3</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <Button
        onClick={() => {
          toast("토스트메시지", {
            position: "top-center",
          });
        }}
      >
        버튼!
      </Button>
      <div className={cn(isActive ? "text-green-500" : "text-red-500")}>
        isActive
      </div>
    </div>
  );
}

export default App;
