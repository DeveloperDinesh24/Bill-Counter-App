export default function TipButton({ value, onClick }) {
  return (
    <button
      onClick={onClick}
      className='w-fit px-8 py-1 bg-green-400 outline-0 focus:outline-2 outline-green-700 text-xl rounded-md cursor-pointer'
    >
      {value}
    </button>
  )
}
