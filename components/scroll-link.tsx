import { MouseEvent } from "react";
import Link from 'next/link';

interface ScrollLinkProps {
    targetId: string;
    className: string;
    children: React.ReactNode;
}

export default function ScrollLink ({ targetId, className, children }: ScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <Link href={targetId} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
};
