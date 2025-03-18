import { Logger } from 'jsr:@deno-library/logger@1.2.0'

interface ILoggerAdapter {
  file: string

  writeLog: (message: string) => void
  writeWarning: (message: string) => void
  writeError: (message: string) => void
}

export class DenoLoggerAdapter implements ILoggerAdapter {
  public file: string
  private logger = new Logger()

  constructor(file: string) {
    this.file = file
  }

  writeLog(message: string) {
    this.logger.info(`[${this.file}] [INFO] ${message}`)
  }

  writeWarning(message: string) {
    this.logger.warn(`[${this.file}] [WARN] ${message}`)
  }

  writeError(message: string) {
    this.logger.error(`[${this.file}] [ERROR] ${message}`)
  }
}
