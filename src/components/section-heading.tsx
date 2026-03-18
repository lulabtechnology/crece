type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
};

export function SectionHeading({ eyebrow, title, description, align = "left", theme = "light" }: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";
  const textTitle = theme === "dark" ? "text-white" : "text-[#173225]";
  const textDescription = theme === "dark" ? "text-white/74" : "text-[#4f6658]";

  return (
    <div className={`max-w-[58rem] ${alignment}`}>
      {eyebrow ? (
        <span className="crece-outline-tag mb-3 inline-flex items-center rounded-full px-3.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.24em] sm:mb-4 sm:px-4 sm:text-xs sm:tracking-[0.3em]">
          {eyebrow}
        </span>
      ) : null}
      <h2 className={`crece-display text-balance text-[2.7rem] font-semibold leading-[0.88] tracking-[-0.078em] sm:text-[3.9rem] lg:text-[5.2rem] ${textTitle}`}>
        {title}
      </h2>
      {description ? <p className={`mt-4 max-w-[48rem] text-pretty text-[1.02rem] leading-7 sm:mt-5 sm:text-[1.18rem] sm:leading-8 ${textDescription}`}>{description}</p> : null}
    </div>
  );
}
