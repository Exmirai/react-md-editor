import React from 'react';
import MDEditor from '../';
import './App.less';

const mdStr = `# Markdown Editor for React
## 大标题

\`visble?:boolean\` - Shows a preview that will be converted to html.

### 小标题
#### 小标题
##### 小标题
###### 小标题

<style>
body {
  padding: 100px;
}
</style>

<p align="center">
  A markdown editor with preview, implemented with React.js and TypeScript.
</p>

*斜体文本*    _斜体文本_  
**粗体文本**    __粗体文本__  
***粗斜体文本***    ___粗斜体文本___  

\`\`\`javascript
$(document).ready(function () {
  alert('hello world');
});
\`\`\`


\`\`\`javascript
import MEDitor from '@uiw/react-md-editor';

import * as React from "react";
import ReactDOM from "react-dom";
import MEDitor from '@uiw/react-md-editor';

export default function App() {
  const [value, setValue] = React.useState("**Hello world!!!**");
  const [selectedTab, setSelectedTab] = React.useState("write");
  return (
    <div className="container">
      <MEDitor
        value={value}
        onChange={setValue}
      />
    </div>
  );
}
\`\`\`

\`\`\`python
def g(x):
    yield from range(x, 0, -1)
    yield from range(x)
\`\`\`

    def g(x):
        yield from range(x, 0, -1)
        yield from range(x)

文字链接 [链接名称](http://链接网址)
网址链接 <http://链接网址>

在当前行的结尾加 2 个空格  

- [x] 我的任务
- [x] 我的任务

1. ssss
2. 3333

---

| 表头 | 表头 |
| --- | --- |
| 事实上 | 事实上 |

这个链接用 1 作为网址变量 [Google][1].
这个链接用 yahoo 作为网址变量 [Yahoo!][yahoo].
然后在文档的结尾为变量赋值（网址）

  [1]: http://www.google.com/
  [yahoo]: http://www.yahoo.com/
`;


export default function App() {
  const [state, setVisiable] = React.useState({
    visiableDragbar: true,
    preview: true,
  });
  const upDataVisiable = (keyName, e) => {
    setVisiable({ ...state, [keyName]: e.target.checked });
  }
  return (
    <div className="warpper">
      <MDEditor
        value={mdStr}
        height={400}
        visiableDragbar={state.visiableDragbar}
        preview={state.preview}
        onChange={(e) => {
          console.log('3')
        }}
      />
      <div className="doc-tools">
        <label>
          <input type="checkbox" checked={state.visiableDragbar} onChange={upDataVisiable.bind(this, 'visiableDragbar')} />
          是否显示拖拽工具
        </label>
        <label>
          <input type="checkbox" checked={state.preview} onChange={upDataVisiable.bind(this, 'preview')} />
          是否显示预览界面
        </label>
      </div>
    </div>
  )
}