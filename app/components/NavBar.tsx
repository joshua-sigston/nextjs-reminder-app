import { UserButton } from '@clerk/nextjs';
import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';

export default function NavBar() {
  return (
    <nav className="flex justify-between">
      <Logo />
      <div className="flex gap-3 items-center">
        <UserButton afterSignOutUrl="/" />
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
