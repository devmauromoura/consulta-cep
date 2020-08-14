import React, { Component } from 'react';
import {
    Container,
    CardContainer,
    TitleContainer,
    Title,
    SubTitle,
    InputContainer,
    Input,
    ButtonContainer,
    Button
} from './styles';
import history from '../../config/history';

import API from '../../config/services/api';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            cep: '',
            loading: false
        }
    }

    consultar = async() => {
        const { cep } = this.state;
        if(cep.length < 9){
            alert('O CEP deve ser preenchido corretamente!');
        }else{
            const request = await API;
            request.get(`/${cep}/json`)
            .then(response => history.push("/consulta", {
                data: response.data
            }))
            .catch(error => console.log(error));
        }
    }

    handleInput = (props) => {
       this.setState({
           cep: props.target.value
       })
    }

  render() {
    return (
      <Container>
          <CardContainer>

            <TitleContainer>
                <Title>Consulta-CEP</Title>
                <SubTitle>Consulte o CEP de forma rápida e prática!</SubTitle>
            </TitleContainer>

            <InputContainer>
                <Input mask="99999-999" onChange={this.handleInput}/>
            </InputContainer>

            <ButtonContainer>
                <Button onClick={() => this.consultar()}>Consultar</Button>
            </ButtonContainer>

          </CardContainer>
      </Container>
    );
  }
}
