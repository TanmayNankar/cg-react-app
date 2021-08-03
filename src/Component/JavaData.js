import axios from "axios";
import { useState, useEffect } from 'react';



let JavaData = (props) => {
    
 // here this is called as variable.   
    const [empList, setEmpList] = useState([]); // from axios
    const [emp, setEmp] = useState(''); // from axios 
    const [parentEmp, setParentEmp] = useState({}); // from props  
    const [parentEmpHike, setParentEmpHke] = useState(0); // from props 
    const [childEmp, setChildEmp] = useState({}); // child state   
  



    useEffect(() => {

        setParentEmp(props.parentEmp);
        setParentEmpHke(props.parentEmpHike);

        setChildEmp({
            eid: 301,
            ename: 'Tonu',
            salary: 30.5
        }
        );

        setEmp({
            eid: 0,
            ename: '',
            salary: 0
        }
        );



        

    //     axios.get(url)
    //     .then((response) => {
    //         setEmpList(response.data);
    //     })
    //    axios.get(`${url}/104`)
    //     .then((response) => {
    //         setEmp(response.data);
    //     })

        
    // axios.get('/emp').then ((abc) => 
    // {
    //     message = abc.data
    //     console.log(abc.data);
    // });

}, []);
  
const onTrigger = () => {
    props.parentCallback(childEmp);
};

const handleEmployee = (event) => {
    console.log(emp.eid);
    setEmp({
        ...emp,
        [event.target.name]: event.target.value
    });
};

const getAllEmployees = (e) => {
    console.log();
    axios.get(`/getall`)
        .then((response) => {
            setEmpList(response.data);
        }).catch(error => {
            console.log(error.message)
        });
}

const submitGetEmployeById = (event) => {
    axios.get(`/getemp/${emp.eid}`)
  //  axios.get(`/getEmployee/${emp.id}`)
        .then(
            (response) => {
                setEmp(response.data);
                console.log(emp.eid);
            }
        )
        .catch((error) => {
            console.log(error.message);
        });
    event.preventDefault();
}

const submitAddEmployee = (event) => {
    axios.post(`/addemp`, emp)
        .then((response) => {
            console.log(response.data.ename);
        }).catch((error) => {
            console.log(error.message)
        });
    event.preventDefault();
}

const submitUpdateEmployee = (event) => {
    axios.put(`/updateemp/`, emp)
    // axios.put(`/updateEmployee/`, emp)
        .then((response) => {
            console.log(response.data.ename);
        }).catch((error) => {
            console.log(error.message)
        });
    event.preventDefault();
}

const submitDeleteEmployee = (event) => {
    const userInput = window.confirm("Are you sure to delete the employee?");
    if (userInput == true) {
        axios.delete(`/deleteemp/${emp.eid}`)
            .then((response) => {
                console.log(response.data.ename);
            }).catch((error) => {
                console.log(error.message)
            });
    } else {
        console.log("You saved the employee!");

    }
    event.preventDefault();
}

return (
    <div>
        <p>JavaData Component</p>
        <p>axios {emp.name}</p>
        <p>child {parentEmp.name}</p>
        <p> child {parentEmpHike} </p>
        <button onClick={onTrigger}>Pass child emp to parent</button>
        <div>
            <p>Add new Employee</p>
            <form onSubmit={submitAddEmployee} className="form form-group">
                <div>
                    <input
                        type="number"
                        id="id"
                        name="id"
                        value={emp.eid}
                        placeholder="143" // add for other elements as well 
                        className="form-control mb-2"
                        onChange={handleEmployee}
                    />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={emp.ename}
                        className="form-control mb-2"
                        onChange={handleEmployee}
                    />
                    <input
                        type="number"
                        id="salary"
                        name="salary"
                        value={emp.salary}
                        className="form-control mb-2"
                        onChange={handleEmployee}
                    />
                </div>
                <button type="submit" className="btn btn-primary" >Add Employee</button>
            </form>
            <p> New employee added {emp.eid} , {emp.ename} , {emp.salary} </p>
        </div>

        <div>
            <p>Update an Employee</p>
            <form onSubmit={submitUpdateEmployee} className="form form-group">
                <div>
                    <input
                        type="number"
                        id="id"
                        name="id"
                        value={emp.eid}
                        placeholder="143" // add for other elements as well 
                        className="form-control mb-2"
                        onChange={handleEmployee}
                    />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={emp.ename}
                        className="form-control mb-2"
                        onChange={handleEmployee}
                    />
                    <input
                        type="number"
                        id="salary"
                        name="salary"
                        value={emp.salary}
                        className="form-control mb-2"
                        onChange={handleEmployee}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update Employee</button>
            </form>
            <div>
                <p> Employee Updated - {emp.eid} , {emp.ename} , {emp.salary} </p>
            </div>
        </div>

        <div>
            <p>Delete an Employee</p>
            <form onSubmit={submitDeleteEmployee} className="form form-group" >
                <div>
                    <input
                        type="number"
                        id="id"
                        name="id"
                        value={emp.eid}
                        placeholder="143" // add for other elements as well 
                        className="form-control mb-2"
                        onChange={handleEmployee}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Delete Employee</button>
            </form>
            <p>Employee deleted {emp.eid}</p>

        </div>


        <div>
            <p>Get employee by id</p>
            <form onSubmit={submitGetEmployeById} className="form form-group">
                <div>
                    <input
                        type="number"
                        id="id"
                        name="id"
                        value={emp.eid}
                        onChange={handleEmployee}
                        className="form-control mb-2"
                    // onChange={handleEmployee}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Get Employee By Id</button>
            </form>
            <div>
                <p>Employee Data - {emp.eid} , {emp.ename} , {emp.salary} </p>
            </div>
            <div>
                <p>Get all employees data </p>
                <button type="submit" className="btn btn-primary" onClick={getAllEmployees}>Get All Employees</button>
                <p>All Employee Data</p>
                <div> {empList.map(e => <p> {e.eid}, {e.ename} {e.salary} </p>)} </div>
            </div>

        </div>
    </div>
)
}
export default JavaData;


