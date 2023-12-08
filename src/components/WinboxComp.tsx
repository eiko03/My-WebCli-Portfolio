import React, {useEffect, useState} from "react";
import {WinBox} from "./Winbox";
import Iframe from "react-iframe";
import config from "../../config.json";

const IframeComp = ({winboxData})=>{
    <Iframe url={winboxData}></Iframe>
}
const WinBoxSet = ({winboxData, setWinbox}) =>{
    return (
        <WinBox
        id={"winbox"}
        onclose={() =>setWinbox(false)}
        x={"center"}
        y={"center"}
        height={500}
        width={700}
        background={"#394050"}
    >
        <Iframe url={winboxData}></Iframe>
    </WinBox>
    )
}
export const WinboxComponent = () => {


    const [winbox, setWinbox] = useState(false)
    const [winboxData, setWinboxData] = useState("")
    const [winboxDataType, setWinboxDataType] = useState("")

    useEffect(() => {
        const onWinboxEvent = (e) => {
            setWinbox(true)
            setWinboxData(e?.detail?.message)
            setWinboxDataType(e?.detail?.type)
        }
        window.addEventListener('winboxevent', onWinboxEvent)

    },[])


     if(winbox === true)  {
        if(winboxDataType === config.enums.winbox.type.message){
            return (
                <WinBox
                    id={"winbox"}
                    onclose={() =>setWinbox(false)}
                    x={"center"}
                    y={"center"}
                    height={500}
                    width={700}
                    background={"#394050"}
                >
                    <div>{winboxData}</div>
                </WinBox>
            )
        }

         else if(winboxDataType === config.enums.winbox.type.url){
             return (
                 <WinBox
                     id={"winbox"}
                     onclose={() =>setWinbox(false)}
                     x={"center"}
                     y={"center"}
                     height={500}
                     width={700}
                     background={"#394050"}
                 >
                     <Iframe url={winboxData}></Iframe>
                 </WinBox>
             )
         }

     }
    else{
        return null;
    }
};

export default WinboxComponent;