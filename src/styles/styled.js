import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${props => `${props.color}`};
  flex: 1;
`;

export const SubContainer = styled.View`
  margin: 8% 8%;
`;

export const Thumb = styled.Image`
  width: auto;
  max-height: 50%;
`;

export const Title = styled.Text`
  color: black;
  font-size: ${props => `${props.fontSize}px`};
  font-weight: 700;
`;

export const Texto = styled(Title)`
  margin: 10px 0px;
  color: ${props => `${props.color}`};
`;

export const Input = styled.TextInput`
  border-width: 1px;
  border-radius: 15px;
  margin-top: 4%;
  padding: 10px 15px;
`;

export const FormContainer = styled.View`
  margin: 3% 0%;
`;

export const Btn = styled.TouchableOpacity`
  background-color: #006ffd;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-radius: 10px;
  width: auto;
`;

export const ProfileImg = styled.Image`
  margin: 0px 40px 10px 0px;
`;

export const NavBar = styled.View`
  flex-direction: row;
  align-items: center;
  padding-bottom: 15px;
  border-bottom-width: 1px;
  border-color: grey;
`;

export const CardBg = styled.View`
  background-color: #eaf2ff;
  margin-bottom: 20px;
`;

export const DesContainer = styled.View`
  padding: 25px 0px;
  flex-direction: row;
  justify-content: center;
`;

export const StartImage = styled.Image`
  margin: 0px 20px 10px 0px;
`;

export const DestaqueBg = styled.View`
  align-items: flex-start;
  padding-bottom: 25px;
`;

export const DestaqueTexto = styled.Text`
  background-color: #006ffd;
  font-size: 15px;
  font-weight: bold;
  color: white;
  border-radius: 12px;
  padding: 3px 12px;
`;
