export default function HeadInfo(props) {
  return (
    <>
        <div className='grid m-2 bg-red-50 place-items-center'>
            <div className='m-2 mb-6 flex flex-col justify-between w-3/4 max-w-xl' id='paper-header'>
                <div className='m-2 flex justify-between'>
                    <p className='text-xl text-center'>{props.params[1]}</p>
                    <p className='text-xl text-center'>{props.params[0]}</p>
                </div>
                <div className='m-2 flex justify-between'>
                    <p className='text-xl text-center'>{props.params[4]}</p>
                    <p className='text-xl text-center'>{props.params[3]}</p>
                </div>
                <p className='text-xl text-center'>{props.params[2]}</p>
            </div>
        </div>
        
    </>
  )
}