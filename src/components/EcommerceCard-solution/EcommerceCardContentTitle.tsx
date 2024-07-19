import { withRenderCount } from '@/locked/useRenderCount'

function EcommerceCardContentTitleBase() {
  return <h3 className="text-xl font-bold">Classic Leather Sneakers</h3>
}

export const EcommerceCardContentTitle = withRenderCount(
  EcommerceCardContentTitleBase
)
