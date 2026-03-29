import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Link from "next/link";

const slug = "what-is-aeo";
const title = "What Is AEO? Answer Engine Optimization Explained";
const description =
  "Answer Engine Optimization (AEO) is the practice of structuring your content so AI systems like ChatGPT, Perplexity, and Google's AI Overviews cite you as the answer. Here's how it works and why it matters.";
const publishedAt = "2025-11-14";

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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is AEO (Answer Engine Optimization)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AEO stands for Answer Engine Optimization. It is the practice of structuring your content so that AI-powered answer engines — such as ChatGPT, Perplexity, Google AI Overviews, and Gemini — cite your brand or content as the authoritative answer to a user's question.",
      },
    },
    {
      "@type": "Question",
      name: "How is AEO different from SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traditional SEO optimizes for search engine rankings — blue link results in Google. AEO optimizes for AI-generated answers — the citations and summaries that AI tools surface. AEO focuses on being the cited source rather than the highest-ranked link.",
      },
    },
    {
      "@type": "Question",
      name: "Why does AEO matter for brands in 2025?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI-powered search is now responsible for a growing share of informational queries. If your brand is not cited by ChatGPT, Perplexity, or Google's AI Overviews, you are invisible in the conversations that matter most. AEO ensures your brand appears as the trusted answer.",
      },
    },
    {
      "@type": "Question",
      name: "How can I improve my AEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Key AEO tactics include: writing clear Q&A content, using structured data (FAQ schema, HowTo schema), building authoritative backlinks, ensuring your content is crawlable by AI bots (GPTBot, ClaudeBot, PerplexityBot), and creating content that directly answers specific questions your target audience asks AI tools.",
      },
    },
  ],
};

