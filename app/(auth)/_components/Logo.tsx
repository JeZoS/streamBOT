import React from "react";

import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const Logo = () => {
  return (
    <div className={cn("flex flex-col items-center gap-y-4",font.className)}>
      <div className="bg-white rounded-full p-1">
        <Image src="/spooky.svg" alt="streamBot" width={100} height={100} />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-xl font-semibold">StreamBot</p>
        <p className="text-sm text-muted-foreground">Let&apos;s play</p>
      </div>
    </div>
  );
};
export default Logo;
