import React from 'react'
import styled,{css} from "styled-components"

export const Title = styled.h1`
font-size:3rem ;
background-color:green;
font-weight:600;
text-decoration: underline;

${props => props.theme == 'dark' && css `
background:black;
color:#fff;
&:hover{
    background: blue;
}
`}
`
