import React, { useState, useEffect } from 'react'

export default function Puppy() {
  const [name, setName] = useState('Doggo')

  return (
    <div>
      <h1>The puppy's name is {name}</h1>
    </div>
  )
}




import React, { useState, useEffect } from 'react'

export function Puppy() {
  const [name, setName] = useState('Doggo')
  useEffect(() =>{
    document.title = 'Puppy Name: ' + name
  })

  const [age, setAge] = useState(4)
  useEffect(() => {
    console.log('second useEffect!')
    return () => console.log('unmounting...')
  })

  return (
    <div>
      <h1>The puppy's name is {name}</h1>
      <h3>The puppy's age is {age}</h3>
    </div>
  )
}




