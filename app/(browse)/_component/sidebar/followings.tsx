"use client";

import { useSidebar } from "@/store/use-sidebar";
import { Follow, User } from "@prisma/client";
import React from "react";
import UserItem, { UserItemSkeleton } from "./userItem";

interface FollowingsProps {
  data: (Follow & { following: User })[];
}

const Followings = ({ data }: FollowingsProps) => {
  const { collapsed } = useSidebar((state) => state);

  if (!data.length) {
    return null;
  }

  return (
    <div>
      {!collapsed && (
        <div className="pl-6 mb-4">
          <p className="text-sm text-muted-foreground">Following</p>
        </div>
      )}
      <ul className="space-y-2 px-2">
        {data.map((follow) => (
          <UserItem
            key={follow.following.id}
            username={follow.following.username}
            imageUrl={follow.following.imageUrl}
          />
        ))}
      </ul>
    </div>
  );
};

export default Followings;

export const FollowingsSkeleton = () => {
  return (
    <ul className="px-2 pt-2 lg:pt-0">
      {[1, 2, 3].map((i) => (
        <UserItemSkeleton key={i} />
      ))}
    </ul>
  );
};
