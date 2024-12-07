import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <>
     {/* breadcrum skeleton */}
      <Skeleton className="h-8 w-1/6 rounded-md mt-4" />
      
      {/* header skeleton */}
      <div className="flex justify-between">
        <Skeleton className="h-8 w-1/6 rounded-md mt-4" />
        <Skeleton className="h-8 w-1/6 rounded-md mt-4" />
      </div>

      {/* image skeleton */}
      <Skeleton className="h-[300px] md:h-[500px] relative mt-8" />

      {/* detail skeleton */}
      <Skeleton className="h-8 w-full rounded-md mt-4" />
    </>
  );
};
export default loading;
