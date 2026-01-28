import { Button, ButtonProps } from "./button";
import { ReactNode } from "react";

interface ScrollButtonProps extends ButtonProps {
  scrollTo?: string;
  href?: string;
  children: ReactNode;
  onNavigate?: () => void;
}

export function ScrollButton({
  scrollTo,
  href,
  children,
  onNavigate,
  ...props
}: ScrollButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Se tem link externo, abre em nova aba
    if (href) {
      window.open(href, "_blank", "noopener,noreferrer");
    }

    // Se tem seção para scroll, faz o scroll
    if (scrollTo) {
      const element = document.querySelector(scrollTo);
      if (element) {
        const offset = 80;
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: "smooth",
        });
      }
    }

    onNavigate?.();
  };

  return (
    <Button
      {...props}
      onClick={handleClick}
      className={`cursor-pointer ${props.className || ""}`}
    >
      {children}
    </Button>
  );
}
