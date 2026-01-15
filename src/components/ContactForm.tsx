"use client"; 

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"IDLE" | "SUBMITTING" | "SUCCESS" | "ERROR">("IDLE");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("SUBMITTING");

    const formData = new FormData(e.currentTarget);

    const response = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      setStatus("SUCCESS");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("ERROR");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 font-mono">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="name"
          type="text"
          placeholder="Name"
          required
          className="bg-zinc-800 border border-zinc-700 p-2 rounded text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-blue-500 outline-none"
        />
        <input
          name="Contact Details"
          type="text"
          placeholder="Email/Phone/Socials"
          required
          className="bg-zinc-800 border border-zinc-700 p-2 rounded text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-blue-500 outline-none"
        />
      </div>
      <textarea
        name="message"
        placeholder="Your Comments"
        rows={4}
        required
        className="w-full bg-zinc-800 border border-zinc-700 p-2 rounded text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-blue-500 outline-none resize-none"
      />
      <button
        type="submit"
        disabled={status === "SUBMITTING"}
        className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-zinc-700 py-2 rounded text-xs uppercase font-bold transition-all flex items-center justify-center gap-2"
      >
        {status === "SUBMITTING" ? "Processing..." : (
          <>Submit<Send className="h-3 w-3" /></>
        )}
      </button>
      
      {status === "SUCCESS" && <p className="text-green-500 text-[10px] uppercase tracking-tighter">Your response has been recorded.</p>}
      {status === "ERROR" && <p className="text-red-500 text-[10px] uppercase tracking-tighter">Unfortunately, the connection failed. Check logs.</p>}
    </form>
  );
}