import React from 'react';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

export default function User() {
	
		return <h2>User</h2>;

		const MOCK_API_URL = 'https://652055e1906e276284c45ba5.mockapi.io/rh';

//user information, new user inputs, and updated user inputs. Sets a constant for a mock API URL
  const [users, setUsers] = useState([{}])

  const [newUserName, setNewUserName] = useState('')
  const [newUserJobTitle, setNewUserJobTitle] = useState('')
  const [newUserCompanyName, setNewUserCompanyName] = useState('')

  const [updatedName, setUpdatedName] = useState('')
  const [updatedJobTitle, setUpdatedJobTitle] = useState('')
  const [updatedCompanyName, setUpdatedCompanyName] = useState('')


  //when you post a new user, it sends a request to the mock api url with a new user data (name, job title, and company name). After a request, it triggers the getUsers function to update the user list.
  function getUsers() {
    fetch(MOCK_API_URL)
    .then(data => data.json())
    .then(data => setUsers(data))
  }

  useEffect(() => {
    getUsers()
    console.log(users)
  }, [])

  function deleteUser(id) {
    fetch(`${MOCK_API_URL}/${id}`, {
      method: 'DELETE'
    }).then(() => getUsers())
  }


  function postNewUser(e) {
    e.preventDefault()

    fetch(MOCK_API_URL, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
          name: newUserName,
          jobTitle: newUserJobTitle,
          companyName: newUserCompanyName,
      })
    }).then(() => getUsers())
  }

  //sends a PUT request to update an existing user's data. Updating their name, job title, company name.
  function updateUser(e, userObject) {
    e.preventDefault()

    let updatedUserObject = {
      ...userObject, 
      name: updatedName,
      jobTitle: updatedJobTitle,
      companyName: updatedCompanyName,
    }

    fetch(`${MOCK_API_URL}/${userObject.id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedUserObject), 
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => getUsers())
    
  }
//onChange event to update state variables. A submit button triggering the postNewUser function when clicked.
  return (
    <div className="App">
      <form>
        <h3>POST new user form</h3>
        <label>Name</label>
        <input onChange={(e) => setNewUserName(e.target.value)}></input>
        <label>Job Title</label>
        <input onChange={(e) => setNewUserJobTitle(e.target.value)}></input>
        <label>Company Name</label>
        <input onChange={(e) => setNewUserCompanyName(e.target.value)}></input>
        <button className="submitButton" onClick={(e) => postNewUser(e)}>Submit</button>
      </form>

      {users.map((user, index) => (
        <div className="userContainer" key={index}>
          <div>
            Name: {user.name} <br></br>
            Job Title: {user.jobTitle} <br></br>
            Company Name: {user.companyName} <br></br>
            <button className="deleteButton" onClick={() => deleteUser(user.id)}>Delete</button>
          </div>
          <form>
            <h3>Update This User</h3>
            <label>Update Name</label> 
            <input onChange={(e) => setUpdatedName(e.target.value)}></input> <br></br>

            <label>Update Job Title</label> 
            <input onChange={(e) => setUpdatedJobTitle(e.target.value)}></input> <br></br>

            <label>Update Company Name</label> 
            <input onChange={(e) => setUpdatedCompanyName(e.target.value)}></input> <br></br>
            <button className="updateButton" onClick={(e) =>updateUser(e, user)}>Update</button>
          </form>
        </div>
      ))}
    </div>
  )


}