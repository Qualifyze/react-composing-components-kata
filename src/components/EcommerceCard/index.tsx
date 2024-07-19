import { Card } from '@/locked/ui/card'

import { EcommerceCardContent } from './EcommerceCardContent'
import { withRenderCount } from '@/locked/useRenderCount'
import { EcommerceCardContentImage } from './EcommerceCardContentImage'
import { EcommerceCardContentInfoTitle } from './EcommerceCardContentInfoTitle';
import { EcommerceCardContentInfoDescription } from './EcommerceCardContentInfoDescription';
import { EcommerceCardContentButton } from './EcommerceCardContentButton';

function EcommerceCardBase() {
  return (
    <Card className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl">
      <EcommerceCardContentImage />
      <EcommerceCardContentInfoTitle />
      <EcommerceCardContentInfoDescription
      />
      <EcommerceCardContent />
      <EcommerceCardContentButton />
    </Card>
  )
}

export const EcommerceCard = withRenderCount(EcommerceCardBase)
