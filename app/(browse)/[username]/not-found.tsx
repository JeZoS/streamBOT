import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="h-full flex flex-col space-y-4 items-center justify-center text-muted-foreground">
      <h1 className="text-4xl">404</h1>
      <p>We couldn&apos;t find the page you were looking for.</p>
      <Button
        asChild
        variant="secondary"
      >
        <Link href="/">Go Home</Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;
