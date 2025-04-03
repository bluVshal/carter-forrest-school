import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const SearchTable = (props) => {
    const { tableData, columns } = props;

    return (
        <div>
            <DataTable value={tableData} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                {columns.map((col, i) => (
                    <Column key={col.id} field={col.id} header={col.header} />
                ))}
            </DataTable>
        </div>
    )
}

export default SearchTable;