export default function WhatIsAEO() {
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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
            {["AEO", "AI Search", "SEO"].map((tag) => (
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
            <time dateTime={publishedAt}>14 November 2025</time>
          </div>

          <div className="prose-custom text-dark dark:text-light space-y-6 leading-relaxed">
            <p className="text-xl text-dark/80 dark:text-light/80 font-medium leading-relaxed">
              The way people find information is changing. Millions of queries that used to end at a Google results page now end inside ChatGPT, Perplexity, or Google&apos;s AI Overviews &mdash; and those AI systems cite specific sources. If your brand is not one of them, you have a visibility problem.
            </p>

            <h2 className="text-3xl font-bold mt-10 mb-4">What is AEO?</h2>
            <p>
              <strong>Answer Engine Optimization (AEO)</strong> is the discipline of structuring and distributing your content so that AI-powered answer engines — including ChatGPT, Perplexity, Google AI Overviews, and Gemini — surface your brand as the authoritative answer when users ask relevant questions.
            </p>
            <p>
              Think of it as the next evolution of SEO. Where traditional SEO targets rank position on a search results page, AEO targets citation by an AI system. The intent is the same — be visible when someone searches — but the medium is different.
            </p>

            <h2 className="text-3xl font-bold mt-10 mb-4">How is AEO different from traditional SEO?</h2>
            <p>
              Traditional SEO is about ranking. You optimise title tags, build backlinks, improve page speed, and climb toward position one. The user still sees a list of links and decides which to click.
            </p>
            <p>
              AEO is about <em>being the answer</em>. When someone asks an AI tool &ldquo;who is the best AI search optimization platform?&rdquo;, the AI does not show ten links. It synthesises an answer and &mdash; if your content is structured correctly &mdash; it names you.
            </p>
            <p>
              The key differences:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-dark/80 dark:text-light/80">
              <li><strong>Format:</strong> AEO requires clear, direct prose that directly answers questions — not keyword-stuffed landing pages.</li>
              <li><strong>Structure:</strong> FAQ schema, HowTo schema, and clear heading hierarchies signal to AI what your content answers.</li>
              <li><strong>Authority:</strong> AI systems weight authoritative, cited sources. Backlink quality matters more than quantity.</li>
              <li><strong>Crawlability:</strong> You must allow AI crawlers (GPTBot, ClaudeBot, PerplexityBot) access &mdash; many brands block them by accident.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-10 mb-4">Why AEO matters in 2025</h2>
            <p>
              ChatGPT crossed 300 million weekly active users in early 2025. Perplexity is growing at triple-digit rates year-over-year. Google&apos;s AI Overviews now appear at the top of billions of search results. The share of informational queries answered entirely inside an AI interface &mdash; without any click &mdash; is rising every month.
            </p>
            <p>
              Brands that invest in AEO now will compound an advantage that late adopters cannot easily reverse. Being cited by an AI system builds a feedback loop: citation leads to brand mentions, brand mentions build LLM training signal, training signal leads to more citation.
            </p>

            <h2 className="text-3xl font-bold mt-10 mb-4">How to optimise for answer engines</h2>
            <p>
              There is no single tactic. AEO is a stack of practices:
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-dark/80 dark:text-light/80">
              <li>
                <strong>Write conversational, question-answering content.</strong> Structure pages around the exact questions your audience asks AI tools. Use those questions as headings.
              </li>
              <li>
                <strong>Implement structured data.</strong> FAQ schema, Article schema, and HowTo schema tell AI systems what your content answers. This is table-stakes for AEO.
              </li>
              <li>
                <strong>Build authoritative mentions.</strong> Get cited in reputable publications, industry reports, and expert roundups. AI systems treat third-party citations as trust signals.
              </li>
              <li>
                <strong>Allow AI crawlers.</strong> Check your robots.txt. If GPTBot or ClaudeBot is blocked, fix it. Blocked crawlers cannot index your content.
              </li>
              <li>
                <strong>Create a concise brand description.</strong> Every AI query about your brand is answered from data scraped across the web. Make your About page, LinkedIn, and press coverage consistent and clear.
              </li>
              <li>
                <strong>Monitor AI citations.</strong> Regularly query ChatGPT, Perplexity, and Gemini with the questions your customers ask. Audit which competitors are cited and why.
              </li>
            </ol>

            <h2 className="text-3xl font-bold mt-10 mb-4">The automation opportunity</h2>
            <p>
              Manual AEO monitoring is slow. Checking every relevant AI query by hand does not scale. The emerging category of autonomous AEO platforms does this automatically — identifying citation gaps, generating optimised content, and tracking brand mentions across AI surfaces.
            </p>
            <p>
              Tools in this space sit at the intersection of content marketing, technical SEO, and AI observability. The brands that adopt them earliest will have the clearest picture of where they stand in the AI-mediated information ecosystem.
            </p>

            <h2 className="text-3xl font-bold mt-10 mb-4">The bottom line</h2>
            <p>
              AEO is not replacing SEO — it is extending it into a new medium. The fundamentals remain: be authoritative, be clear, be structured. What changes is the destination. Your content is no longer competing for position one on a results page. It is competing to be the answer an AI gives.
            </p>
            <p>
              Start with your highest-intent questions. Structure the answers clearly. Implement schema. Let AI crawlers in. Then measure — not clicks, but citations.
            </p>
          </div>

          {/* Author CTA */}
          <div className="mt-16 p-6 rounded-xl border border-solid border-dark/20 dark:border-light/20 bg-light dark:bg-dark flex flex-col gap-3">
            <p className="text-sm font-bold text-dark dark:text-light">Written by Liam Karlsson</p>
            <p className="text-sm text-dark/60 dark:text-light/60">
              Co-founder of Rankad.ai. Liam works with brands looking to stay visible as AI reshapes search. Based in Gothenburg and San Francisco.
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
                href="/blog/how-to-get-cited-by-chatgpt"
                className="p-4 rounded-xl border border-dark/10 dark:border-light/10 hover:border-dark/30 dark:hover:border-light/30 transition-colors"
              >
                <p className="font-semibold text-dark dark:text-light">How to Get Your Brand Cited by ChatGPT and Perplexity →</p>
                <p className="text-sm text-dark/50 dark:text-light/50 mt-1">A practical guide to AI citation strategy.</p>
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
