import { ReactNode } from 'react'

type Props = {
  className?: string,
  children: ReactNode,
  cancel?: boolean
}

export default function Button({className, children, cancel}: Props) {
  const colors = cancel ? 'border-red-500 text-red-500 hover:bg-red-800' : 'border-teal-300 text-teal-300 hover:bg-teal-600';

  return (
    <button className={`border rounded bg-transparent ${colors} bg-red hover:text-gray-50 py-2 px-6 font-medium ${className}`}>
      {children}
    </button>
  )
}