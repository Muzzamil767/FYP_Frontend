import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  // Fetch the product data based on the productId
  useEffect(() => {
    // You should add your fetch logic here to get product details using productId
    // For example, you can use the Fetch API or an HTTP library like Axios.
    // Replace the placeholder with your actual API call.

    fetch(`${process.env.REACT_APP_API_URL}/api/v1/admin/product/${productId}`)
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.success) {
          setProduct(responseData.product);
        } else {
          console.error("Failed to fetch product:", responseData.error);
        }
      })
      .catch((error) => {
        console.error("Error while fetching product:", error);
      });
  }, [productId]);

  // Handle form submission to update the product
  const handleSaveProduct = (editedProduct) => {
    // You should add your API call to update the product here
    // For example, you can use the Fetch API or an HTTP library like Axios.
    // Replace the placeholder with your actual API call.

    fetch(`/api/v1/admin/product/${editedProduct._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedProduct),
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.success) {
          console.log("Product updated successfully");
          setProduct(editedProduct); // Update the product data in the component
        } else {
          console.error("Failed to update product:", responseData.error);
        }
      })
      .catch((error) => {
        console.error("Error while updating product:", error);
      });
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Edit Product</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const editedProduct = {
            _id: productId,
            name: e.target.name.value,
            description: e.target.description.value,
            stock: e.target.stock.value,
            category: e.target.category.value,
            price: e.target.price.value,
          };
          handleSaveProduct(editedProduct);
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          defaultValue={product.name}
          required
        />
        <br />
        <input
          type="text"
          name="description"
          placeholder="Title"
          defaultValue={product.description}
          required
        />
        <br />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          defaultValue={product.stock}
          required
        />
        <br />
        <input
          type="text"
          name="category"
          placeholder="Category"
          defaultValue={product.category}
          required
        />
        <br />
        <input
          type="number"
          name="price"
          placeholder="Price"
          defaultValue={product.price}
          required
        />
        <br />

        <button type="submit">Sav</button>
      </form>
    </div>
  );
};

export default EditProduct;
