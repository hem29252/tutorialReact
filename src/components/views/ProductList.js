import React from "react";
import Products from "./Products";

const ProductList = () => {
  const [data, setData] = React.useState({
    products: [
      {
        id: 1,
        name: "iPhone",
        price: 2000,
        stock: 2,
        pic: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone11-select-2019-family?wid=882&hei=1058&fmt=jpeg&qlt=80&.v=1567022175704",
      },
      {
        id: 2,
        name: "Samsung",
        price: 2000,
        stock: 2,
        pic: "",
      },
      {
        id: 3,
        name: "Nokia",
        price: 2000,
        stock: 2,
        pic: "",
      },
      {
        id: 7,
        name: "iPad",
        price: 2000,
        stock: 2,
        pic: "",
      },
      {
        id: 5,
        name: "Mac Os",
        price: 2000,
        stock: 2,
        pic: "",
      },
      {
        id: 6,
        name: "Notebook",
        price: 2000,
        stock: 2,
        pic: "",
      },
    ],
  });

  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [stock, setStock] = React.useState("");
  const [pic, setPic] = React.useState("");

  const addProductHandle = (n) => {
    /*       console.log(`name: ${name}, price: ${price}, stock: ${stock}, pic: ${pic}`) */
    let id = data.products.length + 1
    
    let newProduct = {
        id: id,
        name: name,
        price: price,
        stock: stock,
        pic: pic,
    }

    let updateProduct = [...data.products,newProduct]

    setData({
        products: updateProduct
    })

  };

  const deleteProductHandle = (id) => {
      let productDelete = [...data.products]

      let indexDelete = productDelete.findIndex((item) => {
          return item.id == id;
      })

      productDelete.splice(indexDelete, 1)
      
      setData({
          products: productDelete
      })
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div>
            <input
              value={name}
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              value={price}
              type="text"
              placeholder="price"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              value={stock}
              type="text"
              placeholder="stock"
              onChange={(e) => {
                setStock(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              value={pic}
              type="text"
              placeholder="uri pic"
              onChange={(e) => {
                setPic(e.target.value);
              }}
            />
          </div>
          <div>
            <button onClick={addProductHandle.bind(this, "suntorn")}>
              add
            </button>
          </div>
        </div>
      </div>

      <div className="container-product-list">
        {data.products.map((item, index) => (
          <Products data={item} handleDelete={deleteProductHandle.bind(this, item.id)} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
