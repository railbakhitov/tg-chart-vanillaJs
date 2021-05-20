import { css } from './utils'

const container = document.getElementById('card')
const $rightScopeSlider = document.querySelector('[data-el="right"]')
const $leftScopeSlider = document.querySelector('[data-el="left"]')

class Theme {
    constructor() {
        this.backgroundColor = '#fff'
        this.tooltip = {
            backgroundColor: '#fff',
            color: '#000'
        }
        this.slider = {
            backgroundColor: '#f5f9fb'
        }

        container.style.transition = '0.5s';
    }
}

export class LightTheme extends Theme {
    constructor() {
        super()
    }

    change() {
        container.style.backgroundColor = '#fff'
        css($rightScopeSlider, { background: '#f5f9fb' })
        css($leftScopeSlider, { background: '#f5f9fb' })
    }
}

export class NightTheme extends Theme {
    constructor() {
        super()
    }

    change() {
        this.backgroundColor = '#1b2b3d'
        this.tooltip = {
            backgroundColor: '#132334',
            color: 'white'
        }
        this.slider = {
            backgroundColor: '#172537'
        }
        container.style.backgroundColor = '#1b2b3d'
        css($rightScopeSlider, { background: '#172537' })
        css($leftScopeSlider, { background: '#172537' })
    }
}