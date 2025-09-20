import jsondata from "../components/data.json";
import useGithub from "./useGithub";
import { RootState } from "@/Redux/store";
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'


export default function useCardSectionHandler() {
    const state = useSelector((state: RootState) => state)
    const { Getuser } = useGithub();
    const [newsdata, setnewsdata] = useState<any[]>(jsondata.results)
    useEffect(() => {
        const handleScroll = () => {
            if (Math.ceil(document.documentElement.scrollTop + document.documentElement.clientHeight) >= document.documentElement.scrollHeight) {
                console.log("reached at bottom.. ", newsdata.length);
                setnewsdata(prevnews => [...prevnews, ...jsondata.results]); // FIX here also
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll); // cleanup
        };
    }, [newsdata]);

    useEffect(() => {
        Getuser();
        setTimeout(() => {
            if (localStorage.getItem("email") == null) {
                window.location.href = "/";
            }
        }, 1000);
        setnewsdata(prevnews => [...prevnews, jsondata.results]);
    }, [])
    return { state, newsdata, setnewsdata };
}