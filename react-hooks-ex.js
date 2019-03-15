import React, { useState, useEffect } from 'react'

export default function Puppy() {
  const [name, setName] = useState('Doggo')
  const [age, setAge] = useState(4)
  //.......
}




import React, { useState, useEffect } from 'react'

export function Puppy() {
  const [name, setName] = useState('Doggo')
  useEffect(() =>{
    document.title = 'Puppy Name: ' + this.state.name
  })

  const [age, setAge] = useState(4)

  return (
    <div>
      <h1>The puppy's name is {this.state.name}</h1>
    </div>
  )
}




