import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const UpdateProduct = () => {
  const [prevData, setPrevData] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [file, setFile] = useState(null);
  const formData = new FormData();

  const HandleChange = (e) => {
    const { value, name } = e.target;
    setEditProduct({ ...editProduct, [name]: value });
  };
    
  const HandleDelete = async (id) => {
    if (id > 0 && window.confirm("Are You Sure For Delete The Product..!!")) {
      try {
        await axios.delete(`https://localhost:7216/api/Product/${id}`);
        toast.success("Product Deleted Successfully..!!");
        GetData();
      } catch (error) {
        toast.error(error.message); 
      }
    }
  };

  const HandleEdit = async () => {
    if (file != null) {
      formData.append("Image", file);
      formData.append("Name", editProduct.name);
      formData.append("Price", editProduct.price);
      formData.append("Description", editProduct.description);
      formData.append("Category", editProduct.category);

      try {
        await axios.put(
          `https://localhost:7216/api/Product/${editProduct.id}`,
          formData
        );
        toast.success("Product Updated Successfully..");
        GetData();
        setEditProduct(null);
      } catch (error) {
        toast.error("Failed To Update");
      }
    } else {
      alert("Upload Image First!");
    }
  };

  const GetData = async () => {
    const data = await axios.get("https://localhost:7216/api/Product/GetAll");
    setPrevData(data.data.data);
  };

  const HandleFile = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div className="p-3 w-full">

      {/* EDIT POPUP */}
      {editProduct && (
        <div className="
          fixed top-0 left-0 w-full h-full 
          bg-black/50 backdrop-blur-md 
          z-50 flex justify-center items-center p-4
        ">
          <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-xl border">
            <img
              src={editProduct.imagePath}
              alt=""
              className="h-28 w-28 mx-auto rounded-xl object-cover shadow-lg"
            />

            <div className="space-y-3 mt-4">
              <input
                type="text"
                name="name"
                value={editProduct.name}
                onChange={HandleChange}
                placeholder="Product Name"
                className="w-full border border-gray-300 p-3 rounded-xl"
              />

              <input
                type="text"
                name="category"
                value={editProduct.category}
                onChange={HandleChange}
                placeholder="Category"
                className="w-full border border-gray-300 p-3 rounded-xl"
              />

              <input
                type="text"
                name="description"
                value={editProduct.description}
                onChange={HandleChange}
                placeholder="Description"
                className="w-full border border-gray-300 p-3 rounded-xl"
              />

              <input
                type="number"
                name="price"
                value={editProduct.price}
                onChange={HandleChange}
                placeholder="Price"
                className="w-full border border-gray-300 p-3 rounded-xl"
              />

              <input
                type="file"
                onChange={HandleFile}
                className="w-full border border-gray-300 p-3 rounded-xl"
              />

              <button
                onClick={HandleEdit}
                className="w-full bg-blue-600 text-white p-3 rounded-xl mt-3"
              >
                Update Product
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- DESKTOP/TABLET VIEW (md+) --- */}
      <div
        className="
          hidden md:block
          w-full overflow-hidden rounded-xl
          bg-gradient-to-r from-blue-600/30 to-blue-800/30
          backdrop-blur-xl border border-blue-300/40 shadow-2xl
        "
      >
        <div
          className="
            grid grid-cols-6 gap-4
            px-5 py-3 bg-blue-900/40
            text-white text-sm font-semibold border-b border-blue-300/30
          "
        >
          <div>Image</div>
          <div>Name</div>
          <div>Category</div>
          <div>Price</div>
          <div>Description</div>
          <div className="text-center">Actions</div>
        </div>

        {prevData.map((p) => (
          <div key={p.id} className="border-b border-blue-300/20">
            <div
              className="
                grid grid-cols-6 gap-4 
                items-center px-5 py-4 bg-gray-100
                hover:bg-blue-200 transition-all
              "
            >
              <img
                src={p.imagePath}
                className="w-20 h-20 rounded-lg object-cover shadow-md"
              />

              <div className="font-semibold text-violet-700">{p.name}</div>
              <div>{p.category}</div>
              <div className="font-bold">₹ {p.price}</div>
              <div>{p.description}</div>

              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => setEditProduct(p)}
                  className="px-4 py-2 bg-blue-300 text-blue-900 rounded-md"
                >
                  Update
                </button>
                <button
                  onClick={() => HandleDelete(p.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- MOBILE VIEW (CARDS) --- */}
      <div className="space-y-4 mt-4 md:hidden">
        {prevData.map((p) => (
          <div
            key={p.id}
            className="
              bg-white/80 rounded-2xl p-4 shadow-lg border border-gray-200
            "
          >
            <img
              src={p.imagePath}
              alt={p.name}
              className="w-full h-52 object-cover rounded-xl shadow-md"
            />

            <div className="text-center mt-3">
              <h2 className="text-lg font-semibold text-blue-700">{p.name}</h2>
              <p className="text-gray-600">{p.category}</p>
              <p className="text-xl font-bold text-green-600">₹ {p.price}</p>
              <p className="text-gray-500 text-sm">{p.description}</p>
            </div>

            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={() => setEditProduct(p)}
                className="px-5 py-2 bg-blue-500 text-white rounded-xl shadow-md"
              >
                Update
              </button>

              <button
                onClick={() => HandleDelete(p.id)}
                className="px-5 py-2 bg-red-500 text-white rounded-xl shadow-md"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdateProduct;
