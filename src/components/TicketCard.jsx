/* eslint-disable react/prop-types */


const TicketCard = ({price, ticketno, type}) => {
  return (
    <div className="rounded-lg border-[#0E464F] border-4 shadow-md p-4">
      <h2 className="font-semibold my-2 text-3xl">{price}</h2>
      <p className="mb-2">{type}</p>
      <p>{ticketno}</p>
    
    </div>
  )
}

export default TicketCard
