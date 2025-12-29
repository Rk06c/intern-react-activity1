import React, { useState } from 'react'
//import { useSelector, useDispatch } from 'react-redux'
import { produce } from "immer";
import { useDispatch, useSelector } from 'react-redux';
import {
     increment,
     decrement,
     reset ,
     doubleIncrement,
     incrementByAmount
    } from './slice/counterSlice.js';
import { addUser,removeUser } from './slice/userSlice1.js';


export default function ReduxDemo() {
    const counter = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [amount , setAmount] = useState('');

    //user state from redux store
    const user = useSelector((state) => state.user.user);
    const [formData , setFormData] = useState({
        name:'',
        email:'',
        age:''
    })
 const handleChange=(e)=>{
    setFormData({
        ...formData,
        [e.target.name]:e.target.value
    })
 }
 const handleSumit=(e)=>{
    e.preventDefault();
    dispatch(addUser(formData))
    setFormData({
        name:'',
        email:'',
        age:''
    })
 }
 console.log('user data from redux store',user);

//immer example
    const arr=[{
        name:'rkumar',
        yearOfexp:'5 years',
        roll:'MERN stack developer'

    },{
        name:'ajay',
        yearOfexp:'3 years',
        roll:'frontend developer'
    }]

    const newArr= produce(arr,draft=>{
        draft.push({
            name:'vijay',
            yearOfexp:'4 years',
            roll:'backend developer'
        })

        draft[0].name='Rkumar updated'
        draft[2].roll='Devops engineer'

    })
    console.log('newArr',newArr)
    console.log('arr',arr)

  return (
    <>
    <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>ReduxDemo</h1>
    <div style={{ textAlign: 'center', marginTop: '50px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', maxWidth: '400px', margin: '0 auto' }}>
        <h2 style={{ color: '#555', marginBottom: '20px' }}>Counter: {counter}</h2>
        <button 
            onClick={() => dispatch(increment())} 
            style={{ 
                marginRight: '10px', 
                padding: '10px 15px', 
                backgroundColor: '#007bff', 
                color: 'white', 
                border: 'none', 
                borderRadius: '4px', 
                cursor: 'pointer',
                fontSize: '14px'
            }}
        >
            Increment
        </button>
        <button 
            onClick={() => dispatch(decrement())} 
            style={{ 
                marginRight: '10px', 
                padding: '10px 15px', 
                backgroundColor: '#dc3545', 
                color: 'white', 
                border: 'none', 
                borderRadius: '4px', 
                cursor: 'pointer',
                fontSize: '14px'
            }}
        >
            Decrement
        </button>
        <button 
            onClick={() => dispatch(reset())} 
            style={{ 
                marginRight: '10px', 
                padding: '10px 15px', 
                backgroundColor: '#6c757d', 
                color: 'white', 
                border: 'none', 
                borderRadius: '4px', 
                cursor: 'pointer',
                fontSize: '14px'
            }}
        >
            Reset
        </button>
        <button 
            onClick={() => dispatch(doubleIncrement())} 
            style={{ 
                marginRight: '10px', 
                padding: '10px 15px', 
                backgroundColor: '#28a745', 
                color: 'white', 
                border: 'none', 
                borderRadius: '4px', 
                cursor: 'pointer',
                fontSize: '14px'
            }}
        >
            Double Increment
        </button> <br />
        <input 
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            placeholder="Enter amount"
            style={{ 
                marginTop: '20px', 
                marginRight: '10px',
                padding: '8px 12px', 
                border: '1px solid #ccc', 
                borderRadius: '4px', 
                width: '100px',
                fontSize: '14px'
            }}
        />
        <button 
            onClick={() => dispatch(incrementByAmount(amount))} 
            style={{ 
                padding: '10px 15px', 
                backgroundColor: '#17a2b8', 
                color: 'white', 
                border: 'none', 
                borderRadius: '4px', 
                cursor: 'pointer',
                fontSize: '14px'
            }}
        >
            Increment By Amount
        </button>
    </div>


   {/* //user form  */}
    <div style={{ textAlign: 'center', marginTop: '50px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', maxWidth: '400px', margin: '0 auto' }}>
        <h2 style={{ color: '#555', marginBottom: '20px' }}>User Management</h2>
        <input 
            type="text"
            name="name"
            placeholder='Name'
            value={formData.name}
            onChange={handleChange}
            style={{
                display: 'block',
                marginBottom: '10px', 
                padding: '10px', 
                border: '1px solid #ccc', 
                borderRadius: '4px', 
                width: '80%',
                maxWidth: '300px',
                fontSize: '14px',
                margin: '0 auto 10px'
            }}
        /> 
        <input 
            type="email"
            name="email"
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
            style={{
                display: 'block',
                marginBottom: '10px', 
                padding: '10px', 
                border: '1px solid #ccc', 
                borderRadius: '4px', 
                width: '80%',
                maxWidth: '300px',
                fontSize: '14px',
                margin: '0 auto 10px'
            }}
        /> 
        <input 
            type="number"
            name="age"
            placeholder='Age'
            value={formData.age}
            onChange={handleChange}
            style={{
                display: 'block',
                marginBottom: '20px', 
                padding: '10px', 
                border: '1px solid #ccc', 
                borderRadius: '4px', 
                width: '80%',
                maxWidth: '300px',
                fontSize: '14px',
                margin: '0 auto 20px'
            }}
        /> 
        <button 
            onClick={handleSumit} 
            style={{ 
                padding: '10px 20px', 
                backgroundColor: '#28a745', 
                color: 'white', 
                border: 'none', 
                borderRadius: '4px', 
                cursor: 'pointer',
                fontSize: '14px',
                marginBottom: '20px'
            }}
        >
            Add User
        </button>
        {/* usercard */}
        {user && (
            <div style={{ 
                border: '1px solid #ddd', 
                width: '300px', 
                margin: '20px auto', 
                padding: '20px',
                borderRadius: '8px',
                backgroundColor: 'white',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
                <h3 style={{ color: '#333', marginBottom: '15px' }}>User Details</h3>
                <p style={{ marginBottom: '10px' }}><strong>Name:</strong> {user.name}</p>
                <p style={{ marginBottom: '10px' }}><strong>Email:</strong> {user.email}</p>
                <p style={{ marginBottom: '15px' }}><strong>Age:</strong> {user.age}</p>
                <button 
                    onClick={() => dispatch(removeUser())} 
                    style={{ 
                        padding: '8px 15px', 
                        backgroundColor: '#dc3545', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '4px', 
                        cursor: 'pointer',
                        fontSize: '14px'
                    }}
                >
                    Remove User
                </button> 
            </div>
        )}
    </div>
    
    </>
    )
}