import React, {
  useEffect, useState
} from 'react'
import { Button, Checkbox, Form, Header } from 'semantic-ui-react'

const Login = (props) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const handleSubmit = () => {
    alert(`
      First Name: ${firstName}
      Last Name: ${lastName}
    `)
  }
  const handleChange = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;
    let listSet = {
      firstName: setFirstName,
      lastName: setLastName,
    }

    listSet[inputName](inputValue)
  }

  return(
    <>
      <Header as='h2' dividing>
        Login
      </Header>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name'
            name="firstName"
            value={firstName}
            onChange={handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name'
            name="lastName"
            value={lastName}
            onChange={handleChange} />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </>
  )
}

export default Login