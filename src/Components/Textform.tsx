import type { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, ChangeEvent } from "react";
import { useState } from "react";


export default function Textform(props: {
  showAlert(arg0: string, arg1: string): unknown;
  mode: string;
  darkSurfaceColor: string;
  heading: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined;
}) {
  const handleUpClick=()=>{
// console.log("Uppercase was clicked" + text);
let newText=text.toUpperCase()
setText(newText)
props.showAlert("Uppercase is activated","success")
  }
  const handleLoClick=()=>{
let newText=text.toLowerCase()
setText(newText)
props.showAlert("Lowercase is activated","success")
  }
  const handleSave = () => {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = " ";
    link.click();
    URL.revokeObjectURL(url);
    props.showAlert("text is saved","success")
  }
 
  const handleOnChange=(event: ChangeEvent<HTMLTextAreaElement>)=>{
// console.log("Onchange");
setText(event.target.value)
  }
const handleCopy = async () => {
  const textArea = document.getElementById("textbox") as HTMLTextAreaElement | null;

  if (!textArea) return;

  try {
    await navigator.clipboard.writeText(textArea.value);
    console.log("Copied");
  } catch (error) {
    console.error("Copy failed:", error);
  }
  props.showAlert("text is copied to clipboard","success")
}
 
  const handleClearText=()=>{
// console.log("Onchange");
setText('');
props.showAlert("text is cleared","success")
  }

  const [text, setText] = useState('');
  const words = text.split(/\s+/).filter((element) => element.length !== 0);
  const minutes = text.split(/\s+/).filter((element) => element.length !== 0);
  const characterCount = text.replace(/\s/g, '').length;


  return (
    <><div>
      <h1 style={{ color: props.mode === 'dark' ? 'white' : '#555555' }}>{props.heading}</h1>
    </div><div>
      <textarea
        name="boxtype"
        id="textbox"
        style={{
          backgroundColor: props.mode === 'dark' ? props.darkSurfaceColor : 'white',
          color: props.mode === 'dark' ? 'white' : '#555555'
        }}
        onChange={handleOnChange}
        value={text}
        cols={90}
        rows={10}
      ></textarea>
      <div>
      <button disabled={text.length===0} type="submit"  onClick={handleUpClick} className="btn-solid theme-primary mx-2">Convert to Uppercase</button>
      <button disabled={text.length===0} type="submit" onClick={handleLoClick} className="btn-solid theme-primary">Convert to Lowercase</button>
      <button disabled={text.length===0} type="submit" onClick={handleSave} className="btn-solid theme-primary mx-3">Save</button>
      <button disabled={text.length===0} type="submit" onClick={handleClearText} className="btn-solid theme-primary mx-3">Clear Text</button>
      <button disabled={text.length===0} type="submit" onClick={handleCopy} className="btn-solid theme-primary">Copy Text</button>

      </div>
      </div>
      <div className="container my-3">
        <h1 style={{ color: props.mode === 'dark' ? 'white' : '#555555' }}>Your text summary</h1>
        <p aria-disabled={text.length===0}  style={{ color: props.mode === 'dark' ? 'white' : '#555555' }}>{words.length} words and {characterCount} characters</p>
        <p style={{ color: props.mode === 'dark' ? 'white' : '#555555' }}>{0.008 * minutes.length} Minutes Read</p>
        <h2 style={{ color: props.mode === 'dark' ? 'white' : '#555555' }}>Preview</h2>
        <p style={{ color: props.mode === 'dark' ? 'white' : '#555555' }}>
          {text.length > 0 ? text : 'Nothing to Preview'}
        </p>
      </div>
      </>
  )
}

