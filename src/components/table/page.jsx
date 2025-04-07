import React from 'react';
import { getStaff } from '@/app/actions/staff';
import { getStudents } from '@/app/actions/students';
import { getTeachers } from '@/app/actions/teachers';
import SearchTable from './data';
import { studentColumns, teacherColumns, staffColumns } from './columns.js';

export default async function getData(props) {
    const { type } = props;
    let tableData = {};
    let columns = [];

    switch (type) {
        case 'staff':
            tableData = await getStaff();
            columns = staffColumns;
            break;
        case 'students':
            tableData = await getStudents();
            columns = studentColumns;
            break;
        case 'teachers':
            tableData = await getTeachers();
            columns = teacherColumns;
            break;
        default:
            console.log('In development');
    }

    return <SearchTable tableData={tableData} columns={columns} type={type} />
}
