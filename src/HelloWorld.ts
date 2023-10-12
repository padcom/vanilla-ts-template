export class HelloWorld extends HTMLElement {
  constructor() {
    super()

    const style = document.createElement('style')
    style.innerHTML = `
      :host {
        --_title-color: var(--color, black);
      }

      .title {
        color: var(--_title-color);
      }
    `

    const content = document.createElement('slot')
    const header = document.createElement('h1')
    header.appendChild(content)
    header.classList.add('title')

    const root = this.attachShadow({ mode: 'closed' })
    root.appendChild(style)
    root.appendChild(header)
  }
}
