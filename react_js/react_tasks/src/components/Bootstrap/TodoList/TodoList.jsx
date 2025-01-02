import React, { useState, useEffect } from 'react'

import { Button, Form, ListGroup, Container, Row, Col, } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import style from './style.module.css'

import FormGroup from './FormGroup'

const TodoList = () => {
    const formFild = [
        { 
            label: 'Name',
            name: 'name', 
            type: 'text', 
            placeholder: 'Name',
            required:true,
            pattern:'[A-Za-z]{1, 32}',
            //errorMassage:'Name required'
        },
        { 
            label:'Email',
            name: 'email', 
            type: 'email', 
            placeholder: 'Email',
            required:true,
            pattern: "[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+([-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+)*@([a-zA-Z0-9_][-a-zA-Z0-9_]*([-a-zA-Z0-9_]+)*([cC][oO][mM]))(:[0-9]{1,5})?", 
            //errorMassage:'Email required'
        },
        ,
        { 
            label:'Mobaile',
            name: 'mobaile', 
            type: 'text', 
            placeholder: 'Mobaile Number',
            required:true,
            pattern:'^[0-9]{10}$',
            //errorMassage:'Mobile number required'
        }
    ]

    const defaultFromData = {
        name: '',
        email: '',
        mobaile: ''
    }

    const {pageTitle, flex, searchBar} = style

    const[formData, setFormData]=useState([])
    const[editFlag, setEditFlag]=useState({index:null, flag: false})
    const[serchText, setSerchText] = useState('')

    useEffect(()=>{
        if(localStorage.getItem('booStrapList')) setFormData(JSON.parse(localStorage.getItem('booStrapList')))
    },[])
    
    //set localstorage
    useEffect(()=>{
        if(formData.length === 0) return
        localStorage.setItem('booStrapList', JSON.stringify(formData))
    },[formData])

    const heanderSubmit = (e) =>{
        e.preventDefault();
        const formOrgData = new FormData(e.target)
        const formEntreris = Object.fromEntries(formOrgData)
        const formObj = {
            name: formEntreris.name,
            email: formEntreris.email,
            mobaile: formEntreris.mobaile
        }
        if(editFlag.flag){
            const editedData = [...formData]
            editedData[editFlag.index] = formObj
            setFormData(editedData)
            setEditFlag({flag:false})
        } else{

            formObj.id = new Date().getTime();       
            setFormData([...formData, formObj])
        }
        e.target.reset()
    }

    const heanderDilete = (id) =>{
       const newFormData = formData.filter(item => item.id !== id)
       setFormData(newFormData)
    }

    const heanderEdit = (index) =>{
        const currData = formData[index]
        const filFormData = document.userForm 
        filFormData.name.value = currData.name 
        filFormData.email.value = currData.email 
        filFormData.mobaile.value = currData.mobaile  
        setEditFlag({index:index, flag: true})
     }

     const filterData = formData.filter((item)=>item.name.toLocaleLowerCase().includes(serchText.toLocaleLowerCase()))
     
  return (
    <Container className='container'>
      <Row className="row justify-content-md-center ">
        <Col className="col-md-6 sectionPart">
            <h2 className={pageTitle}>Todo List</h2>
            <Form name='userForm' className='d-grid gap-4' onSubmit={heanderSubmit}>
                {formFild.map((item, index) => (
                    <FormGroup key={`form_${index}`} label={item.label} {...item}/>                
                ))}
                <Button variant="primary" type="submit">Submit</Button>
            </Form>            
        </Col>
      </Row>      
      <Row className='justify-content-md-center'>
        <Col className="col-md-6 sectionPart">
        {filterData.length>0 && (
            <>
            <div className={searchBar}><input placeholder='Serch User ny name' value={serchText} onChange={(e)=>setSerchText(e.target.value)} /></div>
            <h3 className={pageTitle}>List:</h3>
            <ListGroup className='gap-4'>
                {filterData.map((item, index) => (
                    <ListGroup.Item key={index} className={flex}><div>{item.name}</div><Button onClick={()=>heanderEdit(index)}>Edit</Button><Button onClick={()=>heanderDilete(item.id)}>Delete</Button></ListGroup.Item>
                ))}
            </ListGroup>
            </>       
        )

        }
        </Col>
      </Row>
    </Container>
  )
}

export default TodoList
