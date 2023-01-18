import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import "./scss/_pagination.scss"
const Pagination = (props) => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1)
    const [proCount, setProCount] = useState();
    const firstPage = 1;
    const [lastPage, setLastPage] = useState()

    const baseURL = props.baseUrl
    const count = props.pageCount

    //fetch data;
    const getProductData = async () => {
        const productsRes = await axios(baseURL).then((responce) => { return responce.data })
        setProducts(productsRes.products);        
    }

    useEffect(() => {
        getProductData();         
    }, [])

    useEffect(()=>{
        setProCount(products.length)
        setLastPage(Math.ceil(proCount / count))      
    },[products])
    
    const currentPage = (currPage) =>{ 
        if(currPage >= firstPage && currPage <=lastPage){
            setPage(currPage)
        }        
    }
   
    //console.log(proCount)
    return (
        <Fragment>
            {proCount > 0 && <div className='row '>
                <div className="card ">
                    <div className="card-body">
                        {products.slice(page*count - count, page*count).map((product, i) => (

                            <div key={"prod_" + i} className="card mb-3" >
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <img src={product.thumbnail} alt={product.title} className="img-fluid rounded-start" />
                                    </div>
                                    <div className="col-md-9">
                                        <div className="card-body">
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text">
                                                <ul>
                                                    <li>Brand: {product.brand}</li>
                                                    <li>Description: {product.description}</li>
                                                    <li><span>Price: {product.price}</span>, <span>Stock: {product.stock}</span> </li>
                                                </ul>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {proCount > 0 && <div className="card-footer">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination pagination justify-content-center">
                                <li onClick={()=>currentPage(page - 1)} className={page <= firstPage?"page-item disabled":"page-item"} ><span className="page-link">Previous</span></li>
                                    {
                                        [...Array(proCount/count)].map((_, i)=>{
                                            let pageNum = i + 1
                                            return <li className={page == pageNum? 'page-item active': 'page-item'} key={pageNum} onClick={()=>currentPage(pageNum)} ><a className="page-link" href="#">{pageNum}</a></li>
                                        })
                                    }
                                <li onClick={()=>currentPage(page + 1)} className={page >= lastPage?'page-item disabled':"page-item"}><span className="page-link">Next</span></li>
                            </ul>
                        </nav>
                    </div>}
                </div>
            </div>
            }
        </Fragment>
    )
}
export default Pagination;