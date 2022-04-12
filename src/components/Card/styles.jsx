import styled, { css } from "styled-components";

export const Container = styled.div`
    position: relative;
    background: #fff;
    margin-bottom: 10px;
    border-radius: 3px;
    padding: 15px;
    color: #1b1b35;
    box-shadow: 0 1px 4px 0 #2a2727cc;
    border-top: 20px solid rgba(230,236,245,0.5);
    cursor: grab;

    header {
        position: absolute;
        top: -22px;
        left: 15px;
    }
    p {
        font-weight: 500;
        line-height: 20px;
    } 
    small {
        margin: 0;
    }

    ${props => props.isDragging && css`
        border: 2px dashed #bdbdbd33;
        padding-top: 31px;
        border-radius: 0;
        background: transparent;
        box-shadow: none;
        cursor: grabbing;

        p, span, small  {
            opacity: 0;
        }
        

    ` }

`;
