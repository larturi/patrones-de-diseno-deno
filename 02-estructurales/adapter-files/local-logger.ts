import { COLORS } from '../../helpers/colors.ts'

export class LocalLogger {
  constructor(private file: string) {}

  writeLog(message: string): void {
    console.log(`[${this.file}] Log: ${message}`)
  }

  writeWarning(message: string): void {
    console.log(`[${this.file}] %cWarning: ${message}`, COLORS.yellow)
  }

  writeError(message: string): void {
    console.log(`[${this.file}] %cError: ${message}`, COLORS.red)
  }
}
