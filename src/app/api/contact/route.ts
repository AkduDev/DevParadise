import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { db } from "@/lib/db"

const contactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  service: z.string().min(1),
  message: z.string().min(1).max(2000),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const result = contactSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid input", details: result.error.flatten() },
        { status: 400 }
      )
    }

    const { name, email, service, message } = result.data

    const contactMessage = await db.contactMessage.create({
      data: { name, email, service, message },
    })

    return NextResponse.json(
      {
        success: true,
        message: "Message received successfully",
        id: contactMessage.id,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to process your message" },
      { status: 500 }
    )
  }
}
