import React from 'react';
import { getStaff } from '@/app/actions/staff';
import { getStudents } from '@/app/actions/students';
import { getTeachers } from '@/app/actions/teachers';
import SearchTable from './data';
import { columns } from './columns.js';

export default async function getData(props) {
    const { type } = props;
    let tableData = {};

    if (type === "student") {
        tableData = await getStudents();
    }
    else if (type === "staff"){
        tableData = await getStaff();
    }
    else{
        tableData = await getTeachers();
    }

    return <SearchTable tableData={tableData} columns={columns} type={type}/>
}
