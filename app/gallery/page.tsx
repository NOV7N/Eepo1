async function getImages() {
  const res = await fetch("http://localhost:3000/api/images", {
    cache: "no-store",
  })

  return res.json()
}

export default async function GalleryPage() {
  const images = await getImages()

  return (
    <main className="min-h-screen bg-[#05010f] text-white p-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img: any) => (
          <div
            key={img.id}
            className="rounded-2xl overflow-hidden border border-white/10"
          >
            <img
              src={`https://api.telegram.org/file/bot${process.env.TELEGRAM_BOT_TOKEN}/${img.image}`}
              alt=""
              className="w-full h-[320px] object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  )
}
