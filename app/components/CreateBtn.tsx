'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import CreateCollection from './CreateCollection';
export default function CreateBtn() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSheet = (isOpen: boolean) => setIsOpen(!isOpen);

  return (
    <div>
      {' '}
      <Button
        variant="outline"
        className="dark:text-black dark:bg-white w-full bg-slate-300"
      >
        Create
      </Button>
      <CreateCollection isOpen={isOpen} toggleSheet={toggleSheet} />
    </div>
  );
}
