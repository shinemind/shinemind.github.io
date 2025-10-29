import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for ShineMind",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 text-sm">
            ← Back to ShineMind
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By using ShineMind, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our app.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 leading-relaxed">
              ShineMind is a mobile application designed to help you start and end your day with mindfulness, meditation, gratitude practices, and personal affirmations. Our goal is to provide a gentle way to enhance your daily routine.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
            <ul className="text-gray-700 leading-relaxed list-disc pl-6 space-y-2">
              <li>You must be at least 13 years old to use ShineMind</li>
              <li>You are responsible for maintaining the confidentiality of your account</li>
              <li>You agree to use the app in accordance with applicable laws</li>
              <li>You will not attempt to reverse engineer or modify the app</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Content and Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All content, features, and functionality of ShineMind are owned by us and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              ShineMind is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of the app. The app is designed for general wellness purposes and is not a substitute for professional medical advice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update these Terms of Service from time to time. We will notify you of any material changes by posting the new terms in the app or on our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:support@shinemind.app" className="text-blue-600 hover:text-blue-800">
                contact@shinemind.app
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
