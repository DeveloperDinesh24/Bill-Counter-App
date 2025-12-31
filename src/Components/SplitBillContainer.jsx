import { useState } from 'react'
import SplitButton from './SplitButton'

export default function SplitBillContainer({
  showSplitBill,
  splitbillDisplay,
  showMorePeopleSplit,
  morePeopleSplit,
  setNumPeople,
}) {
  const [value, setValue] = useState('')

  return (
    <div className='flex flex-col gap-4 items-center'>
      <p className='text-lg'>
        Want to split bill? Click{' '}
        <span onClick={showSplitBill} className='text-green-700 cursor-pointer'>
          here
        </span>
      </p>
      {splitbillDisplay && (
        <div className='flex flex-col gap-4 items-center'>
          <div className='flex flex-col sm:flex-row items-center gap-4'>
            <SplitButton value={'2 People'} onClick={() => setNumPeople(2)} />
            <SplitButton value={'3 People'} onClick={() => setNumPeople(3)} />
            <SplitButton value={'More People'} onClick={showMorePeopleSplit} />
          </div>
          {morePeopleSplit && (
            <input
              onChange={(e) => {
                const rawValue = e.target.value.replace(/\D/g, '')
                setValue(Number(rawValue))
                setNumPeople(Number(rawValue))
              }}
              type='text'
              className='w-29 h-10 bg-green-200 px-2 text-xl focus:outline-2 outline-green-700 rounded-md '
              value={value}
              placeholder='how many?'
            />
          )}
        </div>
      )}
    </div>
  )
}
