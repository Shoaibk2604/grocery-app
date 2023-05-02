import React from 'react'

const Table = () => {
  return (
    <div className='container'>
      <table>
        <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email Id</th>
            <th>DOJ</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>apple</td>
                <td>xyz@gmail.com</td>
                <td>24-02-2023</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
