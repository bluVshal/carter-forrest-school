import React from 'react'
//import * as columnsObj from './columns';

const page = () => {
    const columns = [
        {
            id:"id",
            header:"Id"
        },
        {
            id:"name",
            header:"Name"
        },    
        {
            id:"address",
            header:"Address"
        },    
        {
            id:"aa",
            header:"AA"
        },    
        {
            id:"bb",
            header:"BB"
        },    
        {
            id:"cc",
            header:"CC"
        }
    ]
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {columns.map((id, header) => {
                            <th key={id}> {header} </th>
                        })}
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default page