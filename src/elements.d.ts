import { Component } from './base'

declare class Page extends Component {
    type: 'page'
    children: Array<Component | string>
    title?: string
}
