import DateFilter from "../features/Events/DateFilter";
import Button from "../ui/Button";
import ConfirmDelete from "../ui/ConfirmDelete";
import Heading from "../ui/Heading";
import Modal from "../ui/Modal";

function Orders() {
  return (
    <div>
      <Heading as="h2">Orders</Heading>
      <DateFilter />

      <Modal>
        <Modal.Opens name="confirm-delete">
          <Button>Delete</Button>
        </Modal.Opens>
        <Modal.Window name="confirm-delete">
          <ConfirmDelete resource="ticket" />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default Orders;
