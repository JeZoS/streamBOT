import React from "react";

import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-4 hover:opacity-75 transition">
        <div className="bg-white rounded-full p-1 mr-10 shrink-0 lg:mr-0 lg:shrink">
          <Image src="/spooky.svg" alt="streamBot" width={32} height={32} />
        </div>
        <div className={cn(font.className,
            "hidden lg:block"
          )}>
          <p className="text-lg font-semibold">StreamBOT</p>
          <p className="text-xs text-muted-foreground">Creater Dashboard</p>
        </div>
      </div>
    </Link>
  );
};
export default Logo;
