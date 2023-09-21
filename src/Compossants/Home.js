
import { useState } from "react"

export default function Home (){
    const [input, setInput] = useState('')

    const [list, setList] = useState([])

    const Ajoute = (input) => {
        setList ([...list, input])
        setInput('')
    }

    const Delecteitem = (deletinglist) =>{
        
        const supprime = list.filter((lists) => lists!= deletinglist)
        setList(supprime)
    }
    return(
      <div className="text-center flex justify-center pt-4 bg-blue-600 min-h-screen">
            <div className="bg-white m-10 pt-5 rounded-lg px-10">
                    <div>
                        <h1 className="text-4xl font-bold">
                        <span className="text-blue-800">T</span> 
                            o
                        <span className="text-blue-800">d</span> 
                            o
                            <span className="text-blue-800">s</span>
                            -
                            <span className="text-blue-800">L</span> 
                            i
                            <span className="text-blue-800">s</span>
                            t
                        </h1>
                    </div>
          <>
          <input type="text" value={input} className=" mt-3 mr-4 p-2 text-sm shadow-sm rounded-lg bg-gray-50 border border-blue-300 focus:ring-blue-500 focus:border-blue-500"
          onChange={(e)=> setInput(e.target.value)}
          />
           <button className="text-white bottom-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm px-4 py-2"
          onClick={()=> Ajoute(input)}
          >
            Ajouter</button>
         </>

         <div >
         
         <div className="">
            {
                    list.map((list, index) =>{
                        return(
                            <div className="mt-5   ">
                                <ol className="   item-center  "
                            key={index}>
                                <li className=" flex justify-between shadow-sm items-center rounded-lg p-2 w-full bg-blue-300 border-gray-900  ">
                                    {list}
                                    <button className="text-white bottom-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm px-4 py-2" 
                                    onClick={()=> Delecteitem(list)}
                                    >Delete</button>
                                </li>
                                
                                
                            </ol>
                            </div>
                        )
                    }
                    )
                }

         </div>
            
        

         

         

         </div>
            </div>
       </div>
        
    )
}

    
