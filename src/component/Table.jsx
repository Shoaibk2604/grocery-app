import React from "react";

const Table = () => {
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email Id</th>
            <th>DOJ</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>apple</td>
            <td>xyz@gmail.com</td>
            <td>24-02-2023</td>
            <td className="edit-btn">
              <button className="btn">EDIT</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>mango</td>
            <td>xyz@gmail.com</td>
            <td>24-02-2023</td>
            <td className="edit-btn">
              <button className="btn">EDIT</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>grapes</td>
            <td>xyz@gmail.com</td>
            <td>24-02-2023</td>
            <td className="edit-btn">
              <button className="btn">EDIT</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
