import React from "react";
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import ('../../components/Graph'),
  { ssr: false }
)

export default function Plotlygraph (){
    return(
        <div>
          
            <DynamicComponentWithNoSSR/>
        </div>
    )
}