// @flow strict
function Home() {

    const data=[
        {
            request:"Hey, how can i help you?",
            response:"Almost there"
        },
        {
            request:"Hey I'm sick",
            response:"Get a glass of water and honey"
        },
        {
            request:"Hello there",
            response:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea odio aperiam reprehenderit tempora? Eligendi rerum reprehenderit, omnis quasi adipisci assumenda? Quae, aperiam deserunt. Alias architecto minima ratione? Facere, nesciunt dolore?"
        },
        {
            request:"Hello there",
            response:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea odio aperiam reprehenderit tempora? Eligendi rerum reprehenderit, omnis quasi adipisci assumenda? Quae, aperiam deserunt. Alias architecto minima ratione? Facere, nesciunt dolore?"
        }
    ]

    const showInput=()=>{
        let keyboard=document.getElementById("keyboard") as HTMLDivElement
        keyboard.style.display="none"
        let input=document.getElementById("show-input") as HTMLDivElement
        input.style.display="block"
    }
    const handleSubmit=(e:any)=>{
        e.preventDefault()
        const request:string=e.target.request.value
        const output={
            request:request,
            response:"Hello"
        }
        data.push(output)
        console.log(data)
        e.target.reset()
    }
    return (
        <div className="md:flex md:justify-center">
            <div className="px-6 py-8 my-14 md:w-[80vw] " id="window">
                {data&&data.map((i,n)=>(
                    <div key={n} className="mb-20">
                        <div className="bg-gray-300 px-4 py-2 rounded-[20px] w-fit h-fit float-right -mt-12">
                            <p className='text-base max-sm:text-sm text-center'>{i.request}</p>
                        </div>

                        <div className="border-[1px] px-4 py-2 rounded-[20px] w-fit h-fit">
                            <p className='text-base max-sm:text-sm text-center'>{i.response}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="fixed bottom-16 right-14 max-sm:right-8 cursor-pointer" id="keyboard" onClick={showInput}>
                <i className="ri-keyboard-fill ri-2x text-gray-700"></i>
            </div>
            <div id="show-input" className="fixed bottom-14 left-0 right-0 border-[1px] bg-white">
                <form className="flex justify-between" onSubmit={handleSubmit}>
                    <input placeholder="Type a message" name="request" className="w-full px-4 pb-4 pt-3 text-base "/>
                    <button><i className="ri-message-fill ri-lg px-3 text-gray-600"></i></button>
                </form>
            </div>
        </div>
    );
};

export default Home;