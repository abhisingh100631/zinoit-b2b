import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use — Zinoit",
  description: "Zinoit LLC Terms of Use. Please read these terms carefully before using the Zinoit website.",
};

const toc = [
  { id: "intro", label: "Introduction" },
  { id: "information-communication", label: "Information Communication" },
  { id: "using-services", label: "Using Our Services" },
  { id: "acceptable-use", label: "Acceptable Use" },
  { id: "intellectual-property", label: "Ownership of Content and Intellectual Property Rights" },
  { id: "trademarks", label: "Trademarks" },
  { id: "modifications", label: "Modifications to and Availability of the Website" },
  { id: "termination", label: "Termination of Our Services" },
  { id: "disclaimer", label: "Disclaimer" },
  { id: "liability", label: "Liability" },
  { id: "indemnification", label: "Indemnification" },
  { id: "governing-law", label: "Governing Law; Venue and Jurisdiction" },
  { id: "general", label: "General" },
  { id: "english-language", label: "English Language" },
];

export default function TermsOfUsePage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <div className="bg-brand-navy py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Use</h1>
          <p className="text-slate-400 text-sm">
            Please read these terms carefully before using the Website.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">

        {/* Intro paragraph */}
        <div id="intro" className="prose prose-slate max-w-none mb-10">
          <p className="text-slate-700 leading-relaxed">
            Zinoit is a technology-focused demand generation and marketing agency backed by the expertise of industry specialists, which aims to cater to all the B2B lead generation needs of businesses and help them increase their sales. The following terms and conditions govern your access and use of this website https://www.zinoit.com/ and all information, content, services and functionality available at or through the web portal (&ldquo;Website&rdquo;). This Website is owned and operated by Zinoit LLC, a registered company in the United States (&ldquo;Zinoit&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-5">
            <p className="text-slate-800 font-semibold text-sm">
              PLEASE READ THESE TERMS OF USE CAREFULLY BEFORE USING THE WEBSITE.
            </p>
            <p className="text-slate-700 text-sm mt-2 leading-relaxed">
              By visiting our Website, you engage in our Service and agree to be bound by the following terms and conditions (&ldquo;Terms of Use&rdquo;) and Privacy Policy including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Use apply to all users of the Website, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content (&ldquo;you&rdquo; or &ldquo;Users&rdquo;). If you do not agree with all of these Terms of Use, then you are prohibited from using the Website and Services and you must discontinue use immediately.
            </p>
          </div>
          <p className="text-slate-700 leading-relaxed mt-5">
            The Website and Services are intended for users who are at least 13 years old. If you are under the age of 13, you are not permitted to register for the Website or use the Services without parental permission. However, if you are above the age of 13 yet not meeting the legal age as per your respective country laws, you are also requested to seek parental permission or immediately cease using the Website. By registering for any Services, you represent and warrant that you are eligible to use the Website or have consent from your parent or guardian. We may make changes to these Terms of Use, Website or the Services to meet our users&rsquo; needs and/or for our business priorities at any time. We will never charge you for the app or its services without making it very clear to you exactly what you&rsquo;re paying for. The updated version of these Terms of Use will be indicated by an updated revised date and the updated version and/or the changes in the Services will be effective when posted. You are responsible for visiting this Website and staying informed of all the updates. Your continued use of the Website represents that you have accepted such changes.
          </p>
          <p className="text-slate-700 leading-relaxed mt-4">
            If you have any questions concerning the Terms of Use, please <Link href="/contact" className="text-purple-700 hover:underline">contact us</Link>.
          </p>
          <p className="text-slate-700 leading-relaxed mt-4">
            You are required to provide your accurate personal information including first name and email address at the time of completing the form on our contact page. This will help us in assisting you with your query and also in associating a relationship with us. You will be informed about the important updates of the Services using these details. Apart from the personal information mentioned above, Zinoit shall also access your IP address to understand your preferences on our Website and by displaying Services that may be relevant to you. The personal information of Users shall be processed as per our <Link href="/privacy" className="text-purple-700 hover:underline">Privacy Policy</Link>.
          </p>
        </div>

        {/* Table of Contents */}
        <nav className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-12">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Table of Contents</h2>
          <ol className="space-y-2">
            {toc.map((item, i) => (
              <li key={item.id} className="flex gap-3">
                <span className="text-slate-400 text-sm w-5 shrink-0">{i + 1}.</span>
                <a href={`#${item.id}`} className="text-sm text-purple-700 hover:text-purple-900 hover:underline leading-snug">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Sections */}
        <div className="space-y-14">

          {/* 1 */}
          <section id="information-communication">
            <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              1. Information Communication
            </h2>
            <p className="text-slate-700 leading-relaxed">
              The User consents to receiving marketing emails on their registered email address from time to time which informs the Users of information including but not limited to Service updates and new Services that may be of your interest.
            </p>
          </section>

          {/* 2 */}
          <section id="using-services">
            <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              2. Using Our Services
            </h2>
            <p className="text-slate-700 leading-relaxed">
              You agree that you will not misuse our Services. You should use the Services as being provided to you and must not try to violate any of the procedures. Your account can be analysed by Zinoit at any time.
            </p>
          </section>

          {/* 3 */}
          <section id="acceptable-use">
            <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              3. Acceptable Use
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                a. You may not access or use the Website for any purpose other than that for which we make the Website and our Services available. The Website may not be used in connection with any commercial endeavours except those that are specifically endorsed or approved by us.
              </p>
              <p>b. As a User of this Website, you agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Systematically retrieve data or other content from the Website to compile a database or directory without written permission from us.</li>
                <li>Make any unauthorized use of the Website, including collecting usernames and/or email addresses of other Users to send unsolicited email or creating user accounts under false pretences.</li>
                <li>Use the Website to advertise or sell goods and services.</li>
                <li>Circumvent, disable, or otherwise interfere with security-related features of the Website, including features that prevent or restrict the use or copying of any content or enforce limitations on the use.</li>
                <li>Engage in unauthorized framing of or linking to the Website.</li>
                <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
                <li>Make improper use of our support services, or submit false reports of abuse or misconduct.</li>
                <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
                <li>Interfere with, disrupt, or create an undue burden on the Website or the networks and services connected to the Website.</li>
                <li>Attempt to impersonate another user or person, or use the username of another User.</li>
                <li>Sell or otherwise transfer your profile.</li>
                <li>Use any information obtained from the Website in order to harass, abuse, or harm another person.</li>
                <li>Use the Website or our Services as part of any effort to compete with us or to create a revenue-generating endeavour or commercial enterprise.</li>
                <li>Decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Website.</li>
                <li>Attempt to access any portions of the Website that you are restricted from accessing.</li>
                <li>Harass, annoy, intimidate, or threaten any of our employees, agents, or other Users.</li>
                <li>Delete the copyright or other proprietary rights notice from any of the content.</li>
                <li>Copy, modify or adapt the Website&rsquo;s software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
                <li>Upload or transmit (or attempt to upload or to transmit) viruses, trojan horses, or other material that interferes with any party&rsquo;s uninterrupted use and enjoyment of the Website, or any material that acts as a passive or active information collection or transmission mechanism.</li>
                <li>Use, launch, or engage in any automated use of the system, such as using scripts to send comments or messages, robots, scrapers, offline readers, or similar data gathering and extraction tools.</li>
                <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Website.</li>
                <li>Use the Website in a manner inconsistent with any applicable laws or regulations.</li>
                <li>Misrepresent experience, skills, or information about a User.</li>
                <li>Falsely imply a relationship with us or another company with whom you do not have a relationship.</li>
              </ul>
            </div>
          </section>

          {/* 4 */}
          <section id="intellectual-property">
            <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              4. Ownership of Content and Intellectual Property Rights
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Zinoit owns the Website and all Services and content therein except for User Content and all worldwide intellectual property rights relating to the foregoing. Except as expressly authorized by Zinoit, you will not copy, distribute, sell, lease, perform, display, sublicense, modify or prepare derivative works of the Website, in whole or in part. Zinoit reserves all rights not expressly granted to you under these Terms of Use. All content on the Website is protected by applicable copyright laws. You agree to comply with all copyright laws and any copyright notices, information, or restrictions contained in any content available on the Website or accessed through the Services. Any use of the Website not expressly permitted by these Terms of Use will be deemed a breach of these Terms of Use and may violate copyright, trademark, and other laws.
              </p>
              <p>
                To the extent that you provide us with any suggestions, feedback or other information relating to our business or the Services (including, but not limited to, suggested new Services or improvements to existing Services), such information is provided to us on a non-confidential and unrestricted basis, and you hereby grant to Zinoit a non-exclusive, worldwide, perpetual, royalty-free, fully transferrable and sublicensable right and license to reproduce, display, distribute, use and fully exploit such suggestions, feedback and information.
              </p>
            </div>
          </section>

          {/* 5 */}
          <section id="trademarks">
            <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              5. Trademarks
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Zinoit and associated brands and designs are the trademarks of Zinoit. You must not use any such trademarks unless you have a valid, written agreement or consent from Zinoit to do so. All third-party trademarks on the Website are the property of their respective owners.
            </p>
          </section>

          {/* 6 */}
          <section id="modifications">
            <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              6. Modifications to and Availability of the Website
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>a. We reserve the right to change, modify, or remove our content at any time or for any reason at our sole discretion without notice. We also reserve the right to modify or discontinue all or part of the Services without notice at any time.</p>
              <p>b. We cannot guarantee the Website and Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Website, resulting in interruptions, delays, or errors. You agree that Zinoit has no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Website or Services during any downtime or discontinuance of the Website or Services. Although we will try our best, we are not obliged to maintain and support the Website or Services or to supply any corrections, updates, or releases.</p>
              <p>c. There may be information on the Website that contains typographical errors, inaccuracies, or omissions that may relate to the Services, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information at any time, without prior notice.</p>
            </div>
          </section>

          {/* 7 */}
          <section id="termination">
            <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              7. Termination of Our Services
            </h2>
            <p className="text-slate-700 leading-relaxed">
              We may also wish to stop providing the Services via Website, and may terminate use of it at any time without giving notice of termination to you. Unless we tell you otherwise, upon any termination, (a) the rights and licenses granted to you in these Terms will end; (b) you must stop using the Website.
            </p>
          </section>

          {/* 8 */}
          <section id="disclaimer">
            <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              8. Disclaimer
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Zinoit provides the service &ldquo;as is&rdquo;, with all faults and &ldquo;as available&rdquo;. Zinoit makes no representations or warranties of any kind, whether express, implied, statutory or otherwise, including, without limitation, any warranty that the service will be uninterrupted, accurate, complete, reliable, current, error-free or free of harmful components, that the content will be secure or not otherwise lost or damaged, or any implied warranty of merchantability, satisfactory quality, fitness for a particular purpose, or non-infringement, and any warranty arising out of any course of performance, course of dealing or usage of trade, or that the service is free of viruses or other harmful components. Therefore, you should exercise caution in the use of any such services or content and Zinoit disclaims any and all responsibility for any third-party content or third-party sites.
            </p>
          </section>

          {/* 9 */}
          <section id="liability">
            <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              9. Liability
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Zinoit and all its officers, directors, employees, affiliates and agents assume no liability or responsibility for, and in no event shall Zinoit, its officers, directors, employees, affiliates or agents, be liable for any direct, indirect, incidental, special, punitive, or consequential damages whatsoever resulting from, any personal injury or property damage, of any nature whatsoever, resulting from your access to and use of the Website, any unauthorized access to or use of our secure servers and/or any and all personal information and/or financial information stored therein, any interruption or cessation of transmission to or from the Website, any bugs, viruses, trojan horses, or the like which may be transmitted to or through the Website, by any third party, and/or any errors or omissions in any submission(s) or other content made available by Zinoit, or for any loss or damage of any kind incurred as a result of the use of any submission(s) or other content posted, emailed, transmitted, or otherwise made available via the Website, whether based on warranty, contract, tort, or any other legal theory, and whether or not the company is advised of the possibility of such damages. The foregoing limitation of liability shall apply to the fullest extent permitted by law in the applicable jurisdiction. Zinoit does not warrant, endorse, guarantee, or assume responsibility for any Service advertised or offered by a third party through the Website or any hyperlinked website or featured in any advertising, and Zinoit will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or Services. You specifically acknowledge that Zinoit shall not be liable for User submissions or the defamatory, offensive, or illegal conduct of any third party and that the risk of harm or damage from the foregoing rests entirely with you.
            </p>
          </section>

          {/* 10 */}
          <section id="indemnification">
            <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              10. Indemnification
            </h2>
            <p className="text-slate-700 leading-relaxed">
              You undertake to indemnify and hold Zinoit harmless from and against all claims, losses, liabilities, expenses, damages and costs, including, without limitation, legal costs, arising from or relating to User content, your unauthorised use or conduct of the Website or any violation of the relevant policies, including but not limited to these Terms of Use, any applicable law(s) and regulations or rights of any third party(ies).
            </p>
            <p className="text-slate-700 leading-relaxed mt-4">
              Zinoit reserves the right, at its own expense, to assume the exclusive defence and control of any matter otherwise subject to indemnification by you, and in such case, you agree to cooperate with Zinoit&rsquo;s defence of such claim.
            </p>
          </section>

          {/* 11 */}
          <section id="governing-law">
            <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              11. Governing Law; Venue and Jurisdiction
            </h2>
            <p className="text-slate-700 leading-relaxed">
              This Website, Zinoit Services and the use of it and any dispute of any sort that might arise between you and Zinoit is governed by the laws of the State of California, United States, and the courts of San Diego County, California shall have exclusive jurisdiction over any disputes hereunder.
            </p>
          </section>

          {/* 12 */}
          <section id="general">
            <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              12. General
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>a. Visiting the Website and completing online forms constitute electronic communications; you consent to receive electronic communications and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via e-mail and on the Website, satisfy any legal requirement that such communication be in writing.</p>
              <p>b. You hereby agree to the use of electronic signatures, contracts, orders and other records and to electronic delivery of notices, policies and records of transactions initiated or completed by us or via the Website. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by other than electronic means.</p>
              <p>c. These Terms of Use and any policies or operating rules posted by us on the Website or in respect to the Services constitute the entire agreement and understanding between you and us.</p>
              <p>d. Our failure to exercise or enforce any right or provision of these Terms of Use shall not operate as a waiver of such right or provision.</p>
              <p>e. We may assign any or all of our rights and obligations to others at any time.</p>
              <p>f. We shall not be responsible or liable for any loss, damage, delay or failure to act caused by any cause beyond our reasonable control.</p>
              <p>g. If any provision or part of a provision of these Terms of Use is unlawful, void or unenforceable, that provision or part of the provision is deemed severable from these Terms of Use and does not affect the validity and enforceability of any remaining provisions.</p>
              <p>h. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Terms of Use or use of the Website or Services.</p>
            </div>
          </section>

          {/* 13 */}
          <section id="english-language">
            <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              13. English Language
            </h2>
            <p className="text-slate-700 leading-relaxed">
              The parties agree that this Agreement and all documents relating thereto be drawn up in English.
            </p>
          </section>

        </div>

        {/* Footer note */}
        <div className="mt-16 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
          <p>Questions about these Terms? <Link href="/contact" className="text-purple-700 hover:underline">Contact us</Link> or email <a href="mailto:DPO@zinoit.com" className="text-purple-700 hover:underline">DPO@zinoit.com</a></p>
          <p className="mt-2">
            <Link href="/privacy" className="text-purple-700 hover:underline">Privacy Policy</Link>
            <span className="mx-3 text-slate-300">|</span>
            <Link href="/contact" className="text-purple-700 hover:underline">Contact Us</Link>
          </p>
        </div>

      </div>
    </main>
  );
}
