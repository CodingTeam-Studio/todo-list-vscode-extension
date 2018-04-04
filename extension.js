// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "todo-list" is now active!');

  // 命令需要在被package.json中声明，名称需要匹配
  let disposables = [
    vscode.commands.registerCommand("extension.sayHello", function() {
      // 此处的语句会在执行command的时候执行
      vscode.window.showInformationMessage("Hello World!");
    }),
    
    vscode.commands.registerCommand("extension.demo01", function() {
      vscode.window.showInformationMessage("This is Demo01");
    })
  ];

  context.subscriptions.push(disposables);
}
exports.activate = activate;

// 这条语句会在插件deactivate时执行
function deactivate() {}
exports.deactivate = deactivate;
