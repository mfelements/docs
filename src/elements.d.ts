import { Element } from './base'

/**
 * Class represents a page. Will replace current page if included in API answer
 */
export class Page extends Element {
    type: 'page'
    children: Array<Element | string>
    title?: string
}

/**
 * Represents fullwidth Material Design block with content
 */
export class Block extends Element {
    type: 'block'
    children: Array<Element | string>
}

/**
 * Represents an inline group. Commonly specified with short array annotation (`["hello tblock"]`) instead of full object (`{"type": "tblock", "children": ["hello tblock"]}`)
 */
export class TBlock extends Element {
    type: 'tblock'
    children: Array<Element | string>
}

export class Button extends Element {
    type: 'button'
    onClick: {
        action: string,
        args: Array<any>
    }
    text: string
}

export class Card extends Element {
    type: 'card'
    children: Array<Element | string>
    ratio: string
    width: string
    height: string
    color: string
}
