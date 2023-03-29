import styled from "styled-components";
const Background = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #ffffffb3;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: 170%;
`

export const Loading = () => {

    return (
        <Background>
            로딩중입니다..! 잠시만 기다려주세요!
        </Background>
    )
}
