import type { ReactNode, CSSProperties } from 'react'
import { CgSpinner } from 'react-icons/cg'

type Props = {
  children: ReactNode
  style: CSSProperties
  onClick: () => void
  disabled?: boolean
  loading?: boolean
}

const CircleButton = ({ children, style = {}, onClick, disabled = false, loading = false }: Props) => {
  const btnStyles: CSSProperties = disabled
    ? { backgroundColor: 'rgb(75 85 99)', color: 'rgb(209 213 219)', pointerEvents: 'none' }
    : { ...style, pointerEvents: 'auto' }

  return (
    <button
      type="button"
      data-te-ripple-init
      data-te-ripple-color="light"
      className={`inline-flex justify-center rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg`}
      style={btnStyles}
      disabled={disabled}
      onClick={onClick}
    >
      {loading ? <Loading /> : <>{children}</>}
    </button>
  )
}

function Loading() {
  return <CgSpinner className={`h-6 w-6 animate-[spin_1s_linear_infinite] text-white`} />
}

export default CircleButton
