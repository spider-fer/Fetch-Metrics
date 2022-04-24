import React from 'react';
import {useState, useEffect} from "react";

export default function Metrics(){
    const [data, setData] = useState("");
    var [porcentaje, setPorcentaje] = useState(0);
    useEffect(() => {
        fetch("https://cdn.glitch.me/760886e0-5f1f-4216-9a2e-0e0c7c7797eb%2Fbuilds.json")
          .then(res => res.json())
          .then (
            (result) => {
                setData(result);
                var longitud = result.length;
                var isFailure= result.filter(fail => fail.result === 'FAILURE');
                var longFailure = isFailure.length;
                setPorcentaje(longFailure/longitud * 100);
              }
          )
    },[]);

    return(
        <div>
            <p>Failure Rate:  {porcentaje} %
            </p>
        </div>
    )
}

