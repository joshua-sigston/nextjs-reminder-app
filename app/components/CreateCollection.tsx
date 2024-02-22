import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import React from 'react';

interface Props {
  isOpen: boolean;
  toggleSheet: (open: boolean) => void;
}
export default function CreateCollection({ isOpen, toggleSheet }: Props) {
  return (
    <Sheet isOpen={isOpen} toggleSheet={toggleSheet}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add new collection</SheetTitle>
          <SheetDescription>
            Collections are a way to group tasks
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
