import React from 'react'
import ReduxDemo from '../redux/ReduxDemo'

export default function CanditedProfile() {
    const name = 'rkumar'
    const yearOfexp =' 5 years'
    const roll = 'MERN stack developer'

  return (
    <>
    <h1>wellcome</h1>
    <p>hi im {name} working with {yearOfexp} of experience in HELP . roll and responciable {roll}</p>
    <ReduxDemo/>

    </>
  )
}
