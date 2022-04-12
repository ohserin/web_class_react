import React from "react";

function Info({text}){
    return <div>{text}</div>
}

const mainText = [
    {text : "WE PROVIDE"},
    {text : "VISUAL CODING"},
    {text : "SOLUTIONS"},
    {text : "FOR YOU WEBS"}
]

function Main() {
    return (
        <div id="wrap">
            <section id="main">
               <div className="main__cont">
                   {mainText.map((text) => (
                       <Info text={text.text} key={text.text} />
                   ))}
               </div>
            </section>
        </div>
    )
}

export default Main;