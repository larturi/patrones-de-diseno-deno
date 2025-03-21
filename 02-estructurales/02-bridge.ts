/**
 * ! Patrón Bridge
 * Este patrón nos permite desacoplar una abstracción de su implementación,
 * de tal forma que ambas puedan variar independientemente.
 *
 * * Es útil cuando se tienen múltiples implementaciones de una abstracción
 * * Se puede utilizar para separar la lógica de negocio de la lógica de presentación
 * * Se puede utilizar para separar la lógica de la interfaz de usuario también.
 *
 * https://refactoring.guru/es/design-patterns/bridge
 */

import { COLORS } from '../helpers/colors.ts'

interface Ability {
  use(): void
}

class SwordAttack implements Ability {
  use() {
    console.log('%cAtaque con espada', COLORS.blue)
  }
}

class MagicSpell implements Ability {
  use() {
    console.log('%cHechizo magico', COLORS.green)
  }
}

class AxeAttack implements Ability {
  use() {
    console.log('%cAtaque con hacha', COLORS.purple)
  }
}

class SuperDefense implements Ability {
  use() {
    console.log('%cDefensa suprema', COLORS.red)
  }
}

abstract class Character {
  protected ability: Ability

  constructor(ability: Ability) {
    this.ability = ability
  }

  setAbility(ability: Ability): void {
    this.ability = ability
  }

  abstract performAbility(): void
}

class Warrior extends Character {
  override performAbility(): void {
    console.log('%cGuerrero listo para luchar:', COLORS.yellow)
    this.ability.use()
  }
}

class Mage extends Character {
  override performAbility(): void {
    console.log('%cEl mago prepara su magia:', COLORS.pink)
    this.ability.use()
  }
}

function main() {
  const warrior = new Warrior(new SwordAttack())
  warrior.performAbility()

  const mage = new Mage(new MagicSpell())
  mage.performAbility()

  warrior.setAbility(new SuperDefense())
  warrior.performAbility()

  mage.setAbility(new SuperDefense())
  mage.performAbility()

  warrior.setAbility(new AxeAttack())
  warrior.performAbility()
}

main()
