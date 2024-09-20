import { ChevronDown } from "lucide-react"


interface BottomNavigationItemProps {
    item: string,
    dropDownItems?: string[]
}

function BottomNavigationItem({ item, dropDownItems }: BottomNavigationItemProps) {
    return (
        <div className="group relative">
            <li className='hover:bg-gray-200 h-full w-full py-3 px-2 font-semibold transition duration-150 flex gap-2 items-center justify-center'>{item} <span className="group-hover:rotate-180 transition duration-200"><ChevronDown size="20" /></span></li>
            <div className="hidden w-48 absolute mt-2 p-1 group-hover:block bg-white border">
                <ul className="flex flex-col gap-2">
                    {dropDownItems?.map(item => {
                        return <li className="p-2 font-normal w-full hover:bg-gray-200 border-b last:border-none">{item}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default BottomNavigationItem