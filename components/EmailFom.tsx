"use client";
// Removed privacy note icon
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useLanguage } from "@/lib/i18n";

export default function EmailForm() {
  const { t } = useLanguage();
  const [email, setEmail] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const endpoint =
      process.env.NEXT_PUBLIC_FORMSPARK_ENDPOINT ||
      (process.env.NEXT_PUBLIC_FORMSPARK_FORM_ID
        ? `https://submit-form.com/${process.env.NEXT_PUBLIC_FORMSPARK_FORM_ID}`
        : undefined);

    if (!endpoint) {
      toast.error(t("waitlist.endpointError"));
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setEmail("");
        toast.success(t("waitlist.success"));
      } else {
        setEmail("");
        toast.error(t("waitlist.error"));
      }
    } catch (err) {
      setEmail("");
      console.error(err);
      toast.error(t("waitlist.networkError"));
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <form onSubmit={handleSubmit} method="POST" className="max-w-lg w-full">
        <div className="flex flex-col gap-3 sm:flex-row">
          <label className="sr-only" htmlFor="email-address">
            Email address
          </label>
          <input
            autoComplete="email"
            className="block h-12 w-full appearance-none rounded-lg border-2 border-white/20 bg-white/10 backdrop-blur-sm px-4 py-3 text-white placeholder-gray-400 duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:invalid:border-red-400 focus:invalid:ring-red-500 sm:text-sm"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            id="email-address"
            name="email"
            placeholder={t("waitlist.emailPlaceholder")}
            required
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
          <button
            className="flex h-12 shrink-0 items-center justify-center gap-1 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 disabled:opacity-60 disabled:hover:scale-100 shadow-lg"
            type="submit"
            disabled={isSubmitting}
          >
            <span>{isSubmitting ? t("waitlist.submitting") : t("waitlist.submit")}</span>
          </button>
        </div>
      </form>

      {/* Privacy note removed per request */}
    </div>
  );
}
