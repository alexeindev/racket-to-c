import React, { Component } from 'react';
import {UnControlled as CodeMirror} from 'react-codemirror2'

function Highlight (props) {
    const { value, language } = props
    const elements = []
    let index = 0
    const pushElement = (token, style) => {
      elements.push(<span className={style || ''} key={++index}>{token}</span>)
    }
    const mode = CodeMirror.findModeByName(language)
    CodeMirror.runMode(value, mode ? mode.mime : language, (token, style) => {
      pushElement(token, style)
    })
    pushElement(tokenBuf, lastStyle)
    const code = <code>{elements}</code>
    return inline ? code : <pre>{code}</pre>
  }

  export default Highlight;
 