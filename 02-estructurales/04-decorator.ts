import { COLORS } from '../helpers/colors.ts'
/**
 * ! Patrón decorador
 * Es un patrón de diseño estructural que permite añadir
 * funcionalidades a objetos, colocando estos objetos dentro de
 * objetos encapsuladores especiales que contienen estas funcionalidades.
 *
 * No confundirlo con los decoradores de TypeScript que son anotaciones.
 *
 * * Es útil cuando necesitas añadir funcionalidades a objetos
 *  * de manera dinámica y flexible.
 *
 * https://refactoring.guru/es/design-patterns/decorator
 */

interface Notification {
  send(message: string): void
}

class BasicNotification implements Notification {
  send(message: string): void {
    console.log(`Enviando notificacion basica: %c${message}`, COLORS.blue)
  }
}

// Clase decoradora
abstract class NotificationDecorator implements Notification {
  protected notification: Notification

  constructor(notification: Notification) {
    this.notification = notification
  }

  send(message: string): void {
    this.notification.send(message)
  }
}

// Diferentes decoradores

class EmailDecorator extends NotificationDecorator {
  private sendEmail(message: string) {
    console.log(`Enviando notificacion por email: %c${message}`, COLORS.pink)
  }

  override send(message: string): void {
    super.send(message)
    this.sendEmail(message)
  }
}

class SMSDecorator extends NotificationDecorator {
  private sendSMS(message: string) {
    console.log(`Enviando notificacion por SMS: %c${message}`, COLORS.red)
  }

  override send(message: string): void {
    super.send(message)
    this.sendSMS(message)
  }
}

function main() {
  let notification: Notification = new BasicNotification()

  notification = new EmailDecorator(notification)
  notification = new SMSDecorator(notification)

  notification.send('Alerta de sistema')
}

main()
