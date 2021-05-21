import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('cars')
class Car {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  brand: string

  @Column()
  model: string

  @Column()
  type: string

  @Column()
  color: string
}

export default Car
