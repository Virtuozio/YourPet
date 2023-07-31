import styled from '@emotion/styled';


export const ContentBox = styled.div`

ul{
  display: flex;
  flex-direction: column;
  gap: 12px;
}
  `

export const WorkTime = styled.b`
    font-size: 16px;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

:hover{
      color: rgba(84, 173, 255, 1);
      cursor: pointer;
}
`



export const InfoBox = styled.div`


a{
    font-family: Manrope;
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    color: inherit;
    text-decoration: none;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);


    :hover{
      color: rgba(84, 173, 255, 1);
      cursor: pointer;
    }
  }

  p{
    font-size: 16px;
  }

b{
    font-size: 16px;
  }

li{
  display: flex;
  align-items: flex-start;
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
