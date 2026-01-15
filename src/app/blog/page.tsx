import { DATA } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BookOpen, Clock } from "lucide-react";
import Link from "next/link";
import { client } from "@/sanity/lib/client"; // Importing the client

// Telling Next.js to always fetch fresh data whenever I publish on Sanity
export const dynamic = 'force-dynamic';

interface Post {
  title: string;
  slug: string;
  date: string;
  summary: string;
  readTime: string;
}

export default async function BlogPage() {
  
  // Fetching posts from Sanity using GROQ
  // Filtering by _type == "post" and ordering by newest first
  const posts = await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    "date": publishedAt,
    summary,
    "readTime": "5 min read" 
  }`);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 p-6 md:p-20">
      <div className="max-w-3xl mx-auto">
        
        {/* Navigation */}
        <Link 
          href="/" 
          className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-sm uppercase tracking-widest">Back to Homepage</span>
        </Link>

        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl font-bold tracking-tighter mb-4 flex items-center gap-3">
            <BookOpen className="text-blue-500" /> {DATA.name}&apos;s Logs
          </h1>
          <p className="text-zinc-400">
            Some musings. Sometimes, I explain my projects here. Sometimes I would go on and on about mathematics or maybe something completely unrelated like how throw-ins are staging a comeback in European football.
          </p>
        </header>

        {/* Blog Posts*/}
        <div className="space-y-6">
          {posts.map((post: Post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="bg-zinc-900 border-zinc-800 hover:border-blue-500/50 transition-all cursor-pointer group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-white text-xl group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {post.summary} {/* Changed from post.description to match Sanity schema */}
                  </p>
                </CardHeader>
                <CardContent>
                  <span className="text-[10px] text-zinc-600 font-mono uppercase tracking-tighter">
                    Published: {post.date ? new Date(post.date).toLocaleDateString() : 'Draft'}
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
          
          {posts.length === 0 && (
            <div className="text-center py-20 border border-dashed border-zinc-800 rounded-2xl">
              <p className="text-zinc-500 font-mono text-sm">No logs found yet.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}