import React from "react";

const AddNew = () => {
  return (
    <div className="my-10 px-5 w-[85%]">
      <h1 className="text-2xl font-semibold text-center">Add New Product</h1>

      <div className="mt-5 rounded py-10 flex gap-2">
        <div className="flex-[3] bg-white py-5 px-6 rounded space-y-5">
          <div>
            <p className="font-semibold text-gray-500">Product Title</p>
            <input type="text" />
          </div>
          <div className="flex justify-between mt-2 gap-2">
            <div className="flex-1">
              <p className="font-semibold text-gray-500">SKU</p>
              <input type="text" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-500">Color</p>
              <input type="text" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-500">Size</p>
              <input type="text" />
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-500 mt-2">Brand</p>
            <input type="text" />
          </div>

          <div>
            <p className="font-semibold text-gray-500 mt-2">Full Description</p>
            <textarea rows="4" cols="50" type="text" />
          </div>

          <div>
            <input type="file" className="mb-5" />
          </div>
        </div>

        <div className="flex-[1] bg-white p-2">
          <div>
            <p className="font-semibold text-gray-500">Price</p>
            <input type="text" />
          </div>

          <div>
            <p className="font-semibold text-gray-500 mt-2">Status</p>
            <input type="text" />
          </div>

          <div>
            <p className="font-semibold text-gray-500 mt-2">Tags</p>
            <input type="text" />
          </div>

          <div>
            <p className="font-semibold text-gray-500 mt-2 mb-1">Categories</p>
            <div>
              <div className="flex items-center mb-1 pl-1">
                <input
                  type="checkbox"
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                />
                <label
                  htmlFor="default-radio-1"
                  className="ml-2 text-sm font-medium text-gray-900 "
                >
                  Mens
                </label>
              </div>
              <div className="flex items-center mb-1 pl-1">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                />
                <label
                  htmlFor="default-radio-2"
                  className="ml-2 text-sm font-medium text-gray-900 "
                >
                  Women's
                </label>
              </div>
              <div className="flex items-center mb-1 pl-1">
                <input
                  type="checkbox"
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                />
                <label
                  htmlFor="default-radio-1"
                  className="ml-2 text-sm font-medium text-gray-900 "
                >
                  Watch
                </label>
              </div>
            </div>
          </div>

          <button className="mt-3 w-full bg-blue-500 text-white font-semibold py-2 rounded-md">
            Publish Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
