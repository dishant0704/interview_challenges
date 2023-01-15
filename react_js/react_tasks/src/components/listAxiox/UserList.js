/*
    Bonus 1:  Add a button for each user to make a delete request to delete that user. 
    Update the displayed users excluding the deleted user.

    Bonus 2: Make a filter box to filter the displayed users by name.
*/
import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import './UserList.scss'

const UserForm = ({ addUserPropes,  btnFlagPropes, editUserPropes}) => {
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [color, setColor] = useState("");
    const [pantone_value, setPantoneValue] = useState("");

    const addUser = () => {

        addUserPropes({
            id: (new Date).getTime(), name, year, color, pantone_value

        });
        setName("")
        setYear("")
        setColor("")
        setPantoneValue("")
    }

    // if(btnFlagPropes){
    //     setName(editUserPropes.name)
    //     setYear(editUserPropes.year)
    //     setColor(editUserPropes.color)
    //     setPantoneValue(editUserPropes.pantone_value)
    // }

    return (
        <div className='row justify-content-md-center userForm'>
            <div className="card col-4">
                <div className="card-header cardHeader">Add Or Edit User</div>
                <div className="card-body cardBody">
                    <div className="mb-3">
                        <input key={`formName`} type="text" className="form-control formControl" placeholder="Please Enter Name" value={name} onChange={(e) => setName(e.target.value.toLocaleLowerCase())} />
                        <input key={`formYear`} type="text" className="form-control formControl" placeholder="Please Enter Year" value={year} onChange={(e) => setYear(e.target.value.toLocaleLowerCase())} />
                        <input key={`formColor`} type="text" className="form-control formControl" placeholder="Please Enter color" value={color} onChange={(e) => setColor(e.target.value.toLocaleLowerCase())} />
                        <input key={`formPantone`} type="text" className="form-control formControl" placeholder="Please Enter Pantone Value" value={pantone_value} onChange={(e) => setPantoneValue(e.target.value.toLocaleLowerCase())} />
                    </div>
                </div>
                <div className="card-footer cardFooter">
                    {!btnFlagPropes ? <button type="button" className="btn btn-primary" onClick={addUser}>Save</button> : <button type="button" className="btn btn-primary">Update</button>}
                </div>
            </div>
        </div>
    );
}

const UserList = () => {

    const [users, setUsers] = useState([])
    const [searchUserField, setSearchField] = useState("");
    const [editUser, setEditUser] = useState();
    const [listRow, setListRow] = useState(true);
    const [editFlag, setEditFlag] = useState(false);

    const baseUrl = "https://reqres.in/api/{resource}";

    const getUsers = async () => {
        try {
            const usersRes = await axios.get(baseUrl).then((responce) => { return responce.data })
            setUsers(usersRes.data);
        } catch (err) {
            console.log(err.massage)
        }
    }

    useEffect(() => {
        getUsers();
    }, [])


    const addUser = addUser => setUsers([...users, addUser])

    const filterUser = users.filter((user) => {
        return user.name.toLocaleUpperCase().includes(searchUserField)
    })

    const deleteUser = user => {
        const remUsers = users.filter(currUser => "listRwo_" + currUser.id !== "listRwo_" + user.id)
        //console.log(remUsers)
        setUsers(remUsers)

    }

    const editUserData = user => {
        const currUser = users.find(currUserData => currUserData.id === user.id)
        console.log(currUser);
        setEditUser(currUser);        
        setEditFlag(true)
    }

    return (
        <Fragment>
            <h2> User list</h2>
            <UserForm addUserPropes={addUser} editUserPropes={editUserData} btnFlagPropes={editFlag}/>
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
                    <tr>
                        <th scope="col">Name:</th>
                        <th scope="col">Year</th>
                        <th scope="col">Color</th>
                        <th scope="col">Pantone Value</th>
                        <th scope="col">Edite</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {filterUser.map((user) => (
                        <Fragment>
                            <tr key={`listRwo_${user.id}`}>
                                <td scope="row">{user.name}</td>
                                <td>{user.year}</td>
                                <td>{user.color}</td>
                                <td>{user.pantone_value}</td>
                                <td><button type="button" className="btn button" onClick={() => editUserData(user)}>Edite</button></td>
                                <td><button type="button" className="btn button" onClick={() => deleteUser(user)}>Delete</button></td>
                            </tr>                            
                        </Fragment>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td className="pagNav" scope="row" colSpan={6}>
                            <ul><li>1</li></ul>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </Fragment>
    )
}

export default UserList;