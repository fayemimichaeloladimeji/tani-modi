import React from 'react';
import { useParams, Link } from 'react-router-dom';
import BLOG_POSTS from '../../data/blogPosts';

export default function PostPage() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <h2 className="text-2xl font-semibold mb-4">Article not found</h2>
          <p className="mb-6 text-neutral-600">We couldn’t find the article you were looking for.</p>
          <Link to="/blog" className="inline-block bg-amber-700 text-white px-4 py-2 rounded">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-[#faf9f6] text-neutral-900 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-6 text-sm text-neutral-500">{post.date} • {post.readTime}</div>
        <h1 className="text-4xl md:text-5xl font-serif font-semibold mb-4">{post.title}</h1>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-amber-700 text-white flex items-center justify-center font-semibold">{post.author.name[0]}</div>
          <div>
            <div className="text-sm font-semibold">{post.author.name}</div>
            <div className="text-xs text-neutral-500">{post.author.role}</div>
          </div>
        </div>

        {post.image && (
          <div className="mb-8 overflow-hidden rounded-xl bg-neutral-100">
            <img src={post.image} alt={post.title} className="w-full h-80 object-cover" />
          </div>
        )}

        <div className="prose max-w-none text-neutral-700">
          <p>{post.excerpt}</p>
        </div>

        <div className="mt-12">
          <Link to="/blog" className="text-sm text-amber-700 font-semibold">← Back to blog</Link>
        </div>
      </div>
    </article>
  );
}
