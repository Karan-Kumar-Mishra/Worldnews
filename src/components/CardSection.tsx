import NewNavbar from "./NewNavbar";
import { Card, CardHeader, CardFooter, Image } from "@heroui/react";
import Background from "./ui/Background";

import useCardSectionHandler from "@/hooks/useCardSectionHandler";


export default function CardSection() {
    const { state, newsdata } = useCardSectionHandler();

    return (
        <div className=" h-full w-full">
            <NewNavbar />
            <Background />
            <div
                className={`bg-black flex flex-wrap items-center justify-center gap-10  p-4 ${state.Data.info.ProfileTabOpen ? 'blur-2xl' : ''}`}
            >
                {
                    newsdata.map((item) => {
                       
                        return (
                            <Card  key={item.source_id || item.pubDate } isFooterBlurred className="  w-[300px] h-[250px] col-span-12 sm:col-span-7   ">
                                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                                    <p className="text-tiny text-white/60 uppercase font-bold">{item.pubDate}</p>
                                    <h4 className="text-white/90 font-medium text-xl">{item.title}</h4>
                                </CardHeader>
                                <Image
                                    removeWrapper
                                    alt="Relaxing app background"
                                    className="z-0 w-full h-full object-cover"
                                    src={item.image_url}
                                />
                                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                                    <div className="flex grow gap-2 items-center">
                                        <Image
                                            alt="Breathing app icon"
                                            className="rounded-full w-10 h-11 bg-black"
                                            src="https://heroui.com/images/breathing-app-icon.jpeg"
                                        />
                                        <div className="flex flex-col">
                                            <p className="text-tiny text-white/60">Breathing App</p>
                                            <p className="text-tiny text-white/60">Get a good night&#39;s sleep.</p>
                                        </div>
                                    </div>
                                    <a href={item.source_url} className="h-8 w-14 bg-neutral-400 rounded-full flex justify-center items-center" >
                                        More
                                    </a>
                                </CardFooter>
                            </Card>
                        )
                    })
                }

            </div>
        </div>
    )
}
