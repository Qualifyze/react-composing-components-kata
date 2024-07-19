import { withRenderCount } from '@/locked/useRenderCount'

function EEcommerceCardContentDescriptionBase() {
  return (
    <p className="text-sm text-muted-foreground">
      Timeless style and unbeatable comfort.
    </p>
  )
}

export const EcommerceCardContentDescription = withRenderCount(
  EEcommerceCardContentDescriptionBase
)
