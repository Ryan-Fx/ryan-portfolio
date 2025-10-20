import { getMessages } from "@/actions/messages";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DeleteMsg from "@/components/message/delete-msg";

export default async function MessagePage() {
  const { userId } = await auth();

  const messages = await getMessages();

  if (userId !== process.env.OWNER_ID) {
    return (
      <main className="min-h-screen max-w-3xl mx-auto p-6 flex items-center justify-center">
        <div>
          <h1 className="text-2xl font-semibold mb-4">Unauthorized</h1>
          <p>Sorry, you are not allowed to view this page.</p>
          <Button asChild variant="default">
            <Link href="/">Go back home</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <div>
      {messages.length === 0 ? (
        <div className="min-h-screen flex-col space-y-5 flex items-center justify-center text-2xl font-semibold">
          <p>No messages</p>
          <div>
            <Button asChild variant="default">
              <Link href="/">Go back home</Link>
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col px-6 space-y-7 p-10">
          <h1 className="text-2xl text-center font-semibold">Messages</h1>
          <Table className="w-full mx-auto bg-primary-foreground">
            <TableHeader className="text-xl">
              <TableRow className="border-b">
                <TableHead className="py-3 font-semibold">No.</TableHead>
                <TableHead className="font-semibold">Name</TableHead>
                <TableHead className="font-semibold">Email</TableHead>
                <TableHead className="font-semibold">Message</TableHead>
                <TableHead className="font-semibold">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {messages.map((message, index) => (
                <TableRow key={message.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{message.name}</TableCell>
                  <TableCell>{message.email}</TableCell>
                  <TableCell>{message.message}</TableCell>
                  <TableCell>
                    <DeleteMsg id={message.id} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex justify-end">
            <Button asChild variant="default">
              <Link href="/">Go back home</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
