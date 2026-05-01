import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-heading text-4xl font-bold mb-2">
            Terms of <span className="text-primary neon-text">Service</span>
          </h1>
          <p className="text-muted-foreground text-sm font-mono-cyber mb-10">
            Last updated: 1 May 2026
          </p>

          <div className="prose prose-invert prose-sm max-w-none space-y-8 text-muted-foreground leading-relaxed [&_h2]:text-foreground [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-foreground [&_h3]:font-heading [&_h3]:text-base [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_a]:text-primary [&_a]:underline [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1 [&_strong]:text-foreground">
            <section>
              <p>
                These Terms govern your use of the website operated by Aegilux Pty Ltd
                ("Aegilux", "we", "us", "our") at <a href="https://aegilux.com">aegilux.com</a>.
                By accessing or using the website, you agree to these Terms.
              </p>
              <p>
                <strong>Service engagement terms.</strong> The terms of any paid managed-security
                engagement are set out in a separately executed Master Services Agreement (MSA),
                Statement of Work (SOW), and Data Processing Agreement (DPA), not these website
                Terms. The MSA / SOW / DPA prevail in the event of any conflict with this page.
              </p>
            </section>

            <section>
              <h2>1. Information on This Website</h2>
              <p>
                Information on this website is provided for general informational purposes only
                and does not constitute professional cybersecurity, legal, or financial advice.
                References to the Australian Signals Directorate's Essential Eight maturity
                model, ISO 27001, the Privacy Act 1988, and other frameworks are descriptive of
                our service offering, not authoritative interpretations of those frameworks.
              </p>
              <p>
                Aegilux makes no representation that the Essential Eight is "guaranteed
                compliance" — the ASD itself describes the Essential Eight as a minimum set of
                preventative controls that does not require independent certification and will
                not mitigate all cyber threats.
              </p>
            </section>

            <section>
              <h2>2. Intellectual Property</h2>
              <p>
                All content on this website — text, images, logos, code — is owned by Aegilux Pty
                Ltd or its licensors and is protected by copyright. You may not reproduce,
                distribute, or create derivative works without our written permission. Open-source
                tooling we mention (Wazuh, Prowler, Trivy, Terraform) is owned by their respective
                projects and licensed under their respective open-source licences.
              </p>
            </section>

            <section>
              <h2>3. Trade Marks</h2>
              <p>
                "Aegilux" is a trade mark of Aegilux Pty Ltd. "Shield", "Sentinel", and "Fortress"
                are tier names used in our service offering. Other trade marks referenced on this
                website (including "AWS", "Wazuh", "CrowdStrike", "SentinelOne", and others) are
                the property of their respective owners.
              </p>
            </section>

            <section>
              <h2>4. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Aegilux is not liable for any indirect,
                consequential, special, or punitive damages arising from your use of this website.
                Liability arising from any paid managed-security engagement is capped under the
                terms of the executed MSA / SOW.
              </p>
              <p>
                <strong>Australian Consumer Law.</strong> Nothing in these Terms excludes,
                restricts, or modifies any guarantee, condition, warranty, right, or remedy
                conferred under the Australian Consumer Law that cannot be excluded.
              </p>
            </section>

            <section>
              <h2>5. Your Conduct</h2>
              <p>You must not:</p>
              <ul>
                <li>Use the website in a way that breaches any law or third-party right.</li>
                <li>Attempt to gain unauthorised access to the website or any related systems.</li>
                <li>Submit false or misleading information through the lead enquiry form.</li>
                <li>Use any data obtained from the website for unsolicited commercial communication.</li>
              </ul>
            </section>

            <section>
              <h2>6. Privacy</h2>
              <p>
                Our handling of personal information is governed by our <a href="/privacy">Privacy
                Policy</a>.
              </p>
            </section>

            <section>
              <h2>7. Changes</h2>
              <p>
                We may update these Terms from time to time. The "Last updated" date at the top of
                this page indicates the most recent revision. Continued use of the website after
                changes constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2>8. Governing Law</h2>
              <p>
                These Terms are governed by the laws of New South Wales, Australia. The courts of
                New South Wales have non-exclusive jurisdiction over any dispute arising out of or
                in connection with these Terms.
              </p>
            </section>

            <section>
              <h2>9. Contact</h2>
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

export default Terms;
