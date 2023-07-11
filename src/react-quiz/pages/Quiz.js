import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const Quiz = () => {
    //const {id} = useParams();
    const navigate = useNavigate()
    const location = useLocation()

    const { id, question, options, correct_option } = location.state
    return (
        <div>
            <h5>{id} {question}</h5>
            {options.map((option) => {
                return <label style={{marginLeft: '2rem'}}>
                    <input type="radio" value={option} name="question"/>
                    {option}<br />
                </label>
                
                // return <li>{option}</li> 
                
            })}
            <h5>Answer: {correct_option}</h5>
            <br />
            <button onClick={()=>{
                navigate("/quizes")
            }}>Back to Quiz</button>
        </div>
    )
}

export default Quiz