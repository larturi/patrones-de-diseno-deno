/**
 * ! Inmutabilidad con copia
 * Aunque la inmutabilidad es una buena práctica, no siempre es posible.
 * En estos casos, se puede hacer una copia del objeto y modificar la copia.
 *
 *  * Es útil para mantener un historial de estados en aplicaciones interactivas.
 *
 */

import { COLORS } from '../helpers/colors.ts'

class CodeEditorState {
  readonly content: string
  readonly cursorPosition: number
  readonly unsaveChanges: boolean

  constructor(content: string, cursorPosition: number, unsaveChanges: boolean) {
    this.content = content
    this.cursorPosition = cursorPosition
    this.unsaveChanges = unsaveChanges
  }

  displayState() {
    console.log(`Contenido: \n${this.content}`)
    console.log(`Posición del cursor: ${this.cursorPosition}`)
    console.log(`Cambios sin guardar: ${this.unsaveChanges}`)
  }

  copyWith({
    content,
    cursorPosition,
    unsaveChanges
  }: Partial<CodeEditorState>): CodeEditorState {
    return new CodeEditorState(
      content ?? this.content,
      cursorPosition ?? this.cursorPosition,
      unsaveChanges ?? this.unsaveChanges
    )
  }
}

class CodeEditorHistory {
  private history: CodeEditorState[] = []
  private currentIndex: number = -1

  save(state: CodeEditorState): void {
    if (this.currentIndex < this.history.length - 1) {
      this.history = this.history.slice(0, this.currentIndex + 1)
    }

    this.history.push(state)
    this.currentIndex++
  }

  undo(): CodeEditorState | null {
    if (this.currentIndex > 0) {
      this.currentIndex--
      return this.history[this.currentIndex]
    }

    return null
  }

  redo(): CodeEditorState | null {
    if (this.currentIndex < this.history.length - 1) {
      this.currentIndex++
      return this.history[this.currentIndex]
    }

    return null
  }
}

function main() {
  const history = new CodeEditorHistory()

  console.log(`\n%cEstado inicial del editor de código`, COLORS.pink)
  let editorState = new CodeEditorState(
    `const message = 'Hola mundo'`,
    2,
    false
  )
  history.save(editorState)
  editorState.displayState()

  console.log(`\n%cEstado del editor de código 2`, COLORS.pink)
  editorState = editorState.copyWith({
    content: `const message = 'Hola mundo'; \nconsole.log(message);`,
    cursorPosition: 3,
    unsaveChanges: true
  })
  history.save(editorState)
  editorState.displayState()

  console.log(`\n%cEstado del editor de código 3`, COLORS.pink)
  editorState = editorState.copyWith({
    cursorPosition: 1,
    unsaveChanges: true
  })
  history.save(editorState)
  editorState.displayState()

  console.log(`\n%cEstado del editor de código despues del undo()`, COLORS.pink)
  editorState = history.undo()!
  editorState.displayState()

  console.log(
    `\n%cEstado del editor de código despues del segundo undo()`,
    COLORS.pink
  )
  editorState = history.undo()!
  editorState.displayState()
}

main()
