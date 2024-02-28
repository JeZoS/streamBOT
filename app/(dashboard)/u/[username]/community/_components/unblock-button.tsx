"use client";

interface UnblockButtonProps {
  userId: string;
}

import { onUnblock } from "@/actions/block";
import { Button } from "@/components/ui/button";
import React, { useTransition } from "react";
import { toast } from "sonner";

function UnblockButton({ userId }: UnblockButtonProps) {
  const [isPending, startTransition] = useTransition();

  const handleUnblock = () => {
    startTransition(() => {
      onUnblock(userId)
        .then(() => {
          toast.success("User unblocked");
        })
        .catch((err) => {
          toast.error("Something went wrong");
        });
    });
  };

  return (
    <Button
      disabled={isPending}
      onClick={handleUnblock}
      variant="link"
      size="sm"
      className="text-blue-500 w-full"
    >
      Unblock
    </Button>
  );
}

export default UnblockButton;
