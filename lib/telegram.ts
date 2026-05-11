const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!
const CHANNEL_ID = process.env.TELEGRAM_CHANNEL_ID!

export async function uploadToTelegram(file: File, metadata: any) {
  const formData = new FormData()

  formData.append("chat_id", CHANNEL_ID)
  formData.append("photo", file)
  formData.append("caption", JSON.stringify(metadata))

  const response = await fetch(
    `https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`,
    {
      method: "POST",
      body: formData,
    }
  )

  return response.json()
}

export async function getChannelPosts() {
  const response = await fetch(
    `https://api.telegram.org/bot${BOT_TOKEN}/getUpdates`
  )

  return response.json()
}
