"use client";

import { useState } from "react";
import type { Lang } from "@/lib/i18n";

/**
 * Web3Forms access key.
 * https://web3forms.com 에서 회사 이메일(COREROBOTICS@CORE-ROBOTICS.KR)로 무료 발급.
 * 발급받은 키를 .env.local 의 NEXT_PUBLIC_WEB3FORMS_KEY 에 넣거나 아래 기본값을 교체하세요.
 */
const WEB3FORMS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "REPLACE_WITH_WEB3FORMS_ACCESS_KEY";
const isContactFormConfigured =
  WEB3FORMS_KEY !== "REPLACE_WITH_WEB3FORMS_ACCESS_KEY";

type Status = "idle" | "sending" | "ok" | "error";

const t = {
  name: { ko: "이름", en: "Name" },
  company: { ko: "회사명", en: "Company" },
  email: { ko: "이메일", en: "Email" },
  phone: { ko: "연락처", en: "Phone" },
  message: { ko: "문의 내용", en: "Message" },
  optional: { ko: "(선택)", en: "(optional)" },
  submit: { ko: "문의 보내기", en: "Send inquiry" },
  sending: { ko: "전송 중…", en: "Sending…" },
  ok: {
    ko: "문의가 정상적으로 접수되었습니다. 빠른 시일 내에 회신드리겠습니다.",
    en: "Your inquiry has been received. We will get back to you shortly.",
  },
  error: {
    ko: "전송에 실패했습니다. 잠시 후 다시 시도하시거나 이메일로 연락 주세요.",
    en: "Failed to send. Please try again later or contact us by email.",
  },
  configError: {
    ko: "문의폼 설정이 완료되지 않았습니다. 이메일로 연락 주세요.",
    en: "The contact form is not configured. Please contact us by email.",
  },
} satisfies Record<string, Record<Lang, string>>;

export default function ContactForm({ lang }: { lang: Lang }) {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isContactFormConfigured) {
      setStatus("error");
      return;
    }
    setStatus("sending");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: lang === "ko" ? "[코어로보틱스] 홈페이지 사업 문의" : "[CORE ROBOTICS] Website Inquiry",
          from_name: "CORE ROBOTICS Website",
          ...data,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="cform" onSubmit={onSubmit}>
      {/* 스팸 봇 방지용 honeypot — 보조기술/탭 순서에서 제외 */}
      <input
        type="checkbox"
        name="botcheck"
        className="cform-hp"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        aria-label="Leave this field empty"
      />

      <div className="cform-row2">
        <label className="cform-field">
          <span>{t.name[lang]}</span>
          <input type="text" name="name" required autoComplete="name" />
        </label>
        <label className="cform-field">
          <span>{t.company[lang]} <em>{t.optional[lang]}</em></span>
          <input type="text" name="company" autoComplete="organization" />
        </label>
      </div>

      <div className="cform-row2">
        <label className="cform-field">
          <span>{t.email[lang]}</span>
          <input type="email" name="email" required autoComplete="email" />
        </label>
        <label className="cform-field">
          <span>{t.phone[lang]} <em>{t.optional[lang]}</em></span>
          <input type="tel" name="phone" autoComplete="tel" />
        </label>
      </div>

      <label className="cform-field">
        <span>{t.message[lang]}</span>
        <textarea name="message" rows={5} required />
      </label>

      <button type="submit" className="cform-submit" disabled={status === "sending"}>
        {status === "sending" ? t.sending[lang] : t.submit[lang]}
      </button>

      {status === "ok" && <p className="cform-msg ok">{t.ok[lang]}</p>}
      {status === "error" && (
        <p className="cform-msg error">
          {isContactFormConfigured ? t.error[lang] : t.configError[lang]}
        </p>
      )}
    </form>
  );
}
