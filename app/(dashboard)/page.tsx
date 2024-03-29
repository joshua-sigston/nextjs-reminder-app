import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { wait } from '@/lib/wait';
import { currentUser } from '@clerk/nextjs';
import { Suspense } from 'react';
import { CollectionList, Loading } from '../components';

export default async function Home() {
  return (
    <div className="flex min-h-[90vh] min-w-full flex-col items-center justify-center gap-4">
      <Suspense fallback={<Loading />}>
        <NameContainer />
      </Suspense>
      <CollectionList />
    </div>
  );
}

async function NameContainer() {
  const user = await currentUser();
  await wait(3000);
  // console.log(user);
  if (!user) {
    return <div>error</div>;
  }
  return (
    <div>
      <h1 className="max-h-fit">Welcom {user.username}</h1>
    </div>
  );
}
