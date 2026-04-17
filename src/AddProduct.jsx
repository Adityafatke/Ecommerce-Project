import axios from "axios";
import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";

const AddProduct = () => {
  const [file, setfile] = useState(null);
  const formData = new FormData();

  const [addproduct, setAddProduct] = useState({
    Name: "",
    Price: "",
    Description: "",
    Category: "",
    Image: "",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setAddProduct({ ...addproduct, [name]: value });
  };

  const HandleSubmit = async () => {
    if (file == null) {
      alert("empty file");
    } else {
      formData.append("Image", file);
      formData.append("Name", addproduct.Name);
      formData.append("Price", addproduct.Price);
      formData.append("Description", addproduct.Description);
      formData.append("Category", addproduct.Category);
    }
    setAddProduct((prev) => ({ ...prev, Image: file }));
    try {
      const resp = await axios.post(
        "https://localhost:7216/api/Product/add",
        formData
      );
      toast.success("product Added SuccessFully");
    } catch (error) {
      toast.error("product Already Exist");
    }
  };

  const HandleFile = (e) => {
    setfile(e.target.files[0]);
    const file = e.target.files[0];
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen py-5 px-4">
      <div className="bg-white p-6 md:p-10 rounded-3xl shadow-lg w-full max-w-md flex flex-col gap-3">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-700 mb-4">
          Add New Product
        </h2>

        <input
          type="text"
          name="Name"
          onChange={(e) => HandleChange(e)}
          placeholder="Enter Product Name"
          className="border border-blue-400 p-3 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full transition"
        />
        <input
          type="text"
          name="Category"
          onChange={(e) => HandleChange(e)}
          placeholder="Category"
          className="border border-blue-400 p-3 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full transition"
        />
        <input
          type="text"
          name="Description"
          onChange={(e) => HandleChange(e)}
          placeholder="Description"
          className="border border-blue-400 p-3 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full transition"
        />
        <input
          type="number"
          name="Price"
          onChange={(e) => HandleChange(e)}
          placeholder="Enter Price"
          className="border border-blue-400 p-3 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full transition"
        />
        <input
          type="file"
          name="Image"
          onChange={(e) => HandleFile(e)}
          className="border border-blue-400 p-3 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full transition cursor-pointer"
        />

        <button
          onClick={HandleSubmit}
          className="bg-blue-600 text-white font-semibold p-3 rounded-2xl hover:bg-blue-700 transition w-full mt-2 shadow-md"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
