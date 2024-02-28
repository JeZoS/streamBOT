"use client";

import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import CopyButton from "./copy-client";
import { Button } from "@/components/ui/button";

interface KeyCardProps {
  value: string | null;
}

const KeyCard = ({ value }: KeyCardProps) => {
  const [Show, setShow] = useState(false);

  return (
    <div className="rounded-xl bg-muted p-6">
      <div className="flex items-start gap-x-10">
        <p className="font-semibold shrink-0">Stream Key</p>
        <div className="space-y-2 w-full">
          <div className="w-full flex items-center gap-x-2">
            <Input
              value={value || ""}
              disabled
              placeholder="Stream Key"
              type={!Show ? "password" : "text"}
            />
            <CopyButton value={value || ""} />
          </div>
          <Button size="sm" variant="link" onClick={() => setShow(!Show)}>
            {Show ? "Hide" : "Show"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KeyCard;
