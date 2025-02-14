import { tickets } from "../data";
import TicketCard from "./TicketCard";

const TicketList = () => {
  return (
    <div className="mt-2 flex flex-col justify-between p-2 md:flex-row gap-4 rounded-lg border-[#0E464F] border-1">
      {tickets.map((ticket) => {
        return <TicketCard key={ticket.id} {...ticket} />;
      })}
    </div>
  );
};

export default TicketList;
