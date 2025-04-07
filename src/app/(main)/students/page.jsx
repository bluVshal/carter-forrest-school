import React from 'react';
import SearchForm from '@/components/search-form';
import DataTable from '@/components/table/page';

const Students = () => {
  return (
    <div>
      <div className="ml-3 mt-4 max-h-20 font-LS">
        Students Home Page
      </div>
      <SearchForm />
      <div>
        <DataTable type={'students'} />
      </div>
    </div>
  )
}

export default Students