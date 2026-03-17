type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <span className="crece-outline-tag mb-3 inline-flex items-center rounded-full px-3.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] sm:mb-4 sm:px-4 sm:text-xs sm:tracking-[0.28em]">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="crece-display text-balance text-[2rem] font-semibold leading-[0.98] tracking-[-0.04em] text-[#173225] sm:text-[3rem] lg:text-[4rem]">
        {title}
      </h2>
      {description ? <p className="mt-4 text-pretty text-[0.98rem] leading-7 text-[#4f6658] sm:mt-5 sm:text-lg sm:leading-8">{description}</p> : null}
    </div>
  );
}
