import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getAllPostSlugs, getPostBySlug, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";

function formatDate(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-8">
          <img
            src={urlFor(value).width(800).url()}
            alt={value.alt || ""}
            className="rounded-xl w-full"
            loading="lazy"
          />
          {value.caption && (
            <figcaption className="text-center text-sm text-dark/50 dark:text-light/50 mt-2">{value.caption}</figcaption>
          )}
        </figure>
      );
    },
    code: ({ value }) => (
      <pre className="my-6 bg-dark/5 dark:bg-light/5 rounded-xl p-4 overflow-x-auto text-sm font-mono">
        <code>{value.code}</code>
      </pre>
    ),
  },
  block: {
    h2: ({ children }) => <h2 className="text-3xl font-bold mt-10 mb-4 text-dark dark:text-light">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold mt-8 mb-3 text-dark dark:text-light">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold mt-6 mb-2 text-dark dark:text-light">{children}</h4>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary dark:border-primaryDark pl-6 my-6 italic text-dark/70 dark:text-light/70">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => <p className="my-4 leading-relaxed text-dark/85 dark:text-light/85">{children}</p>,
  },
  marks: {
    link: ({ value, children }) => (
      <a
        href={value.href}
        target={value.blank ? "_blank" : undefined}
        rel={value.blank ? "noopener nofollow" : undefined}
        className="underline underline-offset-2 text-primary dark:text-primaryDark"
      >
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="bg-dark/10 dark:bg-light/10 rounded px-1.5 py-0.5 font-mono text-sm">{children}</code>
    ),
  },
};

export async function getStaticPaths() {
  let paths = [];
  try {
    paths = await getAllPostSlugs();
  } catch {
    // No Sanity project yet
  }
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  let post = null;
  try {
    post = await getPostBySlug(params.slug);
  } catch {
    // No Sanity project yet
  }
  if (!post) return { notFound: true };
  return { props: { post }, revalidate: 60 };
}

export default function BlogPost({ post }) {
  const seoTitle = post.seoTitle || post.title;
  const seoDesc = post.seoDescription || post.excerpt || "";
  const coverUrl = post.coverImage?.asset
    ? urlFor(post.coverImage).width(1200).url()
    : "https://liamkarlsson.com/images/profile/liam2.jpg";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: seoDesc,
    image: coverUrl,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: { "@type": "Person", name: "Liam Karlsson", url: "https://liamkarlsson.com" },
    publisher: { "@type": "Person", name: "Liam Karlsson", url: "https://liamkarlsson.com" },
    url: `https://liamkarlsson.com/blog/${post.slug?.current || post.slug}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://liamkarlsson.com/blog/${post.slug?.current || post.slug}` },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://liamkarlsson.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://liamkarlsson.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://liamkarlsson.com/blog/${post.slug?.current || post.slug}` },
    ],
  };

  const canonicalSlug = post.slug?.current || post.slug;

  return (
    <>
      <Head>
        <title>{seoTitle} – Liam Karlsson</title>
        <meta name="description" content={seoDesc} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDesc} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://liamkarlsson.com/blog/${canonicalSlug}`} />
        <meta property="og:image" content={coverUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDesc} />
        <meta name="twitter:image" content={coverUrl} />
        <link rel="canonical" href={`https://liamkarlsson.com/blog/${canonicalSlug}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </Head>

      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden">
        <Layout className="pt-16 max-w-3xl">

          {/* Breadcrumb */}
          <nav className="text-sm text-dark/50 dark:text-light/50 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:underline">Home</Link>
            {" / "}
            <Link href="/blog" className="hover:underline">Blog</Link>
            {" / "}
            <span className="text-dark dark:text-light">{post.title}</span>
          </nav>

          {/* Tags */}
          {post.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary dark:bg-primaryDark/10 dark:text-primaryDark">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-5xl font-bold text-dark dark:text-light leading-tight mb-4 lg:text-4xl sm:text-3xl">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-3 text-sm text-dark/50 dark:text-light/50 mb-8">
            <span>Liam Karlsson</span>
            <span>·</span>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          </div>

          {/* Cover image */}
          {post.coverImage?.asset && (
            <div className="w-full mb-10 rounded-xl overflow-hidden">
              <img
                src={coverUrl}
                alt={post.coverImage.alt || post.title}
                className="w-full h-auto object-cover"
              />
            </div>
          )}

          {/* Body */}
          {post.body && (
            <div className="prose-custom text-dark dark:text-light">
              <PortableText value={post.body} components={ptComponents} />
            </div>
          )}

          {/* Back / nav */}
          <div className="mt-16 pt-8 border-t border-solid border-dark/10 dark:border-light/10 flex flex-wrap gap-4">
            <Link href="/blog" className="inline-block rounded-lg border-2 border-solid bg-dark px-4 py-2 font-semibold text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light">
              ← All Posts
            </Link>
            <Link href="/" className="inline-block rounded-lg border-2 border-solid border-dark px-4 py-2 font-semibold text-dark hover:bg-dark hover:text-light dark:border-light dark:text-light dark:hover:bg-light dark:hover:text-dark">
              Home
            </Link>
          </div>

        </Layout>
      </main>
    </>
  );
}
