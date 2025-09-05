import { useState } from "react"


export default function SearchBar() {
  const data = [
    "first",
    "second",
    "thred",
    "foure",
    "five"
  ]
  const [items, setitems] = useState<string[]>([])
  function handelchange(e:React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (value.length > 0) {
      const filterdata = data.filter((item) => 
       item.toLowerCase().includes(value.toLowerCase())
      )
      console.log("running filter data=>", filterdata)
      setitems(filterdata)
    }
    else {
      setitems([])
    }
  }
  return (
    <div className=' flex flex-col '>
      <div className='m-1 text-white'>
        <input
          placeholder="Search the news here....."
          onChange={handelchange}
          className='w-95 border-white z-50 text-white p-1  outline-none rounded-[10px]' type="text" name="" id="" />
      </div>
      <div className=''>
        {
          (
            items.map((item) =>
            (
              <h1 key={item} className='m-2 p-2 text-white rounded-2xl bg-neutral-600'>{item}</h1>
            )
            )
          )
        }
      </div>
    </div>
  )
}
