import { Component } from './base'

/**
 * Class represents a page. Will replace current page if included in API answer
 */
export class Page extends Component {
    type: 'page'
    children: Array<Component | string>
    title?: string
}

/**
 * Represents fullwidth Material Design block with content
 */
export class Block extends Component {
    type: 'block'
    children: Array<Component | string>
}

/**
 * Represents an inline group. Commonly specified with short array annotation (`["hello tblock"]`) instead of full object (`{"type": "tblock", "children": ["hello tblock"]}`)
 */
export class TBlock extends Component {
    type: 'tblock'
    children: Array<Component | string>
}

export class Button extends Component {
    type: 'button'
    onClick: {
        action: string,
        args: Array<any>
    }
    text: string
}

export class Card extends Component {
    type: 'card'
    children: Array<Component | string>
    ratio: string
    width: string
    height: string
    color: string
}
