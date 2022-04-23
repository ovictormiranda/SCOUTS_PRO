import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: red;
  padding-left: 60px;
`;

export const InfoOption = styled.View`
  width: 60%;
  height: 400px;

  background-color: blue;
 
  margin-top: 200px;
`;

export const TitleOption = styled.Text``;

export const DescriptionOption = styled.Text``;

export const Options = styled.View`
  width: 70%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.View`
  width: 24%;
  height: 90px;
  
  background-color: green;
  
  margin-top: 20px;
`;
