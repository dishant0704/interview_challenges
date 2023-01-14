
//Small Reactjs Challenges for Beginners
import { useState, useEffect } from "react"

const SmallChallenges = () => {

    //Challenge 01:
    const Challenge_01 = () => {
        return (
            <div>
                <p><b>Challenge 01</b>: Display `JSX is cool!` as an output</p>
                <h3>Display simple JSX</h3>
                <p>Best of Luck</p>
            </div>
        )

    }

    //Challenge 02:
    const Challenge_02 = () => {

        const users = [
            { name: "Ketan Sawant", id: 1 },
            { name: "Dishant Sawant", id: 2 },
            { name: "Megha Sawant", id: 3 }
        ];

        return (
            <div>
                <p><b>Challenge 02:</b> Display all users to the browser <br />
                    <b>Small Hint:</b> Use array map with react key
                </p>
                <h3>Display array of users to browser</h3>
                <h5>User names</h5>
                <ul>
                    {
                        users.map((user) => (<li key={user.id}>{user.name}</li>))}
                </ul>
            </div>
        )

    }

    //Challenge 03:
    const Challenge_03 = () => {
        const [show, setShow] = useState(true);
        return (
            <>
                <div>
                    <p>
                        <b>Challenge 03</b>: Make the button functional A click on button should toggle (show/hide) the string `Toggle Challenge` each time it is pressed
                    </p>
                </div>
                <h3>Show/Hide Element on Screen</h3>
                <button onClick={() => show ? setShow(false) : setShow(true)}>{show ? "Hide Element Below" : "Show Element Below"}</button>
                {show ? <div>Toggle Challenge</div> : null}
            </>
        );


    }

    //Challenge 04:
    const Challenge_04 = () => {
        const [text, setText] = useState("");
        return (
            <div>
                <p><b>Challenge 04</b>: Make button disabled when there is no character on the input field. Enable the `Submit` button (remove button from being disabled) when there is at least one character.</p>
                <h3>Disable Button Challenge</h3>
                <input type="text" onChange={(e) => (setText(e.target.value))} />
                <button disabled={text.length < 1}>Submit</button>
            </div>
        )

    }

    //Challenge 05:
    const Challenge_05 = () => {
        const [text, setText] = useState("");

        return (
            <>
                <p><b>Challenge 05</b>: User should be able to type in any characters on input and those character should show in the browser.</p>
                <h3>Data Binding Exercise</h3>
                <input type="text" placeholder="Enter Text" onChange={(e) => setText(e.target.value)} />
                <p>{text}</p>
            </>
        )

    }

    //Challenge 06
    const Challenge_06_child = ({ setValue }) => {
        return (
            <>
                <div>Child</div>
                <button onClick={() => (setValue("On Button click text upded"))}>Change Parent Value</button>
            </>
        );
    }

    const Challenge_06 = () => {

        const [value, setValue] = useState("I need to be updated from my child")

        return (
            <>
                <p><b>Challenge 06</b>: Parent text (I need to be updated from my child) should be updated when Child button below is clicked. Feel free to use any string to update the parent's current string.</p>
                <h3>Update Parent State Challenge (Using Callback)</h3>
                <div className="wrapper">
                    <div>Parent</div>
                    <div className="box-wrapper">{value}</div>
                </div>

                <div className="wrapper">
                    <Challenge_06_child setValue={setValue} />
                </div>

            </>
        )
    }

    //Challenge 07
    const Challenge_07_child = () => {
        return <div>This is children content</div>;
    }
    const Challenge_07 = ({ children }) => {

        return (
            <>
                <p><b> Challenge 07</b></p>: Show entire Child component content inside Parent component. Only add code on Parent Component below
                <h3>Dynamically add child components (React Children)</h3>
                <h5>Parent Component</h5>
                {children}
            </>
        )

    }

    //Challenge 08
    const Challenge_08 = () => {
        const [numberA, setNumberA] = useState(0);
        const [numberB, setNumberB] = useState(0);
        const [total, setTotal] = useState(0);

        return (
            <>
                <p><b>Challenge 08</b>: Make this app work like a calculator that can add two numbers.</p>
                <h3>Sum of Two Numbers</h3>
                <h5>Adding Two Numbers</h5>
                <input placeholder="First Number" type="number" onChange={(e) => setNumberA(e.target.value)} />
                <input placeholder="Second Number" type="number" onChange={(e) => setNumberB(e.target.value)} />
                <button onClick={() => { setTotal(Number(numberA) + Number(numberB)) }}>Add Two Numbers</button>
                <p>Total: {total}</p>

            </>
        )
    }

    //Challenge 09
    const Challenge_09 = () => {
        const [counter, setCounter] = useState(0);
        const increment = () =>setCounter(counter +1)
        const decrement = () =>setCounter(counter -1)
        return (
            <>
                <p><b>Challenge 09</b>:</p>
                <h3>Create Counter App</h3>
                <h2>Counter: {counter}</h2>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement} disabled={counter <= 0}>Decrement</button>
            </>

        )
    }

    //Challenge 10
    const Challenge_10 = () =>{
        const[userData, setUserData] = useState({});

        const getUsersData = async () =>{
            const responce = await fetch("https://jsonplaceholder.typicode.com/users/1")
            const jsonData = await responce.json();
            setUserData(jsonData)
            console.log(jsonData);
        }
        
        useEffect(()=>{
            getUsersData()
        },[])

        return(
            <>
            <p><b>Challenge 10</b>: </p>
            <h3>Fetch data from an API</h3>
            <h2>User Data</h2>
            <p>
                <strong>Name: </strong>{" "}
                {userData.name || "(Need to populate name here)"}
            </p>
            <p>
                <strong>Website: </strong>
                {userData.website || "(Need to populate website here)"}
            </p>
            <p>
                <strong>Email: </strong>
                {userData.email || "(Need to populate email here)"}
            </p>
            <p>
                <strong>Phone: </strong>
                {userData.phone || "(Need to populate phone here)"}
            </p>
            </>
        )
    }

    return (
        <>
            <Challenge_01 />
            <Challenge_02 />
            <Challenge_03 />
            <Challenge_04 />
            <Challenge_05 />
            <Challenge_06 />
            <Challenge_07>
                <Challenge_07_child />
            </Challenge_07>
            <Challenge_08 />
            <Challenge_09 />
            <Challenge_10 />
        </>
    )
}

export default SmallChallenges