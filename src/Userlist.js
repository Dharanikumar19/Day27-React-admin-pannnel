import React from 'react'
import { Link } from "react-router-dom"

function Userlist() {
    return (
       <>
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 id="head" class="h3 mb-0 text-gray-800">Userlist</h1>
    <Link to='/createuser' class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
            class="fas fa-plus fa-lg text-white-50"></i>Create User</Link>
    </div>
    <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col" colSpan="2">Actions</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>mark@gmail.com</td>
      <td><Link to="/edituser" class="btn btn-info">Edit User</Link></td>
      <td><Link to="/deleteuser" class="btn btn-danger">Delete User</Link></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>jacob@gmail.com</td>
      <td><Link to="/edituser" class="btn btn-info">Edit User</Link></td>
      <td><Link to="/deleteuser" class="btn btn-danger">Delete User</Link></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>Sam</td>
      <td>larry@gmail.com</td>
      <td><Link to="/edituser" class="btn btn-info">Edit User</Link></td>
      <td><Link to="/deleteuser" class="btn btn-danger">Delete User</Link></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Peter</td>
      <td>Parker</td>
      <td>parker@gmail.com</td>
      <td><Link to="/edituser" class="btn btn-info">Edit User</Link></td>
      <td><Link to="/deleteuser" class="btn btn-danger">Delete User</Link></td>
    </tr>
  </tbody>
</table>
       </>
    )
}

export default Userlist
