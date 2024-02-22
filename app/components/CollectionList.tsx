import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { currentUser } from '@clerk/nextjs';
import prisma from '@/lib/prisma';
import CreateBtn from './CreateBtn';

export default async function CollectionList() {
  const user = await currentUser();

  const collection = await prisma.collection.findMany({
    where: {
      userId: user?.id,
    },
  });

  if (collection?.length === 0) {
    return (
      <div>
        <Alert>
          <AlertTitle>There are no collections yet</AlertTitle>
          <AlertDescription>
            Create a collection to get started
          </AlertDescription>
        </Alert>
        <CreateBtn />
      </div>
    );
  }
}
