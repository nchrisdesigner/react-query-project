import styled from "styled-components";
import BookingDataBox from "../../features/bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";
import Checkbox from "../../ui/Checkbox";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../bookings/useBooking";
import Spinner from "../../ui/Spinner";
import { useEffect, useState } from "react";
import { useCheckIn } from "./useCheckIn";
import { useSettings } from "../settings/useSettings";
import { formatCurrency } from "../../utils/helpers";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [confirmPaid, setConfirmPaid] = useState(false)
  const [addBreakfast, setAddBreakfast] = useState(false)
  const {booking, isLoading} = useBooking()
  const {settings, isLoading: isLoadingSettings} = useSettings() 
  const moveBack = useMoveBack();

  const {checkin, isCheckingIn} = useCheckIn()

  useEffect(() => {
    setConfirmPaid(booking?.isPaid ?? false)
  },[booking])


  if(isLoading || isLoadingSettings ) return <Spinner />

  

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,
    numNights,
  } = booking;

  const optionalBreakfastPrice = settings.breakfastPrice * numGuests * numNights

  function handleCheckin() {
    if(!confirmPaid) return

    checkin(bookingId)
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      {
        !hasBreakfast &&
        (
          <Box>
            <Checkbox id="breakfast" checked={addBreakfast} onChange={() => {
              setAddBreakfast(prev => !prev)
              setConfirmPaid(false)
            }}>Want to add Breakfast for ${optionalBreakfastPrice}?</Checkbox>
          </Box>
        )
      }

      <Box>
        <Checkbox id="confirm" disabled={confirmPaid || isCheckingIn} checked={confirmPaid} onChange={() => setConfirmPaid(confirm => !confirm)}>I confirm that {guests.fullName} has paid the total amount of {!addBreakfast ? formatCurrency(totalPrice) : formatCurrency(totalPrice + optionalBreakfastPrice)}</Checkbox>
      </Box>

      <ButtonGroup>
        <Button disabled={!confirmPaid || isCheckingIn} onClick={handleCheckin}>Check in booking #{bookingId}</Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
