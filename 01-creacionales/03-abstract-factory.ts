/**
 * ! Abstract Factory:
 * Es un patrón de diseño que permite crear familias de objetos relacionados
 * sin especificar sus clases concretas.
 *
 * En lugar de crear objetos individuales directamente,
 * creamos fábricas que producen un conjunto de objetos relacionados.
 *
 * * Es útil cuando necesitas crear objetos que son parte de una familia
 * * y quieres asegurarte de que estos objetos se complementen entre sí.
 *
 * https://refactoring.guru/es/design-patterns/abstract-factory
 */

import { COLORS } from '../helpers/colors.ts'

/**
 *  El propósito del Abstract Factory es crear familias de objetos relacionados
 *  (en este caso, hamburguesas y bebidas) sin especificar las clases concretas
 *  de cada uno de esos objetos en el código principal.
 */

interface Hambuguer {
  prepare(): void
}

interface Drink {
  pour(): void
}

class ChickenBurger implements Hambuguer {
  prepare() {
    console.log('%cChickenBurger', COLORS.cyan, 'is ready')
  }
}

class BeefBurger implements Hambuguer {
  prepare() {
    console.log('%cBeefBurger', COLORS.orange, 'is ready')
  }
}

class Water implements Drink {
  pour() {
    console.log('%cWater', COLORS.violet, 'is ready')
  }
}

class Coca implements Drink {
  pour() {
    console.log('%cCoca', COLORS.red, 'is ready')
  }
}

interface RestaurantFactory {
  createHamburguer(): Hambuguer
  createDrink(): Drink
}

class FastFoodRestaurantFactory implements RestaurantFactory {
  createHamburguer() {
    return new BeefBurger()
  }

  createDrink() {
    return new Coca()
  }
}

class HealtyRestaurantFactory implements RestaurantFactory {
  createHamburguer() {
    return new ChickenBurger()
  }

  createDrink() {
    return new Water()
  }
}

function main(factory: RestaurantFactory) {
  console.log(factory.constructor.name)
  const hamburguer = factory.createHamburguer()
  const drink = factory.createDrink()

  hamburguer.prepare()
  drink.pour()
  console.log('')
}

main(new FastFoodRestaurantFactory())
main(new HealtyRestaurantFactory())
