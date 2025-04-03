import React from 'react';
import SearchForm from '@/components/search-form';
import DataTable from '@/components/table/page';

const Students = async () => {

  return (
    <div className="ml-3 mt-4 max-h-20 font-LS">
        Students Home Page
        <SearchForm />
        <div>
          <DataTable type={'student'}/>       
        </div>
    </div>
  )
}

export default Students