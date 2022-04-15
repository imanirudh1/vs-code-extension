// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { HelloWorldPanel } from './HelloWorldPanel';
import { SidebarProvider } from './SidebarProvider';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	const sidebarProvider = new SidebarProvider(context.extensionUri);
	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider("vstodo-sidebar", sidebarProvider)
	)
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json

	context.subscriptions.push(vscode.commands.registerCommand('vstodo.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		// vscode.window.showInformationMessage('Hello Anirudh!!');
		HelloWorldPanel.createOrShow(context.extensionUri);
	}))

	context.subscriptions.push(vscode.commands.registerCommand('vstodo.refresh', async () => {
		// HelloWorldPanel.kill()
		// HelloWorldPanel.createOrShow(context.extensionUri);
		// setTimeout(() => {
		// 	vscode.commands.executeCommand("workbench.action.webview.openDeveloperTools")
		// }, 100)
		await vscode.commands.executeCommand("workbench.action.closeSidebar");
		await vscode.commands.executeCommand(
		  "workbench.view.extension.vstodo-sidebar-view"
		);
	}))

	context.subscriptions.push(vscode.commands.registerCommand('vstodo.askQustion', async () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		let answer = await vscode.window.showInformationMessage('How are You Anirudh?', 'Good', 'Bad');

		if (answer === 'Good') {
			vscode.window.showInformationMessage('Anirudh is Good');
		} else {
			vscode.window.showInformationMessage('Sorry to hear that Anirudh');
		}

	}))
}

// this method is called when your extension is deactivated
export function deactivate() { }
