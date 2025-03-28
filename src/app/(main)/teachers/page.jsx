import React from 'react';
import { getTeachers } from '@/app/actions/teachers';
import SearchForm from '@/components/search-form';
import DataTable from '@/components/table/page';

const Teachers = async () => {
  const teachers = await getTeachers();

  return (
    <div className="ml-3 mt-4 max-h-20 font-LS">
      Teachers Home Page
      <SearchForm />
      <div className="mt-9 ml-3 font-FT">
        {teachers.map((teacher) => {
          return <p key={teacher.id}> {teacher.name} </p>
        })}
      </div>
      <div>
        <DataTable />       
      </div>
    </div>
  )
}

export default Teachers