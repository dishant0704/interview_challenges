/*
    Bonus 1:  Add a button for each user to make a delete request to delete that user. 
    Update the displayed products excluding the deleted user.

    Bonus 2: Make a filter box to filter the displayed users by name.
*/
import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import './UserList.scss';
const UserForm = ({ addUserPropes,  btnFlagPropes, editProductDataPropes, editProductDataProps}) => {
    const [_id, setId] = useState("");
    const [product_name, setProductName] = useState("");
    const [original_price, setOriginalPrice] = useState("");
    const [sale_price, seSalePrice] = useState("");
    const [product_type, setProductType] = useState("");
    const [description, setDescription] = useState("");
    const [date_n_time, setDateTime] = useState("");
    const [btnFlag, setBtnFlag] = useState(false);

    useEffect(()=>{
        setBtnFlag(btnFlagPropes)        
    },[btnFlagPropes])

    useEffect(()=>{
        if(editProductDataProps){
        setId(editProductDataProps._id)
        setProductName(editProductDataProps.product_name)
        setOriginalPrice(editProductDataProps.original_price)
        seSalePrice(editProductDataProps.sale_price)
        setProductType(editProductDataProps.product_type)
        setDescription(editProductDataProps.description)
        setDateTime(editProductDataProps.date_n_time)
    }
    },[editProductDataProps])

    const resetValue = () =>{
        setProductName("")
        setOriginalPrice("")
        seSalePrice("")
        setProductType("")
        setDescription("")
        setDateTime("")
        setBtnFlag(false)
    }

    const addUser = () => {

        addUserPropes({
            _id: new Date().getTime(), product_name, original_price, sale_price, product_type, description, date_n_time

        });
        resetValue();        
    }

    const editProduct = () =>{
        resetValue();
        editProductDataPropes({
            _id, product_name, original_price, sale_price, product_type, description, date_n_time
        })
    }

    return (
        <div className='row justify-content-md-center userForm'>
            <div className="card col-4">
                <div className="card-header cardHeader">{!btnFlag? "Add Product": "Edite Product" }</div>
                <div className="card-body cardBody">
                    <div className="mb-3">
                        <input key={`formProductName`} type="text" className="form-control formControl" placeholder="Please Enter Product Name" value={product_name} onChange={(e) => setProductName(e.target.value.toLocaleLowerCase())} />
                        <input key={`formOriginalPrice`} type="text" className="form-control formControl" placeholder="Please Enter Original Price" value={original_price} onChange={(e) => setOriginalPrice(e.target.value.toLocaleLowerCase())} />
                        <input key={`formsale_price`} type="text" className="form-control formControl" placeholder="Please Enter Sale Price" value={sale_price} onChange={(e) => seSalePrice(e.target.value.toLocaleLowerCase())} />
                        <input key={`formPantone`} type="text" className="form-control formControl" placeholder="Please Enter Product Type" value={product_type} onChange={(e) => setProductType(e.target.value.toLocaleLowerCase())} />
                        <input key={`formDescription`} type="text" className="form-control formControl" placeholder="Please Enter Description" value={description} onChange={(e) => setDescription(e.target.value.toLocaleLowerCase())} />
                        <input key={`formDate_n_time`} type="text" className="form-control formControl" placeholder="Please Enter Date & time" value={date_n_time} onChange={(e) => setDateTime(e.target.value.toLocaleLowerCase())} />
                    </div>
                </div>
                <div className="card-footer cardFooter">
                    {!btnFlag ? <button type="button" className="btn btn-primary" onClick={addUser}>Save</button> : <><button type="button" onClick={editProduct} className="btn btn-primary">Update</button> <button type="button" onClick={resetValue} className="btn btn-secondary">Cancel</button></>}
                </div>
            </div>
        </div>
    );
}

