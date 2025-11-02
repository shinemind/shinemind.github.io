import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - ShineMind",
  description: "Privacy Policy for ShineMind",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/"
          className="inline-flex items-center text-purple-300 hover:text-purple-200 mb-8 transition-colors"
        >
          ← Back to Home
        </Link>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="space-y-8 text-gray-300">
              <section>
                <p>
                  At ShineMind, we take your privacy seriously. This Privacy Policy explains how we collect,
                  use, disclose, and safeguard your information when you use our mobile application.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
                <p className="mb-3">
                  We collect information you provide directly to us when using ShineMind:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Account Information:</strong> Name, email address (via Apple Sign-In), profile picture</li>
                  <li><strong>User Content:</strong> Gratitude journal entries, affirmation recordings, goal entries, meditation preferences, photos you upload</li>
                  <li><strong>Usage Data:</strong> Meditation sessions, activity completion, streaks, session times, app interactions</li>
                  <li><strong>Device Information:</strong> Device type, operating system, app version, unique device identifiers</li>
                  <li><strong>Subscription Information:</strong> Purchase history and subscription status (managed through Apple/RevenueCat)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
                <p className="mb-3">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve the App's features and functionality</li>
                  <li>Sync your data across devices using Supabase</li>
                  <li>Track your progress, streaks, and activity history</li>
                  <li>Send you notifications about your routines (if enabled)</li>
                  <li>Process and manage your premium subscription</li>
                  <li>Provide customer support and respond to your inquiries</li>
                  <li>Analyze app usage to improve user experience</li>
                  <li>Ensure the security and integrity of our services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">3. Information Sharing and Disclosure</h2>
                <p className="mb-3">
                  We do not sell your personal information. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service Providers:</strong> We use Supabase for data storage and RevenueCat for subscription management. These providers are bound by confidentiality obligations.</li>
                  <li><strong>Apple:</strong> Authentication is handled through Apple Sign-In, subject to Apple's privacy policy</li>
                  <li><strong>Legal Requirements:</strong> When required by law, regulation, legal process, or governmental request</li>
                  <li><strong>Protection of Rights:</strong> To protect the rights, property, and safety of ShineMind, our users, or others</li>
                  <li><strong>With Your Consent:</strong> When you explicitly consent to sharing your information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational security measures to protect your
                  personal information against unauthorized access, alteration, disclosure, or destruction.
                  This includes:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Row-Level Security (RLS) policies in Supabase database</li>
                  <li>Secure authentication via Apple Sign-In</li>
                  <li>Regular security assessments and updates</li>
                </ul>
                <p className="mt-3">
                  However, no method of transmission over the internet or electronic storage is 100% secure.
                  We cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Data Retention</h2>
                <p>
                  We retain your personal information for as long as your account is active or as needed to
                  provide you services. You may request deletion of your data at any time through the app
                  settings or by contacting us. Upon deletion:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Your account and all associated data will be permanently deleted</li>
                  <li>Your gratitude entries, affirmations, goals, and meditation history will be removed</li>
                  <li>Some data may be retained for legal or regulatory compliance</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Your Rights and Choices</h2>
                <p className="mb-3">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                  <li><strong>Deletion:</strong> Request deletion of your account and data</li>
                  <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
                  <li><strong>Opt-Out:</strong> Disable notifications in app settings</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing where applicable</li>
                </ul>
                <p className="mt-3">
                  To exercise these rights, contact us at{" "}
                  <a href="mailto:contact@shinemind.app" className="text-purple-400 hover:text-purple-300 underline">
                    contact@shinemind.app
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Children's Privacy</h2>
                <p>
                  ShineMind is not intended for children under the age of 13. We do not knowingly collect
                  personal information from children under 13. If you are a parent or guardian and believe
                  your child has provided us with personal information, please contact us immediately, and
                  we will take steps to delete such information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">8. International Data Transfers</h2>
                <p>
                  Your information may be transferred to and maintained on servers located outside of your
                  state, province, country, or other governmental jurisdiction where data protection laws
                  may differ. By using ShineMind, you consent to the transfer of your information to our
                  facilities and service providers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">9. Third-Party Services</h2>
                <p className="mb-3">
                  ShineMind integrates with the following third-party services:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Supabase:</strong> Database and authentication services</li>
                  <li><strong>RevenueCat:</strong> Subscription and payment processing</li>
                  <li><strong>Apple Services:</strong> Apple Sign-In, Push Notifications, In-App Purchases</li>
                </ul>
                <p className="mt-3">
                  These services have their own privacy policies. We encourage you to review them.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">10. Camera and Photo Library</h2>
                <p>
                  ShineMind requests access to your camera and photo library to allow you to:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Add photos to gratitude journal entries</li>
                  <li>Set a profile picture</li>
                </ul>
                <p className="mt-3">
                  Photos are stored securely in your account and are not shared with third parties. You can
                  revoke camera/photo access at any time in your device settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">11. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any material
                  changes by posting the new Privacy Policy in the App and updating the "Last updated" date.
                  Your continued use of ShineMind after such modifications constitutes your acknowledgment
                  and acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">12. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or our privacy practices, please
                  contact us at:
                </p>
                <p className="mt-3">
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
