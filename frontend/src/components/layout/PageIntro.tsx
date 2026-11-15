import type { ReactNode } from "react";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  tone?: "ink" | "blue";
  children?: ReactNode;
};

export function PageIntro({ eyebrow, title, description, tone = "ink", children }: PageIntroProps) {
  return (
    <section className={`page-intro page-intro--${tone} px-5 py-16 sm:px-8 sm:py-24 lg:py-28`}>
      <div className="page-intro-inner mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
        <div>
          <p className="page-intro-kicker mb-5">{eyebrow}</p>
          <h1 className="page-intro-title">{title}</h1>
        </div>
        <div>
          <p className="page-intro-copy">{description}</p>
          {children}
        </div>
      </div>
    </section>
  );
}
