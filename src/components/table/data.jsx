"use client";

import React, { useState, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { Button } from '@/components/ui/button';
import { jsPDF } from 'jspdf';
import { autoTable } from 'jspdf-autotable';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExport, faFilePen, faTrash } from '@fortawesome/free-solid-svg-icons';

const SearchTable = (props) => {
    const { tableData, columns, type } = props;
    const [selectedData, setSelectedData] = useState(null);
    const exportColumns = columns.map((col) => ({ header: col.header, dataKey: col.id }));
    const [date, setDate] = useState(Date.now());
    const [t, i18n] = useTranslation("global");
    const toast = useRef(null);
    const dt = useRef(null);
    const [filters, setFilters] = useState({
        name: { value: null, matchMode: FilterMatchMode.CONTAINS },
        adrress: { value: null, matchMode: FilterMatchMode.CONTAINS }
    });
    const exportPdf = () => {
        console.log(dt);
        const doc = new jsPDF();
        let exportFileName = t('general.' + type);

        autoTable(doc, {
            body: tableData,
            columns: exportColumns,
        });
        doc.save(exportFileName + date.toString() + '.pdf');
    };
    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" className="mr-2" onClick={() => editData(rowData, type)} ><FontAwesomeIcon icon={faFilePen} /></Button>
                <Button icon="pi pi-trash" onClick={() => confirmDelete(rowData, type)}><FontAwesomeIcon icon={faTrash} /></Button>
            </React.Fragment>
        );
    };

    const editData = (rowData, type) => {
        console.log(rowData)
        console.log(type)
    }

    const confirmDelete = (rowData, type) => {
        console.log(rowData)
        console.log(type)
    }

    const exportCSV = () => {
        dt.current.exportCSV();
    };

    const uploadCsv = () => {
        console.log('Upload CSV');
    };


    return (
        <div>
            <Button onClick={exportPdf} > {t('dataTable.exportPdf')} <FontAwesomeIcon icon={faFileExport} /></Button>
            <Button onClick={exportCSV} > {t('dataTable.exportCsv')} <FontAwesomeIcon icon={faFileExport} /></Button>
            <Button onClick={uploadCsv} > {t('dataTable.uploadCsv')} <FontAwesomeIcon icon={faFileExport} /></Button>
            <DataTable
                ref={dt}
                value={tableData}
                dataKey="id"
                sortMode="multiple"
                paginator
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                currentPageReportTemplate={t('dataTable.totalNumOfRecords') + ": {totalRecords}"}
                rows={5}
                rowsPerPageOptions={[5, 10, 25, 50, 100]}
                tableStyle={{ minWidth: '50rem' }}
                selectionMode="single"
                selection={selectedData}
                onSelectionChange={(e) => setSelectedData(e.value)}
                emptyMessage={t('dataTable.noRecordsFound')}
            >
                <Column selectionMode="single" showGridlines stripedRows headerStyle={{ width: '3rem' }}></Column>
                {columns.map((col, i) => (
                    <Column key={col.id} field={col.id} sortable header={t('dataTable.' + col.id)} />
                ))}
                <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}></Column>
            </DataTable>
        </div>
    )
}

export default SearchTable;