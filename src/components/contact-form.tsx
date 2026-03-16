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
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-slate-950/65 p-6 backdrop-blur-xl sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Nombre"
          value={form.name}
          onChange={(value) => setForm((prev) => ({ ...prev, name: value }))}
          placeholder="Tu nombre"
        />
        <Field
          label="Correo"
          value={form.email}
          onChange={(value) => setForm((prev) => ({ ...prev, email: value }))}
          placeholder="tu@correo.com"
          type="email"
        />
        <Field
          label="Teléfono"
          value={form.phone}
          onChange={(value) => setForm((prev) => ({ ...prev, phone: value }))}
          placeholder="+507 6000-0000"
        />
        <Field
          label="Empresa"
          value={form.company}
          onChange={(value) => setForm((prev) => ({ ...prev, company: value }))}
          placeholder="Nombre de empresa"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block text-sm font-medium text-slate-200">Mensaje</label>
        <textarea
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          placeholder="Cuéntanos si te interesa consultoría, seminario o ambos."
          rows={5}
          className="w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-slate-400 transition focus:border-cyan-300/40"
        />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-4 text-sm font-semibold text-slate-950 transition-transform duration-300 hover:-translate-y-0.5"
        >
          <Send className="h-4 w-4" />
          Enviar solicitud
        </button>
        <a
          href={`https://wa.me/${siteContent.contact.whatsapp}?text=${encodeURIComponent("Hola, quiero más información sobre CRECE.")}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/6 px-6 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10"
        >
          <MessageCircle className="h-4 w-4" />
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

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text"
}: FieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-200">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-slate-400 transition focus:border-cyan-300/40"
      />
    </div>
  );
}
