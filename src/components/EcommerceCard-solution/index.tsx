import { Card } from '@/locked/ui/card'

import { EcommerceCardContent } from './EcommerceCardContent'
import { withRenderCount } from '@/locked/useRenderCount'
import { EcommerceCardImage } from './EcommerceCardContentImage'
import { EcommerceCardContentButton } from './EcommerceCardContentButton'
import { EcommerceCardContentSizeSelect } from './EcommerceCardContentSizeSelect'
import { EcommerceCardContentPrice } from './EcommerceCardContentPrice'
import { EcommerceCardContentDescription } from './EcommerceCardContentDescription'
import { EcommerceCardContentTitle } from './EcommerceCardContentTitle'

function EcommerceCardBase() {
  return (
    <Card className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl">
      <EcommerceCardImage />
      <EcommerceCardContent>
        <EcommerceCardContentTitle />
        <EcommerceCardContentDescription />
        <div className="mt-4 flex items-center justify-between">
          <div>
            <EcommerceCardContentSizeSelect />
          </div>
          <EcommerceCardContentPrice />
        </div>
        <EcommerceCardContentButton />
      </EcommerceCardContent>
    </Card>
  )
}

export const EcommerceCard = withRenderCount(EcommerceCardBase)
