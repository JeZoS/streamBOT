"use client";

import { useChatSidebar } from "@/store/use-chat-sidebar";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import React from "react";
import Hint from "../hint";
import { Button } from "../ui/button";

const ChatToggle = () => {
  const { collapsed, onCollapse, onExpand } = useChatSidebar((state) => state);

  const Icon = collapsed ? ArrowLeftFromLine : ArrowRightFromLine;

  const toggle = () => {
    if (collapsed) {
      onExpand();
    } else {
      onCollapse();
    }
  };

  const label = collapsed ? "Expand chat" : "Collapse chat";

  return (
    <Hint label={label} side="left" asChild>
      <Button
        onClick={toggle}
        className="h-auto p-2 hover:bg-white/10 hover:text-primary bg-transparent"
        variant="ghost"
      >
        <Icon className="h-4 w-4" />
      </Button>
    </Hint>
  );
};

export default ChatToggle;
