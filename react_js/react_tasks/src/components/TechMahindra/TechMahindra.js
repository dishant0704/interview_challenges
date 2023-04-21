import React,{useState, useEffect, Fragment} from "react";
import './TechMahindra.css'

//Tech Mahindra Interview - Ketan Sawant | Full Stack Developer(Mean stack Dev) | 4/21/2023 4:00:00 PM(India Standard Time)
//Friday, April 21⋅16:00 – 17:00
// Create React component, that displays data from GET API, https://reqres.in/api/users?page=1
// Display first_name and last_name as list items.
// You CANNOT use Google search but you can use entire official docs for React https://react.dev/

const TechMahindra = () =>{
    const [userData, setUserData] = useState([]);

    const FetchData = async(url, setData) =>{
        const fetChAPI = await fetch(url)
        const responce = await fetChAPI.json();
        const userData = responce.data
        const sortData = userData.sort((a, b) =>
        a["first_name"].toLocaleLowerCase() > b["first_name"].toLocaleLowerCase() ? 1 : -1
    )        
        setData(sortData);
    }

    useEffect(()=>{
        FetchData("https://reqres.in/api/users?page=1", setUserData);
        
    },[])

    return(
        <Fragment>
            <div className="userListWrapper">
            <h1>User List</h1>
            <ol>
                {
                    userData.map((user, i)=>(<li key={i}>{user.first_name}, {user.last_name}</li>))
                }
            </ol>
            </div>
        </Fragment>
        
    )

}
export default TechMahindra