import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const SearchTable = (props) => {
    const { students, columns } = props;

    return (
        <div>
            <DataTable value={students} tableStyle={{ minWidth: '50rem' }}>
                {columns.map((col, i) => (
                    <Column key={col.id} field={col.id} header={col.header} />
                ))}
            </DataTable>
        </div>
    )
}

export default SearchTable;