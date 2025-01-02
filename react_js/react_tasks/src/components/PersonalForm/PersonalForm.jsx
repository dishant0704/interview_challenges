import React, { useEffect, useState } from 'react'
import style from './PersonalForm.module.css'

import InputComponent from './InputComponent'
import RadioButton from './RadioButton'
import CheckBox from './CheckBox'
import SearchBox from './SearchBox'


// Request access for APIs (api_token): https://www.universal-tutorial.com/rest-apis/free-rest-api-for-country-state-city

const PersonalForm = () => {
    const {formMainWrapper, formWrapper,inputWrapperSpan2to1} = style    

    const [counData, setCounData] = useState([])
    const [stateData, setStateData] = useState([])
    const [cityData, setCityData] = useState([])
    const [focused, setFocused] = useState(false)

    const formFildsData = [
      {
        component: "inputText",
        errorMassage:"First name should be characters only",
        pattern:'[A-Za-z]{1,32}',
        label: "First Name",
        name: "firstName",
        type: "text",
        placeholder: "Enter your first name",
        required: true,
        focused: focused, 
        setfocused: setFocused
      },
      {
        component: "inputText",
        errorMassage:"Last name should be characters only",
        label: "Last Name",
        name: "lastName",
        type: "text",
        placeholder: "Enter your last name",
        required: true,
        focused: focused, 
        setfocused: setFocused
      },
      {
        component: "inputText",
        errorMassage:"Email should be email",
        label: "Email",
        name: "email",
        type: "email",
        placeholder: "Enter your email",
        required: true,
        focused: focused, 
        setfocused: setFocused
      },
      {
        component: "inputText",
        errorMassage:"Phone should be a number only",
        label: "Phone",
        name: "phone",
        type: "tel",
        placeholder: "Enter your phone",
        required: true,
        focused: focused, 
        setfocused: setFocused
      },
      {
        component: "inputText",
        errorMassage:"Date of Birth required",
        label: "Date of Birth",
        name: "dob",
        type: "date",
        placeholder: "Enter your date of birth",
        required: true,
        focused: focused, 
        setfocused: setFocused
      },
      {
        component: "inputText",
        errorMassage:"Age should be a number only",
        label: "Age",
        name: "age",
        type: "number",
        placeholder: "Enter your age",
        required: true,
        focused: focused, 
        setfocused: setFocused
      },
      {
        component: "redioBtn",
        type: "radio",
        errorMassage:"Choose one of them",
        label: "Gender",
        name: "gender",
        options: ["Male", "Female", "Transgender"],
        required: true,
        focused: focused, 
        setfocused: setFocused
      },
      {
        component: "inputText",
        colSpan: true,
        errorMassage:"Address should be characters and number only",
        label: "Address",
        name: "address",
        type: "text",
        placeholder: "Enter your address",
        required: true,
        focused: focused, 
        setfocused: setFocused
      },
      {
        component: "select",
        colSpan: true,
        errorMassage:"Choose your country",
        label: "Country",
        name: "country",
        options: [],
        placeholder: "Select your country",
        required: true,
        focused: focused, 
        setfocused: setFocused
      },
      {
        component: "select",
        colSpan: false,
        errorMassage:"Choose your state",
        label: "State",
        name: "state",
        options: [],
        placeholder: "Select your state",
        required: true,
        focused: focused, 
        setfocused: setFocused
      },
      {
        component: "select",
        colSpan: false,
        errorMassage:"Choose your city",
        label: "City",
        name: "city",
        options: [],
        placeholder: "Select your city",
        required: true,
        focused: focused, 
        setfocused: setFocused
      },
      {
        component: "checkBoxBtn",
        type: "checkbox",
        errorMassage:"Choose at least one post of list",
        label: "Apply for",
        name: "applyFor",
        options: [
          "Frontend Developer",
          "UI Developer",
          "React JS Developer",
          "UI Designer",
          "Graphic Designer",
        ],
        placeholder: "Select your apply for",
        required: true,
        focused: focused, 
        setfocused: setFocused
      },
    ];

    const apiTokenGenerator = async () => {
      const url = process.env.REACT_APP_API_URL + "getaccesstoken/";
      const apiToken = process.env.REACT_APP_API_TOKEN;

      const myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append("api-token", apiToken);
      myHeaders.append("user-email", "ketandutt@gmail.com");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      try {
        const response = await fetch(url, requestOptions);
        const data = await response.text();
        const value = JSON.parse(data).auth_token;
        console.log("auth_token",value)
        localStorage.setItem("auth_token", JSON.stringify(value));
      } catch (error) {
        return error;
      }
    };
   
    const fetchData = async (endPoint, setState) => {
      // endPoint countries/ states/India cities/Gujarat
      const url = process.env.REACT_APP_API_URL + endPoint + "/";
      const auth_token = localStorage.getItem("auth_token");
      const myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + auth_token);
      myHeaders.append("Accept", "application/json");
      myHeaders.append("Content-Type", "application/json");

      //const raw = "";

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        //body: raw,
        //redirect: "follow"
        mode: "cors",
        Cache: "default",
      };

      try {
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        if (data?.error?.name === "TokenExpiredError") {
          apiTokenGenerator();
        }
        setState(data);
      } catch (error) {
        return error;
      }
    };

    const handleSubmit=(e)=>{
      e.preventDefault();
      const data = new FormData(e.target)
      const formData = Object.fromEntries(data);
      setFocused(false)
      e.target.reset()
      console.log("formData: ",formData)
    }

    const fetchStateData =(country)=>{
        fetchData('states/'+country,setStateData)
    }

    const fetchCityData =(state)=>{
        fetchData('cities/'+state,setCityData)
    }

    useEffect(()=>{
        fetchData('countries',setCounData)            
    },[])

  return (
    <div className={formMainWrapper}>
      <h1>Personal Infomation</h1>
      <form className={formWrapper} onSubmit={handleSubmit}>
        {formFildsData.map((item, index) => {
          if (item.component === "inputText") {
            return <InputComponent key={`form_${index}`} {...item} />;
          }
          if (item.component === "redioBtn") {
            return <RadioButton key={`form_redioBtn_${index}`} {...item} />;
          }
          if (item.component === "checkBoxBtn") {
            return <CheckBox key={`form_${index}`} {...item} />;
          }
          if (item.component === "select") {
            if (item.name === "country") {
              item.options = counData;
              item.setState = fetchStateData;
              return <SearchBox key={`form_${index}`} setState {...item} />;
            }
            if (item.name === "state") {
              item.options = stateData;
              item.setState = fetchCityData;
              return <SearchBox key={`form_${index}`} setState {...item} />;
            }
            if (item.name === "city") {
              item.options = cityData;
              item.setState = ()=>{};
              return <SearchBox key={`form_${index}`} setState {...item} />;
            }
          }
          return <></>
        })}
        <div className={inputWrapperSpan2to1}>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default PersonalForm