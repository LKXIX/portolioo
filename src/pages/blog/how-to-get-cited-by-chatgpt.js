import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Link from "next/link";

const slug = "how-to-get-cited-by-chatgpt";
const title = "How to Get Your Brand Cited by ChatGPT and Perplexity";
const description =
  "A practical, no-fluff guide to getting your brand cited by ChatGPT, Perplexity, and Google AI Overviews. Covers content structure, schema markup, crawler access, and brand signal building.";
const publishedAt = "2025-12-03";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  datePublished: publishedAt,
  dateModified: publishedAt,
  author: { "@type": "Person", name: "Liam Karlsson", url: "https://liamkarlsson.se" },
  publisher: { "@type": "Person", name: "Liam Karlsson", url: "https://liamkarlsson.se" },
  url: `https://liamkarlsson.se/blog/${slug}`,
  mainEntityOfPage: { "@type": "WebPage", "@id": `https://liamkarlsson.se/blog/${slug}` },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://liamkarlsson.se" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://liamkarlsson.se/blog" },
    { "@type": "ListItem", position: 3, name: title, item: `https://liamkarlsson.se/blog/${slug}` },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Get Your Brand Cited by ChatGPT and Perplexity",
  description: "Steps to optimise your brand for AI citation in ChatGPT, Perplexity, and Google AI Overviews.",
  step: [
    { "@type": "HowToStep", name: "Audit your AI crawler access", text: "Check your robots.txt to ensure GPTBot, ClaudeBot, and PerplexityBot are not blocked. If they are, remove the disallow rules." },
    { "@type": "HowToStep", name: "Write direct Q&A content", text: "Create pages that directly answer the questions your audience asks AI tools. Use those questions as H2/H3 headings." },
    { "@type": "HowToStep", name: "Implement structured data", text: "Add FAQ schema, Article schema, and HowTo schema to your key pages. This signals to AI what your content answers." },
    { "@type": "HowToStep", name: "Build brand signals", text: "Get your brand mentioned in authoritative publications, Wikipedia (if eligible), and industry reports. AI systems weight third-party brand mentions heavily." },
    { "@type": "HowToStep", name: "Monitor citations", text: "Regularly query ChatGPT and Perplexity with your target questions. Track which competitors appear and what content they cite." },
  ],
};

