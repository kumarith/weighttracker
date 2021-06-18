import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';


const Edit = (props) => {

    const [bodyweight, setBodyweight] = useState('')
    const [height, setHeight] = useState('')
    const [hipwidth, setHipwidth] = useState('')
    const [date, setDate] = useState('')

    const handleBodyweight = (e) => { setBodyweight(e.target.value) }
    const handleHeight = (e) => { setHeight(e.target.value) }
    const handleHipwidth = (e) => { setHipwidth(e.target.value) }
    const handleDate = (e) => { setDate(e.target.value) }

    const { id }  = props.match.params
    const history = useHistory();


    const handleEdit  = async (e) => {
    
        const values = {
            bodyweight: bodyweight,
            height: height,
            hipwidth: hipwidth,
            date: date
        }       
        await axios.post(`http://localhost:4000/api/edit/${id}`, values)
        .then((response) => {
            setBodyweight(response.bodyweight)
            setHeight(response.height)
            setHipwidth(response.hipwidth)
            setDate(response.date)
            history.push("/weight")
        })
        .catch((error) => {
            console.log("print error " + error)
        })
       
    }


    return (
        <div className="container-edit">
        <form className="row g-3" >
            <div className="col-auto">
                <label  className="visually-hidden">Add Weight</label>
                <input type="text" className="form-control" value = {bodyweight} placeholder="Add BodyWeight" onChange = {handleBodyweight} />
                <br></br>
                <input type="text" className="form-control"  value = {height} placeholder="Add Height" onChange = {handleHeight} />
                <br></br>
                <input type="text" className="form-control"  value = {hipwidth} placeholder="Add Hipwidth" onChange = {handleHipwidth} />
                <br></br>
                <input type="text" className="form-control" value = {date} placeholder="Select Date" onChange = {handleDate} />
                <br></br>
            </div>
            <div className="col-auto">
                <button  type = "button" className="btn btn-primary mb-3" onClick = {handleEdit} >Save</button>
            </div>
        </form> 
        </div>  
    )
}

export default Edit;