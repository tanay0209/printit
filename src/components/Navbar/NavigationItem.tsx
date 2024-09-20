import React from 'react'

interface NavItemProps {
    text: string,
    icon: React.ReactElement
}

function NavigationItem({ text, icon }: NavItemProps) {
    return (
        <li className='flex gap-2 items-center justify-center hover:bg-gray-300 cursor-pointer rounded-full p-2 transition duration-200'>
            {icon}
            <span className='text-sm font-bold'>
                {text}
            </span>
        </li>
    )
}

export default NavigationItem