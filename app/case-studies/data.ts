export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  number: string;
  industry: string;
  title: string;
  summary: string;
  campaign: string;
  targetMarket: string;
  cardMetrics: CaseStudyMetric[];
  challenge: string[];
  audienceIntro: string;
  personas: string[];
  segmentation: string[];
  strategy: string[];
  execution: string[];
  results: (CaseStudyMetric & { description?: string })[];
  impact: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "cybersecurity-enterprise-abm",
    number: "01",
    industry: "Cybersecurity",
    title: "Breaking Into Enterprise Accounts for a Cybersecurity Platform",
    summary:
      "An ABM-led demand generation program targeting security decision-makers inside enterprise organizations researching cloud security and zero-trust architecture.",
    campaign: "ABM + Content Syndication + Intent-Based Demand Generation",
    targetMarket: "United States",
    cardMetrics: [
      { value: "1,800+", label: "Target contacts engaged" },
      { value: "200+", label: "Priority accounts with multi-contact engagement" },
      { value: "30%", label: "Improvement over broad targeting" },
    ],
    challenge: [
      "A cybersecurity software provider wanted to increase engagement with enterprise organizations while reaching security decision-makers who were actively researching cloud security, threat detection, zero-trust architecture, and data protection.",
      "Traditional broad-based campaigns were generating engagement, but the marketing team needed a more focused approach capable of identifying relevant buying committees inside priority accounts.",
    ],
    audienceIntro:
      "The program was structured around the security decision-making hierarchy — from strategic owners to technical evaluators — across enterprise organizations in the target ICP.",
    personas: [
      "Chief Information Security Officer (CISO)",
      "Chief Information Officer (CIO)",
      "VP / Director of Information Security",
      "Security Architect",
      "Cloud Security Leader",
      "IT Infrastructure Leader",
    ],
    segmentation: [
      "Company size and revenue band",
      "Industry vertical and regulatory environment",
      "Geographic focus within the US",
      "Technology environment and existing security stack",
      "Behavioral intent signals related to cybersecurity research",
    ],
    strategy: [
      "Developed a multi-layered account-based demand generation strategy centered on the client's ICP.",
      "Accounts were segmented according to company size, industry, geography, technology environment, and relevant intent signals before any outreach was designed.",
      "Content syndication was combined with persona-level targeting to ensure relevant content reached the right roles within each target organization.",
      "Multi-touch nurture sequences were mapped to topic interest areas — cloud security, zero-trust, threat detection, and data protection — rather than sending generic campaigns to all accounts.",
    ],
    execution: [
      "Built a tiered target account list prioritized by firmographic fit and intent signal strength.",
      "Mapped buying-committee personas across all priority accounts, ensuring at least three relevant stakeholders per organization were identified.",
      "Deployed content assets aligned to active research topics showing elevated signal volume across the target account universe.",
      "Analyzed account-level engagement data to identify organizations demonstrating multi-stakeholder activity, and flagged these for prioritized sales attention.",
    ],
    results: [
      { value: "1,800+", label: "Target contacts engaged" },
      { value: "650+", label: "Qualified content engagements" },
      { value: "200+", label: "Priority accounts showing multi-contact engagement" },
      { value: "30%", label: "Improvement in target-account engagement vs. broad targeting", description: "Compared with previous broad-based campaign approach" },
    ],
    impact: [
      "Rather than treating every response as an equal lead, the program helped prioritize accounts demonstrating engagement across multiple stakeholders and topics.",
      "Sales teams received better context for follow-up — knowing not just that an individual had engaged, but which organizations were showing coordinated interest across their security leadership.",
      "The account-level view shifted the marketing-to-sales handoff from individual lead records to buying-committee intelligence.",
    ],
  },
  {
    slug: "cloud-data-transformation",
    number: "02",
    industry: "Cloud / Enterprise Technology",
    title: "Building Pipeline for a Cloud & Data Transformation Provider",
    summary:
      "A lead generation and content syndication program reaching senior technology decision-makers at mid-market and enterprise organizations considering cloud modernization.",
    campaign: "B2B Lead Generation + Content Syndication",
    targetMarket: "United States & Canada",
    cardMetrics: [
      { value: "2,400+", label: "Targeted engagements" },
      { value: "900+", label: "Marketing-qualified contacts" },
      { value: "400+", label: "Target accounts reached" },
    ],
    challenge: [
      "A cloud transformation provider needed to reach senior technology decision-makers at mid-market and enterprise organizations considering modernization initiatives.",
      "The primary challenge was generating sufficient reach without sacrificing ICP quality — the program needed volume while maintaining strict controls on seniority, company profile, and technology interest.",
    ],
    audienceIntro:
      "Audience segments were built around the technology leadership roles most likely to sponsor or influence cloud modernization initiatives, filtered by organizational profile and stage of digital transformation.",
    personas: [
      "Chief Information Officer (CIO)",
      "Chief Technology Officer (CTO)",
      "VP of Engineering",
      "VP of Cloud Infrastructure",
      "Director of Data",
      "Enterprise Architect",
      "IT Transformation Leader",
    ],
    segmentation: [
      "Firmographic criteria: company size, revenue, and industry vertical",
      "Geographic qualification: US and Canada",
      "Technographic signals: existing infrastructure and cloud maturity indicators",
      "Role-level seniority and organizational function",
      "Content interest alignment: cloud migration, modernization, AI readiness",
    ],
    strategy: [
      "Developed distinct audience segments for each persona tier, recognizing that a CIO and a VP of Engineering respond to different content framing.",
      "Educational assets covering cloud migration, application modernization, data architecture, and AI readiness were mapped to different stages of the buyer journey.",
      "A dual-market approach allowed US and Canadian segments to be tracked independently, with content and messaging localized where relevant.",
      "Qualification criteria were applied consistently to ensure that contacts reaching the marketing-qualified stage met agreed ICP standards.",
    ],
    execution: [
      "Constructed verified, role-qualified contact lists across both US and Canadian target organizations.",
      "Matched educational content assets to buyer journey stage: awareness content for early-stage accounts, more specific technical materials for organizations showing stronger intent.",
      "Deployed multi-channel engagement sequences across email and professional content networks.",
      "Applied progressive qualification criteria at each engagement stage to filter toward marketing-qualified contacts.",
    ],
    results: [
      { value: "2,400+", label: "Targeted engagements" },
      { value: "900+", label: "Marketing-qualified contacts" },
      { value: "400+", label: "Target accounts reached" },
      { value: "Multiple", label: "Personas engaged across priority accounts" },
    ],
    impact: [
      "The campaign created a scalable top-of-funnel audience while maintaining targeting controls around account characteristics, seniority, geography, and technology interests.",
      "The dual-market structure allowed the client to see differences in engagement patterns between US and Canadian audiences and adjust content strategy accordingly.",
      "Multi-persona engagement within individual accounts provided early signals of organizational interest beyond individual lead activity.",
    ],
  },
  {
    slug: "b2b-saas-abm",
    number: "03",
    industry: "Enterprise SaaS",
    title: "Account-Based Demand Generation for a B2B SaaS Company",
    summary:
      "An ABM program structured around 1,500 named accounts, mapping buying-committee personas and coordinating engagement across marketing, operations, IT, finance, and executive leadership.",
    campaign: "Account-Based Marketing (ABM)",
    targetMarket: "North American Mid-Market & Enterprise",
    cardMetrics: [
      { value: "1,500", label: "Named accounts targeted" },
      { value: "500+", label: "Accounts demonstrating engagement" },
      { value: "3–5", label: "Buying personas targeted per priority account" },
    ],
    challenge: [
      "A SaaS provider had identified approximately 1,500 high-value accounts but struggled to create meaningful engagement across the buying committees within those organizations.",
      "Activity was concentrated among a small number of individuals in certain accounts, while the broader buying committee — across marketing, operations, IT, finance, and executive leadership — remained largely unreached.",
    ],
    audienceIntro:
      "Instead of targeting individual leads independently, the campaign was structured around accounts. Personas were mapped according to their potential influence in the buying process, with messaging aligned to each function's concerns.",
    personas: [
      "Marketing Leadership (CMO, VP Marketing)",
      "Operations Leadership (COO, VP Operations)",
      "IT Leadership (CIO, IT Director)",
      "Finance Leadership (CFO, VP Finance)",
      "Executive Leadership (CEO, President)",
      "Product and Strategy roles relevant to the solution category",
    ],
    segmentation: [
      "Revenue band and employee count",
      "Industry vertical and sub-segment",
      "Technology stack composition",
      "Active buying signals and research activity",
      "Tier classification by strategic account value",
    ],
    strategy: [
      "Priority organizations were segmented into tiers based on revenue, employee count, industry, technology stack, buying signals, and strategic account value.",
      "Personas across marketing, operations, IT, finance, and executive leadership were mapped according to their potential influence in the buying process.",
      "Messaging and content were aligned with the concerns of each persona rather than using a single campaign message across all roles.",
      "Campaign measurement was restructured around account-level engagement rather than individual lead counts.",
    ],
    execution: [
      "Built a named account list of 1,500 organizations, tiered by strategic value and ICP fit score.",
      "Identified 3–5 relevant buying-committee personas within each priority account and mapped content to each role's functional concerns.",
      "Deployed coordinated, persona-specific content across the buying committee at each target account.",
      "Aggregated engagement signals at the account level to identify organizations showing meaningful buying-committee activity.",
    ],
    results: [
      { value: "1,500", label: "Named accounts targeted" },
      { value: "500+", label: "Accounts demonstrating engagement" },
      { value: "1,200+", label: "Relevant stakeholders reached" },
      { value: "3–5", label: "Potential buying personas targeted per priority account" },
    ],
    impact: [
      "The approach shifted campaign measurement away from isolated lead activity toward account-level engagement.",
      "Marketing and sales teams could see which organizations — and which stakeholders inside them — were demonstrating meaningful interest, rather than monitoring a list of individual lead records.",
      "Account-level intelligence created a richer handoff between marketing and sales, enabling more informed initial conversations.",
    ],
  },
  {
    slug: "ai-data-appointment-setting",
    number: "04",
    industry: "AI / Data Analytics",
    title: "Generating Qualified Meetings for a Data & AI Solutions Company",
    summary:
      "A lead generation and appointment-setting program that moved beyond contact acquisition to create qualified sales conversations with senior data and AI decision-makers.",
    campaign: "Lead Generation + Appointment Setting",
    targetMarket: "United States",
    cardMetrics: [
      { value: "750+", label: "Decision-makers engaged" },
      { value: "150+", label: "Qualified conversations initiated" },
      { value: "40+", label: "Meeting opportunities generated" },
    ],
    challenge: [
      "An enterprise AI and analytics provider needed conversations with senior decision-makers responsible for data modernization, analytics strategy, AI implementation, and digital transformation.",
      "The objective wasn't simply generating contact records — it was creating opportunities for meaningful sales conversations with individuals who had both the authority and the context to evaluate an enterprise-level solution.",
    ],
    audienceIntro:
      "The ICP was tightly defined around senior roles with direct responsibility for data strategy, AI initiatives, and enterprise transformation — avoiding mid-level contacts who would add qualification overhead without accelerating the sales process.",
    personas: [
      "Chief Data Officer (CDO)",
      "Chief Information Officer (CIO)",
      "Chief Technology Officer (CTO)",
      "VP of Data & Analytics",
      "Head of AI / Machine Learning",
      "Digital Transformation Leader",
    ],
    segmentation: [
      "Enterprise account universe with defined revenue and employee thresholds",
      "Active data modernization or AI initiative signals",
      "Technology environment and data infrastructure indicators",
      "Geographic targeting within the United States",
      "Seniority and decision-making authority criteria",
    ],
    strategy: [
      "Developed a tightly defined ICP targeting framework focused exclusively on senior roles with data and AI ownership.",
      "Combined audience identification, account research, targeted outreach, and qualification into a single integrated workflow rather than treating these as disconnected activities.",
      "Prospects were qualified against agreed criteria before being progressed toward a sales conversation — filtering out contacts who met the persona profile but lacked the organizational context to advance.",
      "Meeting generation was treated as the primary output metric, with all earlier-funnel activity evaluated based on its contribution to qualified conversations.",
    ],
    execution: [
      "Identified enterprise accounts matching the ICP universe and researched organizational context for each priority target.",
      "Built personalized outreach sequences referencing relevant AI and data priorities for each target's industry and organizational profile.",
      "Applied a qualification layer to distinguish between contacts who expressed interest and those who were genuinely positioned to evaluate the solution.",
      "Coordinated meeting scheduling with the client's sales team to ensure warm, contextualized handoffs for each qualified conversation.",
    ],
    results: [
      { value: "750+", label: "Decision-makers engaged" },
      { value: "150+", label: "Qualified conversations initiated" },
      { value: "40+", label: "Meeting opportunities generated" },
      { value: "Enterprise", label: "Focused account universe throughout" },
    ],
    impact: [
      "The program demonstrated how demand generation and appointment-setting workflows can operate together rather than as disconnected activities.",
      "By integrating qualification into the workflow — rather than handing off all respondents as leads — the program reduced the time sales teams spent on unqualified conversations.",
      "The meeting-first orientation aligned program measurement with the activity that most directly contributed to pipeline creation.",
    ],
  },
  {
    slug: "multi-region-global",
    number: "05",
    industry: "Enterprise Technology",
    title: "Multi-Region Demand Generation for an Enterprise Technology Company",
    summary:
      "A coordinated demand generation program across North America, UK, and Europe — maintaining a consistent global ICP framework while accounting for regional audience and engagement differences.",
    campaign: "Global Content Syndication",
    targetMarket: "North America, UK & Europe",
    cardMetrics: [
      { value: "3", label: "Major geographic regions" },
      { value: "3,500+", label: "Target contacts reached" },
      { value: "1,200+", label: "Qualified engagements" },
    ],
    challenge: [
      "A technology organization wanted to run a coordinated demand generation program across several geographic markets while maintaining consistent targeting and reporting standards.",
      "Regional differences in audience composition and engagement required more than simply replicating the same campaign in each market — the program needed to function as a coherent global effort while remaining sensitive to local dynamics.",
    ],
    audienceIntro:
      "A common global ICP framework was developed first, establishing shared criteria for account selection, role eligibility, and engagement qualification. Region-specific audience segments were then built within that framework to account for differences in market composition and technology maturity.",
    personas: [
      "Chief Technology Officer (CTO)",
      "Chief Information Officer (CIO)",
      "VP of Technology",
      "Director of IT Operations",
      "Enterprise Architect",
      "Head of Digital Transformation",
    ],
    segmentation: [
      "Geographic segmentation by region: North America, UK, and Continental Europe",
      "Industry vertical consistency across all regions",
      "Company size criteria adapted for regional market dynamics",
      "Job function and seniority level",
      "Technology interests and content engagement preferences",
    ],
    strategy: [
      "Developed region-specific audience segments within a common global ICP framework, ensuring comparability across markets while allowing for local adaptation.",
      "Targeting incorporated geography, industry, company size, job function, seniority, technology interests, and content engagement behavior.",
      "Campaign performance was evaluated by region throughout the program, enabling audience allocation and content strategy adjustments based on live engagement data.",
      "Reporting was standardized across regions to give the client a consistent view of program performance regardless of market.",
    ],
    execution: [
      "Built verified audience segments across North American, UK, and European markets within the shared ICP framework.",
      "Deployed content assets consistent in quality and theme while allowing for regional messaging variations where audience research indicated meaningful differences.",
      "Monitored regional engagement patterns independently to identify which content themes and formats performed differently across markets.",
      "Provided ongoing reporting that allowed the client to see both global aggregate performance and regional breakdowns.",
    ],
    results: [
      { value: "3", label: "Major geographic regions coordinated" },
      { value: "3,500+", label: "Target contacts reached" },
      { value: "1,200+", label: "Qualified engagements" },
      { value: "700+", label: "Target organizations represented" },
    ],
    impact: [
      "The campaign model allowed the organization to scale demand generation internationally while retaining visibility into differences in regional audience behavior.",
      "The global framework enabled consistent measurement while preserving the flexibility to respond to regional performance differences throughout the program.",
      "Regional engagement analysis revealed meaningful differences in content preference and topic interest across the three markets — informing the client's broader content strategy.",
    ],
  },
  {
    slug: "intent-data-activation",
    number: "06",
    industry: "Enterprise Software",
    title: "Activating Intent Data for an Enterprise Software Provider",
    summary:
      "An intent-based demand generation program that layered behavioral signals onto firmographic ICP criteria to identify and prioritize accounts demonstrating active research activity.",
    campaign: "Intent-Based Demand Generation",
    targetMarket: "North America",
    cardMetrics: [
      { value: "2,000+", label: "ICP accounts analyzed" },
      { value: "450+", label: "Higher-intent accounts identified" },
      { value: "900+", label: "Relevant stakeholders activated" },
    ],
    challenge: [
      "The marketing organization had a large addressable market but needed a better mechanism for deciding which accounts deserved immediate attention.",
      "Static firmographic targeting alone could identify organizations that fit the ICP, but could not indicate which accounts might currently be researching relevant topics — meaning campaign resources were spread evenly across accounts at very different stages of potential purchase readiness.",
    ],
    audienceIntro:
      "Intent signals were layered onto the existing ICP framework rather than being treated as a standalone data source. The combination of firmographic fit and behavioral signal strength created a dynamic prioritization model that could be updated as intent data evolved.",
    personas: [
      "Chief Information Officer (CIO)",
      "VP of Technology",
      "Director of Enterprise Applications",
      "IT Operations Leader",
      "Digital Transformation Sponsor",
      "Procurement and Technology Evaluation roles",
    ],
    segmentation: [
      "ICP Fit + High Intent: Highest campaign priority — immediate activation",
      "ICP Fit + Moderate Intent: Nurture audience — sustained engagement",
      "ICP Fit + Low / No Intent: Longer-term awareness audience",
      "Intent topic clusters: relevant business and technology research areas",
      "Account-level signal aggregation across multiple stakeholders",
    ],
    strategy: [
      "Layered intent signals onto the client's ICP to identify accounts demonstrating increased research activity around relevant business and technology topics.",
      "Accounts were grouped into priority tiers based on the combination of ICP fit and intent signal strength — allowing campaign resources to be concentrated on organizations most likely to be in an active evaluation.",
      "Campaign content was then mapped to the specific topics showing elevated research activity within each priority tier.",
      "Intent was treated as a prioritization layer rather than a standalone indicator of purchase readiness — recognizing that research activity indicates interest, not certainty.",
    ],
    execution: [
      "Analyzed 2,000+ ICP-fit accounts for intent signal activity across relevant topic clusters.",
      "Segmented accounts into three priority tiers based on ICP fit combined with intent signal strength.",
      "Deployed topic-matched content to the highest-priority accounts, with different cadence and content depth for each tier.",
      "Delivered prioritized account lists to the client's marketing and sales teams with supporting intent topic data for each account.",
    ],
    results: [
      { value: "2,000+", label: "ICP accounts analyzed for intent signals" },
      { value: "450+", label: "Higher-intent accounts identified for priority activation" },
      { value: "900+", label: "Relevant stakeholders activated across priority accounts" },
      { value: "Prioritized", label: "Account lists delivered to marketing and sales" },
    ],
    impact: [
      "Intent signals became an additional prioritization layer rather than being treated as a standalone indicator of purchase readiness.",
      "The tiered model gave marketing and sales teams a more focused universe for immediate activation while maintaining a structured approach to longer-term account development.",
      "Campaign resources were concentrated on the highest-potential accounts, increasing the proportion of engagement coming from organizations demonstrating active buying behavior.",
    ],
  },
  {
    slug: "prospect-reengagement",
    number: "07",
    industry: "Business Technology Services",
    title: "Re-Engaging Dormant B2B Prospects",
    summary:
      "A database segmentation and nurture program that identified re-engagement potential within an existing first-party audience — turning inactive contacts into a new source of qualified demand.",
    campaign: "Lead Nurture & Re-Engagement",
    targetMarket: "United States",
    cardMetrics: [
      { value: "10,000+", label: "Existing records segmented" },
      { value: "800+", label: "Contacts successfully re-engaged" },
      { value: "250+", label: "Higher-engagement contacts identified" },
    ],
    challenge: [
      "A B2B technology organization had accumulated a significant database of contacts from previous campaigns, events, content downloads, and marketing programs.",
      "Many contacts had not engaged recently. The company wanted to determine whether portions of its existing audience could be reactivated before allocating budget toward acquiring entirely new names — recognizing that first-party data, if properly activated, could represent an untapped demand source.",
    ],
    audienceIntro:
      "The existing database was segmented into distinct audiences based on engagement history, persona, industry, and content interest — creating targeted nurture tracks rather than applying a single reactivation campaign to all dormant contacts.",
    personas: [
      "Previously engaged technology decision-makers",
      "Event and webinar attendees from prior campaigns",
      "Content downloaders and asset-engaged contacts",
      "Trial or demo requesters not progressed to pipeline",
      "Conference and trade show contacts",
      "Contacts from expired or closed marketing campaigns",
    ],
    segmentation: [
      "Previous engagement type and recency",
      "Persona and seniority level",
      "Industry vertical and company profile",
      "Content topics and interests from prior interactions",
      "Account-level engagement history",
      "Time since last meaningful activity",
    ],
    strategy: [
      "Segmented the existing database according to previous engagement, persona, industry, account, content interests, and recency of activity.",
      "Contacts were placed into different nurture tracks with educational content aligned to their likely current business priorities — rather than re-sending the same content that hadn't generated engagement previously.",
      "Engagement behavior throughout the nurture program was used to identify audiences worthy of renewed sales or marketing attention.",
      "The program operated as a demand source alongside new-name acquisition, rather than as a replacement for it.",
    ],
    execution: [
      "Processed and cleansed 10,000+ existing records, removing duplicates, undeliverable addresses, and contacts no longer matching the ICP.",
      "Created segmentation taxonomy based on engagement history, persona, and topic interest, then mapped contacts into appropriate nurture tracks.",
      "Deployed track-specific educational content sequences at appropriate cadences for each audience segment.",
      "Monitored engagement signals within each nurture track to identify contacts showing renewed interest and flagged higher-engagement contacts for further qualification.",
    ],
    results: [
      { value: "10,000+", label: "Existing records segmented and analyzed" },
      { value: "3,000+", label: "Contacts placed into targeted nurture streams" },
      { value: "800+", label: "Contacts successfully re-engaged" },
      { value: "250+", label: "Higher-engagement contacts identified for further qualification" },
    ],
    impact: [
      "The strategy demonstrated how existing first-party data can become an additional source of demand rather than remaining an inactive marketing database.",
      "The cost per re-engaged contact was significantly lower than acquiring equivalent new contacts, making database reactivation a favorable complement to new-name acquisition programs.",
      "The segmentation model created a reusable framework for ongoing database management — rather than treating the reactivation as a one-time exercise.",
    ],
  },
  {
    slug: "fintech-buying-committee",
    number: "08",
    industry: "Financial Technology",
    title: "Reaching the Full Buying Committee for a FinTech Solution",
    summary:
      "A buying-committee demand generation program designed to detect meaningful account-level interest across technology, finance, operations, risk, and business leadership personas inside priority financial organizations.",
    campaign: "Buying-Committee Demand Generation",
    targetMarket: "United States",
    cardMetrics: [
      { value: "600+", label: "Priority accounts targeted" },
      { value: "1,500+", label: "Buying-committee contacts engaged" },
      { value: "300+", label: "Accounts with multi-persona engagement" },
    ],
    challenge: [
      "An enterprise FinTech provider faced a common B2B challenge: purchasing decisions involved multiple departments across the organization — technology, finance, operations, risk, and compliance — rather than a single buyer.",
      "Generating a lead from one individual did not necessarily indicate meaningful account-level interest. The existing program was producing individual-level activity that was difficult to translate into a reliable signal of organizational buying intent.",
    ],
    audienceIntro:
      "The buying committee was mapped across five distinct functional areas within priority financial organizations. Campaign design ensured that content and outreach reached relevant stakeholders in each function, creating a multi-dimensional view of account-level engagement.",
    personas: [
      "Technology: CIO, CTO, and enterprise architecture leadership",
      "Finance: CFO and finance transformation roles",
      "Operations: COO and operational leadership",
      "Risk & Compliance: Risk, security, and compliance executives",
      "Business Leadership: Relevant line-of-business executives",
    ],
    segmentation: [
      "Financial services industry verticals: banking, insurance, asset management, fintech",
      "Company size and asset/revenue thresholds",
      "Buying committee composition by functional area",
      "Geographic focus within the United States",
      "Technology environment and integration ecosystem",
    ],
    strategy: [
      "Mapped the likely buying committee across priority financial organizations, identifying stakeholders in technology, finance, operations, risk, and business leadership.",
      "Designed persona-specific content streams so that each committee member received messaging relevant to their functional concerns rather than a generic campaign.",
      "Campaign activity was analyzed at both the contact level and the account level — allowing the program to detect organizations where multiple stakeholders were engaging simultaneously.",
      "Account-level multi-persona engagement was used as the primary signal of meaningful buying-committee activity.",
    ],
    execution: [
      "Identified 600+ priority financial services accounts matching the ICP and mapped buying-committee personas within each organization.",
      "Deployed function-specific content to technology, finance, operations, risk, and business leadership contacts within each account.",
      "Monitored both individual engagement and account-level aggregation to detect organizations where multiple committee members were active.",
      "Built account-level engagement intelligence reports for accounts demonstrating multi-persona activity, providing sales teams with a structured view of organizational interest.",
    ],
    results: [
      { value: "600+", label: "Priority accounts targeted" },
      { value: "1,500+", label: "Buying-committee contacts engaged" },
      { value: "300+", label: "Accounts with engagement from multiple personas" },
      { value: "Account-Level", label: "Engagement intelligence created for each priority organization" },
    ],
    impact: [
      "Instead of defining success as a single lead response, the campaign focused on detecting broader engagement across the potential buying committee.",
      "Accounts showing multi-persona engagement represented a qualitatively different signal than a single contact's response — giving sales teams a more reliable indicator of organizational interest.",
      "The account-level intelligence framework created a reusable model for ongoing buying-committee monitoring that extended beyond the initial campaign period.",
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
