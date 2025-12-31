export default function CalculatedDisplay({
  billAmount,
  tipAmount,
  numPeople,
}) {
  const tipValue = (billAmount * tipAmount) / 100
  const totalAmount = billAmount + tipValue

  const people = numPeople <= 1 ? 1 : numPeople
  const perPerson = totalAmount / people

  return (
    <div className='w-72 h-40 sm:w-80 sm:h-42 md:w-140 md:h-48 outline-2 outline-black rounded-lg bg-slate-200 flex flex-col items-center justify-between py-4 px-4'>
      <h1 className='text-4xl'>₹ {totalAmount.toFixed(2)}</h1>
      <div className='w-full flex flex-col sm:flex-row justify-between'>
        <p className='sm:text-md md:text-lg'>
          Per Person:{' '}
          <span className='font-semibold'>₹{perPerson.toFixed(2)}</span>
        </p>
        <p className='sm:text-md md:text-lg'>
          Tip Amount:{' '}
          <span className='font-semibold'>₹{tipValue.toFixed(2)}</span>
        </p>
      </div>
    </div>
  )
}
