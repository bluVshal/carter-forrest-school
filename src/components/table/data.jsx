"use client";

import React, { useState, useRef } from 'react';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { FileUpload } from 'primereact/fileupload';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
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
    const exportPdf = () => {
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
                <Button className="mr-2" onClick={() => editData(rowData, type)} ><FontAwesomeIcon icon={faFilePen} /></Button>
                <Button onClick={() => confirmDelete(rowData, type)}><FontAwesomeIcon icon={faTrash} /></Button>
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

    const [filters, setFilters] = useState({
        'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'address': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        'role': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
    });

    const countryBodyTemplate = (rowData) => {
        return (
            <div className="flex align-items-center gap-2">
                <span>{rowData.name}</span>
            </div>
        );
    };

    const onUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };

    return (
        <div>
            <Toast ref={toast} position="center" ></Toast>
            <Button onClick={exportPdf} > {t('dataTable.exportPdf')} <FontAwesomeIcon icon={faFileExport} /></Button>
            <Button onClick={exportCSV} > {t('dataTable.exportCsv')} <FontAwesomeIcon icon={faFileExport} /></Button>
            <Button onClick={uploadCsv} > {t('dataTable.uploadCsv')} <FontAwesomeIcon icon={faFileExport} /></Button>
            <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="text/csv" maxFileSize={1000000} onUpload={onUpload} />
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
                    <Column key={col.id} field={col.id} sortable header={t('dataTable.' + col.id)} filter filterField={col.id} filterPlaceholder="Search" />
                ))}
                <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '12rem' }}></Column>
            </DataTable>
        </div>
    )
}

export default SearchTable;