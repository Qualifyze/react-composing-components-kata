import { withRenderCount } from '@/locked/useRenderCount'
import { EcommerceCardContentSizeSelect } from './EcommerceCardContentSizeSelect'
import { EcommerceCardContentPrice } from './EcommerceCardContentPrice'
import { useProductPrice } from '@/locked/useProductPrice'
import { useState, useCallback } from 'react'

function EcommerceCardContentBase() {
  let size = '7'

  const { data: price } = useProductPrice({
    productId: 'product-id',
    size: size,
  })

  const onSizeChange = useCallback((value: string) => {
    size = value
  }, [])

  return (
    <div className="p-4 bg-background">
      <div className="p-4 bg-background">
        <div className="mt-4 flex items-center justify-between">
          <div>
            <EcommerceCardContentSizeSelect
              size={size}
              onValueChange={onSizeChange}
            />
          </div>
          <EcommerceCardContentPrice price={price} />
        </div>
      </div>
    </div>
  )
}

// function PriceComponentBase() {
//   const [size, setSize] = useState('7')

//   const onSizeChange = useCallback((value: string) => {
//     setSize(value)
//   }, [])

//   return (
//     <div className="p-4 bg-background">
//       <div className="mt-4 flex items-center justify-between">
//         <div>
//           <EcommerceCardContentSizeSelect
//             size={size}
//             onValueChange={onSizeChange}
//           />
//         </div>
//         <EcommerceCardContentPrice size={size} />
//       </div>
//     </div>
//   )
// }

export const EcommerceCardContent = withRenderCount(EcommerceCardContentBase)
