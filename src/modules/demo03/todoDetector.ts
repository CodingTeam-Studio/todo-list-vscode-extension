import { ExtensionContext, window, TextDocument } from "vscode";

export class TodoDetector {
  private _context: ExtensionContext;

  constructor(context: ExtensionContext) {
    this._context = context;
  }

  public showTodos() {
    let editor = window.activeTextEditor;
    if (!editor) {
      return;
    }
    let doc = editor.document;
    let todos = this._getTodos(doc) || "No Todos";

    window.showInformationMessage(todos);
  }

  private _getTodos(doc: TextDocument): string {
    let docContent = doc.getText();
    // 运用正则表达式处理文本内容
    let match = "TODO";

    // match为TODO的话，真实的正则表达式为：/\/\/.*TODO.*/g
    let reg = eval(`/\\/\\/.*${match}.*/g`);
    let comments = docContent.match(reg);
    
    console.log(comments);
    let todos = "";
    if (comments !== null) {
      todos = comments.toString();
    }

    return todos;
  }
}
