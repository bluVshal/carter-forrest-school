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
      <div>
        <DataTable type={'teacher'}/>       
      </div>
    </div>
  )
}

export default Teachers