import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Zinoit",
  description: "Zinoit LLC Privacy Policy. Learn how we collect, use, and protect your personal information.",
};

const toc = [
  { id: "how-we-collect", label: "How We Collect Your Personal Information" },
  { id: "why-we-collect", label: "Why We Need to Collect Your Personal Information" },
  { id: "whom-we-give", label: "To Whom We Give Your Personal Information" },
  { id: "international-transfers", label: "International Transfers" },
  { id: "retention", label: "How Long We Retain Your Personal Information" },
  { id: "protection", label: "How We Protect Your Personal Information" },
  { id: "childrens-privacy", label: "Children's Privacy Protection" },
  { id: "controlling", label: "Controlling Your Personal Information" },
  { id: "links-third-parties", label: "Links and Third Parties" },
  { id: "contact", label: "Contact Us" },
  { id: "gdpr-annex", label: "GDPR Annex" },
  { id: "california-annex", label: "California Residents Annex" },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <div className="bg-brand-navy py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-400 text-sm">
            Effective Date: March 1, 2020 &nbsp;·&nbsp; Data Controller: Zinoit LLC
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">

        {/* Intro */}
        <div className="prose prose-slate max-w-none mb-10">
          <p className="text-slate-700 leading-relaxed">
            Zinoit LLC (&ldquo;Zinoit&rdquo;, &ldquo;we&rdquo; or &ldquo;us&rdquo;) are firmly committed to protecting your privacy. You should understand what we do with data relating to you (&ldquo;personal information&rdquo;) which we collect when you visit our website, www.zinoit.com (the &ldquo;Website&rdquo;) and how we use and disclose the information. We are committed to complying with all data protection laws as are applicable to us. The data controller for personal information collected from a visitor to the Website is Zinoit LLC, 12684 Cabezon Pl, San Diego, CA 92129, USA.
          </p>
          <p className="text-slate-700 leading-relaxed mt-4">
            By using our Website or by otherwise giving us your personal information you are accepting the practices described in this Privacy Policy. If you do not agree to this Privacy Policy, please do not use our Website or give us any of your personal information. We reserve the right to make changes to this Privacy Policy at any time. Any changes will be posted in this Privacy Policy. We encourage you to regularly review this Privacy Policy to make sure you are aware of any changes and how your data may be used.
          </p>
          <p className="text-slate-700 leading-relaxed mt-4">
            If you have any questions or comments about this Policy, please <Link href="/contact" className="text-purple-700 hover:underline">contact us</Link>. This Policy is incorporated into and is subject to the Terms of Use. Your use of the Website and any personal information that you provide on the Website remains subject to the terms of this Website Privacy Policy and Zinoit Terms of Use.
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
          <section id="how-we-collect">
            <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              1. How We Collect Your Personal Information
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>We may collect the following personal information relating to you:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  You do not need to register to use our Website. However, if you voluntarily contact us using the forms or contact details on our Website, you may provide us with your identity information and contact details (i.e., your first name, last name, phone number, job title, house/office address, e-mail address) and other personal data that you may wish to share with us.
                </li>
                <li>
                  The Website automatically collects certain technical information relating to the device you use to visit the Website. Specifically, we use cookies, web beacons and similar technologies to help us understand your activity on the Website. A cookie is a small piece of data that a website can send to your browser, which may then be stored on your device. Data that we collect automatically includes your internet protocol (&ldquo;IP&rdquo;) address, location, your device&rsquo;s identification information, and the actions taken on our Website (e.g., links that you click) as well as other sites that you may visit. For further information on the cookies and similar technologies we use on our Website and why we use them, please review our Cookie Notice.
                </li>
                <li>
                  We sometimes collect anonymous information from visits to the Website. Anonymous information (or click stream data) refers to information that does not and will not directly or indirectly reveal your identity, e.g., aggregated data relating to all of our website visitors. We may use this data to analyse trends and statistics and to help us provide you with a better experience using our Website.
                </li>
                <li>
                  If you provide us with personal information of third parties (such as the details of your administrative assistant or your emergency contact), you agree to: (a) notify each individual before sharing their personal information with us, (b) explain that their personal information will be processed in accordance with this Privacy Policy, and (c) obtain their consent, where appropriate.
                </li>
              </ul>
            </div>
          </section>

          {/* 2 */}
          <section id="why-we-collect">
            <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              2. Why We Need to Collect Your Personal Information
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>To the extent permitted by applicable law, we use your personal information for various purposes, such as to:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Provide you with the services and information that you have requested.</li>
                <li>Manage and maintain our relationship with you, including responding to an inquiry, question or comment made by you and providing you with other customer support.</li>
                <li>Communicate important notices to you, such as information about changes to this Website Privacy Policy and Service updates.</li>
                <li>Carry out analytics and market research and internal reporting to enable us to plan, develop and improve our Website, our Services and marketing activities. (For example, we may use your IP address to help diagnose problems with our server, to administer the Website, to refine the Website based on which features people use most often, to help identify Website users and gather general demographic information about Website users.)</li>
                <li>Inform you of our new services that we think you will find valuable by sending promotional messages via email, SMS, phone, post and/or other similar communications means. (If you would prefer not to receive these communications, simply follow the unsubscribe instructions on the promotional communications that you receive.)</li>
                <li>Create a profile about you to help us personalize our communications to you, including to ensure that you receive relevant marketing communications based on your actions on this particular Website or your geographic location based on your IP address.</li>
                <li>Prevent and detect unlawful behaviour, and protect or enforce our legal rights, for example defending us in case of legal disputes.</li>
                <li>The Website automatically collects certain technical information relating to the device you use to visit the Website. Specifically, we use cookies, web beacons and similar technologies to help us understand your activity on the Website.</li>
              </ul>
            </div>
          </section>

          {/* 3 */}
          <section id="whom-we-give">
            <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              3. To Whom We Give Your Personal Information
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>We will not sell your personal information to anyone outside of Zinoit. However, we may need to disclose your personal information to third parties in the following instances:</p>
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <strong className="text-slate-900">Service providers:</strong> We will disclose your personal information to companies that provide services to us, such as companies that assist us in operating our Website and vendors that assist us with marketing campaigns. This includes Web3Forms (web3forms.com), which processes contact form submissions submitted through our Website on our behalf. All service providers are required to keep your personal information confidential and are not permitted to use your personal information for any other purpose than to carry out the services they are performing for us.
                </li>
                <li>
                  <strong className="text-slate-900">Third parties to meet applicable legal requirements:</strong> We may need to disclose your personal information to a third party if it is necessary to comply with a legal obligation or the decision of a judicial authority, a public authority or a government body, or if disclosure is necessary for national security, law enforcement or other public interest.
                </li>
                <li>
                  <strong className="text-slate-900">Business partners:</strong> We will disclose your personal information to our business partners if it is necessary for providing Services to you, such as for certain software and related services.
                </li>
                <li>
                  <strong className="text-slate-900">Third parties in connection with a business sale:</strong> If we make a sale or transfer of assets, or are otherwise involved in a merger or business/asset transfer, we may transfer your personal information to one or more third parties as part of that transaction.
                </li>
                <li>
                  <strong className="text-slate-900">Other third parties with your consent:</strong> We may also share your personal information with other third parties when you separately consent to such sharing.
                </li>
              </ul>
            </div>
          </section>

          {/* 4 */}
          <section id="international-transfers">
            <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              4. International Transfers of Your Personal Information
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Due to the global nature of Zinoit&rsquo;s business, your personal information may be shared, disclosed and transferred between various geographies where our resources provide you Services from and other third parties (as described in the above section on to whom we give your personal information) where such transfers are required for legitimate business reasons, including locations such as India. Such service locations may be located outside your country of residence. The level of protection for personal information is not the same in all countries; however, we will take reasonable steps and implement measures as described in this Website Privacy Policy to keep your personal information secure.
            </p>
          </section>

          {/* 5 */}
          <section id="retention">
            <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              5. How Long We Retain Your Personal Information
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Your personal information will be retained only for so long as reasonably necessary for the purposes set out in this Website Privacy Policy in accordance with applicable laws, including for the purposes of satisfying any legal, regulatory, accounting or reporting requirements.
            </p>
          </section>

          {/* 6 */}
          <section id="protection">
            <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              6. How We Protect Your Personal Information
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Zinoit implements appropriate security measures designed to prevent unlawful or unauthorized processing of personal information and accidental loss of or damage to personal information. The data collected via our Website is stored in a secure server with our ISP who will take periodic backups of such data.
            </p>
          </section>

          {/* 7 */}
          <section id="childrens-privacy">
            <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              7. Children&rsquo;s Privacy Protection
            </h2>
            <p className="text-slate-700 leading-relaxed">
              The Website is not intentionally targeted to, or intended for, children under the age of 13. We do not knowingly collect data relating to children.
            </p>
          </section>

          {/* 8 */}
          <section id="controlling">
            <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              8. Controlling Your Personal Information
            </h2>
            <p className="text-slate-700 leading-relaxed">
              If you would like to exercise your right to modify or remove your personal information from our database or request a copy of your personal information (to the extent these rights are provided by law), you can send us an e-mail at <a href="mailto:DPO@zinoit.com" className="text-purple-700 hover:underline">DPO@zinoit.com</a>. For your protection, we may need to verify your identity before fulfilling your request. We will respond as soon as reasonably practical and within the time frame specified by applicable law. We reserve the right to deny your request based on applicable law and will inform you if we do so.
            </p>
          </section>

          {/* 9 */}
          <section id="links-third-parties">
            <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              9. Links and Third Parties
            </h2>
            <p className="text-slate-700 leading-relaxed">
              The Website contains links to other websites, including sites controlled by third parties independent of us. Zinoit is not responsible for the privacy practices or the contents of such websites. We encourage you to read the privacy notices of such websites before providing any personal information to them. We do not take responsibility for the opinions of third parties expressed on or through our Website.
            </p>
          </section>

          {/* 10 */}
          <section id="contact">
            <h2 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
              10. Contact Us
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Any questions, concerns or complaints about our processing operations and our commitment to this Website Privacy Policy should be addressed to Zinoit&rsquo;s Data Protection Officer at{" "}
              <a href="mailto:DPO@zinoit.com" className="text-purple-700 hover:underline">DPO@zinoit.com</a>. In addition to contacting us, in certain countries you have the right to lodge a complaint with your local data protection authority if you so choose.
            </p>
            <div className="mt-5 bg-slate-50 border border-slate-200 rounded-lg p-5 text-sm text-slate-700">
              <p className="font-semibold text-slate-900 mb-1">Zinoit LLC — Data Protection Officer</p>
              <p>12684 Cabezon Pl, San Diego, CA 92129, USA</p>
              <p><a href="mailto:DPO@zinoit.com" className="text-purple-700 hover:underline">DPO@zinoit.com</a></p>
            </div>
          </section>

          {/* GDPR Annex */}
          <section id="gdpr-annex" className="pt-4">
            <div className="bg-slate-900 text-white rounded-xl p-6 mb-6">
              <h2 className="text-xl font-bold mb-2">GDPR Annex</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Additional information for the purposes of the EU General Data Protection Regulation, the Swiss Federal Data Protection Act and the UK Data Protection Act (&ldquo;GDPR Annex&rdquo;). This GDPR Annex complements and supplements the main body of the Website Privacy Policy and covers the processing of personal information subject to EU Regulation 2016/679 (the &ldquo;GDPR&rdquo;), the Swiss Federal Data Protection Act and the UK Data Protection Act. In case of any conflicts between the main body of the Website Privacy Policy and the GDPR Annex, the GDPR Annex will have precedence.
              </p>
              <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                We will notify you of any material changes or additions to this Website Privacy Policy and will provide you with a copy of any amended Website Privacy Policy(s) by use of your e-mail address provided to us, or by any other suitable means.
              </p>
              <p className="text-slate-300 text-sm mt-3">
                If you have any questions relating to this GDPR Annex or our processing of your personal information, please contact our Data Protection Officer at: <a href="mailto:DPO@zinoit.com" className="text-amber-400 hover:underline">DPO@zinoit.com</a>
              </p>
            </div>

            <div className="space-y-10">
              <div id="gdpr-purposes">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Purposes and Legal Basis for Processing Your Personal Information</h3>
                <p className="text-slate-700 leading-relaxed mb-3">To the extent permitted by applicable law, we use your personal information for the purposes identified in the main body of the Website Privacy Policy based on the following legal grounds:</p>
                <ul className="list-disc pl-6 space-y-3 text-slate-700 leading-relaxed">
                  <li><strong className="text-slate-900">Consent:</strong> We may process your personal information if you consent to such processing, e.g. for receiving promotional messages via phone or electronic communications means from us. You have the right to withdraw your consent at any time. Withdrawing your consent will not affect the lawfulness of any prior processing based on your consent. Please note that even after withdrawal of your consent we may be entitled to continue processing your personal information if other legal grounds apply. To withdraw your consent, you can use the unsubscribe instructions in the promotional communications you receive.</li>
                  <li><strong className="text-slate-900">Contractual necessity:</strong> Where it is necessary to enter into a contract with you for the provision of our Services or to perform our obligations under that contract. If you do not provide us with your personal information for processing as described below, we may not be able to provide the service, product or information requested.</li>
                  <li><strong className="text-slate-900">Our legitimate interests:</strong> We may process your personal information where it is necessary for our legitimate interests as a company, including to manage, promote and improve our business and manage our risk.</li>
                  <li><strong className="text-slate-900">Compliance with applicable law:</strong> We may process your personal information where the processing is required by applicable law.</li>
                </ul>
              </div>

              <div id="gdpr-rights">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Your Rights</h3>
                <p className="text-slate-700 leading-relaxed mb-3">You have the following rights with respect to your personal information that we process, subject to conditions and restrictions set out in the applicable laws:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 leading-relaxed">
                  <li>To learn whether your personal information is processed by us and to request a copy of your personal information and information relating to the processing of your personal information.</li>
                  <li>To request the correction of any inaccurate or incomplete personal information.</li>
                  <li>To request the erasure of your personal information or the restriction of the processing of your personal information.</li>
                  <li>To object to our processing of your personal information.</li>
                  <li>To withdraw consent you have given.</li>
                  <li>Under certain circumstances, to demand data portability.</li>
                  <li>To lodge a complaint with the applicable data protection supervisory authority.</li>
                </ul>
                <p className="text-slate-700 mt-3">
                  To exercise your rights to the extent allowed under applicable law, please email us at <a href="mailto:DPO@zinoit.com" className="text-purple-700 hover:underline">DPO@zinoit.com</a>.
                </p>
              </div>

              <div id="gdpr-transfers">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Data Transfers</h3>
                <p className="text-slate-700 leading-relaxed">
                  As detailed under the section &ldquo;International Transfers of Your Personal Information&rdquo;, your personal information may be processed by us in countries outside your country of residence. Some of these countries may not provide for the same level of data protection as the European Economic Area, Switzerland and/or the United Kingdom (as applicable). In this event, we will ensure that the recipient of your personal information offers an adequate level of protection, for instance by entering into standard contractual clauses for the transfer of data as approved by the European Commission (or the relevant data protection supervisory authority, as applicable).
                </p>
              </div>
            </div>
          </section>

          {/* California Annex */}
          <section id="california-annex" className="pt-4">
            <div className="bg-slate-900 text-white rounded-xl p-6 mb-6">
              <h2 className="text-xl font-bold mb-2">Annex for California Residents</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                The following additional disclosures apply to residents of California.
              </p>
            </div>

            <div className="space-y-10">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">California Online Privacy Protection Act (CalOPPA) — California Do Not Track Disclosures</h3>
                <p className="text-slate-700 leading-relaxed">
                  In accordance with the CalOPPA, we may collect personal information about your online activities when you use the Services. While we give our users many avenues to opt out of providing personal information, we do not respond to web browsers&rsquo; &ldquo;Do Not Track&rdquo; signals. California&rsquo;s Shine the Light law, Civil Code Section 1798.83, permits our users who are California residents to periodically request and obtain certain information about any personal information disclosed to third parties for direct marketing purposes. If you are a California resident and wish to refrain us from gathering your personal information, please submit your request in writing to the contact details set out in the Contact Us section above. In addition, if you wish to turn off Do Not Track (DNT) signals on your web browsers, please refer to your browser&rsquo;s settings for instructions.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">California Consumer Privacy Act (CCPA)</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  The CCPA gives California consumers enhanced rights with respect to their personal information that is collected by businesses. First, California consumers may opt out of having their personal information sold to other persons or parties. Second, California consumers have a right to know:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
                  <li>What specific pieces of information a business has about the consumer;</li>
                  <li>Categories of personal information it has collected about the consumer;</li>
                  <li>Categories of sources from which the personal information is collected;</li>
                  <li>Categories of personal information that the business sold or disclosed for a business purpose about the consumer;</li>
                  <li>Categories of third parties to whom the personal information was sold or disclosed for a business purpose; and</li>
                  <li>The business or commercial purpose for collecting or selling personal information.</li>
                </ul>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Third, California consumers can request that the personal information a business has collected about them be deleted from the business&rsquo;s systems and records. With your consent, Zinoit may sell personal information to third parties. You can request to opt out of the sale of your personal information at any time by sending an email to <a href="mailto:DPO@zinoit.com" className="text-purple-700 hover:underline">DPO@zinoit.com</a>. We have fifteen (15) days after receipt to implement a request to opt out.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  To make a request to know or a request to delete your personal information, send us an e-mail at <a href="mailto:DPO@zinoit.com" className="text-purple-700 hover:underline">DPO@zinoit.com</a>. (Please put either &ldquo;Request to Know&rdquo; or &ldquo;Request to Delete&rdquo; in the subject heading of your email.)
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We will confirm receipt of your request to know or delete within fifteen (15) days along with a description of what steps we will take to verify and respond. We must provide the requested information or delete your personal information within forty-five (45) days of receipt of your request, but can use an additional forty-five (45) days if needed — we will let you know if additional time is required.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  When contacting us, we may ask you to provide certain, limited personal information, such as your name, email address and/or username to verify your request and to match with our records and systems. We will not retain this personal information or use it for any other purpose. We need to search our records and systems only for the preceding twelve (12) months.
                </p>
              </div>
            </div>
          </section>

        </div>

        {/* Footer note */}
        <div className="mt-16 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
          <p>Questions about this Privacy Policy? Contact us at <a href="mailto:DPO@zinoit.com" className="text-purple-700 hover:underline">DPO@zinoit.com</a></p>
          <p className="mt-2">
            <Link href="/terms" className="text-purple-700 hover:underline">View Terms of Use</Link>
            <span className="mx-3 text-slate-300">|</span>
            <Link href="/contact" className="text-purple-700 hover:underline">Contact Us</Link>
          </p>
        </div>

      </div>
    </main>
  );
}
