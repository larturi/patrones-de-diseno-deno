/**
 * ! Patrón Facade
 * Este patrón proporciona una interfaz unificada para un conjunto de interfaces
 * en un subsistema.
 *
 * Facade define una interfaz de nivel más alto que hace que el subsistema
 * sea más fácil de usar.
 *
 * * Es útil cuando un subsistema es complejo o difícil de entender para
 * * proporcionar una interfaz simplificada para el cliente.
 *
 * https://refactoring.guru/es/design-patterns/facade
 */

import { COLORS } from '../helpers/colors.ts'

class Projector {
  turnOn() {
    console.log('%cProyector encendido', COLORS.green)
  }

  turnOff() {
    console.log('%cProyector apagado', COLORS.red)
  }
}

class SoundSystem {
  on() {
    console.log('%cSoundSystem encendido', COLORS.green)
  }

  off() {
    console.log('%cSoundSystem apagado', COLORS.red)
  }
}

class VideoPlayer {
  on() {
    console.log('%cVideoPlayer encendido', COLORS.green)
  }

  play(movie: string) {
    console.log(`%cReproduciendo pelicula ${movie}`, COLORS.green)
  }

  stop() {
    console.log('%cPelicula detenida', COLORS.red)
  }

  off() {
    console.log('%cVideoPlayer apagado', COLORS.red)
  }
}

class PopcornMaker {
  popingPopcorn() {
    console.log('%cHaciendo palomitas', COLORS.green)
  }

  stopPopingPopcorn() {
    console.log('%cDeteniendo la maquina de palomitas', COLORS.red)
  }
}

interface HomeTheaterFacadeOptions {
  projector: Projector
  soundSystem: SoundSystem
  videoPlayer: VideoPlayer
  popcornMaker: PopcornMaker
}

class HomeTheaterFacade {
  private projector: Projector
  private soundSystem: SoundSystem
  private videoPlayer: VideoPlayer
  private popcornMaker: PopcornMaker

  constructor({
    projector,
    soundSystem,
    videoPlayer,
    popcornMaker
  }: HomeTheaterFacadeOptions) {
    this.projector = projector
    this.soundSystem = soundSystem
    this.videoPlayer = videoPlayer
    this.popcornMaker = popcornMaker
  }

  watchMovie(movie: string): void {
    console.log('Preparando para ver la pelicula')

    this.projector.turnOn()
    this.soundSystem.on()
    this.popcornMaker.popingPopcorn()
    this.videoPlayer.on()
    this.videoPlayer.play(movie)

    console.log('Disfrute la pelicula!')
  }

  endWatchingMovie(): void {
    console.log('Deteniendo la pelicula')

    this.projector.turnOff()
    this.soundSystem.off()
    this.popcornMaker.stopPopingPopcorn()
    this.videoPlayer.stop()
    this.videoPlayer.off()

    console.log('Gracias!')
  }
}

function main() {
  const projector = new Projector()
  const soundSystem = new SoundSystem()
  const videoPlayer = new VideoPlayer()
  const popcornMaker = new PopcornMaker()

  const homeTheaterFacade = new HomeTheaterFacade({
    projector,
    soundSystem,
    videoPlayer,
    popcornMaker
  })

  homeTheaterFacade.watchMovie('Matrix')

  homeTheaterFacade.endWatchingMovie()
}

main()
