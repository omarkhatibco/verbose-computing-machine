import { Injectable } from '@nestjs/common'
import { PrismaService } from 'nestjs-prisma'

import { CreateInventoryDto } from './dto/create-inventory.dto'
import { UpdateInventoryDto } from './dto/update-inventory.dto'

@Injectable()
export class InventoryService {
  constructor(private db: PrismaService) {}
  create(createInventoryDto: CreateInventoryDto) {
    return 'This action adds a new inventory'
  }

  findAll() {
    const inventory = this.db.incoming_inventory.findMany()
    return inventory
  }

  findOne(id: number) {
    return `This action returns a #${id} inventory`
  }

  async update(id: number, updateInventoryDto: UpdateInventoryDto) {
    const { currentStock } = updateInventoryDto

    const newData = await this.db.incoming_inventory.update({
      where: { id },
      data: { currentStock: Number(currentStock) },
    })

    return newData
  }

  remove(id: number) {
    return `This action removes a #${id} inventory`
  }
}
