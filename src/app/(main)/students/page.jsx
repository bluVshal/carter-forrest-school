import React from 'react';
import SearchForm from '@/components/search-form';
import DataTable from '@/components/table/page';

const Students = () => {
  return (
    <div>
      <div className="ml-3 mt-4 font-LS">
        Students Home Page
      </div>
      <div className="ml-3 mt-4">
        <SearchForm />
      </div>
      <div className="ml-3 mt-4">
        <DataTable type={'students'} />
      </div>
    </div>
  )
}

export default Students