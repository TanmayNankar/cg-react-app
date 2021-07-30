import axios from "axios";



let JavaData = (props) => {



    // props.getCallBack("Monu");


    let getCall = (event) => {
        props.childCallBack('Monu');
        event.preventDefault(); // important
    }

    let message = props.parentName;


    axios.get('/hello').then ((abc) => 
    {
        message = abc.data
        console.log(abc.data);
    });

    axios.get('/emp').then ((abc) => 
    {
        message = abc.data
        console.log(abc.data);
    });


    axios.get('/getemp/104').then ((abc) => 
    {   
        message = abc.data   
        console.log(abc.data);
    });

    axios.get('/getByName/Sonu').then ((abc) => 
    {
        message = abc.data
        console.log(abc.data);
    });

 
    // axios.post('/addemp').then ((abc) => 
    // {
    //     message = abc.data
    //     console.log(abc.data);
    // });


    return (
        <div>
            <p>Java JavaData</p>
            <p>{getCall}</p>
            {/* here we get data from parent to child */}
            <p>{props. dataFromParent}</p>

        </div>
    )

}

export default JavaData;
