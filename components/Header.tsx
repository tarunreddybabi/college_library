'use client'
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Header = () => {
  const pathname=usePathname();
  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/">
        <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
      </Link>

      <ul className="flex flex-row items-center gap-8">
        <li>
        <Link href="/" className={cn('inputs:text-base cursor-pointer capatilize',  pathname === '/library' ?'text-blue-200':'text-light-100' )}>
        Library
      </Link>
            <Button>Logout</Button>
          
        </li>
      </ul>
    </header>
  );
};

export default Header;