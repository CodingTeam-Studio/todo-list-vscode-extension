# todo-list README

基于[https://code.visualstudio.com/docs/extensions/example-hello-world](https://code.visualstudio.com/docs/extensions/example-hello-world)，测试运行需要打开Debug项，运行播放按钮。在新弹出的[Extension development Host]的VS code界面，打开命令行(F1)，输入Hello World，即有显示。

本地非Debug模式测试步骤：开发完成后，将整个文件夹复制到`.vscode/extensions`文件夹下，该文件夹的具体位置取决于OS

* Windows %USERPROFILE%\.vscode\extensions
* Mac ~/.vscode/extensions
* Linux ~/.vscode/extensions

# Release Notes

## 2018/04/04

* Add `Demo01` command to test `vscode.commands.registerCommand`
* Achieve the word-count features [https://code.visualstudio.com/docs/extensions/example-word-count](https://code.visualstudio.com/docs/extensions/example-word-count)

## 2018/04/03

* Init project