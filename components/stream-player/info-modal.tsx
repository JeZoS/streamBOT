"use client";

import { ElementRef, useRef, useState, useTransition } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { updateStream } from "@/actions/stream";
import { toast } from "sonner";
import { UploadButton, UploadDropzone } from "@/lib/uploadthing";
import { useRouter } from "next/navigation";
import Hint from "../hint";
import { Trash } from "lucide-react";
import Image from "next/image";

interface InfoModalProps {
  initialName: string;
  initialThumbnailUrl: string | null;
}

const InfoModal = ({ initialName, initialThumbnailUrl }: InfoModalProps) => {
  const [name, setName] = useState(initialName);
  const [thumbnailUrl, setThumbnailUrl] = useState(initialThumbnailUrl);

  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  const closeRef = useRef<ElementRef<"button">>(null);

  const onRemove = () => {
    startTransition(() => {
      updateStream({ thumbnail: null })
        .then(() => {
          toast.success("Thumbnail removed");
            setThumbnailUrl("");
          closeRef?.current?.click();
        })
        .catch(() => {
          toast.error("Failed to remove thumbnail");
        });
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startTransition(() => {
      updateStream({
        name: name,
      })
        .then(() => {
          closeRef?.current?.click();
          toast.success("Stream info updated");
        })
        .catch(() => toast.error("Failed to update stream info"));
    });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="link"
          size="sm"
          className="ml-auto"
        >
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit strem info</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={onSubmit}
          className="space-y-14"
        >
          <div className="space-y-2">
            <Label>Name</Label>
            <Input
              placeholder="Stream name"
              onChange={onChange}
              value={name}
              disabled={isPending}
            />
          </div>
          <div className="space-y-2">
            <Label>Thumbnail</Label>
            {thumbnailUrl ? (
              <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
                <div className="absolute top-2 right-2 z-[10]">
                  <Hint
                    label="Remove thumbnail"
                    asChild
                    side="left"
                  >
                    <Button
                      type="button"
                      disabled={isPending}
                      className="h-auto w-auto p-1.5 "
                      onClick={onRemove}
                    >
                      <Trash />
                    </Button>
                  </Hint>
                </div>
                <Image
                  alt="thumbnail"
                  fill
                  src={thumbnailUrl}
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="rounded-xl border outline-dashed outline-muted">
                <UploadDropzone
                  endpoint="thumbnailUploader"
                  onClientUploadComplete={(file) => {
                    setThumbnailUrl(file?.[0]?.url);
                    router.refresh();
                  }}
                />
              </div>
            )}
          </div>
          <div className="flex justify-between">
            <DialogClose
              asChild
              ref={closeRef}
            >
              <Button
                type="button"
                variant="ghost"
                disabled={isPending}
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              disabled={isPending}
              variant="primary"
              type="submit"
            >
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InfoModal;
