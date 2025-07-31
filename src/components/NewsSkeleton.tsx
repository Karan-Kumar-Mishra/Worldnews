
import SkeletonCard from "./SkeletonCard"


export default function NewsSkeleton() {
 

    return (
        <div className="bg-black flex flex-wrap gap-10  justify-center items-center p-4">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
        </div>
    )
}
