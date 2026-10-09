import Link from "next/link";
import styles from "./ui.module.css";

type Variant = "primary" | "secondary" | "accent";

const variantClass: Record<Variant, string> = {
  primary: styles.btnPrimary,
  secondary: styles.btnSecondary,
  accent: styles.btnAccent,
};

type Common = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  disabled?: boolean;
};

type ButtonAsButton = Common &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = Common & { href: string; target?: string; rel?: string };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { children, variant = "primary", className = "", disabled } = props;
  const classes = [styles.btn, variantClass[variant], className].filter(Boolean).join(" ");

  if ("href" in props && props.href) {
    return (
      <Link
        href={props.href}
        className={classes}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        target={props.target}
        rel={props.rel}
      >
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button
      type={buttonProps.type ?? "button"}
      className={classes}
      disabled={disabled}
      onClick={buttonProps.onClick}
      aria-busy={buttonProps["aria-busy"]}
    >
      {children}
    </button>
  );
}
