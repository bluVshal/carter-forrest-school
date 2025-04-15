import React, { useRef, useState } from 'react'
import { Dialog } from 'primereact/dialog';
import { DataTable } from 'primereact/datatable';
import { useTranslation } from 'react-i18next';
import { Column } from 'primereact/column';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const InputDialog = (props) => {

    let { visible, csvOutput } = props;
    const dt = useRef(null);
    const [t, i18n] = useTranslation("global");
    const [selectedData, setSelectedData] = useState(null);
    const [columns, setColumns] = useState([]);

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button onClick={() => confirmDelete(rowData, type)}><FontAwesomeIcon icon={faTrash} /></Button>
            </React.Fragment>
        );
    };
    
    return (
        <div>
            <Dialog header="Header" visible={visible} style={{ backgroundColor: 'white', width: '50vw' }} onHide={() => { if (!visible) return; visible = false; }}>
                <DataTable
                    ref={dt}
                    value={csvOutput}
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
            </Dialog>
        </div>
    )
}

export default InputDialog