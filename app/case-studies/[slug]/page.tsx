import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AnimateIn from "@/components/AnimateIn";
import { caseStudies, getCaseStudyBySlug } from "../data";

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const cs = getCaseStudyBySlug(params.slug);
  if (!cs) return {};
  return {
    title: `${cs.title} | Case Studies — Zinoit`,
    description: cs.summary,
  };
}

const Check = () => (
  <svg className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

const ArrowRight = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const cs = getCaseStudyBySlug(params.slug);
  if (!cs) notFound();

  const currentIdx = caseStudies.findIndex((c) => c.slug === cs.slug);
  const prev = currentIdx > 0 ? caseStudies[currentIdx - 1] : null;
  const next = currentIdx < caseStudies.length - 1 ? caseStudies[currentIdx + 1] : null;

  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative bg-brand-navy overflow-hidden pt-16 pb-14">
        <div className="absolute inset-0 bg-crosshatch-dark pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-brand-green/8 rounded-full blur-3xl pointer-events-none -translate-y-1/4 translate-x-1/4" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-8">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/case-studies" className="hover:text-white/70 transition-colors">Case Studies</Link>
            <span>/</span>
            <span className="text-white/60">Case Study {cs.number}</span>
          </nav>

          {/* Disclaimer badge */}
          <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-[11px] font-semibold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full mb-6">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Representative Campaign Scenario
          </div>

          <div className="grid lg:grid-cols-[1fr_300px] gap-10 items-start">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="chip">{cs.industry}</span>
                <span className="text-xs font-medium text-white/50 bg-white/5 px-3 py-1 rounded-full">{cs.targetMarket}</span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                {cs.title}
              </h1>
              <p className="mt-4 text-white/60 text-lg leading-relaxed max-w-2xl">{cs.summary}</p>
            </div>

            {/* Meta card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/30 mb-1">Campaign Type</p>
                <p className="text-sm text-white/80 font-medium leading-snug">{cs.campaign}</p>
              </div>
              <div className="border-t border-white/10" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/30 mb-1">Target Market</p>
                <p className="text-sm text-white/80 font-medium">{cs.targetMarket}</p>
              </div>
              <div className="border-t border-white/10" />
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/30 mb-1">Industry</p>
                <p className="text-sm text-white/80 font-medium">{cs.industry}</p>
              </div>
              <div className="border-t border-white/10" />
              <Link href="/book-call" className="btn-primary text-xs py-2.5 px-4 w-full justify-center mt-2">
                Discuss a similar program <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Challenge ── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn animation="fade-up">
            <div className="grid lg:grid-cols-[200px_1fr] gap-10 items-start">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">01</span>
                <h2 className="font-display text-2xl font-bold text-brand-navy mt-1">The Challenge</h2>
                <div className="w-8 h-0.5 bg-brand-green rounded-full mt-3" />
              </div>
              <div className="space-y-4">
                {cs.challenge.map((para, i) => (
                  <p key={i} className="text-slate-600 leading-relaxed">{para}</p>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Audience ── */}
      <section className="bg-brand-gray-soft py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn animation="fade-up">
            <div className="grid lg:grid-cols-[200px_1fr] gap-10 items-start">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">02</span>
                <h2 className="font-display text-2xl font-bold text-brand-navy mt-1">Audience</h2>
                <div className="w-8 h-0.5 bg-brand-green rounded-full mt-3" />
              </div>
              <div>
                <p className="text-slate-600 leading-relaxed mb-8">{cs.audienceIntro}</p>
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-4">Target Personas</p>
                    <ul className="space-y-2.5">
                      {cs.personas.map((p) => (
                        <li key={p} className="flex items-start gap-3 text-sm text-slate-700">
                          <div className="w-5 h-5 rounded-full bg-brand-green-xlight border border-brand-green-light flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-2.5 h-2.5 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400 mb-4">Segmentation Criteria</p>
                    <ul className="space-y-2.5">
                      {cs.segmentation.map((s) => (
                        <li key={s} className="flex items-start gap-3 text-sm text-slate-700">
                          <Check />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Strategy ── */}
      <section className="bg-brand-navy py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-crosshatch-dark pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn animation="fade-up">
            <div className="grid lg:grid-cols-[200px_1fr] gap-10 items-start">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/25">03</span>
                <h2 className="font-display text-2xl font-bold text-white mt-1">Strategy</h2>
                <div className="w-8 h-0.5 bg-brand-green rounded-full mt-3" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-green-mid mb-6">Zinoit&apos;s Approach</p>
                <div className="space-y-5">
                  {cs.strategy.map((point, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-green/20 border border-brand-green/30 flex items-center justify-center mt-0.5">
                        <span className="text-[11px] font-bold text-brand-green-mid">{i + 1}</span>
                      </div>
                      <p className="text-white/70 leading-relaxed text-sm">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Execution ── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn animation="fade-up">
            <div className="grid lg:grid-cols-[200px_1fr] gap-10 items-start">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">04</span>
                <h2 className="font-display text-2xl font-bold text-brand-navy mt-1">Execution</h2>
                <div className="w-8 h-0.5 bg-brand-green rounded-full mt-3" />
              </div>
              <ul className="space-y-4">
                {cs.execution.map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-brand-green-xlight border border-brand-green-light flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm">{step}</p>
                  </li>
                ))}
              </ul>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Results ── */}
      <section className="bg-green-gradient py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn animation="fade-up">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">05</span>
              <h2 className="font-display text-2xl font-bold text-white mt-1">
                Representative Campaign Outcome
              </h2>
              <div className="inline-flex items-center gap-2 mt-3 bg-white/10 border border-white/15 text-white/60 text-[11px] font-semibold uppercase tracking-[0.12em] px-3 py-1 rounded-full">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Illustrative of program design, not verified historical results
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {cs.results.map((result, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 text-center hover:bg-white/15 transition-colors duration-200">
                  <p className="font-display font-extrabold text-3xl md:text-4xl text-white leading-none mb-2">
                    {result.value}
                  </p>
                  <p className="text-white/65 text-sm leading-snug">{result.label}</p>
                  {result.description && (
                    <p className="text-white/40 text-[11px] mt-2 leading-snug">{result.description}</p>
                  )}
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Strategic Impact ── */}
      <section className="bg-brand-gray-soft py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateIn animation="fade-up">
            <div className="grid lg:grid-cols-[200px_1fr] gap-10 items-start">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">06</span>
                <h2 className="font-display text-2xl font-bold text-brand-navy mt-1">Strategic Impact</h2>
                <div className="w-8 h-0.5 bg-brand-green rounded-full mt-3" />
              </div>
              <div className="space-y-5">
                {cs.impact.map((para, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-1 bg-brand-green rounded-full mt-1.5 mb-1.5 min-h-[1rem]" />
                    <p className="text-slate-600 leading-relaxed">{para}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-brand-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-crosshatch-dark pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateIn animation="fade-up">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
              Ready to Build Your Next Demand Generation Program?
            </h2>
            <p className="mt-4 text-white/60 text-lg leading-relaxed">
              Let&apos;s discuss your audience, ICP, campaign objectives, and pipeline goals.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/book-call" className="btn-primary text-sm">
                Book a Strategy Call <ArrowRight />
              </Link>
              <Link href="/contact" className="btn-ghost-white text-sm">
                Send us a brief
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── Prev / Next navigation ── */}
      {(prev || next) && (
        <section className="bg-white border-t border-slate-100 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-6">
              {prev ? (
                <Link href={`/case-studies/${prev.slug}`} className="group flex items-center gap-3 text-sm text-slate-500 hover:text-brand-green transition-colors">
                  <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                  <span>
                    <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-slate-300 mb-0.5">Previous</span>
                    {prev.title}
                  </span>
                </Link>
              ) : <div />}

              <Link href="/case-studies" className="text-xs font-semibold text-slate-400 hover:text-brand-green transition-colors uppercase tracking-[0.12em]">
                All Case Studies
              </Link>

              {next ? (
                <Link href={`/case-studies/${next.slug}`} className="group flex items-center gap-3 text-sm text-slate-500 hover:text-brand-green transition-colors text-right">
                  <span>
                    <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-slate-300 mb-0.5">Next</span>
                    {next.title}
                  </span>
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              ) : <div />}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
