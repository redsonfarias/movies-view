import { HTMLProps } from 'react'

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  active?: boolean
}

function Button({ active, children }: ButtonProps) {
  console.log(active)
  return (
    <button className="px-4 py-1 rounded-3xl border-2 border-blue-400 text-blue-400 text-sm font-semibold">
      {children}
    </button>
  )
}

export default Button
