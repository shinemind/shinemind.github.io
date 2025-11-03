"use client";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
export default function PrivacyPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/"
          className="inline-flex items-center text-purple-300 hover:text-purple-200 mb-8 transition-colors"
        >
          {t("privacy.backToHome")}
        </Link>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("privacy.title")}
          </h1>
          <p className="text-gray-400 mb-8">{t("privacy.lastUpdated")}: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-invert prose-lg max-w-none">
            <div className="space-y-8 text-gray-300">
              <section>
                <p>{t("privacy.intro")}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">{t("privacy.sections.information.title")}</h2>
                <p className="mb-3">{t("privacy.sections.information.content")}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t("privacy.sections.information.items.account")}</li>
                  <li>{t("privacy.sections.information.items.content")}</li>
                  <li>{t("privacy.sections.information.items.usage")}</li>
                  <li>{t("privacy.sections.information.items.device")}</li>
                  <li>{t("privacy.sections.information.items.subscription")}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">{t("privacy.sections.use.title")}</h2>
                <p className="mb-3">{t("privacy.sections.use.content")}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t("privacy.sections.use.items.provide")}</li>
                  <li>{t("privacy.sections.use.items.sync")}</li>
                  <li>{t("privacy.sections.use.items.track")}</li>
                  <li>{t("privacy.sections.use.items.notifications")}</li>
                  <li>{t("privacy.sections.use.items.process")}</li>
                  <li>{t("privacy.sections.use.items.support")}</li>
                  <li>{t("privacy.sections.use.items.analyze")}</li>
                  <li>{t("privacy.sections.use.items.security")}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">{t("privacy.sections.sharing.title")}</h2>
                <p className="mb-3">{t("privacy.sections.sharing.content")}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t("privacy.sections.sharing.items.providers")}</li>
                  <li>{t("privacy.sections.sharing.items.apple")}</li>
                  <li>{t("privacy.sections.sharing.items.legal")}</li>
                  <li>{t("privacy.sections.sharing.items.protection")}</li>
                  <li>{t("privacy.sections.sharing.items.consent")}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">{t("privacy.sections.security.title")}</h2>
                <p>{t("privacy.sections.security.content")}</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>{t("privacy.sections.security.items.encryption")}</li>
                  <li>{t("privacy.sections.security.items.rls")}</li>
                  <li>{t("privacy.sections.security.items.auth")}</li>
                  <li>{t("privacy.sections.security.items.assessments")}</li>
                </ul>
                <p className="mt-3">{t("privacy.sections.security.note")}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">{t("privacy.sections.retention.title")}</h2>
                <p>{t("privacy.sections.retention.content")}</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>{t("privacy.sections.retention.items.deleted")}</li>
                  <li>{t("privacy.sections.retention.items.removed")}</li>
                  <li>{t("privacy.sections.retention.items.retained")}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">{t("privacy.sections.rights.title")}</h2>
                <p className="mb-3">{t("privacy.sections.rights.content")}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t("privacy.sections.rights.items.access")}</li>
                  <li>{t("privacy.sections.rights.items.correction")}</li>
                  <li>{t("privacy.sections.rights.items.deletion")}</li>
                  <li>{t("privacy.sections.rights.items.portability")}</li>
                  <li>{t("privacy.sections.rights.items.optout")}</li>
                  <li>{t("privacy.sections.rights.items.withdraw")}</li>
                </ul>
                <p className="mt-3">{t("privacy.sections.rights.contact")}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">{t("privacy.sections.children.title")}</h2>
                <p>{t("privacy.sections.children.content")}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">{t("privacy.sections.transfers.title")}</h2>
                <p>{t("privacy.sections.transfers.content")}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">{t("privacy.sections.thirdParty.title")}</h2>
                <p className="mb-3">{t("privacy.sections.thirdParty.content")}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t("privacy.sections.thirdParty.items.supabase")}</li>
                  <li>{t("privacy.sections.thirdParty.items.revenuecat")}</li>
                  <li>{t("privacy.sections.thirdParty.items.apple")}</li>
                </ul>
                <p className="mt-3">{t("privacy.sections.thirdParty.note")}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">{t("privacy.sections.camera.title")}</h2>
                <p>{t("privacy.sections.camera.content")}</p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>{t("privacy.sections.camera.items.photos")}</li>
                  <li>{t("privacy.sections.camera.items.profile")}</li>
                </ul>
                <p className="mt-3">{t("privacy.sections.camera.note")}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">{t("privacy.sections.changes.title")}</h2>
                <p>{t("privacy.sections.changes.content")}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">{t("privacy.sections.contact.title")}</h2>
                <p>{t("privacy.sections.contact.content")}</p>
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
