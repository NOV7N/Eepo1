"use client"

import { useState } from "react"

export default function AdminPage() {
  const [file, setFile] = useState<File | null>(null)

  async function handleUpload() {
    if (!file) return

    const form = new FormData()

    form.append("file", file)
    form.append("title", "New Artwork")
    form.append("category", "Psychology")
    form.append("description", "Uploaded from dashboard")

    await fetch("/api/upload", {
      method: "POST",
      body: form,
    })

    alert("Uploaded")
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-xl mx-auto bg-zinc-900 p-8 rounded-3xl">
        <h1 className="text-3xl font-bold mb-6">Upload Artwork</h1>

        <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />

        <button
          onClick={handleUpload}
          className="mt-6 bg-fuchsia-600 px-6 py-3 rounded-xl"
        >
          Upload
        </button>
      </div>
    </main>
  )
}
