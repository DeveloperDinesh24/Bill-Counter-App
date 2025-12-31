import TipButton from './TipButton'

export default function TipContainer({
  showCustomTip,
  customTipDisplay,
  setTipAmount,
  tipAmount,
}) {
  return (
    <div className='flex flex-col gap-4 items-center'>
      <div className='flex flex-col sm:flex-row items-center gap-4'>
        <TipButton value={'5%'} onClick={() => setTipAmount(5)} />
        <TipButton value={'10%'} onClick={() => setTipAmount(10)} />
        <TipButton value={'20%'} onClick={() => setTipAmount(20)} />
      </div>
      <div className='flex flex-col gap-2 items-center'>
        <p className='text-lg'>
          Custom tip? Click{' '}
          <span
            onClick={showCustomTip}
            className='text-green-700 cursor-pointer'
          >
            here
          </span>
        </p>
        {customTipDisplay && (
          <input
            onChange={(e) => {
              const rawValue = e.target.value.replace(/\D/g, '')
              setTipAmount(Number(rawValue))
            }}
            type='text'
            className='w-20 h-10 bg-green-200 text-center text-xl focus:outline-2 outline-green-700 rounded-md'
            value={tipAmount}
          />
        )}
      </div>
    </div>
  )
}
