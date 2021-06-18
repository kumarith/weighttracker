import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';



const Weight  = (props) => {

    const [bodyweight, setBodyweight] = useState('')
    const [height, setHeight] = useState('')
    const [hipwidth, setHipwidth] = useState('')
    const [date, setDate] = useState('')

    const handleBodyweight = (e) => { setBodyweight(e.target.value) }
    const handleHeight = (e) => { setHeight(e.target.value) }
    const handleHipwidth = (e) => { setHipwidth(e.target.value) }
    const handleDate = (e) => { setDate(e.target.value) }


    const [weightHistory, setWeightHistory] = useState([])
    useEffect(() => {
     async function fetchWeights() {
      let response = await fetch('http://localhost:4000/api/weight')
      response = await response.json()
      console.log("resonse "+response);
      setWeightHistory(response)

    }

    fetchWeights()
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitted weight value " + bodyweight)
        const values = {
            bodyweight: bodyweight,
            height: height,
            hipwidth: hipwidth,
            date: date
        }
        await axios.post("http://localhost:4000/api/weight", values)
        .then((response) => {
            console.log("printing values from api " + response.data)
            setBodyweight(bodyweight)
            setHeight(height)
            setHipwidth(hipwidth)
            setDate(date)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const history = useHistory();


    const handleDelete = id => async (e) => {
        e.preventDefault()
        alert("Delted Successfully ")
        await axios.delete("http://localhost:4000/api/weight/"+id, (err, res) => {
            if(err){
                res.send(err)
            } else {
                res.send(res)
                console.log("suceccfully deleted " + res)
            }
        })
    }


    return (
        <div className="container">
        <form className="row g-3" onSubmit = {handleSubmit}>
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
                <button type="submit" className="btn btn-primary mb-3">Submit</button>
            </div>
        </form>        
        <table className="table table-striped">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">BodyWeight</th>
            <th scope="col">Height</th>
            <th scope="col">Hipwidth</th>
            <th scope="col">Date</th>
            </tr>
        </thead>
        <tbody>
            {weightHistory.map( weight => (
            <tr key = {weight._id} >
            <th scope="row">1</th>
            <td> {weight.bodyweight} </td>
            <td>{weight.height}  </td>
            <td>{weight.hipwidth}  </td>
            <td>{weight.date} </td>
            <td>
                <button type="submit" className="btn btn-primary mb-3" onClick = {() => history.push("/edit/"+ weight._id)}>Edit</button>
            </td>
            <td>
                <button type="submit" className="btn btn-danger mb-3" onClick = {handleDelete(weight._id)}>Delete</button>
            </td>
            </tr>
            )
            )    
            }       
        </tbody>
        </table>
        </div>
    )
}

export default Weight;
