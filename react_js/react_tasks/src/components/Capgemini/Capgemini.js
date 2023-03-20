import React, {useState, useEffect} from "react";
const Capgemini = () => {
    const[data, setData] = useState([]);    
    
    const fetchData = async (baseURL) => {
    //    const response = await fetch("https://dummyjson.com/products?limit=100")
    //    const products = await response.json()
       const productsRes = await axios(baseURL).then((responce) => { return responce.data })
       setData(productsRes.products);  
       return data
     }  

    useEffect(()=>{
        fetchData("https://dummyjson.com/products?limit=100");
        console.log(data);
    },[]);
    
    return(
        <div>
            <ul>
            {/* {
                data.map((item) => (
                    <li>{item.title}</li>
                )                
                )
                }; */}
            </ul>
        </div>
    )
}

export default Capgemini