// ------------------------------old running-----------------
// return (
//     <div>
//         <p>JavaData Component</p>
//         {/* <p>axios {empList.map(e => <div>{e.name}</div>)}</p> */}
//         <p>axios {emp.name}</p>
//         <p>child {parentEmp.name}</p>
//         <p> child {parentEmpHike} </p>
//         <button onClick={onTrigger}>Pass child emp to parent</button>
//     </div>
// )
// }
// export default JavaData;
//-------------------------------ee------------------







// let JavaData = (props) => {



//     // props.getCallBack("Monu");


//     let getCall = (event) => {
//         props.childCallBack('Monu');
//         event.preventDefault(); // important
//     }

//     let message = props.parentName;


//     // axios.get('/hello').then ((abc) => 
//     // {
//     //     message = abc.data
//     //     console.log(abc.data);
//     // });

// //     axios.get('/emp').then ((abc) => 
// //     {
// //         message = abc.data
// //         console.log(abc.data);
// //     });


//     axios.get('/getemp/104').then ((abc) => 
//     {   
//         message = abc.data   
//         console.log(abc.data);
//     });

//     axios.get('/getByName/Sonu').then ((abc) => 
//     {
//         message = abc.data
//         console.log(abc.data);
//     });

 
//     axios.post('/addemp').then ((abc) => 
//     {
//         message = abc.data
//         console.log(abc.data);
//     });


//     return (
//         <div>
//             <p>Java JavaData</p>
//             <p>{getCall}</p>
//             {/* here we get data from parent to child */}
//             <p>{props. dataFromParent}</p>

//         </div>
//     )

// }

// export default JavaData;
