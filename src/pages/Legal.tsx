import { useSEO } from "@/hooks/useSEO";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

type Section = { title: string; body: string[] };

function LegalPage({ title, intro, sections, updated }: { title: string; intro: string; sections: Section[]; updated: string }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} description={intro} size="md" className="pb-6" />
      <section className="pb-24 sm:pb-32">
        <Container size="narrow">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Last updated: {updated}</p>
            <div className="mt-10 space-y-12">
              {sections.map((s, i) => (
                <div key={s.title}>
                  <h2 className="flex items-baseline gap-4 font-display text-2xl font-semibold text-white">
                    <span className="text-sm text-slate-600">0{i + 1}</span>
                    {s.title}
                  </h2>
                  <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-400">
                    {s.body.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16 rounded-3xl glass p-6 text-sm text-slate-400">
              Questions about this policy? Email us at{" "}
              <a href={`mailto:${site.email}`} className="text-white hover:text-electric-300">
                {site.email}
              </a>
              .
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

export function Privacy() {
  useSEO("Privacy Policy", `How ${site.name} collects, uses and protects your information.`);
  return (
    <LegalPage
      title="Privacy Policy"
      intro="We keep this simple: we collect only what we need to respond to you and deliver our work, and we never sell your data."
      updated="1 September 2026"
      sections={[
        {
          title: "Information we collect",
          body: [
            "When you contact us through our website, WhatsApp or email, we collect the details you provide — such as your name, company, email address, phone number and a description of your project.",
            "We also collect anonymous usage data (pages visited, device type, approximate location) through analytics tools to understand how our website is used and improve it.",
          ],
        },
        {
          title: "How we use it",
          body: [
            "To respond to your enquiry, prepare proposals, deliver and support the services you engage us for, and send occasional updates you've asked for.",
            "We do not sell, rent or trade your personal information. We share it only with service providers (e.g. hosting, email, analytics) who process it on our behalf under confidentiality obligations.",
          ],
        },
        {
          title: "Cookies & analytics",
          body: [
            "Our website uses essential cookies to function and analytics cookies (such as Google Analytics) to measure traffic. You can disable cookies in your browser settings; the site will continue to work.",
          ],
        },
        {
          title: "Data retention & security",
          body: [
            "We keep enquiry data for as long as needed to respond to and follow up on your request, and client data for the duration of our engagement plus a reasonable period for legal and accounting purposes.",
            "We use industry-standard measures — encryption in transit, access controls and reputable providers — to protect your information.",
          ],
        },
        {
          title: "Your rights",
          body: [
            "You can ask us to access, correct or delete the personal data we hold about you at any time by emailing us. We'll respond within 30 days.",
          ],
        },
        {
          title: "Changes",
          body: ["We may update this policy from time to time. The latest version will always be published on this page with the date of the last update."],
        },
      ]}
    />
  );
}

export function Terms() {
  useSEO("Terms & Conditions", `The terms that govern use of the ${site.name} website and our services.`);
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="These terms cover use of our website and set out the general basis on which we provide services. Project-specific terms are agreed in each proposal."
      updated="1 September 2026"
      sections={[
        {
          title: "Use of this website",
          body: [
            "The content on this website is provided for general information about our services. While we keep it accurate and current, it does not constitute a binding offer. Plans and prices shown are indicative starting points and are confirmed in a written quote.",
          ],
        },
        {
          title: "Proposals & payment",
          body: [
            "Each project begins with a written proposal setting out scope, deliverables, timeline and price. Work starts on acceptance of the proposal and receipt of the initial payment. Subsequent payments follow the milestones in the proposal.",
            "Changes to scope are quoted and agreed in writing before work begins. Third-party costs (domains, hosting, licences, API usage) are billed at cost with your approval.",
          ],
        },
        {
          title: "Intellectual property",
          body: [
            "On receipt of full payment, ownership of the custom design and code created for your project transfers to you. We retain the right to use pre-existing tools, libraries and know-how, and to reference the project in our portfolio unless agreed otherwise.",
          ],
        },
        {
          title: "Client responsibilities",
          body: [
            "You agree to provide content, feedback and approvals in a timely manner, and confirm that any material you supply does not infringe third-party rights. Delays in providing these may affect the project timeline.",
          ],
        },
        {
          title: "Warranties & liability",
          body: [
            "We fix defects in our work reported during the agreed maintenance period at no charge. Beyond that, support is provided under a separate agreement.",
            "To the extent permitted by law, our total liability in connection with a project is limited to the fees paid for that project. We are not liable for indirect or consequential loss.",
          ],
        },
        {
          title: "Governing law",
          body: ["These terms are governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts in our registered location."],
        },
      ]}
    />
  );
}
