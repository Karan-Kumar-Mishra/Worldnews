
import SkeletonCard from "./SkeletonCard"


export default function NewsSkeleton() {


    return (
        <div className=" flex flex-wrap gap-10 p-4 justify-center items-center bg-black">
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
