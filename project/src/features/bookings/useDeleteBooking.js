import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking(){
    const queryClient = useQueryClient()

    const {isLoading:isDeleting ,mutate: deleteBooking} = useMutation({
    // mutationFn: deleteCabin the same thing as below code
    mutationFn: (id) => deleteBookingApi(id),
    onSuccess: () => {
        toast.success("Booking successfully deleted!")

        queryClient.invalidateQueries({
        queryKey: ['bookings']
        })
    },
    onError: (error) => toast.error(error.message)
    })

    return {isDeleting, deleteBooking}
}


