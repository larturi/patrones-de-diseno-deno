/**
 * ! Patrón Composite
 * Es un patrón de diseño estructural que permite componer objetos
 * en estructuras de árbol para representar jerarquías.
 *
 * El patrón permite a los clientes tratar de manera uniforme a los objetos
 * individuales y a sus composiciones.
 *
 * * Es útil cuando necesitas tratar a los objetos individuales
 * * y a sus composiciones de manera uniforme, y la estructura
 * * de los objetos forma una jerarquía en árbol.
 *
 * https://refactoring.guru/es/design-patterns/composite
 *
 */

interface FileSystemComponent {
  showDetails(ident?: string): void
}

class File implements FileSystemComponent {
  private name: string

  constructor(name: string) {
    this.name = name
  }

  showDetails(ident?: string) {
    console.log(`${ident} - Archivo: ${this.name}`)
  }
}

class Folder implements FileSystemComponent {
  private name: string
  private children: FileSystemComponent[]

  constructor(name: string) {
    this.name = name
    this.children = []
  }

  add(component: FileSystemComponent) {
    this.children.push(component)
  }

  showDetails(ident: string = '') {
    console.log(`${ident} + Carpeta: ${this.name}`)
    ident = ident ? ident + '  ' : '  '
    this.children.forEach((child) => child.showDetails(ident))
  }
}

function main() {
  const file1 = new File('file1.txt')
  const file2 = new File('file2.xls')
  const file3 = new File('file3.txt')
  const file4 = new File('file4.pdf')

  const folder1 = new Folder('folder1')
  folder1.add(file1)
  folder1.add(file2)

  const folder2 = new Folder('folder2')
  folder2.add(file3)
  folder2.add(file4)

  const rootFolder = new Folder('ROOT')
  rootFolder.add(folder1)
  rootFolder.add(folder2)
  rootFolder.showDetails()
}

main()
