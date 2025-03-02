/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

import { COLORS } from '../helpers/colors.ts'

class Computer {
  public cpu: string = 'CPU not defined'
  public ram: string = 'RAM not defined'
  public storage: string = 'Storage not defined'
  public gpu?: string

  displayConfiguration(title: string, color: string = COLORS.blue): void {
    const configuration = [
      `- CPU: ${this.cpu}`,
      `- RAM: ${this.ram}`,
      `- Storage: ${this.storage}`,
      `- GPU: ${this.gpu ?? 'Not defined\n'}`
    ]

    console.log(`%c${title}`, color)
    console.log(configuration.join('\n'))
  }
}

class ComputerBuilder {
  private computer: Computer

  constructor() {
    this.computer = new Computer()
  }

  setCPU(cpu: string): ComputerBuilder {
    this.computer.cpu = cpu
    return this
  }

  setRAM(ram: string): ComputerBuilder {
    this.computer.ram = ram
    return this
  }

  setStorage(storage: string): ComputerBuilder {
    this.computer.storage = storage
    return this
  }

  setGPU(gpu: string): ComputerBuilder {
    this.computer.gpu = gpu
    return this
  }

  build(): Computer {
    return this.computer
  }
}

function main() {
  const basicComputer = new ComputerBuilder()
    .setCPU('Intel Core 2 Duo')
    .setRAM('4GB')
    .setStorage('256GB')
    .build()

  basicComputer.displayConfiguration('Basic Computer', COLORS.red)

  const gamerComputer = new ComputerBuilder()
    .setCPU('Intel Core i9')
    .setRAM('32GB')
    .setStorage('1TB')
    .setGPU('Nvidia RTX 3090')
    .build()

  gamerComputer.displayConfiguration('Gamer Computer', COLORS.green)
}

main()
