import React from "react";

function Accordion(props: any) {
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody collapsed={props.collapsed}/>
        </div>
    );
}

function AccordionTitle(props: any) {
    return (
        <>{props.title}</>
    )
}

function AccordionBody(props: any) {
    if (props.collapsed === true){
        return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        )
    }else{
        return (
            <></>
        )
    }
}

export default Accordion;