import { useState } from "react"


export default function About() {

    const [mystyle,setMyStyle]=useState<{
        color: string;
        backgroundColor: string;
        border?: string;
    }>({

    color:'black',
    backgroundColor:'white'

    })
    const [myText,MyBtnTxt]=useState("Enable Dark Mode")
   const ToggleStyle = ()=>{
    if(mystyle.color === 'black'){
        setMyStyle({
        color:'white',
        backgroundColor:'black',
        border:'2px solid white'
    })
    MyBtnTxt("Enable Light Mode")
    }
    
        else{
            setMyStyle({
            color:'black',
            backgroundColor:'white'
            })
            MyBtnTxt("Enable Dark Mode")
        }
    }
   
  return (
    <><div className="container" style={mystyle} /><h1 className="my-3">About Us</h1><div className="accordion">
      <details className="accordion-item " style={mystyle} name="accordionExample" open>
        <summary className="accordion-header">
          Accordion Item #1
          <svg className="accordion-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m2 5 6 6 6-6" /></svg>
        </summary>
        <div className="accordion-body" style={mystyle}>
          <strong>This is all about text-utils.</strong> It is shown by default because the <code>open</code> attribute is present. The native <code>&lt;details&gt;</code> element handles all the show/hide logic without any JavaScript. You can put any HTML content within the <code>.accordion-body</code>.
        </div>
      </details>
      <div className="container my-3" style={mystyle}>
        <button type="button" onClick={ToggleStyle} className="theme-primary btn-solid btn-styled" style={mystyle}>{myText}</button>
      </div>
    </div></>
  )
}
