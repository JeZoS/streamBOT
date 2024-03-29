"use client";

import React, { useTransition } from "react";
import { Button } from "../ui/button";
import { useAuth } from "@clerk/nextjs";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { onFollow, onUnfollow } from "@/actions/follow";
import { toast } from "sonner";
import { Skeleton } from "../ui/skeleton";

interface ActionsProps {
  hostIdentity: string;
  isFollowing: boolean;
  isHost: boolean;
}

const Actions = ({ hostIdentity, isFollowing, isHost }: ActionsProps) => {
  const [isPending, startTransition] = useTransition();
  const { userId } = useAuth();
  const router = useRouter();

  const handleFollow = () => {
    startTransition(() => {
      onFollow(hostIdentity)
        .then((data) => toast.success(`You are now following ${data.following.username}`))
        .catch(() => toast.error("`"));
    });
  };

  const handleUnFollow = () => {
    startTransition(() => {
      onUnfollow(hostIdentity)
        .then((data) => toast.success(`You have unfollowed ${data.following.username}`))
        .catch(() => toast.error("`"));
    });
  };

  const toggleFollow = () => {
    if (!userId) {
      return router.push("/sign-in");
    }

    if (isHost) return;

    if (isFollowing) {
      handleUnFollow();
    } else {
      handleFollow();
    }
  };

  return (
    <Button
      onClick={toggleFollow}
      disabled={isPending || isHost}
      variant="primary"
      className="w-full lg:w-auto"
    >
      <Heart className={cn("h-4 w-4 mr-2", isFollowing ? "fill-white" : "fill-none")} />
      {isFollowing ? "Unfollow" : "Follow"}
    </Button>
  );
};

export default Actions;


export const ActionsSkeleton = () => {
    return (
        <Skeleton className="h-10 w-full lg:w-24" />
    )
}