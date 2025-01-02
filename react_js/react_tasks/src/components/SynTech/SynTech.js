//React.js_ Interview Request _ Synechron Technologies_ Ketan Sawant
//Monday, 27 February⋅17:30 – 18:00
//print state name, population and patients
import React from "react";
import './SynTech.css'
const SynTech = () => {
  const data = [
    {
      name: "goa",
      population: 1000,
      isValid: false
    },
    {
      name: "maharashtra",
      population: 100000,
      isValid: false
    },
    {
      name: "Kerala",
      population: 1000,
      isValid: false
    },
    {
      name: "Delhi",
      population: 100000,
      isValid: false
    },
    {
      name: "Kolkata",

      population: 1000,

      isValid: false
    },
    {
      name: "UP",

      population: 100000,

      isValid: false
    },

    {
      name: "Sikkim",

      population: 1000,

      isValid: true
    },
    {
      name: "Ladakh",

      population: 100000,

      isValid: true
    }
  ];

  const covid_count = [
    {
      name: "Kolkata",

      patients: 20
    },
    {
      name: "UP",

      patients: 100
    },

    {
      name: "Sikkim",

      patients: 10
    },
    {
      name: "Ladakh",

      patients: 10
    }
  ];

  var newData = covid_count.map((state) => {
    let populationData = data.filter((sta) => sta.name === state.name);
    const {population} = populationData[0] //0: Object { name: "Kolkata", population: 1000, isValid: false }
    console.log(population);
    let updatedData = {
      name: state.name,
      population: population,
      patients: state.patients
    };
    return updatedData;
  });
  console.log(newData);

  return (
    <div className="synTechWrapper">
      <h1>Synechron Technologies</h1>
      <p> 
        React.js Interview Request Synechron Technologies Ketan Sawant<br />
        Monday, 27 February⋅17:30 – 18:00</p>
      <h2>Ketan Sawant</h2>
      { newData.map((state,i)=>(
        <div key={i}>
          <h2>{state.name}</h2>
          <ul>
            <li>Patients: {state.patients}</li>
            <li>Population: {state.population}</li>
          </ul>
        </div>

        ))
      }
    </div>
  );
}
export default SynTech