const CreateNewProduct = (props) => {

    const [products, setProducts] = useState([])
    const [searchProductsField, setSearchField] = useState("");
    const [editProduct, seteditProduct] = useState();
    const [editFlag, setEditFlag] = useState(false);

    //paginations
    const [page, setPage] = useState(1)
    const firstPage = 1;
    const [totalPage, setTotalPage] = useState();
    const [pageCount,setPageCount] = useState();
    const [startPageInx, setStartPageInx] = useState(0)
    const [endPageInx, setEndPageInx] = useState(1)

    const count = props.pageCount;
    const baseUrl = props.baseUrl;
    const apiKey = props.apiKey;
    const pageGeoup = 6;
    let InxEnd = 1 + pageGeoup

    const [pageInxStart, setPageInxStart] = useState(1);   
    const [pageInxEnd, setPageInxEnd] = useState(InxEnd);
    const [lastPageMem, setLastPageMem] = useState(0)
    

    const getProducts = async () => {
        try {

            const productsRes = await axios(baseUrl, {
                headers: {
                    'x-rapidapi-host': baseUrl,
                    'api_key': apiKey
                },
                params: {}
            }
            ).then((responce) => { return responce.data })
            setProducts(productsRes.message);            

        } catch (err) {
            console.log(err.massage)
        }
    }

    useEffect(() => {
        getProducts(); 
        pageIndexCal(0)       
    }, [])

   useEffect(()=>{
    pageIndexCal(page)
    setLastPageMem(pageInxEnd)
   },[page]);
    
    //Filter Data
    const filterUser = products.filter((product) => {
        return product.product_name.toLocaleUpperCase().includes(searchProductsField)
    })
    const pageIndexCal = (p) =>{
        let startInx;
        let endInx;
        let skeepRang = pageGeoup / 2
        let scrollRange = lastPageMem - skeepRang
        
        if(p > skeepRang ){
            startInx = p - skeepRang
            endInx = startInx + pageGeoup
           
        }else{
            startInx = 1;           
            endInx = startInx + pageGeoup
        }
       
        setPageInxStart(startInx)
        setPageInxEnd(endInx)       
    }
    useEffect(()=>{ 
        setPageCount(filterUser.length);
        const totalPagesCount = Math.ceil(pageCount/count)        
        setTotalPage(totalPagesCount);
        setEndPageInx( page*count);
        setStartPageInx(endPageInx - count);
        pageIndexCal(page);
    },[filterUser])

    //Delete Data
    const deleteUser = product => {
        const remproducts = products.filter((currProduct) => {
            return "listRwo_" + currProduct._id!== "listRwo_" + product._id
            //console.log(currProduct.ids+" == "+product.ids)
        })        
        setProducts(remproducts)
        
    }

    const editProductData = product => {
        const currProduct = products.find(currProductData => currProductData._id === product._id)        
        seteditProduct(currProduct);        
        setEditFlag(true)
    }

    const addProduct = addProduct => setProducts([...products, addProduct])
    const updateUser = updatedData => {
        const updatedUser = products.map((product)=>{
            if(updatedData._id === product._id){
                return {...products, _id: updatedData._id, product_name:updatedData.product_name, original_price:updatedData.original_price, sale_price:updatedData.sale_price, product_type:updatedData.product_type, description:updatedData.description, date_n_time:updatedData.date_n_time}
            }
            return product
        })
        setProducts(updatedUser);
        setEditFlag(false)        
    }

    const currentPage = (currPage) => {        
        if(currPage >=1 && currPage <= totalPage){
            setPage(currPage);
            //pageIndexCal(currPage);
        }       
    }
    
    return (
        <Fragment>
            <h2>Create New Product</h2>
            <UserForm addUserPropes={addProduct} editProductDataPropes={updateUser} editProductDataProps={editProduct} btnFlagPropes={editFlag}/>
            <div className="row row justify-content-md-end">
                <div className="col-3 justify-content-end">
                    <input
                        type="search"
                        className="form-control"
                        placeholder="Search by User Name"
                        onChange={(e) => setSearchField(e.target.value.toLocaleUpperCase())}
                    />
                </div>
            </div>
            <table className="table table-striped listTable">
                <thead>
                    <tr key={`listRwo_th`}>
                        <th scope="col">Product ID</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Original Price</th>
                        <th scope="col">Sale Price</th>
                        <th scope="col">Product Type</th>
                        <th scope="col">Description</th>
                        <th scope="col">Date and Time</th>
                        <th scope="col">Edite</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {filterUser.slice(startPageInx, endPageInx).map((product) => (
                        <Fragment>
                            <tr key={`listRwo_${product._id}`}>
                                <td scope="row">{product._id}</td>
                                <td>{product.product_name}</td>
                                <td>{product.original_price}</td>
                                <td>{product.sale_price}</td>
                                <td>{product.product_type}</td>
                                <td>{product.description}</td>
                                <td>{product.date_n_time}</td>
                                <td><button type="button" className="btn button" onClick={() => editProductData(product)}>Edite</button></td>
                                <td><button type="button" className="btn button" onClick={() => deleteUser(product)}>Delete</button></td>
                            </tr>                            
                        </Fragment>
                    ))}
                </tbody>
                {pageCount > 0 &&<tfoot>
                    <tr key={`listRwo_ftr01`}>
                        <td scope="row" colSpan={9}>{startPageInx + 1} - {endPageInx} of {pageCount}</td>
                    </tr>
                    {pageCount > count &&<tr key={`listRwo_ftr02`}>
                        <td className="pagNav" scope="row" colSpan={9}>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-end cosPagination">
                                <li key={`firstPage`} onClick={() => currentPage(1)} className={page <= firstPage? "page-item disabled pageItem disabledClick": "page-item pageItem"}>
                                <span className="page-link"><i className="bi bi-chevron-bar-left"></i></span>                                
                                </li>                             
                                <li key={`previousPage`} onClick={() => currentPage(page - 1)} className={page <= firstPage? "page-item disabled pageItem disabledClick": "page-item pageItem"}>
                                <span className="page-link"><i className="bi bi-chevron-left"></i></span>                                
                                </li>  
                                {
                                [...Array(totalPage)].slice(pageInxStart, pageInxEnd).map((_, i)=>{
                                    let pageNum = pageInxStart+i;
                                     return<li className={page === pageNum?"page-item pageItem active" :"page-item pageItem"} onClick={() => currentPage(pageNum)} key={`pagNav_${pageNum}`}><span className="page-link" href="#">{pageNum}</span></li>
                                })}
                                <li key={`nextPage`} onClick={() => currentPage(page + 1)} className={page >= totalPage? "page-item pageItem disabled disabledClick": "page-item pageItem"}>
                                <span className="page-link" href="#"><i className="bi bi-chevron-right"></i></span>
                                </li>
                                <li key={`lastPage`} onClick={() => currentPage(totalPage)} className={page >= totalPage? "page-item pageItem disabled disabledClick": "page-item pageItem"}>
                                <span className="page-link" href="#"><i className="bi bi-chevron-bar-right"></i></span>
                                </li>
                            </ul>
                        </nav>
                        </td>
                    </tr>}
                </tfoot>}
            </table>
        </Fragment>
    )
}

export default CreateNewProduct;
