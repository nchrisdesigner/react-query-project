import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import {useBooking} from './useBooking';
import { useMoveBack } from "../../hooks/useMoveBack";
import { useNavigate } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import { useCheckOut } from "../check-in-out/useCheckOut";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const {booking, isLoading} = useBooking();
  const {checkout, isCheckingOut} = useCheckOut()
  const moveBack = useMoveBack();

  //Navigate
  const navigate = useNavigate()

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  if(isLoading) return <Spinner />

  const {status, id: bookingId} = booking

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {
          status === 'checked-in' 
          ? 
          <Button variation="primary" onClick={() => checkout(bookingId)}>
            Check Out
          </Button>
          :
          <Button variation="primary" onClick={() => navigate(`/checkin/${bookingId}`)}>
            Check In
          </Button>
        }
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
        
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
