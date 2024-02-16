import { PartialType } from '@nestjs/mapped-types'

import { CreateForcastDto } from './create-forcast.dto'

export class UpdateForcastDto extends PartialType(CreateForcastDto) {}
