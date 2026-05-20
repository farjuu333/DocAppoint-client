
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function NavLink({ href, children, className, ...props }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link 
      href={href} 
      className={`${className} ${isActive ? 'px-5 py-2 text-[#48C8D0] font-semibold bg-[#48C8D0] rounded-lg' : ''}`} 
      {...props}
    >
      {children}
    </Link>
  );
}