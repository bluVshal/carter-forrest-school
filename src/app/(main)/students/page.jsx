import React from 'react';
import { getStudents } from '@/app/actions/students';
import SearchForm from '@/components/search-form';
import DataTable from '@/components/table/page';

const Students = async () => {
  const students = await getStudents();

  return (
    <div className="ml-3 mt-4 max-h-20 font-LS">
        Students Home Page
        <SearchForm />
        <div className="ml-3 font-FT">
          {students.map((stud)=>{
            return <p> {stud.name} </p>
          })}
        </div>
        <div>
        <DataTable />       
      </div>
    </div>
  )
}

export default Students