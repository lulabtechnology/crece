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
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-[#f3efe3] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-pretty text-base leading-7 text-[#c6cec0] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
