import { getISODay } from "date-fns";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;

const Tag = styled.span`
  width: fit-content;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.4rem 1.2rem;
  border-radius: 100px;

  /* Make these dynamic, based on the received prop */
  color: var(--color-${(props) => props.type}-700);
  background-color: var(--color-${(props) => props.type}-100);
`;

const Flag = styled.img`
  max-width: 2rem;
  border-radius: var(--border-radius-tiny);
  display: block;
  border: 1px solid var(--color-grey-100);
`;

const Button = styled.button`
  color: #fff;
  background: var(--color-brand-700);
  border-radius:3px;
  text-align: center;
  font-size: 1.2rem;
  padding: .25rem .5rem;
`
const CheckoutButton = styled.button`
  color: #fff;
  background: #101827;
  border: 1px solid #fff;
  border-radius:3px;
  text-align: center;
  font-size: 1.2rem;
  padding: .25rem .5rem;
`


const TodayItem = ({activity}) => {
  const {id, status, guests, numNights} = activity

  return (
    <StyledTodayItem>
      {status === 'unconfirmed' && <Tag type='green' >Arriving</Tag> }
      {status === 'checked-in' && <Tag type='blue'>Departing</Tag> }

      <Flag src={guests.countryFlag} alt={`Flag of ${guests.country}`} />
      <p>{guests.fullName}</p>
      <div>{numNights} nights</div>

      {status === 'unconfirmed' && <Button as={Link} to={`/checkin/${id}`} >Check In</Button> }
      {status === 'checked-in' && <CheckoutButton as={Link} to={`/checkin/${id}`}>Check Out</CheckoutButton> }
      
    </StyledTodayItem>
  )
}

export default TodayItem
