import {useState, useEffect} from "react";

//https://jsonplaceholder.typicode.com/posts

const ListData = () =>{
    const[data, setData] = useState(null)
    const fetchData = async() =>{
        const resData = await fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json())
        .then((json) => {return json});
        setData(resData);
        console.log(data)
    }
    useEffect(()=>{
        fetchData();
    },[])

    return(
        <>
            <ul>
                {data.map((item) =>(
                    <li>{item.title}</li>
                )
                )} 
            </ul>
        </>
    )


}

export default ListData
