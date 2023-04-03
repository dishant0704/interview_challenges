import React,{useEffect,useState} from "react"
import axios from "axios";

const Capgemini = () => {
    const [products, setProducts] = useState([]);
    
     const getProducts = async (baseURL) =>{
        
        //Fetch
        const response = await fetch(baseURL)
        const productsData = await response.json()
        
        //axios
        // const productsRes = await axios(baseURL).then((responce) => { return responce })
        // const productsData = productsRes.data.products
        
        setProducts(productsData.products);
      
    }
    useEffect(() => {
        getProducts("https://dummyjson.com/products?limit=100");        
    }, [])    
    return (
        <div>
            <h1>Products List</h1>
            <ul>
               { 
               products.map((item)=>{
                return <li>{item.title}</li>
               })               
               }
            </ul>
        </div>
    )
}
export default Capgemini;
