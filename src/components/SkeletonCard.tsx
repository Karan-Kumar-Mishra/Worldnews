
import { Card, CardHeader, CardFooter } from "@heroui/react";
export default function SkeletonCard() {
    return (

        <Card isFooterBlurred className="w-[350px] h-[250px] col-span-12 sm:col-span-7  shadow-neutral-900  bg-gray-800  shadow">
            <CardHeader className="absolute z-10  flex-col items-start bg-gray-700 animate-pulse">
                <p className="text-tiny text-white/60 uppercase font-bold animate-pulse">Loading...</p>
                <h4 className="text-white/90 font-medium text-xl animate-pulse">Loading...</h4>
            </CardHeader>

            <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 animate-pulse">
                <div className="flex grow gap-2 items-center animate-pulse">
                    <div className="rounded-full w-10 h-11 bg-neutral-500 animate-pulse">
                    </div>
                    <div className="flex flex-col animate-pulse gap-1">
                        <p className="text-tiny  h-4 bg-neutral-400 w-25 rounded-full animate-pulse"></p>
                        <p className="text-tiny  h-4 bg-neutral-400 w-35 rounded-full animate-pulse"></p>
                    </div>
                </div>
                <div className="animate-pulse h-8 w-14 bg-neutral-400 rounded-full" >

                </div>
            </CardFooter>
        </Card>


    );
}