export default function HowToGetCitedByChatGPT() {
  return (
    <>
      <Head>
        <title>{title} – Liam Karlsson</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://liamkarlsson.se/blog/${slug}`} />
        <meta property="og:image" content="https://liamkarlsson.se/images/profile/liam2.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href={`https://liamkarlsson.se/blog/${slug}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      </Head>

      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden">
        <Layout className="pt-16 max-w-3xl">

          <nav className="text-sm text-dark/50 dark:text-light/50 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:underline">Home</Link>
            {" / "}
            <Link href="/blog" className="hover:underline">Blog</Link>
            {" / "}
            <span className="text-dark dark:text-light">{title}</span>
          </nav>

          <div className="flex flex-wrap gap-2 mb-4">
            {["AEO", "ChatGPT", "Perplexity", "AI Citations"].map((tag) => (
              <span key={tag} className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary dark:bg-primaryDark/10 dark:text-primaryDark">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-5xl font-bold text-dark dark:text-light leading-tight mb-4 lg:text-4xl sm:text-3xl">
            {title}
          </h1>

          <div className="flex items-center gap-3 text-sm text-dark/50 dark:text-light/50 mb-10">
            <span>Liam Karlsson</span>
            <span>·</span>
            <time dateTime={publishedAt}>3 December 2025</time>
          </div>

          <div className="prose-custom text-dark dark:text-light space-y-6 leading-relaxed">
            <p className="text-xl text-dark/80 dark:text-light/80 font-medium leading-relaxed">
              When someone asks ChatGPT &ldquo;what is the best tool for X?&rdquo; &mdash; your brand either appears or it does not. There is no position two. This guide covers exactly what moves the needle.
            </p>

            <h2 className="text-3xl font-bold mt-10 mb-4">Step 1: Audit your AI crawler access</h2>
            <p>
              Before anything else, check whether AI crawlers can access your site. Open your <code className="bg-dark/10 dark:bg-light/10 rounded px-1.5 py-0.5 font-mono text-sm">robots.txt</code> and look for disallow rules targeting:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-dark/80 dark:text-light/80">
              <li><code className="font-mono text-sm">GPTBot</code> &mdash; OpenAI&apos;s crawler</li>
              <li><code className="font-mono text-sm">ClaudeBot</code> &mdash; Anthropic&apos;s crawler</li>
              <li><code className="font-mono text-sm">PerplexityBot</code> &mdash; Perplexity&apos;s crawler</li>
              <li><code className="font-mono text-sm">GoogleOther</code> &mdash; Used for AI Overviews training</li>
            </ul>
            <p>
              If any of these are blocked, remove the rules. A brand that AI systems cannot crawl is a brand that does not exist in their context window.
            </p>

            <h2 className="text-3xl font-bold mt-10 mb-4">Step 2: Create content that directly answers questions</h2>
            <p>
              AI systems are retrieval machines. They look for content that precisely matches a query&apos;s intent. That means your content needs to be structured around questions &mdash; not just keywords.
            </p>
            <p>
              A practical approach:
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-dark/80 dark:text-light/80">
              <li>List the top 20 questions your target audience would ask an AI about your category.</li>
              <li>For each question, write a page or section that answers it directly in the first paragraph — then elaborates below.</li>
              <li>Use the question as the H1 or H2 heading. This signals intent to both search engines and AI retrieval systems.</li>
            </ol>
            <p>
              Avoid long preambles. AI systems pull from content that gets to the answer fast.
            </p>

            <h2 className="text-3xl font-bold mt-10 mb-4">Step 3: Implement structured data</h2>
            <p>
              Schema markup is a direct signal to AI systems about what your content answers. The most valuable types for AEO:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-dark/80 dark:text-light/80">
              <li>
                <strong>FAQ schema</strong> — wrap common questions in <code className="font-mono text-sm">FAQPage</code> markup. This is the single highest-leverage schema for AI citation.
              </li>
              <li>
                <strong>Article schema</strong> — include author, datePublished, and a clear headline on every blog post and editorial piece.
              </li>
              <li>
                <strong>HowTo schema</strong> — for process-oriented content, mark up each step explicitly.
              </li>
              <li>
                <strong>Organization / Person schema</strong> — on your homepage and about page, define your brand clearly. Include name, description, url, and sameAs links to authoritative profiles.
              </li>
            </ul>
            <p>
              Use JSON-LD in your page <code className="font-mono text-sm">&lt;head&gt;</code>. It is the format preferred by all major AI retrieval systems.
            </p>

            <h2 className="text-3xl font-bold mt-10 mb-4">Step 4: Build brand signals across the web</h2>
            <p>
              AI systems synthesise answers from multiple sources. The more authoritative sources that mention and describe your brand consistently, the stronger your signal.
            </p>
            <p>
              Focus on:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-dark/80 dark:text-light/80">
              <li><strong>Press coverage</strong> — editorial mentions in industry publications carry significant weight. A single article in a respected outlet outweighs dozens of low-authority links.</li>
              <li><strong>LinkedIn and social profiles</strong> — keep your brand description consistent. AI systems crawl social profiles and use them as reference data.</li>
              <li><strong>Third-party directories and review platforms</strong> — G2, Trustpilot, ProductHunt, Crunchbase. These appear in AI-scraped datasets and reinforce brand legitimacy.</li>
              <li><strong>Expert roundups and lists</strong> &mdash; being named in &ldquo;top X tools for Y&rdquo; articles directly feeds into AI category associations.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-10 mb-4">Step 5: Monitor and measure</h2>
            <p>
              You cannot optimise what you do not measure. AI citation monitoring is still an emerging practice — most analytics platforms do not track it — but you can do it manually or with specialised tools.
            </p>
            <p>
              Manual approach: create a list of your 20 most important category queries. Once a week, ask ChatGPT, Perplexity, and Gemini each of them. Log whether your brand appears, what position it appears in, and which competitors are cited instead.
            </p>
            <p>
              Automated approach: platforms built for AI search visibility monitoring can run these queries at scale, track mention share over time, and flag when you are displaced by a competitor. This is the same problem that platforms working on autonomous AEO solve — running citations checks continuously so you do not have to.
            </p>

            <h2 className="text-3xl font-bold mt-10 mb-4">What not to do</h2>
            <ul className="list-disc pl-6 space-y-2 text-dark/80 dark:text-light/80">
              <li>Do not stuff your FAQ pages with low-quality questions. AI systems detect thin content.</li>
              <li>Do not rely solely on your own website. Third-party brand signals matter as much as on-site optimisation.</li>
              <li>Do not block AI crawlers &ldquo;for privacy reasons&rdquo; without understanding the trade-off. You are trading AI visibility for marginal data protection.</li>
              <li>Do not assume your SEO ranking translates to AI citation. A page at position one in Google is not automatically cited by ChatGPT. They are separate systems.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-10 mb-4">The compounding effect</h2>
            <p>
              AI citation is compounding. Once an AI system associates your brand with a category, that association influences future training data, which reinforces future citations. The brands that establish strong AI presence in 2025 will have a structural advantage by 2026 and beyond.
            </p>
            <p>
              Start with what you can control: your robots.txt, your schema, and your on-page content structure. Then work outward to build the brand signals that AI systems use to calibrate trust.
            </p>
          </div>

          {/* Author CTA */}
          <div className="mt-16 p-6 rounded-xl border border-solid border-dark/20 dark:border-light/20 bg-light dark:bg-dark flex flex-col gap-3">
            <p className="text-sm font-bold text-dark dark:text-light">Written by Liam Karlsson</p>
            <p className="text-sm text-dark/60 dark:text-light/60">
              Co-founder of Rankad.ai. Liam works with brands on AI search visibility. Based in Gothenburg and San Francisco.
            </p>
            <Link
              href="mailto:hi@liamkarlsson.se"
              className="self-start text-sm font-semibold text-primary dark:text-primaryDark underline underline-offset-2"
            >
              Get in touch →
            </Link>
          </div>

          {/* Related posts */}
          <div className="mt-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-dark/40 dark:text-light/40 mb-4">Keep reading</p>
            <div className="flex flex-col gap-3">
              <Link
                href="/blog/what-is-aeo"
                className="p-4 rounded-xl border border-dark/10 dark:border-light/10 hover:border-dark/30 dark:hover:border-light/30 transition-colors"
              >
                <p className="font-semibold text-dark dark:text-light">What Is AEO? Answer Engine Optimization Explained →</p>
                <p className="text-sm text-dark/50 dark:text-light/50 mt-1">The complete introduction to AEO and how it differs from SEO.</p>
              </Link>
            </div>
          </div>

          <nav className="mt-12 flex flex-wrap gap-4 justify-center">
            <Link href="/blog" className="inline-block rounded-lg border-2 border-solid bg-dark px-4 py-2 font-semibold text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light">
              ← All posts
            </Link>
          </nav>

        </Layout>
      </main>
    </>
  );
}
