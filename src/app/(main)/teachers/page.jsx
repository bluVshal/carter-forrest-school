import React from 'react';
import SearchForm from '@/components/search-form';
import DataTable from '@/components/table/page';

const Teachers = () => {
  return (
    <div>
      <div className="ml-3 mt-4 max-h-20 font-LS">
        Teachers Home Page
      </div>
      <div className="ml-3 mt-4">
        <SearchForm />
      </div>
      <div className="ml-3 mt-4">
        <DataTable type={'teachers'} />
      </div>
    </div>
  )
}

export default Teachers