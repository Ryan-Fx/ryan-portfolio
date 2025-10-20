"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { BsTrash } from "react-icons/bs";
import { useTransition } from "react";
import { deleteMessage } from "@/actions/messages";
import toast from "react-hot-toast";

interface idProps {
  id: number;
}
export default function DeleteMsg({ id }: idProps) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = (id: number) => {
    startTransition(async () => {
      try {
        await deleteMessage(id);
        toast.success("Message deleted successfully!");
      } catch (err: any) {
        alert("Failed to delete: " + err.message);
      }
    });
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant={"outline"}
          type="button"
          title="Delete"
          className="cursor-pointer"
        >
          <BsTrash size={20} className="text-primary" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the
            message and remove it from the database.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="cursor-pointer">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            type="button"
            disabled={isPending}
            onClick={() => handleDelete(id)}
            className="cursor-pointer"
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
