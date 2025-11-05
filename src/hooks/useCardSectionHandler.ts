import jsondata from "../components/data.json";
import useGithub from "./useGithub";
import { RootState } from "@/Redux/store";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NewsType } from "@/types/NewsType";

export default function useCardSectionHandler() {
    const state = useSelector((state: RootState) => state.Data);
    const { Getuser } = useGithub();
    const [newsdata, setnewsdata] = useState<NewsType[]>(jsondata.results);
    const handleScroll = () => {
        try {
            const scrollTop = document.documentElement.scrollTop;
            const clientHeight = window.innerHeight;
            const scrollHeight = document.documentElement.scrollHeight;
            if (scrollTop + clientHeight + 100 >= scrollHeight) {
                setnewsdata((prevnews) => [...prevnews, ...jsondata.results]);
            }
        } catch (error) {
            console.log("error while scrolling...", error)
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        Getuser();
        setTimeout(() => {
            if (!localStorage.getItem("email")) {
                window.location.href = "/";
            }
        }, 1000);
        setnewsdata((prevnews) => [...prevnews, ...jsondata.results]);
    }, []);

    return { state, newsdata, setnewsdata, handleScroll };
}
