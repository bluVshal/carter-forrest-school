"use client";

import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
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
    const [filters, setFilters] = useState({
        name: { value: null, matchMode: FilterMatchMode.CONTAINS },
        adrress: { value: null, matchMode: FilterMatchMode.CONTAINS }
    });
    const exportPdf = () => {
        const doc = new jsPDF();
        let exportFileName = t('general.'+type);
        autoTable(doc, {
            body: tableData,
            columns: exportColumns,
        });
        doc.save(exportFileName + date.toString() + '.pdf');
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
                filters={filters} 
                onFilter={(e) => setFilters(e.filters)}
                emptyMessage={t('dataTable.noRecordsFound')}
            >
                <Column selectionMode="single" showGridlines stripedRows headerStyle={{ width: '3rem' }}></Column>
                {columns.map((col, i) => (
                    <Column key={col.id} field={col.id} sortable filter filterPlaceholder="Search" header={t('dataTable.'+col.id)}  />
                ))}
            </DataTable>
        </div>
    )
}

export default SearchTable;