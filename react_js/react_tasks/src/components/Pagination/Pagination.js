import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import "./scss/_pagination.scss"
const Pagination = (props) => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1)
    const [proCount, setProCount] = useState();    
    const [lastPage, setLastPage] = useState()
    const [skip, setSkip] = useState(0)
    const [limit, setLimit] = useState(100)
    const [totalPages, setTotalPages] = useState();

    const baseURL = props.baseUrl
    const count = props.pageCount
    const firstPageInd = 0;
    
    //fetch data;
    const getProductData = async (skipNum, limitNum) => {        
        const productsRes = await axios(baseURL+'?skip='+skipNum+'&limit='+limitNum).then((responce) => { return responce.data })
        setProCount(productsRes.total)
        setProducts(productsRes.products); 
        setTotalPages(generatePageNumberArray(productsRes.total))       
    }

    //generate page number array
  const generatePageNumberArray = function (arrayLength) {    
    console.log(arrayLength+"::"+count)
    let pageArrayLeagth = Number(arrayLength / count);
    if (!Number.isInteger(pageArrayLeagth)) {
      pageArrayLeagth = Math.trunc(pageArrayLeagth) + 1;
    }
    return pageArrayLeagth;
  };

    useEffect(() => {
        setLimit(count)
        setSkip(firstPageInd)
        getProductData(firstPageInd, count);
        setPage(firstPageInd)
    }, [])

    useEffect(()=>{
        getProductData(skip, count);
    },[skip])

    useEffect(()=>{        
        setLastPage(Math.ceil(proCount / count))
    },[products])
    
    const currentPage = (currPage) =>{ 
        const newCount = currPage*count; 
        if(currPage >= firstPageInd && currPage <=lastPage-1){
            setPage(currPage)
            setSkip(newCount);
        }        
    }
    return (
        <Fragment>
            {proCount > 0 && <div className='row '>
                <div className="card ">
                    <div className="card-body">
                        {products.map((product, i) => (

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
                                                    <li>Id: {product.id}</li>
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
                            <ul className="pagination justify-content-center">
                                <li onClick={()=>currentPage(page - 1)} className={page <= firstPageInd?"page-item disabled":"page-item"} ><span className="page-link">Previous</span></li>
                                    
                                    { 
                                        [...Array(totalPages)].map((_, i)=>{
                                            let pageNum = i
                                            return <li className={page === pageNum? 'page-item active': 'page-item'} key={pageNum} onClick={()=>currentPage(pageNum)} ><span className="page-link">{pageNum+1}</span></li>
                                        })
                                    }
                                <li onClick={()=>currentPage(page + 1)} className={page >= lastPage-1?'page-item disabled':"page-item"}><span className="page-link">Next</span></li>
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
