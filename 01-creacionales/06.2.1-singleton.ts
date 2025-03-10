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

import { configManager } from './singleton/config-manager.ts'

configManager.setConfig('API_URL', 'https://api.example.com')
configManager.setConfig('API_KEY', '1234567890')
configManager.setConfig('TIMEOUT', '5000')

console.log(configManager.getConfig('API_URL'))
console.log(configManager.getConfig('API_KEY'))
console.log(configManager.getConfig('TIMEOUT'))

console.log(configManager.getAllConfig())
