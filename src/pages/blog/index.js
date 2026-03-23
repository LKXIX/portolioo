import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { getAllPosts } from "@/lib/sanity";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://liamkarlsson.com" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://liamkarlsson.com/blog" },
  ],
};

const blogListingSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blog – Liam Karlsson",
  url: "https://liamkarlsson.com/blog",
  description: "Thoughts on AI search optimization, AEO, web development, entrepreneurship, and building startups as a young founder.",
  author: { "@type": "Person", name: "Liam Karlsson", url: "https://liamkarlsson.com" },
};

function formatDate(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

const PostCard = ({ title, slug, excerpt, publishedAt, tags }) => (
  <motion.article
    initial={{ y: 40, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } }}
    viewport={{ once: true }}
    className="w-full p-6 my-2 rounded-xl border border-solid border-dark border-r-4 border-b-4
      bg-light text-dark dark:bg-dark dark:border-light dark:text-light
      flex flex-col gap-3"
  >
    <div className="flex flex-wrap gap-2">
      {(tags || []).map((tag) => (
        <span key={tag} className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary dark:bg-primaryDark/10 dark:text-primaryDark">
          {tag}
        </span>
      ))}
    </div>
    <Link href={`/blog/${slug?.current || slug}`} className="text-2xl font-bold hover:underline md:text-xl xs:text-lg">
      {title}
    </Link>
    {excerpt && <p className="text-dark/70 dark:text-light/70 text-sm leading-relaxed">{excerpt}</p>}
    <div className="flex items-center justify-between mt-2">
      <time dateTime={publishedAt} className="text-xs text-dark/50 dark:text-light/50">
        {formatDate(publishedAt)}
      </time>
      <Link href={`/blog/${slug?.current || slug}`} className="text-sm font-semibold text-primary dark:text-primaryDark hover:underline">
        Read →
      </Link>
    </div>
  </motion.article>
);

export async function getStaticProps() {
  let posts = [];
  try {
    posts = await getAllPosts();
  } catch {
    // No Sanity project configured yet — show empty state
  }
  return { props: { posts: posts || [] }, revalidate: 60 };
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
        <meta property="og:url" content="https://liamkarlsson.com/blog" />
        <meta property="og:image" content="https://liamkarlsson.com/images/profile/liam2.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://liamkarlsson.com/blog" />
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

          {posts.length === 0 ? (
            <div className="w-full text-center py-24 text-dark/50 dark:text-light/50">
              <p className="text-xl font-medium">No posts yet — check back soon.</p>
              <p className="text-sm mt-2">Blog posts are managed via Sanity CMS at <span className="font-mono">/studio</span>.</p>
            </div>
          ) : (
            <div className="flex flex-col w-full">
              {posts.map((post) => (
                <PostCard key={post._id} {...post} />
              ))}
            </div>
          )}

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
