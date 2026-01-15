import { client } from "@/sanity/lib/client";
import Link from "next/link";

interface Post {
  title: string;
  slug: string;
  date: string;
  summary: string;
}

export default async function BlogPreview() {
  // Fetch only the 2 latest posts
  const posts = await client.fetch(`*[_type == "post"] | order(publishedAt desc)[0...2] {
    title,
    "slug": slug.current,
    "date": publishedAt,
    summary
  }`);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-white tracking-tighter">Latest Logs</h2>
        <Link href="/blog" className="text-xs font-bold text-blue-500 hover:text-blue-400 transition-colors uppercase tracking-widest">
          View All Posts →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {posts.map((post: Post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
            <article className="space-y-2">
              <time className="text-[10px] font-mono text-zinc-600 uppercase">
                {post.date ? new Date(post.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Recent'}
              </time>
              <h3 className="text-lg font-medium text-zinc-200 group-hover:text-blue-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-zinc-500 text-sm line-clamp-2 leading-relaxed">
                {post.summary}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}