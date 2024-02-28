"use client";

import { ChatVariant, useChatSidebar } from "@/store/use-chat-sidebar";
import { ArrowLeftFromLine, ArrowRightFromLine, MessageSquare, Users } from "lucide-react";
import React from "react";
import Hint from "../hint";
import { Button } from "../ui/button";

const VariantToggle = () => {
  const { variant, onChangeVariant } = useChatSidebar((state) => state);
  const isChat = variant === ChatVariant.CHAT

  const Icon = isChat ? Users : MessageSquare;


  const toggle = () => {
    const newVariant = isChat ? ChatVariant.COMMUNITY : ChatVariant.CHAT;
    onChangeVariant(newVariant);
  };

  const label = isChat ? "Switch to community chat" : "Switch to private chat";


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

export default VariantToggle;
