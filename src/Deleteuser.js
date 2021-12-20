import React from 'react'

function Deleteuser() {
    return (
        <div>
             <h3 className='header'>Delete User</h3>
            <form className='userForm'>
               
  <div class="form-group">
    <label for="firstname">First Name</label>
    <input type="text" class="form-control" id="firstname" placeholder="Enter First Name...."/>
    
  </div>
  <div class="form-group">
    <label for="lastname">Last Name</label>
    <input type="text" class="form-control" id="lastname"  placeholder="Enter Last Name...."/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email...."/>
  </div>
   
  <button type="submit" class="btn btn-danger">Confirm Delete User</button>
</form>
        </div>
    )
}

export default Deleteuser
