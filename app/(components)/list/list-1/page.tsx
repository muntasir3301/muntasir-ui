
export default function List_1() {
  const listItems = [
    "Customized Security Plan",
    "Receptionist and Concierge services",
    "Corporate events",
    "Safety Plans",
    "Parking lots",
    "Commercial office buildings",
    "Special Assignments",
    "Uniformed and Plain-clothes security",
    "Mobile and foot patrols",
    "Video/Security operations center (SOC)",
    "Access and traffic control",
    "Retirement/Senior housing facilities",
    "Warehouses",
    "Short and Long term assignments….and more",
  ];

  return (
    <>
        <div className="grid grid-cols-2 gap-4">
        {listItems.map((ele, i) => (
          <div key={ele} className="flex">
            <p className="px-3 py-1 text-white rounded-r-lg bg-primary absolute">
              {i + 1}
            </p>
            <h4 className="shadow py-2 w-full  pl-12 text-xl">{ele}</h4>
          </div>
        ))}
      </div>
    </>
  )
}
