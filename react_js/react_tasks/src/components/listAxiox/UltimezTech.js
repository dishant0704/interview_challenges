/*
    Ultimez Technology - Reactjs interview schedule @ Sat 7 Jan 2023 11:00 - 12:00 (IST)
    Bonus 1:  Add a button for each user to make a delete request to delete that user. 
    Update the displayed products excluding the deleted user.

    Bonus 2: Make a filter box to filter the displayed users by name.
*/
import React, { useState, useEffect, Fragment } from "react";
import './UserList.scss';
import api from "./Api";

const UserForm = ({ addUserPropes, btnFlagPropes, editProductDataPropes, editProductDataProps }) => {
    const [_id, setId] = useState("");
    const [btnFlag, setBtnFlag] = useState(false);
    const initialValue = { _id: 0, product_name: "", original_price: "", sale_price: "", product_type: "", description: "", date_n_time: "" }
    const [formVaules, setFormVaules] = useState(initialValue);
    const [formError, setFormError] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    useEffect(() => {
        setBtnFlag(btnFlagPropes)
    }, [btnFlagPropes])

    useEffect(() => {
        if (editProductDataProps) {

            formVaules._id = editProductDataProps._id
            formVaules.product_name = editProductDataProps.product_name
            formVaules.original_price = editProductDataProps.original_price
            formVaules.sale_price = editProductDataProps.sale_price
            formVaules.product_type = editProductDataProps.product_type
            formVaules.description = editProductDataProps.description
            formVaules.date_n_time = editProductDataProps.date_n_time

        }
    }, [editProductDataProps])

    const resetValue = () => {
        formVaules._id = 0
        formVaules.product_name = ""
        formVaules.original_price = ""
        formVaules.sale_price = ""
        formVaules.product_type = ""
        formVaules.description = ""
        setFormVaules(formVaules);
        setBtnFlag(false)
    }


    const addUser = () => {
        let validateForm = validate(formVaules);
        setFormError(validateForm);

        if (Object.keys(validateForm).length === 0 && isSubmit) {
            let id = new Date().getTime()
            setFormVaules({ ...formVaules, [_id]: id })
            setIsSubmit(false);
            addUserPropes(formVaules);
            resetValue()
        }

    }

    const editProduct = () => {
        let validateForm = validate(formVaules);
        setFormError(validateForm);
        if (Object.keys(validateForm).length === 0 && isSubmit) {
            editProductDataPropes(formVaules);
            resetValue();
        }
    }

    const validate = (value) => {
        const error = {}
        if (!value.product_name) {
            error.product_name = "Product name Required! ";
        }
        if (!value.original_price) {
            error.original_price = "Original Price Required! ";
        } else if (!isNaN(+value.original_price) === false) {
            error.original_price = "Original Price Should be number";
        }

        if (!value.sale_price) {
            error.sale_price = "Sale Price Required! ";
        } else if (!isNaN(+value.sale_price) === false) {
            error.sale_price = "Sale Price Should be number";
        }

        if (!value.product_type) {
            error.product_type = "Product Type Required! ";
        }
        if (!value.description) {
            error.description = "Descriptione Required! ";
        }
        return error;
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormVaules({ ...formVaules, [name]: value })
        setIsSubmit(true);
    }

    return (
        <div className='row justify-content-md-center userForm'>
            {/* <pre>{JSON.stringify(formVaules)}</pre> */}
            <div className="card col-12 col-sm-12 col-md-4">
                <div className="card-header cardHeader">{!btnFlag ? "Add Product" : "Edite Product"}</div>
                <div className="card-body cardBody">
                    <div className="mb-3">
                        <input key={`formProductName`} type="text" className="form-control formControl" placeholder="Please Enter Product Name" name="product_name" value={formVaules.product_name} onChange={handleChange} />
                        <span className="errorForm error">{formError.product_name}</span>
                        <input key={`formOriginalPrice`} type="text" className="form-control formControl" placeholder="Please Enter Original Price" name="original_price" value={formVaules.original_price} onChange={handleChange} />
                        <span className="errorForm error">{formError.original_price}</span>
                        <input key={`formsale_price`} type="text" className="form-control formControl" placeholder="Please Enter Sale Price" name="sale_price" value={formVaules.sale_price} onChange={handleChange} />
                        <span className="errorForm error">{formError.sale_price}</span>
                        <input key={`formPantone`} type="text" className="form-control formControl" placeholder="Please Enter Product Type" name="product_type" value={formVaules.product_type} onChange={handleChange} />
                        <span className="errorForm error">{formError.product_type}</span>
                        <input key={`formDescription`} type="text" className="form-control formControl" placeholder="Please Enter Description" name="description" value={formVaules.description} onChange={handleChange} />
                        <span className="errorForm error">{formError.description}</span>
                    </div>
                </div>
                <div className="card-footer cardFooter">
                    {!btnFlag ? <button type="button" className="btn btn-primary btnPrimary" onClick={addUser}>Save</button> : <><button type="button" onClick={editProduct} className="btn btn-primary btnPrimary">Update</button> <button type="button" onClick={resetValue} className="btn btn-secondary">Cancel</button></>}
                </div>
            </div>
        </div>
    );
}

