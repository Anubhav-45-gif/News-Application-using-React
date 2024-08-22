import React, {useEffect, useState} from 'react'

//https://jsonplaceholder.typicode.com/posts




 function Demo()
{
    const [dataf,setDataf]=useState([]);

    const fetchdata=async()=>{
const api="https://jsonplaceholder.typicode.com/posts";

let data=await fetch(api);
let parsedData= await data.json();
setDataf(parsedData);



    }
useEffect(()=>{
    fetchdata();
},[])
    return (
        
      <div className='text-center'>
    
       {dataf.map((element)=>{
        return <div key={element.id}>
            <h1>{element.title}</h1>
        </div>
       }
       )}

      </div>
    
    )
}

export default Demo;


