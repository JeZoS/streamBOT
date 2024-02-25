"use server";

import { followUser, unfollowUser } from "@/lib/follow-service";
import { revalidatePath } from "next/cache";

export const onFollow = async (id: string) => {
  try {
    const followerUser = await followUser(id);

    revalidatePath("/");

    if (followerUser) {
      revalidatePath(`/${followerUser.following.username}`);
    }

    return followerUser;
  } catch (error) {
    throw new Error("Internal Error");
  }
};

export const onUnfollow = async (id: string) => {
  try {
    const unFollowedUser = await unfollowUser(id);

    revalidatePath("/");

    if (unFollowedUser) {
      revalidatePath(`/${unFollowedUser.following.username}`);
    }

    return unFollowedUser;
  } catch (error) {
    throw new Error("Internal Error");
  }
};