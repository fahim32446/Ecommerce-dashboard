import React from "react";

const Order = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Customer Name</th>
            <th>Customer Email</th>
            <th>Total Amount</th>
            <th>Order Status</th>
            <th>Order Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#001</td>
            <td>David Mia</td>
            <td>david@gmail.com</td>
            <td>$400.56</td>
            <td>
              <span className="bg-green-700 px-3 py-1 rounded-xl text-white font-semibold ">Delivered</span>
            </td>
            <td>26.12.2022</td>
            <td className="">...</td>
          </tr>
          <tr>
            <td>#002</td>
            <td>Rahim Mia</td>
            <td>rahim@gmail.com</td>
            <td>$440.56</td>
            <td>  <span className="bg-red-700 px-3 py-1 rounded-xl text-white font-semibold ">Cancelled</span></td>
            <td>26.12.2022</td>
            <td className="">...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Order;
