import React, { useState } from 'react'

const FormUseState = () => {
    const [form, setForm] = useState({ name: " ", email: " " })

    function handleForm(e) {
        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(`name: ${form.name} , Email:${form.email}`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>{form.name}</h3>
                <input value={form.name} name="name"
                    placeholder='enter your text' onChange={handleForm} />

                <h3>{form.email}</h3>
                <input value={form.email} name="email"
                    placeholder='enter your text' onChange={handleForm} />
          
            <button type='submit'>submit</button>
            </form>


        </div>
    )
}

export default FormUseState
