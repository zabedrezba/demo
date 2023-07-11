import React, { useEffect, useState } from 'react'
import { MedicalData } from '../data/data'
import { Link } from 'react-router-dom'

const Quizes = () => {
    const [quizes, setQuizes] = useState([])


    useEffect(() => {
        setQuizes(MedicalData)
    }, [])

    //console.log(quizes)
    return (
        <div><h1>This Quiz Pages</h1>
            <section>
                {quizes.map((quiz) => {

                    const id = quiz.id
                    const question = quiz.question
                    const options = quiz.options
                    const correct_option = quiz.correct_option
                    return <article key={id}>
                        <h4>
                            {id}. {question} <br />
                            {options.map((option) => {
                                return <label style={{ marginLeft: '2rem' }}>
                                    <input type="radio" value={option} name="question" />
                                    {option}<br />
                                </label>

                            })}
                        </h4>
                        <Link to={id} state={{ id, question, options, correct_option }}> Solve Questions</Link>
                    </article>
                })}
            </section>
        </div>
    )
}

export default Quizes