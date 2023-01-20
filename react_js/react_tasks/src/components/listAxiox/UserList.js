/*
    Bonus 1:  Add a button for each user to make a delete request to delete that user. 
    Update the displayed users excluding the deleted user.

    Bonus 2: Make a filter box to filter the displayed users by name.
*/
import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import './UserList.scss'
const UserForm = ({ addUserPropes,  btnFlagPropes, editUserDataPropes, editUserDataProps}) => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [color, setColor] = useState("");
    const [pantone_value, setPantoneValue] = useState("");
    const [btnFlag, setBtnFlag] = useState(false);

    useEffect(()=>{
        setBtnFlag(btnFlagPropes)        
    },[btnFlagPropes])

    useEffect(()=>{
        if(editUserDataProps){
        setId(editUserDataProps.id)
        setName(editUserDataProps.name)
        setYear(editUserDataProps.year)
        setColor(editUserDataProps.color)
        setPantoneValue(editUserDataProps.pantone_value)
    }
    },[editUserDataProps])

    const resetValue = () =>{
        setName("")
        setYear("")
        setColor("")
        setPantoneValue("")
        setBtnFlag(false)
    }

    const addUser = () => {

        addUserPropes({
            id: new Date().getTime(), name, year, color, pantone_value

        });
        resetValue();        
    }

    const editUser = () =>{
        resetValue();
        editUserDataPropes({
            id, name, year, color, pantone_value
        })
    }

    return (
        <div className='row justify-content-md-center userForm'>
            <div className="card col-4">
                <div className="card-header cardHeader">{!btnFlag? "Add User": "Edite User" }</div>
                <div className="card-body cardBody">
                    <div className="mb-3">
                        <input key={`formName`} type="text" className="form-control formControl" placeholder="Please Enter Name" value={name} onChange={(e) => setName(e.target.value.toLocaleLowerCase())} />
                        <input key={`formYear`} type="text" className="form-control formControl" placeholder="Please Enter Year" value={year} onChange={(e) => setYear(e.target.value.toLocaleLowerCase())} />
                        <input key={`formColor`} type="text" className="form-control formControl" placeholder="Please Enter color" value={color} onChange={(e) => setColor(e.target.value.toLocaleLowerCase())} />
                        <input key={`formPantone`} type="text" className="form-control formControl" placeholder="Please Enter Pantone Value" value={pantone_value} onChange={(e) => setPantoneValue(e.target.value.toLocaleLowerCase())} />
                    </div>
                </div>
                <div className="card-footer cardFooter">
                    {!btnFlag ? <button type="button" className="btn btn-primary" onClick={addUser}>Save</button> : <><button type="button" onClick={editUser} className="btn btn-primary">Update</button> <button type="button" onClick={resetValue} className="btn btn-secondary">Cancel</button></>}
                </div>
            </div>
        </div>
    );
}

const UserList = (props) => {

    const [users, setUsers] = useState([])
    const [searchUserField, setSearchField] = useState("");
    const [editUser, setEditUser] = useState();
    const [editFlag, setEditFlag] = useState(false);

    //paginations
    const [page, setPage] = useState(1)
    const firstPage = 1;
    const [totalPage, setTotalPage] = useState();
    const [pageCount,setPageCount] = useState();
    const count = props.pageCount;

    const baseUrl = props.baseUrl;

    const getUsers = async () => {
        try {

            const usersRes = await axios(baseUrl).then((responce) => { return responce.data })
            setUsers(usersRes.data);
            
        } catch (err) {
            console.log(err.massage)
        }
    }

    useEffect(() => {
        getUsers();        
    }, [])

   
    
    //Filter Data
    const filterUser = users.filter((user) => {
        return user.name.toLocaleUpperCase().includes(searchUserField)
    })

    useEffect(()=>{ 
        setPageCount(users.length);
        const totalPagesCount = Math.ceil(pageCount/count)        
        setTotalPage(totalPagesCount);  
    },[filterUser])

    //Delete Data
    const deleteUser = user => {
        const remUsers = users.filter(currUser => "listRwo_" + currUser.id !== "listRwo_" + user.id)        
        setUsers(remUsers)

    }

    const editUserData = user => {
        const currUser = users.find(currUserData => currUserData.id === user.id)        
        setEditUser(currUser);        
        setEditFlag(true)
    }

    const addUser = addUser => setUsers([...users, addUser])
    const updateUser = updatedData => {
        const updatedUser = users.map((user)=>{
            if(updatedData.id === user.id){
                return {...user, id: updatedData.id, name:updatedData.name, year:updatedData.year, color:updatedData.color, pantone_value:updatedData.pantone_value}
            }
            return user
        })
        setUsers(updatedUser);
        setEditFlag(false)        
    }

    const currentPage = (currPage) => {        
        if(currPage >=1 && currPage <= totalPage)
        setPage(currPage);
    }

    return (
        <Fragment>
            <h2> User list</h2>
            <UserForm addUserPropes={addUser} editUserDataPropes={updateUser} editUserDataProps={editUser} btnFlagPropes={editFlag}/>
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
                        <th scope="col">Name:</th>
                        <th scope="col">Year</th>
                        <th scope="col">Color</th>
                        <th scope="col">Pantone Value</th>
                        <th scope="col">Edite</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {filterUser.slice(page*count - count, page*count).map((user) => (
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
                    {pageCount > 0 && <tr  key={`listRwo_tr`}>
                        <td className="pagNav" scope="row" colSpan={6}>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-end cosPagination">                            
                                <li key={`pagNav_Previous`} onClick={() => currentPage(page - 1)} className={page <= firstPage? "page-item disabled pageItem disabledClick": "page-item pageItem"}>
                                <span className="page-link">Previous</span>
                                </li>               
                                {
                                [...Array(totalPage)].map((_, i)=>{
                                    let pageNum = i+1;
                                     return<li className={page == pageNum?"page-item pageItem active" :"page-item pageItem"} onClick={() => currentPage(pageNum)} key={`pagNav_${i}`}><span className="page-link" href="#">{pageNum}</span></li>
                                })}
                                <li key={`pagNav_Next`} onClick={() => currentPage(page + 1)} className={page >= totalPage? "page-item pageItem disabled disabledClick": "page-item pageItem"}>
                                <span className="page-link" href="#">Next{totalPage}</span>
                                </li>
                            </ul>
                        </nav>
                        </td>
                    </tr>}
                </tfoot>
            </table>
        </Fragment>
    )
}

export default UserList;