const UltimezTech = (props) => {

    const [products, setProducts] = useState([])
    const [searchProductsField, setSearchField] = useState("");
    const [editProduct, seteditProduct] = useState();
    const [editFlag, setEditFlag] = useState(false);
    const [alertMessage, setAlertMessage] = useState(null);

    //paginations
    const [page, setPage] = useState(1)
    const firstPage = 1;
    const [totalPage, setTotalPage] = useState();
    const [pageCount, setPageCount] = useState();
    const [startPageInx, setStartPageInx] = useState(0);
    const [endPageInx, setEndPageInx] = useState(1);

    //Sorting Data
    const [order, setOrder] = useState("ASC");

    const count = props.pageCount;  
    const pageGeoup = 6;
    let InxEnd = 1 + pageGeoup

    const [pageInxStart, setPageInxStart] = useState(1);
    const [pageInxEnd, setPageInxEnd] = useState(InxEnd);
    const [lastPageMem, setLastPageMem] = useState(0)


    const getProducts = async () => {
        try {
            const responce = await api('/list')
            const productsRes = responce.data

            //console.log(productsRes)
            setProducts(productsRes.message);

        } catch (error) {

            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        }
    }

    useEffect(() => {
        getProducts();
        pageIndexCal(0)
    }, [])

    useEffect(() => {
        pageIndexCal(page)
        setLastPageMem(pageInxEnd)
    }, [page]);

    //Filter Data
    const filterUser = products.filter((product) => {
        return product.product_name.toLocaleUpperCase().includes(searchProductsField)
    })
    const pageIndexCal = (p) => {
        let startInx;
        let endInx;
        let skeepRang = pageGeoup / 2
        let scrollRange = lastPageMem - skeepRang

        if (p > skeepRang) {
            startInx = p - skeepRang
            endInx = startInx + pageGeoup

        } else {
            startInx = 1;
            endInx = startInx + pageGeoup
        }

        setPageInxStart(startInx)
        setPageInxEnd(endInx)
    }
    useEffect(() => {
        setPageCount(filterUser.length);
        const totalPagesCount = Math.ceil(pageCount / count)
        setTotalPage(totalPagesCount);
        setEndPageInx(page * count);
        setStartPageInx(endPageInx - count);
        pageIndexCal(page);
    }, [filterUser])

    //Delete Data
    const deleteUser = async (product) => {

        // const responceData = await api.delete(`/del/${product._id}`).then((response) => {    
        //     return response; 
        //  }).catch((error) => {
        //     console.log(error);
        //   });

        // const alertMessageError = responceData.data.message.alert_message
        // const alertMessage = "Unable to add data connection with endpoint server. "+alertMessageError
        // if(alertMessage) setAlertMessage(alertMessage)

        const remproducts = products.filter((currProduct) => {
            return "listRwo_" + currProduct._id !== "listRwo_" + product._id
            //console.log(currProduct.ids+" == "+product.ids)
        })
        setProducts(remproducts)

    }

    //Sorting Data
    const sortData = (colData) => {
        //ASC
        if (order === "ASC") {
            const sortedData_asc = [...filterUser].sort((a, b) =>
                a[colData].toLocaleLowerCase() > b[colData].toLocaleLowerCase() ? 1 : -1
            )

            setProducts(sortedData_asc);
            setOrder("DSC")

        }
        //DSC
        if (order === "DSC") {
            const sortedData_dsc = [...filterUser].sort((a, b) =>
                a[colData].toLocaleLowerCase() < b[colData].toLocaleLowerCase() ? 1 : -1

            )

            setProducts(sortedData_dsc);
            setOrder("ASC")

        }
    }

    const editProductData = product => {

        // const responceData = await api.push('/add_new', addProduct).then((response) => {    
        //     return response; 
        //  }).catch((error) => {
        //     console.log(error);
        //   });

        // const alertMessageError = responceData.data.message.alert_message
        // const alertMessage = "Unable to add data connection with endpoint server. "+alertMessageError

        const currProduct = products.find(currProductData => currProductData._id === product._id)
        seteditProduct(currProduct);
        setEditFlag(true)
    }

    const addProduct = async (addProduct) => {

        const responceData = await api.post('/add_new', addProduct).then((response) => {
            return response;
        }).catch((error) => {
            console.log(error);
        });

        const alertMessageError = responceData.data.message.alert_message
        const alertMessage = "Unable to add data connection with endpoint server. " + alertMessageError

        if (alertMessageError) {
            setAlertMessage(alertMessage)
            setTimeout(() => setAlertMessage(null), 5000)
            setProducts([...products, addProduct])
        } else {
            setAlertMessage(null);
            setProducts([...products, responceData.data.message])
        }

    }
    const updateUser = updatedData => {
        const updatedUser = products.map((product) => {
            if (updatedData._id === product._id) {
                return { ...products, _id: updatedData._id, product_name: updatedData.product_name, original_price: updatedData.original_price, sale_price: updatedData.sale_price, product_type: updatedData.product_type, description: updatedData.description, date_n_time: updatedData.date_n_time }
            }
            return product
        })
        setProducts(updatedUser);
        setEditFlag(false)
    }

    const currentPage = (currPage) => {
        if (currPage >= 1 && currPage <= totalPage) {
            setPage(currPage);
            //pageIndexCal(currPage);
        }
    }

    return (
        <Fragment>
            <h4>Display the Results in a table Structure </h4>
            <UserForm addUserPropes={addProduct} editProductDataPropes={updateUser} editProductDataProps={editProduct} btnFlagPropes={editFlag} />
            {alertMessage ? <div className="row justify-content-md-center error">{alertMessage}</div> : null}
            <div className="row justify-content-md-end">
                <div className="col-12 col-sm-12 col-md-4 justify-content-end searchWrapper">
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
                        <th scope="col" >Product ID</th>
                        <th scope="col" className="sortData" onClick={() => sortData("product_name")}>Product Name</th>
                        <th scope="col" className="sortData" onClick={() => sortData("original_price")}>Original Price</th>
                        <th scope="col" className="sortData" onClick={() => sortData("sale_price")}>Sale Price</th>
                        <th scope="col" >Product Type</th>
                        <th scope="col" >Description</th>
                        <th scope="col" className="sortData" onClick={() => sortData("date_n_time")}>Date and Time</th>
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
                                <td><button type="button" className="btn button btnPrimary" onClick={() => editProductData(product)}>Edite</button></td>
                                <td><button type="button" className="btn button btnPrimary" onClick={() => deleteUser(product)}>Delete</button></td>
                            </tr>
                        </Fragment>
                    ))}
                </tbody>
                {pageCount > 0 && <tfoot>
                    <tr key={`listRwo_ftr01`}>
                        { endPageInx > pageCount? (<td scope="row" className="pageNum" colSpan={9}>{startPageInx + 1} - {pageCount} of {pageCount}</td>) :  (<td scope="row" className="pageNum" colSpan={9}>{startPageInx + 1} - {endPageInx} of {pageCount}</td>)}
                    </tr>
                    {pageCount > count && <tr key={`listRwo_ftr02`}>
                        <td className="pagNav" scope="row" colSpan={9}>
                            <nav aria-label="Page navigation example">
                                <ul className="pagination justify-content-end cosPagination">
                                    <li key={`firstPage`} onClick={() => currentPage(1)} className={page <= firstPage ? "page-item disabled pageItem disabledClick" : "page-item pageItem"}>
                                        <span className="page-link pageLink"><i className="bi bi-chevron-bar-left"></i></span>
                                    </li>
                                    <li key={`previousPage`} onClick={() => currentPage(page - 1)} className={page <= firstPage ? "page-item disabled pageItem disabledClick" : "page-item pageItem"}>
                                        <span className="page-link pageLink"><i className="bi bi-chevron-left"></i></span>
                                    </li>
                                    {
                                        [...Array(totalPage)].slice(pageInxStart, pageInxEnd).map((_, i) => {
                                            let pageNum = pageInxStart + i;
                                            return <li className={page === pageNum ? "page-item pageItem active" : "page-item pageItem"} onClick={() => currentPage(pageNum)} key={`pagNav_${pageNum}`}><span className="page-link pageLink" href="#">{pageNum}</span></li>
                                        })}
                                    <li key={`nextPage`} onClick={() => currentPage(page + 1)} className={page >= totalPage ? "page-item pageItem disabled disabledClick" : "page-item pageItem"}>
                                        <span className="page-link pageLink" href="#"><i className="bi bi-chevron-right"></i></span>
                                    </li>
                                    <li key={`lastPage`} onClick={() => currentPage(totalPage)} className={page >= totalPage ? "page-item pageItem disabled disabledClick" : "page-item pageItem"}>
                                        <span className="page-link pageLink" href="#"><i className="bi bi-chevron-bar-right"></i></span>
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

export default UltimezTech;
