import { ArrowRight } from "lucide-react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
  showArrow?: boolean;
};

const styles = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-strong focus-visible:ring-primary",
  secondary:
    "border border-border bg-background text-foreground hover:border-primary hover:text-primary focus-visible:ring-primary",
  light: "bg-background text-primary hover:bg-secondary focus-visible:ring-background",
};

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

export function SiteLinkButton({
  children,
  variant = "primary",
  className = "",
  showArrow = false,
  ...props
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
      {showArrow ? <ArrowRight aria-hidden="true" className="size-4" /> : null}
    </a>
  );
}

export function SiteButton({
  children,
  variant = "primary",
  className = "",
  showArrow = false,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
      {showArrow ? <ArrowRight aria-hidden="true" className="size-4" /> : null}
    </button>
  );
}
