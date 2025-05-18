# Fox Quote - Obsidian Plugin

<div align="center">

<img src="./fox-quote.png" alt="Fox Quote" width="300" style="border-radius: 15px;">

</div>

A simple plugin that displays random quotes from a JSON file in your Obsidian vault.

## Features

-   Displays random quotes
-   Automatically refreshes every 10 seconds
-   Uses a simple JSON file for quote storage
-   Lightweight and non-intrusive

## Installation

1. Available through the Obsidian Community Plugins (search for "Fox Quote")
2. Or install manually:
    - Download the latest release
    - Extract and place the folder in your vault's plugins directory: `<vault>/.obsidian/plugins/`
    - Enable the plugin in Obsidian's settings

## Usage

1. If you want to add your custom quote just edit `quote.json` file in your `<vault>/.obsidian/plugins/` with this format:

```json
[
	{
		"name": "Name 1",
		"quote": "Quote 1"
	},
	{
		"name": "Name 2",
		"quote": "Quote 2"
	}
]
```
