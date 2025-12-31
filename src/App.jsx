import { useState } from 'react'
import './App.css'
import TipContainer from './Components/TipContainer'
import SplitBillContainer from './Components/SplitBillContainer'
import CalculatedDisplay from './Components/CalculatedDisplay'

function App() {
  const [billAmount, setBillAmount] = useState(0)
  const [tipAmount, setTipAmount] = useState(0)
  const [numPeople, setNumPeople] = useState(1)

  const [customTipDisplay, setCustomTipDisplay] = useState(false)
  const [splitbillDisplay, setsplitbillDisplay] = useState(false)
  const [morePeopleSplit, setMorePeopleSplit] = useState(false)

  const handleBillAmount = (e) => {
    const rawValue = e.target.value.replace(/\D/g, '')
    setBillAmount(Number(rawValue))
  }

  const showCustomTip = () => {
    setCustomTipDisplay(!customTipDisplay)
  }
  const showSplitBill = () => {
    setsplitbillDisplay(!splitbillDisplay)
  }

  const showMorePeopleSplit = () => {
    setMorePeopleSplit(!morePeopleSplit)
  }
  return (
    <div className='h-full w-full bg-slate-300'>
      <main className='h-full w-full mx-2 md:mx-8 flex flex-col gap-6 pt-38 items-center'>
        <CalculatedDisplay
          billAmount={billAmount}
          tipAmount={tipAmount}
          numPeople={numPeople}
        />
        <input
          onChange={handleBillAmount}
          type='text'
          name='billAmount'
          placeholder='Enter bill amount..'
          value={billAmount === 0 ? '' : billAmount}
          className='w-64 h-10 bg-green-200 px-2 text-xl  focus:outline-2 outline-green-700 rounded-md '
        />
        <TipContainer
          showCustomTip={showCustomTip}
          customTipDisplay={customTipDisplay}
          setTipAmount={setTipAmount}
          tipAmount={tipAmount}
        />
        <SplitBillContainer
          showSplitBill={showSplitBill}
          splitbillDisplay={splitbillDisplay}
          showMorePeopleSplit={showMorePeopleSplit}
          morePeopleSplit={morePeopleSplit}
          setNumPeople={setNumPeople}
        />
        <button
          onClick={() => {
            setBillAmount(0)
            setTipAmount(0)
            setNumPeople(1)
          }}
          className='w-fit px-4 py-1 text-xl bg-red-500 rounded-md cursor-pointer outline-0 focus:outline-2 outline-red-800 hover:bg-red-700 hover:text-white transition-colors duration-300'
        >
          Reset
        </button>
      </main>
    </div>
  )
}

export default App
