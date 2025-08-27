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

## Creating Tests
In order to create tests via the Agent

### Starting the MCP Server in VS Code Insiders

1. Open VS Code Insiders
2. Start the server:
   - Press Cmd+Shift+P (macOS) or Ctrl+Shift+P (Windows/Linux)
   - Type "MCP: List Severs"
   - In the menu click Playwright
   - Click "Start Server"
3. Verify the server is running:
   - Repeast step 2 to list the MCP servers
   - Next to playwright you should see "running"

Once the server is running, you will be able to 