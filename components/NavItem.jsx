import Link from 'next/link';

export default function NavItem({
  href,
  target,
  rel,
  label,
  onClick,
  className,
}) {
  
  return (
    <li onClick={onClick} className={className}>
       <Link href={href} target={target} rel={rel}>{label}</Link>
    </li>
  );
}
