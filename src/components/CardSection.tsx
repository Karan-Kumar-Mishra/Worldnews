
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsSkeleton from "./NewsSkeleton";
import NewNavbar from "./NewNavbar";
import jsondata from "./data.json";
import { Card, CardHeader, CardFooter, Image, Button } from "@heroui/react";
import { nanoid } from "nanoid";

export default function CardSection() {
    const state = useSelector((state) => state)
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const uniqueKey = nanoid();

    const fetchMoreData = async () => {
        try {
            const response = await fetch(`https://api.example.com/items?page=${page}`);
            const newItems = await response.json();
            setItems(prevItems => [...prevItems, ...newItems]);
            setHasMore(newItems.length > 0);
            setPage(prevPage => prevPage + 1);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        setTimeout(() => {
            if (localStorage.getItem("email") == null) {
                window.location.href = "/";
            }
        }, 1000);
    }, [])

    return (
        <div>
            <NewNavbar />
            <InfiniteScroll
                dataLength={5}
                next={fetchMoreData}
                hasMore={true}
                loader={<NewsSkeleton />}
                endMessage={<p>No more items to load</p>}
                className={`bg-black h-full flex-wrap  flex   gap-10   justify-center items-center  p-4 ${state.Data.info.ProfileTabOpen ? 'blur-2xl' : ''}`}
            >

                {
                    jsondata.results.map((item) => {
                        return (
                            <Card key={uniqueKey} isFooterBlurred className="w-[350px] h-[250px] col-span-12 sm:col-span-7  shadow-neutral-900 shadow-2xl">
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

            </InfiniteScroll>
        </div>
    )
}
