import { formatCurrency } from '../../utils/helpers'
import Stat from './Stat.jsx'
import {HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendarDays, HiOutlineChartBar} from 'react-icons/hi2'

const Stats = ({bookings, confirmedStays}) => {
    // Statistic 1
    const numBookings = bookings.length
    // Statistic 2
    const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0)
    // Statistic 3
    const checkins = confirmedStays.length
    // Statistic 4
    const occupancyRate = confirmedStays.reduce((acc,cur) => acc + cur.numNights, 0)

    return (
        <>
            <Stat title='Bookings' color='blue' icon={<HiOutlineBriefcase/>} value={numBookings} />
            <Stat title='Sales' color='green' icon={<HiOutlineBanknotes/>} value={formatCurrency(sales)} />
            <Stat title='Check In' color='indigo' icon={<HiOutlineCalendarDays/>} value={checkins} />
            <Stat title='Occupancy rate' color='yellow' icon={<HiOutlineChartBar/>} value={occupancyRate / 100} />

        </>
    )
}

export default Stats