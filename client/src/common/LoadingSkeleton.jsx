import Skeleton from "react-loading-skeleton";

const LoadingSkeleton = () => {
  return (
    <div>
      {/* Example using react-loading-skeleton */}
      <Skeleton height={100} width={200} />
      <Skeleton count={5} />
    </div>
  );
};

export default LoadingSkeleton;
