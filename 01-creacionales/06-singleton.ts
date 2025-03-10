/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */

class DragonBalls {
  private static instance: DragonBalls
  ballsCollected: number

  private constructor() {
    this.ballsCollected = 0
  }

  public static getInstance(): DragonBalls {
    if (!DragonBalls.instance) {
      DragonBalls.instance = new DragonBalls()
      console.log('- Se ha creado una instancia de DragonBalls')
    }
    return DragonBalls.instance
  }

  collectBall() {
    if (this.ballsCollected < 7) {
      this.ballsCollected++
      console.log(`- Esferas recolectadas: ${this.ballsCollected}`)
    } else {
      console.log('Has recolectado las 7 esferas del dragón')
    }
  }

  summonShenlog() {
    if (this.ballsCollected === 7) {
      console.log('- Has invocado a Shenlog!')
      this.ballsCollected = 0
    } else {
      console.log(
        `- No puedes invocar a Shenlog, te faltan ${
          7 - this.ballsCollected
        } esferas`
      )
    }
  }
}

function main() {
  console.log('\nIniciando recolección de esferas (Goku)')
  const gokuDragonBalls = DragonBalls.getInstance()
  gokuDragonBalls.collectBall()
  gokuDragonBalls.collectBall()
  gokuDragonBalls.collectBall()
  gokuDragonBalls.summonShenlog()

  console.log('\nIniciando recolección de esferas instancia (Vegeta)')
  const vegetaDragonBalls = DragonBalls.getInstance()
  vegetaDragonBalls.collectBall()
  vegetaDragonBalls.collectBall()
  vegetaDragonBalls.collectBall()
  vegetaDragonBalls.collectBall()
  gokuDragonBalls.summonShenlog()

  console.log('\nIniciando recolección de esferas instancia (Goku)')
  gokuDragonBalls.collectBall()
  gokuDragonBalls.summonShenlog()
}

main()
