export default async function GetNews(NewsType:string,nextPage:string | null) {
    let URL=`https://newsdata.io/api/1/latest?apikey=${import.meta.env.VITE_APP_NEWS_API+NewsType}${nextPage ? `&page=${nextPage}` : ''}`
    let response = await fetch(URL)
    response= await response.json();
    return response;    
}