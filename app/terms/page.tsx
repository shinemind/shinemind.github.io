"use client";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export default function TermsPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/"
          className="inline-flex items-center text-purple-300 hover:text-purple-200 mb-8 transition-colors"
        >
          {t("terms.backToHome")}
        </Link>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("terms.title")}
          </h1>
          <p className="text-gray-400 mb-8">{t("terms.lastUpdated")}: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">{t("terms.sections.acceptance.title")}</h2>
                <p>
                  {t("terms.sections.acceptance.content")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">{t("terms.sections.description.title")}</h2>
                <p>
                  {t("terms.sections.description.content")}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. User Account</h2>
                <p>
                  To use certain features of the App, you must create an account using Apple Sign-In.
                  You are responsible for:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use of your account</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Premium Subscription</h2>
                <p className="mb-3">
                  ShineMind offers a free version with limited features and premium subscription options:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Monthly subscription: $6.99/month (includes 7 days free trial)</li>
                  <li>Annual subscription: $39.99/year (includes 7 days free trial)</li>
                  <li>Lifetime access: $79.99 (one-time payment)</li>
                </ul>
                <p className="mt-3">
                  Both monthly and annual subscriptions include a 7-day free trial. You will not be charged
                  until the trial period ends. Subscriptions automatically renew unless canceled at least 24
                  hours before the end of the current period. You can manage or cancel your subscription through
                  your Apple ID account settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. User Content</h2>
                <p className="mb-3">
                  You retain ownership of any content you create in the App, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Gratitude journal entries and photos</li>
                  <li>Custom affirmation recordings</li>
                  <li>Goal entries and notes</li>
                  <li>Profile information</li>
                </ul>
                <p className="mt-3">
                  By creating content in the App, you grant us a license to store and process this
                  content solely for the purpose of providing the service to you.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Acceptable Use</h2>
                <p className="mb-3">You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the App for any unlawful purpose</li>
                  <li>Attempt to gain unauthorized access to any portion of the App</li>
                  <li>Interfere with or disrupt the App's servers or networks</li>
                  <li>Upload viruses or malicious code</li>
                  <li>Harass, abuse, or harm another person through the App</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Medical Disclaimer</h2>
                <p>
                  ShineMind is a wellness tool and is not intended to diagnose, treat, cure, or prevent
                  any disease or medical condition. The App is not a substitute for professional medical
                  advice, diagnosis, or treatment. Always seek the advice of your physician or other
                  qualified health provider with any questions you may have regarding a medical condition.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">8. Intellectual Property</h2>
                <p>
                  The App and its original content, features, and functionality are owned by ShineMind
                  and are protected by international copyright, trademark, patent, trade secret, and
                  other intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">9. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, ShineMind shall not be liable for any indirect,
                  incidental, special, consequential, or punitive damages, or any loss of profits or
                  revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill,
                  or other intangible losses.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">10. Data and Privacy</h2>
                <p>
                  Your use of the App is also governed by our Privacy Policy. Please review our{" "}
                  <Link href="/privacy" className="text-purple-400 hover:text-purple-300 underline">
                    Privacy Policy
                  </Link>
                  , which explains how we collect, use, and protect your personal information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">11. Termination</h2>
                <p>
                  We may terminate or suspend your account and access to the App immediately, without
                  prior notice or liability, for any reason, including if you breach these Terms of
                  Service. Upon termination, your right to use the App will immediately cease.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">12. Changes to Terms</h2>
                <p>
                  We reserve the right to modify or replace these Terms at any time. If a revision is
                  material, we will provide at least 30 days' notice prior to any new terms taking effect.
                  Your continued use of the App after such modifications constitutes acceptance of the
                  updated Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">13. Contact Us</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <p className="mt-2">
                  <a
                    href="mailto:contact@shinemind.app"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    contact@shinemind.app
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
