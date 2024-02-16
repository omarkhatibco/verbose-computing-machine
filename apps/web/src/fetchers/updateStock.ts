'use server'

import { revalidatePath } from 'next/cache'

import { backendAPI } from '../utls'

export async function updateStock(formData: FormData) {
  const currentStock = formData.get('stock')
  const id = formData.get('id')
  console.log(currentStock)
  console.log(id)

  await backendAPI.url(`/inventory/${id}`).json({ currentStock }).patch()

  revalidatePath('/')
}
