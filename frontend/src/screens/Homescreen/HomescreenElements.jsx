import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledWrapper = styled.main`
  display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 20px;
`
export const StyledDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

export const StyledTable = styled.table`
width: 80%;
th, td{
  text-align: left;
  border-collapse: collapse;
}
`
export const StyledLink = styled(Link)`
text-decoration: none;
cursor: pointer;
color: #fafafa;
`