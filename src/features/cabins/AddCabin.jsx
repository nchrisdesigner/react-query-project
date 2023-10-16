import { useState } from "react";
import Button from "../../ui/Button"
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
import CabinTable from "./CabinTable";

// const AddCabin = () => {
//     const [isOpenModal, setIsOpenModal] = useState(false)

//     return (
//         <div>
//             <Button onClick={() =>setIsOpenModal(show => !show)}>Add New Cabin</Button>
//             {isOpenModal 
//             && 
//             <Modal onClose={() => setIsOpenModal(false)}>
//                 <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />    
//             </Modal>}
//         </div>
//     )
// }

function AddCabin(){

    return(
        <>
        <Modal>
            <Modal.Open opens='cabin-form'>
                <Button>Add new cabin</Button>
            </Modal.Open>
            <Modal.Window name='cabin-form'>
                <CreateCabinForm />
            </Modal.Window>
        </Modal>
        {/* <Modal>
            <Modal.Open opens='table'>
                <Button>Show table</Button>
            </Modal.Open>
            <Modal.Window name='table'>
                <CabinTable />
            </Modal.Window>
        </Modal> */}
        </>
    )
}


export default AddCabin