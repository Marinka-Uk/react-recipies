import styled from "styled-components"


export const Item = styled.li`
background-color: #f1dd6a;
width: 500px ;
    border: 1px ;
    border-radius: 20px;
    display: flex;
    margin:20px ;
    align-items: center;
  gap: 4px;

`

export const Tittle = styled.h1`
     /* font-weight: 600;
  font-size: 16px;
  text-align: center;
  margin: 12px 0; */

   color: #333;
  margin: 10px;
  font-size: 1.2em;
  font-weight: bold;

`


export const Text = styled.p`
display: flex;
  justify-content: space-between;
  font-size: 13px;
  margin-bottom: 15px;
  align-items: center;
  gap: 5px;
   margin-right: 150px;

    
`
export const DetailItem = styled.div`
  align-items: center;
  gap: 5px;

  svg {
    width: 16px;
    height: 16px;
    fill: #000000;
    margin-left: 20px;
  }
`;


export const Image = styled.img`
  border-radius: 16px;
  object-fit: cover;
    

`


export const SubTittle = styled.h3`

      display: flex;
  gap: 10px;
  margin-bottom: 10px;
  color: #777;
  font-size: 0.9em;

`