import styled from "@emotion/styled"
import { SvgIcon } from "@mui/material"


const Svg = styled( SvgIcon )`
transition: transform 10ms 50ms ease-out;
transform: rotate(${ props => props.open }) ;
`
const Arrowright = ( { open } ) => {

    return (
        <Svg open={ open ? '90deg' : '0deg' } id="Layer_1" data-name="Layer 1" viewBox="0 0 23.4 23.9">
            <path id="_9056852_arrows_h_alt_icon" data-name=" 9056852 arrows h alt icon" d="M0,9.3H13L8.3,4.5,11.9.7,22.7,11.9,11.9,23.2,8.3,19.4,13,14.6H0" style={ { fill: "none", stroke: "#fff" } } />
        </Svg>
    )
}

export default Arrowright