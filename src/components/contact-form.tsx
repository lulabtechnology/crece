"use client";

import { FormEvent, useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { siteContent } from "@/data/siteContent";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

const defaultState: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(defaultState);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Solicitud desde landing CRECE - ${form.name || "Nuevo contacto"}`);
    const body = encodeURIComponent(
      [
        `Nombre: ${form.name}`,
        `Correo: ${form.email}`,
        `Teléfono: ${form.phone}`,
        `Empresa: ${form.company}`,
        "",
        "Mensaje:",
        form.message
      ].join("\n")
    );

    window.location.href = `mailto:${siteContent.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="crece-panel crece-premium-stroke rounded-[2rem] p-6 sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nombre" value={form.name} onChange={(value) => setForm((prev) => ({ ...prev, name: value }))} placeholder="Tu nombre" />
        <Field label="Correo" value={form.email} onChange={(value) => setForm((prev) => ({ ...prev, email: value }))} placeholder="tu@correo.com" type="email" />
        <Field label="Teléfono" value={form.phone} onChange={(value) => setForm((prev) => ({ ...prev, phone: value }))} placeholder="+507 6000-0000" />
        <Field label="Empresa" value={form.company} onChange={(value) => setForm((prev) => ({ ...prev, company: value }))} placeholder="Nombre de empresa" />
      </div>

      <div className="mt-3 sm:mt-4">
        <label className="mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#365240]">Mensaje</label>
        <textarea
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          placeholder="Cuéntanos si te interesa consultoría, productos financieros o capacitación."
          rows={5}
          className="crece-field-surface w-full rounded-2xl px-4 py-3 text-sm text-[#173225] outline-none ring-0 placeholder:text-[#7a8677] transition focus:border-[#2b7a47]/44"
        />
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row">
        <button type="submit" className="crece-button-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5">
          <Send className="h-4 w-4" />
          Enviar solicitud
        </button>
        <a href={`https://wa.me/${siteContent.contact.whatsapp}?text=${encodeURIComponent("Hola, quiero más información sobre CRECE.")}`} target="_blank" rel="noreferrer" className="crece-button-secondary inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold transition-colors duration-300 hover:bg-white">
          <MessageCircle className="h-4 w-4 text-[#2b7a47]" />
          WhatsApp
        </a>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: "text" | "email";
};

function Field({ label, value, onChange, placeholder, type = "text" }: FieldProps) {
  return (
    <div>
      <label className="mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[#365240]">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="crece-field-surface w-full rounded-2xl px-4 py-3 text-sm text-[#173225] outline-none ring-0 placeholder:text-[#7a8677] transition focus:border-[#2b7a47]/44"
      />
    </div>
  );
}
