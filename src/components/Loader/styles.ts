import styled from 'styled-components'

export const StyledLoader = styled.div`
  display: inline-block;
  position: relative;
  width: 24px;
  height: 24px;

  & > div {
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    border-color: #067619;
  }

  & > div:nth-child(2) {
    animation-delay: -0.5s;
  }

  @keyframes lds-ripple {
    0% {
      top: 8px;
      left: 8px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 16px;
      height: 16px;
      opacity: 0;
    }
  }
`
