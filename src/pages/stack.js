import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

const stack = [
  {
    category: "Code",
    items: [
      { name: "VS Code", desc: "Main editor. Every day.", emoji: "🖥️" },
      { name: "Next.js", desc: "My go-to framework for everything web.", emoji: "▲" },
      { name: "Tailwind CSS", desc: "Utility-first. Never going back.", emoji: "🎨" },
      { name: "GitHub", desc: "Version control and portfolio.", emoji: "🐙" },
      { name: "Vercel", desc: "Deploy in seconds.", emoji: "🚀" },
    ],
  },
  {
    category: "AI Tools",
    items: [
      { name: "Claude", desc: "Best coding assistant I've used.", emoji: "🤖" },
      { name: "ChatGPT", desc: "Research, drafts, brainstorming.", emoji: "💬" },
      { name: "Perplexity", desc: "My search engine replacement.", emoji: "🔍" },
      { name: "Rankad.ai", desc: "My own — AEO & AI search visibility.", emoji: "📈" },
    ],
  },
  {
    category: "Productivity",
    items: [
      { name: "Notion", desc: "All docs, notes, roadmaps.", emoji: "📝" },
      { name: "Linear", desc: "Issue tracking for Rankad.ai.", emoji: "📋" },
      { name: "Figma", desc: "Design and prototyping.", emoji: "🎭" },
      { name: "Arc Browser", desc: "Best browser. Not even close.", emoji: "🌐" },
    ],
  },
  {
    category: "Gear",
    items: [
      { name: "MacBook Pro M3", desc: "Main machine.", emoji: "💻" },
      { name: "iPhone 15 Pro", desc: "Always connected.", emoji: "📱" },
      { name: "AirPods Pro", desc: "Focus mode essential.", emoji: "🎧" },
    ],
  },
  {
    category: "Business",
    items: [
      { name: "Stripe", desc: "Payments for LK Innovations.", emoji: "💳" },
      { name: "Fortnox", desc: "Swedish accounting.", emoji: "🧾" },
      { name: "Sanity", desc: "CMS for this site.", emoji: "📦" },
    ],
  },
];

const StackItem = ({ name, desc, emoji, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
    viewport={{ once: true }}
    className="flex items-start gap-3 p-4 rounded-xl border border-solid border-dark/10 dark:border-light/10
      hover:border-primary dark:hover:border-primaryDark transition-colors bg-light dark:bg-dark"
  >
    <span className="text-2xl">{emoji}</span>
    <div>
      <p className="font-semibold text-sm text-dark dark:text-light">{name}</p>
      <p className="text-xs text-dark/50 dark:text-light/50 mt-0.5">{desc}</p>
    </div>
  </motion.div>
);

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://liamkarlsson.com" },
    { "@type": "ListItem", position: 2, name: "Stack", item: "https://liamkarlsson.com/stack" },
  ],
};

export async function getStaticProps() {
  return { props: {} };
}

export default function Stack() {
  return (
    <>
      <Head>
        <title>My Stack – Liam Karlsson</title>
        <meta name="description" content="The tools, apps, and gear Liam Karlsson uses daily to build Rankad.ai and LK Innovations." />
        <meta property="og:title" content="My Stack – Liam Karlsson" />
        <meta property="og:url" content="https://liamkarlsson.com/stack" />
        <link rel="canonical" href="https://liamkarlsson.com/stack" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      </Head>

      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text="My Stack"
            className="!text-8xl !leading-tight mb-4 lg:!text-7xl sm:!text-6xl xs:!text-4xl"
          />
          <p className="text-center text-dark/75 dark:text-light/75 text-lg mb-16 max-w-2xl mx-auto sm:text-base sm:mb-8">
            Tools, apps, and gear I use every day to build, ship, and grow.
          </p>

          <div className="flex flex-col gap-12 w-full">
            {stack.map((section) => (
              <div key={section.category} data-egg="stack-category">
                <h2 className="text-xs font-bold uppercase tracking-widest text-dark/40 dark:text-light/40 mb-4">
                  {section.category}
                </h2>
                <div className="grid grid-cols-3 gap-3 lg:grid-cols-2 sm:grid-cols-1">
                  {section.items.map((item, i) => (
                    <StackItem key={item.name} {...item} index={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <nav className="mt-16 flex flex-wrap gap-4 justify-center" aria-label="Explore more">
            <Link href="/" className="inline-block rounded-lg border-2 border-solid bg-dark px-4 py-2 font-semibold text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light">Home</Link>
            <Link href="/about" className="inline-block rounded-lg border-2 border-solid border-dark px-4 py-2 font-semibold text-dark hover:bg-dark hover:text-light dark:border-light dark:text-light dark:hover:bg-light dark:hover:text-dark">About</Link>
            <Link href="/projects" className="inline-block rounded-lg border-2 border-solid border-dark px-4 py-2 font-semibold text-dark hover:bg-dark hover:text-light dark:border-light dark:text-light dark:hover:bg-light dark:hover:text-dark">Projects</Link>
            <Link href="/blog" className="inline-block rounded-lg border-2 border-solid border-dark px-4 py-2 font-semibold text-dark hover:bg-dark hover:text-light dark:border-light dark:text-light dark:hover:bg-light dark:hover:text-dark">Blog</Link>
          </nav>
        </Layout>
      </main>
    </>
  );
}
