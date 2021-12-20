import React from 'react'
import { Link } from "react-router-dom"
function Product() {
    return (
        <>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 id="head" class="h3 mb-0 text-gray-800">Products</h1>
        <Link to='/createproduct' class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fas fa-plus fa-lg text-white-50"></i>Create Product</Link>
        </div>
        
        <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Mobile Brand</th>
      <th scope="col">Model</th>
      <th scope="col">Price</th>
      <th scope="col" colSpan="2">Actions</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Samsung</td>
      <td>S11</td>
      <td>80000</td>
      <td><Link to="/editproduct" class="btn btn-info">Edit Product</Link></td>
      <td><Link to="/deleteproduct" class="btn btn-danger">Delete Product</Link></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Apple</td>
      <td>I-Phone 13</td>
      <td>70000</td>
      <td><Link to="/editproduct" class="btn btn-info">Edit Product</Link></td>
      <td><Link to="/deleteproduct" class="btn btn-danger">Delete Product</Link></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>OnePlus</td>
      <td>8-Pro</td>
      <td>60000</td>
      <td><Link to="/editproduct" class="btn btn-info">Edit Product</Link></td>
      <td><Link to="/deleteproduct" class="btn btn-danger">Delete Product</Link></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>MI</td>
      <td>Note-10</td>
      <td>15000</td>
      <td><Link to="/editproduct" class="btn btn-info">Edit Product</Link></td>
      <td><Link to="/deleteproduct" class="btn btn-danger">Delete Product</Link></td>
    </tr>
  </tbody>
</table>
           </>
    )
}

export default Product
