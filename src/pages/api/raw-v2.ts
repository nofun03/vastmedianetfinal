import handle from '@/utils/api/raw'

export { config } from '@/utils/api/common/v2'
import { getHandler } from '@/utils/api/common/v2'

export default getHandler(handle)
