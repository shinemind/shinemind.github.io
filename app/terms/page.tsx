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
                <h2 className="text-2xl font-semibold text-white mb-4">{t("terms.sections.userAccount.title")}</h2>
                <p>{t("terms.sections.userAccount.content")}</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>{t("terms.sections.userAccount.items.credentials")}</li>
                  <li>{t("terms.sections.userAccount.items.activities")}</li>
                  <li>{t("terms.sections.userAccount.items.notification")}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">{t("terms.sections.premium.title")}</h2>
                <p className="mb-3">{t("terms.sections.premium.content")}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t("terms.sections.premium.items.monthly")}</li>
                  <li>{t("terms.sections.premium.items.annual")}</li>
                  <li>{t("terms.sections.premium.items.lifetime")}</li>
                </ul>
                <p className="mt-3">{t("terms.sections.premium.trialNote")}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">{t("terms.sections.userContent.title")}</h2>
                <p className="mb-3">{t("terms.sections.userContent.content")}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t("terms.sections.userContent.items.gratitude")}</li>
                  <li>{t("terms.sections.userContent.items.affirmations")}</li>
                  <li>{t("terms.sections.userContent.items.goals")}</li>
                  <li>{t("terms.sections.userContent.items.profile")}</li>
                </ul>
                <p className="mt-3">{t("terms.sections.userContent.license")}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">{t("terms.sections.acceptableUse.title")}</h2>
                <p className="mb-3">{t("terms.sections.acceptableUse.title2")}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t("terms.sections.acceptableUse.items.unlawful")}</li>
                  <li>{t("terms.sections.acceptableUse.items.unauthorized")}</li>
                  <li>{t("terms.sections.acceptableUse.items.interfere")}</li>
                  <li>{t("terms.sections.acceptableUse.items.viruses")}</li>
                  <li>{t("terms.sections.acceptableUse.items.harass")}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">{t("terms.sections.medical.title")}</h2>
                <p>{t("terms.sections.medical.content")}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">{t("terms.sections.ip.title")}</h2>
                <p>{t("terms.sections.ip.content")}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">{t("terms.sections.liability.title")}</h2>
                <p>{t("terms.sections.liability.content")}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">{t("terms.sections.data.title")}</h2>
                <p>{t("terms.sections.data.content")}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">{t("terms.sections.termination.title")}</h2>
                <p>{t("terms.sections.termination.content")}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">{t("terms.sections.changes.title")}</h2>
                <p>{t("terms.sections.changes.content")}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">{t("terms.sections.contact.title")}</h2>
                <p>{t("terms.sections.contact.content")}</p>
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
