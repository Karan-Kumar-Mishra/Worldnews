import NewsCard from "./NewsCard"
import { useEffect } from "react";
import { useSelector } from 'react-redux'

export default function CardSection() {
    const state = useSelector((state) => state)

    useEffect(() => {
        console.log("state detect in card =>", state)
    }, [state])
    return (
        <div className={`bg-black flex flex-wrap gap-10   justify-center items-center p-4 ${state.Data.info.ProfileTabOpen ? 'blur-3xl' : ''}`}   >
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
        </div>
    )
}
