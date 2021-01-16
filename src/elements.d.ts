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
 * ![](media://block.png)
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

/**
 * Represents the reansparent container that may be edited in the future
 */
export class Editable extends Element {
    type: 'editable'

    /**
     * Unique string to identify this container among others
     */
    id: string

    /**
     * Default data for this container. Will be shown before first change
     */
    default: Array<Element | string>
}

/**
 * Edits specified container. Has no side-effects on the display
 */
export class Edit extends Element {
    type: 'edit'

    /**
     * ID that identifies the container to edit
     */
    id: string

    /**
     * Data for the container specified by id
     */
    data: Array<Element | string>
}

export class Dialog extends Element {
	type: 'dialog'

	/**
	 * Text to be shown in the dialog popup
	 */
	text: string

	/**
	 * Text to be shown on the button that opens the dialog
	 */
	btnText: string

	/**
	 * Array of buttons. Each button does action specified with `onClick` property and closes the dialog.
	 * To just close the dialog do not specify `onClick` on related button
	 */
	buttons: Button[]
}
