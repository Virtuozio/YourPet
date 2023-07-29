import styled from '@emotion/styled';


export const ContentBox = styled.div`
  

ul{
  display: flex;
  flex-direction: column;
  gap: 12px;
}

a{
    font-family: Manrope;
    font-size: 12px;
    color: rgba(84, 173, 255, 1);
    font-weight: 500;
    text-align: left;
}

li:hover, a:hover, p:hover{
  color: rgba(84, 173, 255, 1);
}
  `


export const InfoBox = styled.div`

:hover{
  color: rgba(84, 173, 255, 1);
  cursor: pointer;
}

li{
  display: flex;
  align-items: flex-start;
  p{
    text-align: right;
  }
}


  `



export const ModalContent = styled.div`

position: absolute;
display: flex;
padding: 12px;
background-color: #fff;
border: 1px solid rgba(84, 173, 255, 1);
border-radius: 8px;
text-align: justify;


font-weight: 500;
font-size: 12px;

color: black;

b{
  margin-right: 12px;
}


`

export const Contact = styled.p`
font-weight: 600px 1;
`
