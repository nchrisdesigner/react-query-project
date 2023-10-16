import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin} from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin(){
  //React Query Client
  const queryClient = useQueryClient()

  //React Query Mutation
  const {isLoading: isCreating, mutate: create} = useMutation({
    // mutationFn: createCabin
    mutationFn: newCabin => createCabin(newCabin),
    onSuccess: () => {
      toast.success('New cabin successfully created')
      queryClient.invalidateQueries({
        queryKey: ["cabins"]
      })
    },
    onError: (err) => toast.error(err.message)
  })

    return {isCreating, create}
}