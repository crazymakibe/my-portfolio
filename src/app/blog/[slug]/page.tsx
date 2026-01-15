import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export const dynamic = "force-dynamic";

export default async function BlogPost({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    body,
    mainImage
  }`;

  const post = await client.fetch(query, { slug });

  if (!post) {
    return (
      <main className="min-h-screen bg-[#0a0f1a] text-white flex items-center justify-center">
        <h1 className="text-2xl font-bold">Post not found!</h1>
      </main>
    );
  }

  return (
    /* Removed max-w-2xl to let the background span the entire screen width */
    <main className="min-h-screen bg-[#0a0f1a] text-white w-full">
      
      {/* This inner div keeps the text centered and readable without being 'squished' */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">
          {post.title || "Untitled Post"}
        </h1>

        {/* Cinematic Image */}
        {post.mainImage && (
          <div className="relative w-full h-[300px] md:h-[500px] mb-12 overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.title || "Blog Image"}
              fill
              priority
              className="object-cover"
            />
          </div>
        )}

        {/* Content Section - max-w-none lets it use the full width of its 4xl container */}
        <div className="prose prose-invert prose-lg md:prose-xl max-w-none">
          {post.body ? (
            <PortableText value={post.body} />
          ) : (
            <p className="text-gray-400 text-center italic">This post has no content yet.</p>
          )}
        </div>
      </div>
    </main>
  );
}