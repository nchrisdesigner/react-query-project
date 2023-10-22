import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { getCabins } from "../../services/apiCabins";
import { useQuery } from "@tanstack/react-query";
import Spinner from '../../ui/Spinner'
import CabinRow from "./CabinRow";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

const CabinTable = () => {
  //Fetch Data/Cabins
  const {isLoading, data: cabins, error} =useQuery({
    queryKey: ['cabins'],
    queryFn: getCabins
  })
  //React Router / useSearchParams in order ro read the url ?=discount=all/no-discount/with-discount
  const [searchParams] = useSearchParams()

  //Loader
  if(isLoading) return <Spinner />

  const filterValue = searchParams.get('discount') || 'all'

  let filteredCabins;

  
  // 1 - filter Cabins by Discount
  if(filterValue === 'all'){
    filteredCabins = cabins
  }
  if(filterValue === 'no-discount'){
    filteredCabins = cabins.filter(cabin => cabin.discount === 0)
  }
  if(filterValue === 'with-discount'){
    filteredCabins = cabins.filter(cabin => cabin.discount > 0)
  }

  // 2 - Sort Cabins by SortBy
  const sortBy = searchParams.get('sortBy') || 'startDate-asc'
  const [field, direction] = sortBy.split("-")
  const modifier = direction === 'asc' ? 1 : -1
  const sortedCabins = filteredCabins.sort((a,b) => (a[field] - b[field]) * modifier )


  return (
    <Table role="table">
      <TableHeader role="row">
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </TableHeader>
      {/* {cabins.map(cabin => <CabinRow key={cabin.id} cabin={cabin} />) } */}
      {filteredCabins.map(cabin => <CabinRow key={cabin.id} cabin={cabin} />) }
    </Table>
  )
}

export default CabinTable