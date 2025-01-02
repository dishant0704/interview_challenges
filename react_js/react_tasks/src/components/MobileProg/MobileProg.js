import React, { useState, useEffect } from "react";
import './MobileProg.css'

//Mobileprogramming.com
//We have scheduled the Technical Interview for the position of React.js developer.
//Candidate: KETAN SAWANT
//Mode: Hangout
//Telephone: 9924297347
//Time: 3:00 PM IST
//Date:  16th March 2023
//Email:  ketandutt@gmail.com
//john.mathew@mobileprogramming.com
//Tasks:
//----> list the names in UI
//-----> implement search and filter logic using category

let list = [
    { id: 0, catogory: 'vehicle', proName: 'car' },
    { id: 1, catogory: 'vehicle', proName: 'jeep' },
    { id: 2, catogory: 'fruit', proName: 'apple' },
    { id: 3, catogory: 'fruit', proName: 'orange' },
    { id: 4, catogory: 'electronics', proName: 'mobile' },
    { id: 5, catogory: 'electronics', proName: 'laptop' }]

const defaultFormFields = {
    catogory: '',
    proName: ''
}

const MobileProg = () => {
    const [products, setProducts] = useState(list);

    //Search and filter
    const [filterText, setFilterText] = useState('');
    const [filterProducts, setFilterProducts] = useState([])

    //Edit Product
    const [editFlag, setEditFlag] = useState(false)
    const [editFieldsData, setEditFieldsData] = useState(defaultFormFields)

    //Add Products
    const [formFields, setFormFields] = useState(defaultFormFields);

    let catogory = {}
    let proName = {}


    useEffect(() => {
        setFilterProducts(products)
        if (products.length === 0) setEditFlag(false);
    }, [products]);


    if (editFlag) {        
        catogory = editFieldsData.catogory;
        proName = editFieldsData.proName
    } else {        
        catogory = formFields.catogory;
        proName = formFields.proName
    }


    const searchProd = () => {
        if (filterText) {
            //Filter Products
            const filterProductsData = products.filter((product) => { return product.proName.toLocaleLowerCase().includes(filterText.toLocaleLowerCase()) });
            setFilterProducts(filterProductsData);
            setFilterText('');
        } else {
            alert("Please Enter Product Name")
        }
    }
    const handleChange = (event) => {
        let currValue = event.target.value
        setFilterText(currValue);
    }

    const form_handleChange = (event) => {
        const { name, value } = event.target;
        if(name === ""){
            alert("Please Enter "+name);
        }else{
            if (editFlag) {
                setEditFieldsData({ ...editFieldsData, [name]: value });
            } else {
                setFormFields({ ...formFields, [name]: value })
            }
        }
    }

    const deleteProduct = (curProd) => {
        const updatedProductData = products.filter((product) => { if (product !== curProd) { return product } })
        setProducts(updatedProductData)
        setFormFields(defaultFormFields)
    }

    const addProduct = (e) => {
        const {catogory, proName} = formFields 
        if(catogory !=="" && proName !==""){
            e.preventDefault();
            const lastId = products.length - 1
            const newFormField = { ...formFields, "id": (lastId + 1) }
            setProducts([...products, newFormField])
            setFormFields(defaultFormFields)
        } else{
            alert("Please endter Data")
        }       
    }

    const editProduct = (curProd) => {
        setEditFieldsData(curProd);        
        setEditFlag(true);
    }

    const UpdateProduct = ()=>{
        const {id, catogory, proName} = editFieldsData
        const updatedData = products.map((product)=>{            
            if(product.id === id){                
                return{...product, catogory, proName}
            }else{
                return product
            }            
        })
        //console.log(updatedData);
        setProducts(updatedData);
        setEditFieldsData(defaultFormFields)
        setEditFlag(false);
    }

    const cancelEdit = () => {
        setFormFields(defaultFormFields);
        setEditFlag(false)
    }

    // filer Text input
    const filterData = (event) => {
        const filterText = event.target.value.toLocaleLowerCase();
        //Filter Products
        const filterProductsData = products.filter((product) => { return product.proName.toLocaleLowerCase().includes(filterText) });
        setFilterProducts(filterProductsData);
    }

    return (
        <div className="mailWrapper">
            <h1>Products:</h1>
            <div className="headerWrapper">
                <div className="serachWrapper">
                    <span className="col-lef">Search Product: </span>
                    <input
                        type="text"
                        placeholder="Product Name"
                        value={filterText}
                        onChange={handleChange}
                        required
                    />
                    <button
                        onClick={searchProd}
                    >Search
                    </button>
                </div>
                <div className="filterWrapper">
                    <span className="col-lef">Filter Product: </span>
                    <input
                        type="text"
                        placeholder="Product Name"
                        onChange={filterData}
                        required
                    />
                </div>
            </div>
            <div className="bodyWrapper">
                <ul>
                    <li className="listHeader"><div>Catogory:</div><div>Product</div><div>Delet Item</div><div>Edit</div></li>
                    {filterProducts.map((product, i) => (
                        <li key={product.id}><div><b></b> {product.catogory}</div><div>{product.proName}</div><div><button onClick={(e) => { e.preventDefault(); deleteProduct(product) }} >Delete</button></div><div><button onClick={(e) => { e.preventDefault(); editProduct(product) }}>Edit</button></div></li>
                    ))}
                </ul>
                <div className="addProduct">
                    <h2>{editFlag ? "Edit Product:" : "Add Product:"}</h2>
                    <form>
                        <div className="formfield">
                            <label>Catogory:</label>
                            <input name="catogory" type='text' required onChange={form_handleChange} value={catogory} />
                        </div>
                        <div className="formfield">
                            <label>Product Name:</label>
                            <input name="proName" type='text' required onChange={form_handleChange} value={proName} />
                        </div>

                        {editFlag ?
                            (
                                <div className="formfield">
                                    <button type="button" onClick={UpdateProduct}>Update Product</button>
                                    <button type="button" onClick={cancelEdit}>Cancel</button>
                                </div>
                            )
                            : (
                                <div className="formfield">
                                    <button onClick={addProduct}>Add Product</button>
                                </div>
                            )}
                    </form>
                </div>
            </div>
        </div>
    )
}
export default MobileProg;