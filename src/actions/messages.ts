"use server";

import { db } from "@/drizzle/db";
import { messagesTable } from "@/drizzle/schema";
import { MessageInput, messageSchema } from "@/schema/messages";
import { desc, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function createMessage(formData: MessageInput) {
  const { success, data } = messageSchema.safeParse(formData);
  if (!success) {
    throw new Error("Validation failed");
  }

  try {
    await db.insert(messagesTable).values(data);
    revalidatePath("/message");
  } catch (error: any) {
    throw new Error(`Error creating message: ${error.message || error} `);
  }
}

export async function getMessages() {
  try {
    const messages = await db
      .select()
      .from(messagesTable)
      .orderBy(desc(messagesTable.createdAt));

    return messages;
  } catch (error: any) {
    throw new Error(`Error getting messages: ${error.message || error} `);
  }
}

export async function deleteMessage(id: number) {
  try {
    await db.delete(messagesTable).where(eq(messagesTable.id, id));
    revalidatePath("/message");
  } catch (error: any) {
    throw new Error(`Error deleting message: ${error.message || error} `);
  }
}
