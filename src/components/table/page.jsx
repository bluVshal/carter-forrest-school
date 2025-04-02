import { getStudents } from '@/app/actions/students';
import SearchTable from './data';
import { columns } from './columns';

export default async function getData(){
   const students =  await getStudents();
   return <SearchTable students={students} columns={columns}/>
}
