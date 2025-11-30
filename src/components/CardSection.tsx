import NewNavbar from "./NewNavbar";
import { Card, CardHeader, CardFooter, Image } from "@heroui/react";
import Background from "./ui/Background";
import useCardSectionHandler from "@/hooks/useCardSectionHandler";
import { nanoid } from "@reduxjs/toolkit";
import { motion } from "framer-motion";
import ChatBot from "react-chatbotify";
import settings from "@/config/ChatBot";
import flow from "@/config/ChatBotFlow";
import ChatBotStyles from "@/config/ChatBotStyle";
import plugins from "@/config/ChatBotplugins";
import Loader from "./ui/Loader";
export default function CardSection() {
    const { state, newsdata, loading } = useCardSectionHandler();
    return (
        <div className="h-full w-full ">
            <NewNavbar />
            <Background />
            <ChatBot settings={settings} styles={ChatBotStyles} flow={flow} plugins={plugins} />
            {loading ? <Loader /> :
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    id="card_list"
                    className={`bg-black card flex flex-wrap items-center justify-center gap-10  p-4  ${state.info.ProfileTabOpen ? 'blur-2xl' : ''}`}
                >
                    {
                        newsdata?.map((item) => {
                            return (
                                <a href={item.source_url} target="blanck" >
                                    <Card key={nanoid()} isFooterBlurred className="  w-[300px] h-[250px] col-span-12 sm:col-span-7   ">
                                        <CardHeader className="absolute z-10 top-1 flex-col items-start">
                                            <p className="text-tiny text-white/60 uppercase font-bold">{item.pubDate}</p>
                                            <h4 className="text-white/90 font-medium text-xl">{item.title}</h4>
                                        </CardHeader>
                                        <Image
                                            removeWrapper
                                            alt="Relaxing app background"
                                            className="z-0 w-full h-full object-cover"
                                            src={item?.image_url}
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
                                            <a href={item.source_url} target="blanck" className="h-8 w-14 bg-neutral-400 rounded-full flex justify-center items-center" >
                                                More
                                            </a>
                                        </CardFooter>
                                    </Card>
                                </a>
                            )
                        })
                    }

                </motion.div>
            }
        </div>
    )
}
