"use client";

import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from '@/components/ui/button';
import { jsPDF } from 'jspdf';
import { autoTable } from 'jspdf-autotable';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExport } from '@fortawesome/free-solid-svg-icons';

const SearchTable = (props) => {
    const { tableData, columns, type } = props;
    const [selectedData, setSelectedData] = useState(null);
    const exportColumns = columns.map((col) => ({ header: col.header, dataKey: col.id }));
    const [date, setDate] = useState(Date.now());
    const [t, i18n] = useTranslation("global");

    const exportPdf = () => {
        const doc = new jsPDF();

        autoTable(doc, {
            body: tableData,
            columns: exportColumns,
        });
        doc.save(type + date.toString() + '.pdf');
    };

    return (
        <div>
            <Button onClick={exportPdf} > {t('dataTable.export')} <FontAwesomeIcon icon={faFileExport}/></Button>
            <DataTable
                value={tableData}
                dataKey="id"
                sortMode="multiple"
                paginator
                rows={5}
                rowsPerPageOptions={[5, 10, 25, 50, 100]}
                tableStyle={{ minWidth: '50rem' }}
                selectionMode="single"
                selection={selectedData}
                onSelectionChange={(e) => setSelectedData(e.value)}
            >

                <Column selectionMode="single" headerStyle={{ width: '3rem' }}></Column>
                {columns.map((col, i) => (
                    <Column key={col.id} field={col.id} sortable header={col.header} />
                ))}
            </DataTable>
        </div>
    )
}

export default SearchTable;