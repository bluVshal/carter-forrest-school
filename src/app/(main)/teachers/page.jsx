import React from 'react';
import SearchForm from '@/components/search-form';
import DataTable from '@/components/table/page';

const Teachers = () => {
  return (
    <div>
      <div className="ml-3 mt-4 max-h-20 font-LS">
        Teachers Home Page
      </div>
      <SearchForm />
      <div>
        <DataTable type={'teacher'} />
      </div>
    </div>
  )
}

export default Teachers