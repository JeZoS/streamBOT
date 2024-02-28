import React from "react";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import { getBlockedUsers } from "@/actions/block";
import { format } from "date-fns";

const CommunityPage = async () => {
  const blockedUsers = await getBlockedUsers();

  console.log(blockedUsers)

  const formattedBlockedUsers = blockedUsers.map((block) => {
    return {
      ...block,
      userId: block.blocked.id,
      imageUrl: block.blocked.imageUrl,
      username: block.blocked.username,
      createdAt: format(new Date(block.createdAt), "dd/MM/yyyy"),
    };
  });

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Community Settings</h1>
      </div>
      <DataTable
        columns={columns}
        data={formattedBlockedUsers}
      />
    </div>
  );
};

export default CommunityPage;
