
function MetricSection() {
    return (
        <div className='py-8 hidden lg:flex bg-orange-100 font-semibold text-2xl'>
            <div className='grid grid-cols-3 max-w-7xl mx-auto h-full text-center'>
                <div className='flex flex-col py-2 px-12'>
                    <p>90%</p>
                    <p>of all orders are produced locally</p>
                </div>
                <div className='flex flex-col py-2 px-8'>
                    <p>90%</p>
                    <p>of orders arrive withing 5 days of ordering</p>
                </div>
                <div className='flex flex-col py-2 px-8'>
                    <p>140+</p>
                    <p>print providers across 32 countries</p>
                </div>
            </div>

        </div>
    )
}

export default MetricSection