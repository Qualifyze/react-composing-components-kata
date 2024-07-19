import { withRenderCount } from '@/locked/useRenderCount'
import { PropsWithChildren } from 'react'

function EcommerceCardContentBase({ children }: PropsWithChildren) {
  return <div className="p-4 bg-background">{children}</div>
}

export const EcommerceCardContent = withRenderCount(EcommerceCardContentBase)
