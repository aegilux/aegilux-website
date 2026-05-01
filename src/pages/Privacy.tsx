import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-heading text-4xl font-bold mb-2">
            Privacy <span className="text-primary neon-text">Policy</span>
          </h1>
          <p className="text-muted-foreground text-sm font-mono-cyber mb-10">
            Last updated: 1 May 2026
          </p>

          <div className="prose prose-invert prose-sm max-w-none space-y-8 text-muted-foreground leading-relaxed [&_h2]:text-foreground [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-foreground [&_h3]:font-heading [&_h3]:text-base [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_a]:text-primary [&_a]:underline [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_strong]:text-foreground">
            <section>
              <p>
                Aegilux Pty Ltd (ABN to be registered) ("Aegilux", "we", "us", "our") operates the
                website <a href="https://aegilux.com">aegilux.com</a> and provides managed cloud
                security services ("Service") to Australian businesses.
              </p>
              <p>
                We are committed to protecting your privacy in accordance with the{" "}
                <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles (APPs). This
                policy explains how we collect, use, disclose, and store your personal information.
              </p>
            </section>

            <section>
              <h2>1. Information We Collect</h2>

              <h3>Information you provide</h3>
              <ul>
                <li><strong>Lead enquiry form:</strong> Name, work email, phone number, company name, AWS account details, and any message you include.</li>
                <li><strong>Outreach replies:</strong> If you reply to a marketing email or LinkedIn message we have sent, the content of that reply.</li>
                <li><strong>Engagement records:</strong> If you become a paying client, we hold engagement records, invoices, and audit-log call metadata necessary to evidence service delivery (we do not hold the content of your AWS data — see Section 4).</li>
              </ul>

              <h3>Information collected automatically</h3>
              <ul>
                <li><strong>Website analytics:</strong> If you have given consent, Google Analytics 4 records aggregate visitor data (pages viewed, country, device, referral source).</li>
                <li><strong>UTM parameters:</strong> If you arrive via a tracked link (e.g. from a LinkedIn post or email campaign), the UTM source, medium, campaign, content, and term values are captured with any form submission.</li>
              </ul>

              <h3>Cold outreach data sources</h3>
              <p>
                Where we initiate contact with you (cold outbound), we rely on inferred consent under
                the <em>Spam Act 2003</em> (Cth) for B2B contacts whose business email address is
                publicly available and whose role is relevant to managed cloud security. Each
                outreach message identifies the sender, includes a postal address, and provides a
                functional unsubscribe mechanism.
              </p>
            </section>

            <section>
              <h2>2. How We Use Your Information</h2>
              <ul>
                <li>To respond to enquiries about our Service.</li>
                <li>To deliver the Service (where you are a paying client).</li>
                <li>To send commercial messages where we have consent (express or inferred under the Spam Act).</li>
                <li>To improve our website and Service.</li>
                <li>To meet our legal and regulatory obligations.</li>
              </ul>
            </section>

            <section>
              <h2>3. How We Disclose Your Information</h2>
              <p>We do not sell personal information. We disclose information only to:</p>
              <ul>
                <li><strong>Service providers</strong> who help us operate (e.g. email infrastructure, CRM, analytics). These providers are bound to use the data only to provide their service to us.</li>
                <li><strong>Professional advisors</strong> (lawyers, accountants, insurers) where reasonably necessary.</li>
                <li><strong>Authorities</strong> where required by law (e.g. court order, regulator request).</li>
              </ul>
            </section>

            <section>
              <h2>4. Client Data Handling (For Paying Clients)</h2>
              <p>
                Aegilux's managed security service is delivered using an <strong>in-client deployment
                model</strong>. The security stack we operate (Wazuh, Prowler, evidence packages,
                logs) is deployed inside <em>your</em> AWS Organisation, not ours. Your data —
                including all logs, security findings, and compliance evidence — is stored within
                your AWS account and never transferred to Aegilux-controlled infrastructure.
              </p>
              <p>
                Our analysts access your environment via scoped, time-boxed cross-account IAM roles
                and Aegilux-managed Virtual Desktop Infrastructure (VDI). Every action is logged in
                your AWS CloudTrail and is auditable by you. See <a href="/#how-we-operate">How We
                Operate</a> on the homepage for the full architectural model.
              </p>
            </section>

            <section>
              <h2>5. Cross-Border Disclosure (APP 8)</h2>
              <p>
                Aegilux's Security Operations Centre includes analysts located in Pakistan
                providing 8/5 AEST coverage hours. Offshore analysts may <em>access</em> client data
                in the course of providing the Service, but no client data is transferred to or
                stored on infrastructure outside the client's own AWS account.
              </p>
              <p>
                Some of our service providers are based outside Australia (e.g. email
                infrastructure providers in the United States). Where we share personal
                information with overseas providers, we take reasonable steps to ensure the
                information is handled consistently with the APPs.
              </p>
            </section>

            <section>
              <h2>6. Security</h2>
              <p>
                We protect your personal information using industry-standard controls:
                multi-factor authentication on all administrative access, encryption in transit
                (TLS), least-privilege access, and audit logging.
              </p>
            </section>

            <section>
              <h2>7. Notifiable Data Breaches</h2>
              <p>
                If a Notifiable Data Breach occurs, we will assess the breach within 30 days as
                required under the <em>Privacy Act 1988</em> and notify the Office of the Australian
                Information Commissioner (OAIC) and affected individuals where the threshold is met.
              </p>
            </section>

            <section>
              <h2>8. Retention</h2>
              <p>
                We retain personal information only as long as necessary for the purpose for which
                it was collected, or as required by law. Engagement records, invoices, and
                tax-relevant data are retained for seven years.
              </p>
            </section>

            <section>
              <h2>9. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Request access to the personal information we hold about you.</li>
                <li>Request correction of inaccurate or out-of-date information.</li>
                <li>Withdraw consent for marketing communications (we honour unsubscribe requests within two business days).</li>
                <li>Make a complaint about our handling of your personal information.</li>
              </ul>
              <p>
                Contact us at <a href="mailto:hello@aegilux.com">hello@aegilux.com</a> to exercise
                any of these rights. If you are not satisfied with our response, you may complain to
                the OAIC at <a href="https://www.oaic.gov.au">oaic.gov.au</a>.
              </p>
            </section>

            <section>
              <h2>10. Changes to This Policy</h2>
              <p>
                We may update this policy from time to time. The "Last updated" date at the top of
                this page indicates the date of the most recent revision. Material changes will be
                communicated to active clients in advance.
              </p>
            </section>

            <section>
              <h2>11. Contact</h2>
              <p>
                Aegilux Pty Ltd<br />
                Suite 20.01, Level 20, 68 Pitt Street<br />
                Sydney NSW 2000, Australia<br />
                Email: <a href="mailto:hello@aegilux.com">hello@aegilux.com</a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
