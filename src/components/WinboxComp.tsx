import React, {useEffect, useState} from "react";
import {WinBox} from "./Winbox";
import * as IF  from "react-iframe";
import config from "../../config.json";


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
                     <IF url={winboxData}></IF>
                 </WinBox>
             )
         }
         else if(winboxDataType === config.enums.winbox.type.youtube){
             return (
                 <WinBox
                     id={"winbox"}
                     onclose={() => setWinbox(false)}
                     x={"center"}
                     y={"center"}
                     height={500}
                     width={700}
                     background={"#394050"}
                 >

                     <iframe width="560" height="315"
                             src={winboxData}
                             autoPlay={"1"}
                             title="YouTube video player" frameBorder="0"
                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                             allowFullScreen></iframe>
                 </WinBox>
             )
         }
         else if (winboxDataType === config.enums.winbox.type.component) {
            return (
                <WinBox
                    id={"winbox"}
                    onclose={() => setWinbox(false)}
                    x={"center"}
                    y={"center"}
                    height={500}
                     width={700}
                     background={"#394050"}
                 >

                 </WinBox>
             )
         }

     }
    else{
        return null;
    }
};

export default WinboxComponent;