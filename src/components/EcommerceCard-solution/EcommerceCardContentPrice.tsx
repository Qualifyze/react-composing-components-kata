import { useProductPrice } from '@/locked/useProductPrice'
import { withRenderCount } from '@/locked/useRenderCount'
import { useSearchParams } from 'react-router-dom'
import { initialSize } from './EcommerceCardContentSizeSelect'

function EcommerceCardContentPriceBase() {
  const [searchParams] = useSearchParams()

  const size = searchParams.get('size') || initialSize
  const { data: price } = useProductPrice({
    productId: 'product-id',
    size,
  })
  return price ? (
    <div className="text-2xl font-bold" data-testid="cc-price">
      {price} €
    </div>
  ) : null
}

export const EcommerceCardContentPrice = withRenderCount(
  EcommerceCardContentPriceBase
)
