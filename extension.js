var vscode = require("vscode");
var { WordCounter } = require("./modules/demo02/wordCounter");

// 当插件载入时执行
function activate(context) {
  console.log('Congratulations, your extension "todo-list" is now active!');

  // 载入wordCounter模块
  let wordCounter = new WordCounter(context);

  // 命令需要在被package.json中声明，名称需要匹配
  let disposables = [
    vscode.commands.registerCommand("extension.sayHello", function() {
      // 此处的语句会在执行command的时候执行
      vscode.window.showInformationMessage("Hello World!");
    }),

    vscode.commands.registerCommand("extension.demo01", function() {
      vscode.window.showInformationMessage("This is Demo01");
    }),
    vscode.commands.registerCommand(
      "extension.demo02-word-counter",
      function() {
        wordCounter.updateWordCount();
      }
    )
  ];
  context.subscriptions.push(disposables);
}
exports.activate = activate;

// 这条语句会在插件deactivate时执行
function deactivate() {}
exports.deactivate = deactivate;
