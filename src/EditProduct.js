import React from 'react'

function EditProduct() {
    return (
        <div>
            <h3 className='header'>Edit Product</h3>
    <form className='productForm'>           
  <div class="form-group">
    <label for="brand">Mobile Brand</label>
    <input type="text" class="form-control" id="brand" placeholder="Enter Mobile Brand...."/>
    
  </div>
  <div class="form-group">
    <label for="model">Model</label>
    <input type="text" class="form-control" id="model"  placeholder="Enter Model...."/>
    
  </div>
  <div class="form-group">
    <label for="price">Price</label>
    <input type="text" class="form-control" id="price" aria-describedby="emailHelp" placeholder="Enter Price...."/>
  </div>
   
  <button type="submit" class="btn btn-info">Confirm Edit Product</button>
</form>
        </div>
    )
}

export default EditProduct
