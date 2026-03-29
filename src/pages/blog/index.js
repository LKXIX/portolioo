import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { getAllPosts, urlFor } from "@/lib/sanity";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://liamkarlsson.se" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://liamkarlsson.se/blog" },
  ],
};

const blogListingSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blog – Liam Karlsson",
  url: "https://liamkarlsson.se/blog",
  description: "Thoughts on AI search optimization, AEO, web development, entrepreneurship, and building startups as a young founder.",
  author: { "@type": "Person", name: "Liam Karlsson", url: "https://liamkarlsson.se" },
};

function formatDate(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

const PostCard = ({ title, slug, excerpt, publishedAt, tags, coverImage }) => {
  const postSlug = slug?.current || slug;
  const imgUrl = coverImage?.asset ? urlFor(coverImage).width(800).height(420).url() : null;

  return (
    <motion.article
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="w-full my-3 rounded-xl border border-solid border-dark border-r-4 border-b-4
        bg-light text-dark dark:bg-dark dark:border-light dark:text-light overflow-hidden"
    >
      {/* Cover image */}
      {imgUrl && (
        <Link href={`/blog/${postSlug}`}>
          <img
            src={imgUrl}
            alt={coverImage?.alt || title}
            className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
            loading="lazy"
          />
        </Link>
      )}

      <div className="p-6 flex flex-col gap-3">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {(tags || []).map((tag) => (
            <span key={tag} className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary dark:bg-primaryDark/10 dark:text-primaryDark">
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <Link href={`/blog/${postSlug}`} className="text-2xl font-bold hover:underline md:text-xl xs:text-lg">
          {title}
        </Link>

        {/* Excerpt */}
        {excerpt && <p className="text-dark/70 dark:text-light/70 text-sm leading-relaxed">{excerpt}</p>}

        {/* Meta: author + date + read link */}
        <div className="flex items-center justify-between mt-1 flex-wrap gap-2">
          <div className="flex items-center gap-2 text-xs text-dark/50 dark:text-light/50">
            <img
              src="/images/profile/liam2.jpg"
              alt="Liam Karlsson"
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="font-medium text-dark/70 dark:text-light/70">Liam Karlsson</span>
            <span>·</span>
            <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
          </div>
          <Link href={`/blog/${postSlug}`} className="text-sm font-semibold text-primary dark:text-primaryDark hover:underline">
            Read →
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

const staticPosts = [
  {
    _id: "static-aeo",
    title: "What Is AEO? Answer Engine Optimization Explained",
    slug: { current: "what-is-aeo" },
    excerpt: "AEO is the practice of structuring content so AI systems like ChatGPT, Perplexity, and Google AI Overviews cite you as the answer. Here's how it works.",
    publishedAt: "2025-11-14",
    tags: ["AEO", "AI Search", "SEO"],
    coverImage: null,
  },
  {
    _id: "static-chatgpt-citations",
    title: "How to Get Your Brand Cited by ChatGPT and Perplexity",
    slug: { current: "how-to-get-cited-by-chatgpt" },
    excerpt: "A practical guide to getting cited by ChatGPT, Perplexity, and Google AI Overviews. Covers crawler access, schema markup, and brand signal building.",
    publishedAt: "2025-12-03",
    tags: ["AEO", "ChatGPT", "AI Citations"],
    coverImage: null,
  },
];

export async function getStaticProps() {
  let posts = [];
  try {
    posts = await getAllPosts();
  } catch {
    // No Sanity project configured yet — show empty state
  }
  const allPosts = [...(posts || []), ...staticPosts.filter((sp) => !(posts || []).some((p) => p.slug?.current === sp.slug.current))];
  return { props: { posts: allPosts }, revalidate: 60 };
}

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Blog – Liam Karlsson</title>
        <meta name="description" content="Thoughts on AI search optimization, AEO, web development, and building startups. By Liam Karlsson, co-founder of Rankad.ai." />
        <meta property="og:title" content="Blog – Liam Karlsson" />
        <meta property="og:description" content="Thoughts on AI search, AEO, and building startups by Liam Karlsson." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://liamkarlsson.se/blog" />
        <meta property="og:image" content="https://liamkarlsson.se/images/profile/liam2.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://liamkarlsson.se/blog" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListingSchema) }} />
      </Head>

      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text="Blog"
            className="!text-8xl !leading-tight mb-4 lg:!text-7xl sm:!text-6xl xs:!text-4xl"
          />
          <p className="text-center text-dark/75 dark:text-light/75 text-lg mb-16 max-w-2xl mx-auto sm:text-base sm:mb-8">
            Thoughts on AI search optimization, AEO, web development, and building startups.
          </p>

          <div className="flex flex-col w-full">
            {posts.map((post) => (
              <PostCard key={post._id} {...post} />
            ))}
          </div>

          <nav className="mt-12 flex flex-wrap gap-4 justify-center" aria-label="Explore more">
            <Link href="/" className="inline-block rounded-lg border-2 border-solid bg-dark px-4 py-2 font-semibold text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light">Home</Link>
            <Link href="/about" className="inline-block rounded-lg border-2 border-solid bg-dark px-4 py-2 font-semibold text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light">About</Link>
            <Link href="/projects" className="inline-block rounded-lg border-2 border-solid bg-dark px-4 py-2 font-semibold text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light">Projects</Link>
          </nav>

        </Layout>
      </main>
    </>
  );
}
