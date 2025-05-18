import { setIcon, ItemView, Plugin, WorkspaceLeaf } from 'obsidian'
import quotes from './quote.json'

const VIEW_TYPE = 'random-quote-view'

class QuoteView extends ItemView {
	constructor(leaf: WorkspaceLeaf) {
		super(leaf)
	}

	getViewType(): string {
		return VIEW_TYPE
	}

	getDisplayText(): string {
		return 'Random Quote'
	}

	getIcon(): string {
		return 'quote'
	}

	async onOpen() {
		const container = this.containerEl.children[1]
		container.empty()
		container.createEl('h4', { text: 'Fox Quote' })

		this.showRandomQuote(container)

		setInterval(() => this.showRandomQuote(container), 10000)
	}

	showRandomQuote(container: Element) {
		const quoteContainer =
			container.querySelector('.quote-content') ||
			container.createDiv({ cls: 'quote-content' })
		quoteContainer.empty()

		const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

		quoteContainer.createEl('blockquote', {
			text: randomQuote.quote,
			cls: 'quote-text',
		})
		quoteContainer.createEl('p', {
			text: `— ${randomQuote.name}`,
			cls: 'quote-author',
		})
	}
}

export default class FoxQuotePlugin extends Plugin {
	async onload() {
		this.registerView(VIEW_TYPE, (leaf) => new QuoteView(leaf))
		this.addRibbonIcon('quote', 'Show Random Quote', () => {
			this.activateView()
		})

		this.addCommand({
			id: 'open-random-quote',
			name: 'Open Random Quote',
			callback: () => {
				this.activateView()
			},
		})
	}

	async activateView() {
		const { workspace } = this.app

		let leaf: WorkspaceLeaf | null = null
		const leaves = workspace.getLeavesOfType(VIEW_TYPE)

		if (leaves.length > 0) {
			leaf = leaves[0]
		} else {
			leaf = workspace.getRightLeaf(false)
			await leaf.setViewState({ type: VIEW_TYPE, active: true })
		}

		workspace.revealLeaf(leaf)
	}

	async onunload() {
		this.app.workspace.detachLeavesOfType(VIEW_TYPE)
	}
}
