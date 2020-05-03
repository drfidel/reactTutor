import React from 'react'
import Person from './Person'
function NameList() {

    //const names = ['Bruce', 'Peter', 'Clark']
    const person = [
        {
        id:1,
        name:'Bruce',
        age:30,
        skill: 'React'
        },{
        id:2,
        name:'James',
        age:20,
        skill: 'Python'
        },
        {
        id:3,
        name:'Pete',
        age:23,
        skill: 'Android'
        },
    ]
    //const namelist = names.map(name => <h2>{name}</h2>)
//const Personlist = person.map(person => <h2>i am {person.name} i am {person.age} i know{person.skill}</h2>)
    const Personlist = person.map(person => <Person key={person.id} person={person}/>)

    return (
        <div>
            {Personlist}
            {/*names.map(name => <h2>{name}</h2>)*/}
            {/* <h1>{names[0]}</h1>
            <h1>{names[1]}</h1>
            <h1>{names[2]}</h1> */}
        </div>
    )
}

export default NameList
