import { styled } from "styled-components";

const DivSearch = styled.div`
input{
    display: none;
}
input:not(:checked) + label {
    filter: grayscale(100%);
}
input:checked + label {
    filter: none;
}

  input:checked + label {
    filter: none;
  }
`;
export { DivSearch };
