import { prisma } from "@/lib/prisma";
import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);
    const eventType = evt.type;
    const { id } = evt.data;

    //user.deleted, user.created, user.updated
    switch (eventType) {
      case "user.created":
        await prisma.user.create({
          data: {
            externalId: evt.data.id,
            email: evt.data.email_addresses[0].email_address,
            username: evt.data.username,
            firstName: evt.data.first_name,
            lastName: evt.data.last_name,
            imageUrl: evt.data.image_url,
          },
        });
        break;
      case "user.deleted":
        await prisma.user.delete({
          where: {
            externalId: id,
          },
        });
        break;
      case "user.updated":
        console.log("ev data: ", evt.data);
        await prisma.user.update({
          where: {
            externalId: id,
          },
          data: {
            email: evt.data.email_addresses[0].email_address,
            firstName: evt.data.first_name,
            lastName: evt.data.last_name,
            username: evt.data.username,
            imageUrl: evt.data.image_url,
          },
        });
        break;
      default:
        break;
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
