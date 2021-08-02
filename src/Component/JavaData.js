import axios from "axios";
import { useState, useEffect } from 'react';


let JavaData = (props) => {
    
    const [empList, setEmpList] = useState([]); // from axios
    const [emp, setEmp] = useState(''); // from axios 
    const [parentEmp, setParentEmp] = useState({}); // from props  
    const [parentEmpHike, setParentEmpHke] = useState(0); // from props 
    const [childEmp, setChildEmp] = useState({}); // child state   
    const url = `/emp/`;

    useEffect(() => {

        setParentEmp(props.parentEmp);
        setParentEmpHke(props.parentEmpHike);
        setChildEmp({
            id: 301,
            name: 'Tonu',
            salary: 30.5
        }
        );

        

        axios.get(url)
        .then((response) => {
            setEmpList(response.data);
        })
     axios.get(`${url}/101`)
        .then((response) => {
            setEmp(response.data);
        })

        
    // axios.get('/emp').then ((abc) => 
    // {
    //     message = abc.data
    //     console.log(abc.data);
    // });

}, []);
  
const onTrigger = () => {
    props.parentCallback(childEmp);
};

return (
    <div>
        <p>JavaData Component</p>
        {/* <p>axios {empList.map(e => <div>{e.name}</div>)}</p> */}
        <p>axios {emp.name}</p>
        <p>child {parentEmp.name}</p>
        <p> child {parentEmpHike} </p>
        <button onClick={onTrigger}>Pass child emp to parent</button>
    </div>
)
}
export default JavaData;








// import axios from "axios";



// let JavaData = (props) => {



//     // props.getCallBack("Monu");


//     let getCall = (event) => {
//         props.childCallBack('Monu');
//         event.preventDefault(); // important
//     }

//     let message = props.parentName;


//     axios.get('/hello').then ((abc) => 
//     {
//         message = abc.data
//         console.log(abc.data);
//     });

//     axios.get('/emp').then ((abc) => 
//     {
//         message = abc.data
//         console.log(abc.data);
//     });


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

 
//     // axios.post('/addemp').then ((abc) => 
//     // {
//     //     message = abc.data
//     //     console.log(abc.data);
//     // });


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
