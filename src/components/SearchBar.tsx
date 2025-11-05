import { useState } from "react"
import newsdata from './data.json'
import '../styles/style.css'
export default function SearchBar() {
  const data = newsdata.results;
  const [items, setitems] = useState<any[]>([])

  function handelchange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (value.length > 0) {
      console.log("data=>", data)
      const filterdata = data.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      )
      console.log("running filter data=>", filterdata)
      setitems(filterdata)
    }
    else {
      setitems([])
    }
  }
  return (
    <div
      className=' flex flex-col '>
      <div className='m-1 text-white'>
        <input
          placeholder="Search the news here....."
          onChange={handelchange}
          className='w-95 border-white z-50 text-white p-1  outline-none rounded-[10px]' type="text" name="" id="" />
      </div>
      <div
        id="search_bar_list"
        className='hide-scroll overflow-y-scroll flex flex-wrap max-h-50 scroll-hide z-9999 '>
        {
          (
            items.map((item) =>
            (
              <h1 key={item.article_id} className='m-2 p-2 text-white rounded-2xl bg-neutral-600'>{item.title}</h1>
            )
            )
          )
        }
      </div>
    </div>
  )
}
