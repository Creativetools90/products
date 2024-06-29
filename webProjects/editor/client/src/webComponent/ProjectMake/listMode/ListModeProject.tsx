import React from 'react'

const ListModeProject = () => {
  return (
    <div className="tableMode">
    <table className=" p-1 w-full ">
        <thead>
            <tr className="t-tr text-white">
                <th className="text-xl px-2 py-2">Title</th>
                <th className="text-xl px-2 py-2">Created</th>
                <th className="text-xl px-2 py-2">Last Update</th>
                <th className="text-xl px-2 py-2">State</th>
            </tr>
        </thead>
        <tbody>
            <tr className="t-t-t-tr  bg-black ">
                <td className="text-lg px-2 py-2">demolib</td>
                <td className="text-lg px-2 py-2">July 25, 2024</td>
                <td className="text-lg px-2 py-2">July 25, 2020</td>
                <td className="text-lg px-2 py-2 s_td">
                    <button className="mr-2 px-3 py-1 bg-blue-500 text-white rounded">Edit</button>
                    <button className="px-3 py-1 bg-red-500 text-white rounded">Del</button>
                </td>
            </tr>
        </tbody>
    </table>

</div>
  )
}

export default ListModeProject