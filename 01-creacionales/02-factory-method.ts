/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

import { COLORS } from '../helpers/colors.ts'

interface Hamburguer {
  prepare(): void
}

class ChickenBurger implements Hamburguer {
  prepare(): void {
    console.log('Preparando una %cChickenBurger', COLORS.violet)
  }
}

class BeefBurger implements Hamburguer {
  prepare(): void {
    console.log('Preparando una %cBeefBurger', COLORS.brown)
  }
}

class VeggieBurger implements Hamburguer {
  prepare(): void {
    console.log('Preparando una %cVeggieBurger', COLORS.green)
  }
}

abstract class HamburguerStore {
  protected abstract createHamburguer(): Hamburguer

  orderHamburguer(): void {
    const hamburguer = this.createHamburguer()
    hamburguer.prepare()
  }
}

class ChickenBurgerStore extends HamburguerStore {
  override createHamburguer(): Hamburguer {
    return new ChickenBurger()
  }
}

class BeefBurgerStore extends HamburguerStore {
  override createHamburguer(): Hamburguer {
    return new BeefBurger()
  }
}

class VeggieBurgerStore extends HamburguerStore {
  override createHamburguer(): Hamburguer {
    return new VeggieBurger()
  }
}

function main() {
  let hamburguerStore: HamburguerStore

  const burguerType = prompt(
    '¿Qué hamburguesa desea? (1) Pollo (2) Res (3) Veggie'
  )

  switch (burguerType) {
    case '1':
      hamburguerStore = new ChickenBurgerStore()
      break
    case '2':
      hamburguerStore = new BeefBurgerStore()
      break
    case '3':
      hamburguerStore = new VeggieBurgerStore()
      break
    default:
      console.log('Opción no válida')
      return
  }

  hamburguerStore.orderHamburguer()
}

main()
