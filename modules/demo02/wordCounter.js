var { window, StatusBarAlignment, Disposable } = require("vscode");

class WordCounter {
  constructor(context) {
    this._context = context;
    this._statusBarItem = window.createStatusBarItem(StatusBarAlignment.Left);
    // 实例化一个控制器
    let wordCounterController = new WordCounterController(this);
    this._context.subscriptions.push(wordCounterController);
    this._context.subscriptions.push(this);
  }

  // 更新底部状态栏显示
  updateWordCount() {
    let editor = window.activeTextEditor;
    if (!editor) {
      this._statusBarItem.hide();
      return;
    }

    let doc = editor.document;
    // 当编辑中的文本类型为markdown时(.md格式)
    if (doc.languageId === "markdown") {
      let wordCount = this.getWordCount(doc);
      // `$(xxxx)` 内置的引用GitHub Octicon图标(https://octicons.github.com/)
      this._statusBarItem.text =
        wordCount !== 1 ? `$(pencil) ${wordCount} Words` : `$(pencil) 1 Word`;
      this._statusBarItem.show();
    } else {
      this._statusBarItem.hide();
    }
  }

  // 获取文本单词数目
  getWordCount(doc) {
    let docContent = doc.getText();
    // 运用正则表达式处理文本内容
    docContent = docContent.replace(/(< ([^>]+)<)/g, "").replace(/\s+/g, " ");
    docContent = docContent.replace(/^\s\s*/, "").replace(/\s\s*$/, "");

    let wordCount = 0;
    if (docContent != "") {
      wordCount = docContent.split(" ").length;
    }
    return wordCount;
  }

  dispose() {
    this._statusBarItem.dispose();
  }
}

class WordCounterController {
  constructor(wordCounter) {
    this._wordCounter = wordCounter;

    let subscriptions = [];
    // 注册监听器：当 光标位置改变 或 保存文本更改 时触发_onEvent
    window.onDidChangeTextEditorSelection(this._onEvent, this, subscriptions);
    window.onDidChangeActiveTextEditor(this._onEvent, this, subscriptions);

    // 初始化
    this._wordCounter.updateWordCount();
    this._disposable = Disposable.from(...subscriptions);
  }

  _onEvent() {
    this._wordCounter.updateWordCount();
  }

  dispose() {
    this._disposable.dispose();
  }
}

module.exports.WordCounter = WordCounter;
