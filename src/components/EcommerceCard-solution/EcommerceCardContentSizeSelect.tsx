import { withRenderCount } from '@/locked/useRenderCount'
import { useSearchParams } from 'react-router-dom'

const options = [
  { value: '7', label: '7' },
  { value: '8', label: '8' },
  { value: '9', label: '9' },
  { value: '10', label: '10' },
]

export const initialSize = '7'

function EcommerceCardContentSizeSelectBase() {
  const [searchParams, setSearchParams] = useSearchParams()
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchParams({
      size: e.target.value,
    })
  }

  const size = searchParams.get('size') || initialSize

  return (
    <select onChange={onChange} role="select">
      {options.map((option) => (
        <option
          key={option.value}
          selected={size === option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  )
}

export const EcommerceCardContentSizeSelect = withRenderCount(
  EcommerceCardContentSizeSelectBase
)
