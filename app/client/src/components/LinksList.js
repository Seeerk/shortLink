import React from 'react'
import {Link} from "react-router-dom";

export const LinksList = ({ links }) => {
    if (!links.length) {
        return <p className="center"> LinksList is empty</p>
    }

    return (
        <table className="responsive-table">
            {/*<thead>*/}
            {/*<tr>*/}
            {/*    <th>№</th>*/}
            {/*    <th>Link</th>*/}
            {/*    <th>ShortLink</th>*/}
            {/*    <th>Open</th>*/}
            {/*</tr>*/}
            {/*</thead>*/}

            <tbody>
            { links.map((link, index) => {
                return (
                    <tr key={link._id}>
                        <td>{index + 1}</td>
                        <td>{link.from}</td>
                        <td>{link.to}</td>
                        <td>
                            <Link to={`/detail/${link._id}`}>Open</Link>
                        </td>
                    </tr>
                )
            }) }
            </tbody>
        </table>

    )
}

// {"_id":{"$oid":"607eddf66cfd0135fc629bb5"},"clicks":{"$numberInt":"0"},"code":"SLLaJaOD8","from":"https://materializecss.com/navbar.html","to":"http://localhost:5000/t/SLLaJaOD8","owner":{"$oid":"607e894ebee6b32d26f40f41"},"date":{"$date":{"$numberLong":"1618927094248"}},"__v":{"$numberInt":"0"}}