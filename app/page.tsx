import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-purple-900/20 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <h1 className="text-6xl font-bold leading-tight">
            Explore.
            <br />
            Understand.
            <br />
            <span className="text-fuchsia-500">Be Inspired.</span>
          </h1>

          <p className="mt-6 text-zinc-400 max-w-xl">
            Visual archive powered by Telegram Cloud.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/gallery"
              className="bg-fuchsia-600 hover:bg-fuchsia-500 px-6 py-3 rounded-xl"
            >
              Explore Gallery
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
