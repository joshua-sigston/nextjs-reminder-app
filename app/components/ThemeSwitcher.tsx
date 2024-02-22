'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MoonIcon, SunIcon, DesktopIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // console.log(theme);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <Tabs defaultValue={theme}>
      <TabsList className="flex gap-3 h-full">
        <TabsTrigger value="light" onClick={(e) => setTheme('light')}>
          <SunIcon />
        </TabsTrigger>
        <TabsTrigger value="dark" onClick={(e) => setTheme('dark')}>
          <MoonIcon />
        </TabsTrigger>
        <TabsTrigger value="system" onClick={(e) => setTheme('system')}>
          <DesktopIcon />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
