export default function HeadInfo(props) {
    if(props.params === undefined) return(<><p className="text-5xl mt-8 font-bold">Error. Please visit /create first</p></>);
  return (
    <>
        <div className='grid m-2 bg-red-50 place-items-center'>
            <div className='m-2 my-4 flex flex-col justify-between w-3/4 max-w-xl' id='paper-header'>
                <div className='m-2 flex justify-between'>
                    <p className='text-[1.15rem] font-bold text-start'>{props.params[0]}</p>
                    <p className='text-[1.15rem] font-bold text-end'>Name: ..........................</p>
                </div>
                <div className='m-2 flex justify-between'>
                    <p className='text-[1.15rem] font-bold text-start'>Subject: {props.params[3]}</p>
                    <p className='text-[1.15rem] font-bold'>Roll No: .....</p>
                    <p className='text-[1.15rem] font-bold text-end'>{props.params[2]}</p>
                </div>
                <p className='text-[1.15rem] m-4 text-center font-bold'>{props.params[1]}</p>
            </div>
        </div>
        
    </>
  )
}