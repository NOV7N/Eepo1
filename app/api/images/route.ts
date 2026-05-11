const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!

export async function GET() {
  const response = await fetch(
    `https://api.telegram.org/bot${BOT_TOKEN}/getUpdates`
  )

  const data = await response.json()

  const images = data.result
    .filter((item: any) => item.channel_post?.photo)
    .map((item: any) => {
      const post = item.channel_post

      return {
        id: post.message_id,
        caption: post.caption,
        image: post.photo[post.photo.length - 1].file_id,
      }
    })

  return Response.json(images)
}
