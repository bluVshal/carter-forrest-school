import React from 'react';
import SearchForm from '@/components/search-form';
import DataTable from '@/components/table/page';

const Staff = () => {
  return (
    <div>Staff Home Page
       <SearchForm />
        <div>
          <DataTable type={'staff'}/>       
        </div>
    </div>
  )
}

export default Staff