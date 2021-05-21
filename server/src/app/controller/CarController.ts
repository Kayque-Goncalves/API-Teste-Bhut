import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import Car from '../models/Cars'

class CarController {
  async index (request: Request, response: Response) {
    const repository = getRepository(Car)
    const allCars = await repository.find()

    return response.status(200).json(allCars)
  }

  async store (request: Request, response: Response) {
    const repository = getRepository(Car)

    const { brand, model, type, color } = request.body

    const carExists = await repository.findOne({ where: { brand, model, type, color } })
    if (carExists) return response.sendStatus(409)

    const car = repository.create({ brand, model, type, color })

    await repository.save(car)
    return response.json(car)
  }

  async update (request: Request, response: Response) {
    const repository = getRepository(Car)

    const id = request.params
    const { brand, model, type, color } = request.body

    // const isValidId = await repository.findOne({ where: { id } })
    // if (!isValidId) return response.json({ message: 'O registro com ess ID não foi encontrado.' })

    await repository.update(id, { brand: brand, model: model, type: type, color: color })
    return response.json({ message: 'Registro alterado com sucesso.' })
  }

  async delete (request: Request, response: Response) {
    const repository = getRepository(Car)

    const id = request.params

    // const isValidId = await repository.findOne({ where: { id } })
    // if (!isValidId) return response.json({ message: 'O registro com ess ID não foi encontrado.' })

    await repository.delete(id)
    return response.json({ message: 'Registro deletado com sucesso.' })
  }
}

export default new CarController()
