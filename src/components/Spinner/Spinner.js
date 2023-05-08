import DotLoader from 'react-spinners/BounceLoader'

function Spinner() {
  return (
    <div className='spinner'>
      <DotLoader
        color='#6095e8'
        size={100}
      />
    </div>
  )
}

export default Spinner
