import { DATA } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import { User } from "lucide-react";
import CredentialsHub from "../components/CredentialsHub";
import BlogPreview from "@/components/BlogPreview"; 

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 p-6 md:p-20">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        
        {/* 1. Profile Card (Spans 2 columns) */}
        <Card className="md:col-span-2 bg-slate-950 border-blue-500/50 shadow-[0_0_15px_-5px_rgba(59,130,246,0.4)] relative overflow-hidden group">
        <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" /> 
          <CardHeader>
            <CardTitle className="text-3xl font-bold tracking-tighter text-white flex items-center gap-2">
              <User className="h-6 w-6 text-blue-500" /> {DATA.name}
            </CardTitle>
            <p className="text-zinc-400 font-mono text-sm">{DATA.role}</p>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-300 leading-relaxed">{DATA.description}</p>
          </CardContent>
        </Card>

        {/* 2. Credentials Hub (Spans 1 column) */}
        <div className="md:col-span-1 border border-zinc-800 rounded-3xl p-6 bg-zinc-900/20">
          <CredentialsHub />
        </div>

        {/* 3. Socials Card (Spans 1 column) */}
        <Card className="md:col-span-1 bg-slate-950 border-blue-500/50 shadow-[0_0_15px_-5px_rgba(59,130,246,0.4)] relative overflow-hidden group">
        <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" /> 
          <CardHeader className="pb-4 border-b border-zinc-800/50">
            <CardTitle className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500">
              My Socials
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6 flex-grow flex flex-col">
            <div className="flex items-center justify-around pb-2">
              <a href={DATA.socials.github} target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                <img src="https://cdn.simpleicons.org/github/ffffff" width="24" height="24" alt="GitHub" />
              </a>
              <a href={DATA.socials.linkedin} target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform text-white">
                <svg role="img" viewBox="0 0 24 24" fill="currentColor" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
            <div className="h-px bg-zinc-800 w-full" />
            <div className="flex justify-between items-center px-2">
              <a href={DATA.socials.leetcode} target="_blank" className="hover:scale-110 transition-transform">
                <img src="https://cdn.simpleicons.org/leetcode/FFA116" width="24" height="24" alt="LeetCode" />
              </a>
              <a href={DATA.socials.gfg} target="_blank" className="hover:scale-110 transition-transform">
                <img src="https://cdn.simpleicons.org/geeksforgeeks/2F8D46" width="24" height="24" alt="GFG" />
              </a>
              <a href={DATA.socials.kaggle} target="_blank" className="hover:scale-110 transition-transform">
                <img src="https://cdn.simpleicons.org/kaggle/20BEFF" width="24" height="24" alt="Kaggle" />
              </a>
            </div>
          </CardContent>
        </Card>

        {/* 4. Blog Redirect Card (Spans 2 columns) */}
        <section className="md:col-span-2 border border-zinc-800 rounded-3xl p-8 bg-zinc-900/20 shadow-sm min-h-[300px]">
          <BlogPreview />
        </section>

        {/* 5. Contact Section (Spans 2 columns) */}
        <Card className="md:col-span-2 bg-zinc-900 border-zinc-800 shadow-xl overflow-hidden">
          <CardHeader className="pb-2 border-b border-zinc-800/50">
            <CardTitle className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
              </span>
              Write to Me
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ContactForm />
          </CardContent>
        </Card>

      </div>
    </main>
  );
}