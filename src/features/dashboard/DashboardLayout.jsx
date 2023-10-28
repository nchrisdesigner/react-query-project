import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import Spinner from './../../ui/Spinner'
import Stats from "./Stats";
import SalesChart from "./SalesChart";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;


const DashboardLayout = () => {
  const {bookings, isLoading: isLoading1} = useRecentBookings()
  const {stays, confirmedStays, isLoading: isLoading2} = useRecentStays()

  if(isLoading1 || isLoading2) return <Spinner />

  console.log(bookings);

  return (
    <StyledDashboardLayout>
      <Stats bookings={bookings} confirmedStays={confirmedStays} />
      <div>Today's Activity</div>
      <div>Chart stay durations</div>
      <SalesChart  />
    </StyledDashboardLayout>
  )
}

export default DashboardLayout
