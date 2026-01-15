import { client } from '@/sanity/lib/client';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  url: string;
  _id: string;
}

export default async function CredentialsPage() {
  const query = `*[_type == "certificate"] | order(date desc)`;
  const certs = await client.fetch(query);

  return (
    <div className="min-h-screen bg-black text-zinc-300 selection:bg-blue-500/30">
      <div className="max-w-3xl mx-auto px-6 py-20">
        
        {/* Navigate Back */}
        <Link 
          href="/" 
          className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-sm uppercase tracking-widest">Back to Homepage</span>
        </Link>

        <header className="mb-16">
          <h1 className="text-4xl font-bold text-white tracking-tight mb-4">Credentials</h1>
          <p className="text-zinc-500 max-w-md">
            A verified collection of my professional certifications and academic achievements.
          </p>
        </header>

        <div className="space-y-6">
          {certs.map((cert: Certificate) => (
            <div key={cert._id} className="group relative p-6 border border-zinc-900 bg-zinc-900/10 rounded-2xl hover:border-zinc-700 transition-all">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-zinc-500">{cert.issuer}</p>
                </div>
                <span className="text-[10px] font-mono text-zinc-600 bg-zinc-900 px-2 py-1 rounded">
                  {cert.date}
                </span>
              </div>
              
              {cert.url && (
                <a href={cert.url} target="_blank" className="inline-flex items-center gap-1 mt-4 text-[10px] font-bold text-blue-500 uppercase tracking-widest">
                  Verify Authenticity ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}