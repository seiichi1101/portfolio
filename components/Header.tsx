import React from 'react';
import Link from 'next/link';
import { Seiichi } from './icons/seiichi';

const Header: React.FC = () => {
  return (
    <nav className="flex justify-between items-center bg-black p-4">
      <Link href="/">
        <Seiichi className="mx-2" />
      </Link>
      <div>
        <Link href="/blog">
          <span className="text-white mx-4">Blog</span>
        </Link>
        <Link href="/showcase">
          <span className="text-white mx-4">Showcase</span>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
