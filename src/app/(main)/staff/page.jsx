import React from 'react';
import SearchForm from '@/components/search-form';
import DataTable from '@/components/table/page';

const Staff = () => {
  return (
    <div>
      <div className="ml-3 mt-4 max-h-20 font-LS">
        Staff Home Page
      </div>
      <div className="ml-3 mt-4">
        <SearchForm />
      </div>
      <div className="ml-3 mt-4">
        <DataTable type={'staff'} />
      </div>

    </div>
  )
}

export default Staff