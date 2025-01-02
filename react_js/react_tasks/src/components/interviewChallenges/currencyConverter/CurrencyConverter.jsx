import React, { useEffect, useState } from 'react'
import {Row, Col, Button, Card, Container} from 'react-bootstrap/esm/'
import { HiMiniArrowsRightLeft } from "react-icons/hi2";
import Dropdown from './dropdown';
const CurrencyConverter=()=> {

  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState("")
  const [errorAmount, setErrorAmount] = useState()
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [favorites, setfavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || [])
  
  const fetchData = async(URL, cb) =>{
    const fetchRes = await fetch(URL);
    const resData = await fetchRes.json();       
    //setData(Object.keys(resData)) 
    cb(resData)  
  }

  useEffect(()=>{
    fetchData("https://api.frankfurter.app/currencies", (data)=>setCurrencies(Object.keys(data)))
  },[])

  const convertCurrency = () =>{
    if(!amount){ setErrorAmount("Please insert number")}else{ setErrorAmount(null)}
    const URL =  `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
    fetchData(URL, (data)=> setConvertedAmount(data.rates[toCurrency]+" "+toCurrency))    
  }

  const swapCurrency = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  const handleFavorite = (currency) =>{
    let updatedfavorites = [...favorites]
    if(favorites.includes(currency)){
      updatedfavorites = updatedfavorites.filter((fcur)=> fcur !== currency)
    }else{
      updatedfavorites.push(currency)
    }
    console.log(updatedfavorites)
    setfavorites(updatedfavorites)
    localStorage.setItem('favorites', JSON.stringify(updatedfavorites))
  }
 

  return (
    <Row className="justify-content-md-center">
        <Col className='p-10' xs lg="10">
            <Card className="p-3">              
              <Card.Title>Currency Converter</Card.Title>
              <Card.Body>
                <Container>
                <Row className='py-3'>
                  <Col>
                  {/* From deropdown */}
                  <Dropdown 
                    title="From:" 
                    currencies={currencies}
                    currency={fromCurrency}
                    setCurrency={setFromCurrency} 
                    onChange={setFromCurrency}
                    handleFavorite={handleFavorite}
                    favorites={favorites}
                    />                   
                  </Col>
                  <Col className='text-center align-self-center justify-content-md-center mt-1.7'>
                  {/* Swap button */}
                  <Button onClick={swapCurrency} disabled={!fromCurrency || !toCurrency? true : false}>
                    <HiMiniArrowsRightLeft />
                  </Button>
                  </Col>
                  <Col>
                  {/* to  deropdown */}
                  <Dropdown 
                    title="To:" 
                    currencies={currencies}
                    currency={toCurrency}
                    setCurrency={setToCurrency} 
                    onChange={setToCurrency}
                    handleFavorite={handleFavorite}
                    favorites={favorites}
                    />
                  </Col>
                </Row>
                <Row className='py-3'>
                  <Col>
                    <input type='number' className="form-control" placeholder='insert acount' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                    {errorAmount && <span>{errorAmount}</span>}
                  </Col>
                </Row>
                <Row className='py-3'>
                  <Col className="form-group">
                    <Button onClick={convertCurrency} className="float-right" disabled={!fromCurrency || !toCurrency || !amount? true : false}>Convert</Button>
                  </Col>
                </Row>
                {convertedAmount && 
                <Row className='py-3'>
                <Col className='text-center'>
                  {convertedAmount}
                </Col>
              </Row>
                }
                </Container>                
              </Card.Body>
            </Card>
        </Col>
    </Row>
  )
}

export default CurrencyConverter
