import { uploadToTelegram } from "@/lib/telegram"

export async function POST(req: Request) {
  const form = await req.formData()

  const file = form.get("file") as File

  const metadata = {
    title: form.get("title"),
    category: form.get("category"),
    description: form.get("description"),
    createdAt: new Date().toISOString(),
  }

  const result = await uploadToTelegram(file, metadata)

  return Response.json({
    success: true,
    result,
  })
}
