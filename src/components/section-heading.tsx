type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <span className="crece-outline-tag mb-4 inline-flex items-center rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em]">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="crece-display text-balance text-[2.45rem] font-semibold leading-[0.95] tracking-[-0.05em] text-[#f5efe4] sm:text-[3.3rem] lg:text-[4.3rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-pretty text-base leading-8 text-[#cdd4c5] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
