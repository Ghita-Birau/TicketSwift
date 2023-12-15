import DateFilter from "../features/Events/DateFilter&Style/DateFilter";
import PriceFilter from "../features/Events/PriceFilter";
import Heading from "../ui/Heading";

function Orders() {
  return (
    <div>
      <Heading as="h2">Orders</Heading>
      <DateFilter />
      <PriceFilter />
    </div>
  );
}

export default Orders;
