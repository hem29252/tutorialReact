import React from "react";

const Products = (props) => {
  const [product, setProduct] = React.useState(props.data);

  return (
    <div onClick={() => {props.handleDelete() }} class="card">
      <div className="card-body">
        <img className="product-pic" src={product.pic} />
        <div>
          <p style={{ textAlign: "center", fontWeight: "bold" }}>
            Name: {product.name}
          </p>
        </div>

        <div style={{ position: 'relative', backgroundColor: 'red'}}>
            <div className='product-price'>Price: {product.price}</div>
            <div className='product-stock'>Stock: {product.stock}</div>
        </div>
      </div>
    </div>
  );
};

export default Products;
