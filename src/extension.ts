"use strict";
import * as vscode from "vscode";
import { WordCounter } from "./modules/demo02/wordCounter";
import { TodoDetector } from "./modules/demo03/todoDetector";

// 当插件载入时执行
export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "todo-list" is now active!');

  let wordCounter = new WordCounter(context);
  let todoDetector = new TodoDetector(context);

  // 命令需要在被package.json中声明，名称需要匹配
  let disposables = [
    vscode.commands.registerCommand("extension.demo01-hello-world", () => {
      // 此处的语句会在执行command的时候执行
      vscode.window.showInformationMessage("Hello World!");
    }),
    vscode.commands.registerCommand("extension.demo02-word-counter", () => {
      wordCounter.updateWordCount();
    }),
    vscode.commands.registerCommand("extension.demo03-todo-detector", () => {
        todoDetector.showTodos();
    })
  ];

  context.subscriptions.push(...disposables);
}

export function deactivate() {}
