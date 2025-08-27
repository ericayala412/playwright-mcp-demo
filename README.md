# Playwright MCP (Model Context Protocol) Demo

This repository demonstrates how to use Playwright with Model Context Protocol (MCP) for automated testing. MCP enables AI-driven test automation by allowing models to interact with web applications through a standardized protocol.

## Prerequisites

- Node.js 16 or higher
- npm (comes with Node.js)
- VS Code Insiders

## Installing VS Code Insiders

1. Download VS Code Insiders:
   - For latest stable build: [https://code.visualstudio.com/insiders/](https://code.visualstudio.com/insiders/)
   - Alternatively, you can use winget (Windows), brew (macOS), or snap (Linux):
     ```bash
     # Windows (using winget)
     winget install Microsoft.VisualStudioCode.Insiders

     # macOS (using Homebrew)
     brew install --cask visual-studio-code-insiders

     # Linux (using Snap)
     sudo snap install code-insiders
     ```

2. Follow the installation instructions for your operating system if downloading manually:
   - Windows: Run the downloaded installer
   - macOS: Drag the downloaded app to your Applications folder
   - Linux: Follow the package installation instructions for your distribution

3. Important: VS Code Insiders must be your default editor for the MCP extension to work properly. You can set this by:
   - Opening VS Code Insiders
   - Press Cmd+Shift+P (macOS) or Ctrl+Shift+P (Windows/Linux)
   - Type "Shell Command: Install 'code-insiders' command in PATH"
   - Select the option to install it

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/ericayala412/playwright-mcp-demo.git
   cd playwright-mcp-demo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Install MCP Server

There are two ways to install the MCP server:

1. Using the GitHub repository:
   ```bash
   git clone https://github.com/microsoft/playwright-mcp.git
   cd playwright-mcp
   npm install
   npm run build
   ```

2. Using VS Code Insiders:
   - Open VS Code Insiders
   - Navigate to [https://github.com/microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp)
   - Click on "Install Server" button
   - Follow the prompts to complete the installation

After installation, make sure the MCP server is running before executing your tests.

## Running Tests

To run all tests:
```bash
npm test
```

To run a specific test:
```bash
npx playwright test src/test/add-hoodie-to-cart.spec.ts
```

## Project Structure

- `src/test/` - Contains all test files
- `src/test/config/` - Test configuration files
- `example-prompts/` - Example MCP prompts for test scenarios

## Test Examples

This demo includes example tests that showcase MCP capabilities:
- Adding items to cart