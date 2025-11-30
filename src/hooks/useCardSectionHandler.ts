import jsondata from "../components/data.json";
import useGithub from "./useGithub";
import { RootState } from "@/Redux/store";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NewsType } from "@/types/NewsType";
import GetNews from "@/lib/GetNews";
import { setNewsStateData } from "@/Redux/Reducers";

export default function useCardSectionHandler() {
  const state = useSelector((state: RootState) => state.Data);
  const { Getuser } = useGithub();
  const [nextpage, setnextpage] = useState<string | null>(null);
  const [newsdata, setnewsdata] = useState<NewsType[]>([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const Getnews = () => {
    if (loading) return;
    setLoading(true);
    GetNews(state.info.Tab, nextpage)
      .then((res: any) => {
        setnextpage(res?.nextPage);
        dispatch(setNewsStateData(res?.results))
        setnewsdata((prevnews) => [...prevnews, ...(res?.results || jsondata.results)]);
      })
      .catch((err: Error) => {
        console.log(err);
        setnewsdata((prevnews) => [...prevnews, ...jsondata.results]);
      })
      .finally(() => setLoading(false));
  };

  const handleScroll = () => {
    try {
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      if (scrollTop + clientHeight + 100 >= scrollHeight && !loading) {
        Getnews();
      }
    } catch (error) {
      console.log("error while scrolling...", error);
    }
  };
  useEffect(() => {
    console.log("tab is change ->", state.info.Tab)
    dispatch(setNewsStateData([]))
    setnewsdata([])
    Getnews();
  }, [state.info.Tab])
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, nextpage]);

  useEffect(() => {
    Getuser();
    Getnews();
    const timer = setTimeout(() => {
      if (!localStorage.getItem("email")) {
        window.location.href = "/";
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return { state, newsdata, setnewsdata, handleScroll, loading };
}
