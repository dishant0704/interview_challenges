/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import './FetchData.scss'

const FetchData = () => {

  const productsState = useSelector((state) => state.fetchProductsData)
  const {products} = productsState.productsResponce
  

  const [productsData, setproductsData] = useState([]);

  //pagination section
  const perPageData = 25;
  const [totalPages, setTotalPages] = useState();
  const [currPage, setCurrPage] = useState(1);
  const [startData, setStartData] = useState(perPageData);
  const [endData, setendData] = useState(1);

  const [searchProductsField, setSearchField] = useState("");

  // const fetchAPI = async (URL) => {
  //   const responce = await fetch(URL);
  //   const productsRecData = await responce.json();
  //   setTotalPages(generatePageNumberArray(productsRecData.products));
  //   setproductsData(productsRecData.products);
  // };

  useEffect(()=>{
    if(products && products.length>0){
      setTotalPages(generatePageNumberArray(products));
      setproductsData(products);
    }    
  }, [productsState])

  useEffect(() => {
    //fetchAPI("https://dummyjson.com/products?limit=100");
  }, []);

  const pageNation_prePage = () => {
    setCurrPage(currPage - 1);
  };

  const pageNation_nextPage = () => {
    setCurrPage(currPage + 1);
  };

  //filterData
  const filterData = productsData.filter((products) => {
    return products.title.toLocaleLowerCase().includes(searchProductsField);
  });

  //generate page number array
  const generatePageNumberArray = function (array) {
    const arrayLength = array.length;
    let pageArrayLeagth = Number(arrayLength / perPageData);
    if (!Number.isInteger(pageArrayLeagth)) {
      pageArrayLeagth = Math.trunc(pageArrayLeagth) + 1;
    }
    return pageArrayLeagth;
  };

  //Debouncing
  // const debounce = (func, delay) => {
  //   let debounceTimer;
  //   return function () {
  //     const context = this;
  //     const args = arguments;
  //     clearTimeout(debounceTimer);
  //     debounceTimer = setTimeout(() => func.apply(context, args), delay);
  //   };
  // };

  const debounce = (cb, d) =>{
    let timer;
    return function(...args){
        if(timer) clearTimeout(timer);
        timer = setTimeout(()=>{
            cb(...args);
        },d)
    }
 }

  const pageSliceNav = function () {
    setStartData(currPage * perPageData - perPageData);
    setendData(currPage * perPageData);
  };
  useEffect(() => {
    pageSliceNav();
    setTotalPages(generatePageNumberArray(filterData));
  }, [currPage, searchProductsField]);

  const searchFilter = function (e) {
    if (e) {
      setSearchField(e.target.value.toLocaleLowerCase());
    }
    setTotalPages(generatePageNumberArray(filterData));
    pageSliceNav();
  };

  return (
    <Fragment>
      <h1 className="sectionTital">FetchData</h1>
      <input
        type="search"
        className="form-control"
        placeholder="Search by User Name"
        onKeyUp={(e) => debounce(searchFilter(e), 1000)}
      />
      <br />
      Search Results : {filterData.length}
      <div className="header">
        <h1>Products API</h1>
      </div>
      <div className="body">
        <ul>
          {filterData.length > 0 &&
            filterData.slice(startData, endData).map((item) => {
              const { id, title } = item;
              return (
                <li key={`produ_${id}`}>
                  {id}, {title}
                </li>
              );
            })}
        </ul>
      </div>
      <div className="footer">
        footer
        <div className="pageNum">
          <button onClick={pageNation_prePage} disabled={currPage === 1}>
            prePage
          </button>
          <ul>
            {[...Array(totalPages)].map((_, i) => {
              return (
                <li
                  key={`pageNav_${i}`}
                  className={currPage === i + 1 ? "active" : ""}
                  onClick={() => setCurrPage(i + 1)}
                >
                  {i + 1}
                </li>
              );
            })}
          </ul>
          <button
            onClick={pageNation_nextPage}
            disabled={currPage === totalPages}
          >
            nextPage
          </button>
        </div>
      </div>
    </Fragment>
  );
};
export default FetchData;