import React from 'react';
import { useState, useEffect } from 'react';
// import Hello from './Hello';
// import MyTable from './MyTable';
import JavaData from './JavaData';
// import Counter from './Counter';



let Employee = () => {
    const [parentEmp, setParentEmp] = useState({}); // parent state  
    const [parentEmpHike, setParentEmpHke] = useState(0); // parent state  
    const [childEmp, setChildEmp] = useState({}); // from callback    

    useEffect(() => {

        setParentEmp({
            eid: 201,
            ename: 'Sonu',
            salary: 20.5
        }
        );

        setParentEmpHke(10);
    }, []);

    const handleCallback = (childEmpData) => {
        setChildEmp(childEmpData);
        console.log(childEmpData);
    }

    return (
        <div>
            <h1 >Employee Component</h1>
            <p> parent {parentEmp.ename}</p>
            <p> parent {parentEmpHike}</p>
            {/* <JavaData></JavaData> */}
            <p>parent {childEmp.ename}</p>
            <JavaData
                parentEmp={parentEmp} //3
                parentEmpHike={parentEmpHike}
                parentCallback={handleCallback}
            ></JavaData>
            {/* <Counter></Counter> */}
        </div>
    )
}
export default Employee;



// // fun or  class
// class Employee extends React.Component {

//     constructor() {
//         super();
//         this.state ={
//             parentName : 'Sonu',
//             childName : ''
//         }

//     }

//     childCallBack = (childinfo) => {
//        this.setState({childName :childinfo});
//     }

    // render() {
    //     return (<div>
    //         <h1 className="display-1 text-primary">Employee Component</h1>
    //        {/* <JavaData dataFromParent = {this.state.parentName}></JavaData> */}
    //        <JavaData getCall= {this.childCallBack} ></JavaData>          
    //        {/* <Hello />
    //         <MyTable/> */}
        
// //         </div>
//         );
//     }
// }
// export default Employee;



// class Employee extends React.Component {



//     constructor() {
//         super();
//         this.emps = EmployeeService.getHello;
//         this.state = { name: 'Monu', salary: 10.5 };
//     }

//     increaseSalary = () => {
//         this.setState({ salary: this.state.salary + 10 });
//     };
//     setMyName = (evt) => {
//         this.setState({ name: evt.target.value });
//     }
//     render() {
//         return (<div>
//             <h1 className="display-1 text-primary">Employee Component</h1>

//             <h1 > Hi! I am {this.state.name} and my salary is {this.state.salary}.</h1>
//             <button type="button"
//                 onClick={this.increaseSalary} >Increase</button>
//             <form>
//                 <h1 >Data Form</h1>
//                 <p>Name:</p>
//                 <input type="text"
//                     onChange={evt => this.setMyName(evt)}></input>
//             </form>
//             <p>Hello - {this.emps} </p>
//         </div>
//         );
//     }
// }
// export default Employee;



// import React from 'react';

// class Employee extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             name: "Sonu",
//             salary: 10.5
//         };
//     }

//     increaseSalary = () => {
//         console.log("Pay hiked!")
//         this.setState({ salary: this.state.salary + 10 });
//     };

//     render() {
//         return (<div className="App">
//             <h1 > Hi! I am {this.state.name} and my salary is {this.state.salary}.</h1>
//             <button type="button"
//                 onClick={this.increaseSalary} >Increase</button>
//         </div>
//         );
//     }
// }
// export default Employee;



// import React from 'react';

// class Employee extends React.Component {

//     constructor() {
//         super();

//         // this.someObject = { key: "value", key2: 111, key3: true, key4: { subKey5: 10, subKey6: 2345 } };

//         this.state = {
//             name: "Sonu",
//             salary: 10.5,
//             phones: { first: 1010, second: 4141 }
//         };
//     }

//     render() {
//         return (
//             <div className="App">
//                 <h1 > Hi! I am {this.state.name} and my salary is {this.state.salary}.</h1>
//                 <p> {this.state.phones.second} </p>
//             </div>
//         );
//     }
// }
// export default Employee;