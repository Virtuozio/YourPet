import styled from 'styled-components';

export const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;
  margin-bottom: 16px;
  color: #111111;
`;

export const Img = styled.img`
  background: url('../NewsSearch/default.png');
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  margin-bottom: 16px;
  height: 252px;
  width: 100%;
  object-fit: cover;
`;

export const NewsList = styled.ul`
  list-style: none;
  margin-top: 40px;
  display: grid;
  grid-row-gap: 60px;
  grid-template-columns: repeat(1, 1fr);
  padding: 0;

  &:before {
    // display: block;
    content: '';
    width: 280px;
    color: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    border-radius: 40px;
    height: 8px;
    position: absolute;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 32px;
    grid-row-gap: 60px;
    margin-top: 60px;
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
export const NewsItem = styled.li`
  display: flex;
  flex-direction: column;
  min-width: 280px;
  padding: 12px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media (min-width: 768px) {
    min-width: 336px;
  }
  @media (min-width: 1280px) {
    min-width: 395px;
  }
`;

// export const Line = styled.div`
//   border-radius: 40px;
//   width: 200px;
//   height: 8px;
//   margin-bottom: 4px;

//   @media (min-width: 768px) {
//     width: 280px;
//   }
//   @media (min-width: 1280px) {
//     width: 340px;
//   }
// `;

export const Text = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #111111;
  margin-bottom: auto;
`;

export const NewsBottom = styled.div`
  display: flex;
  margin-top: 40px;
  flex-direction: row;
  justify-content: space-between;
`;

export const NewsLink = styled.a`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: right;
  color: #54adff;
  text-decoration: none;
  &:hover,
  &:focus {
    color: #ffc107;
  }
`;
