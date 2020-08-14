import React, { Component } from 'react';
import {
    Container,
    CardContainer,
    TitleContainer,
    Title,
    ResultContainer,
    ItemContainer,
    Identity,
    Value,
    ButtonContainer,
    Button
} from './styles';
import history from '../../config/history';

class Result extends Component {
    render() {
        const { data } = this.props.history.location.state;

        return (
            <Container>
                <CardContainer>

                    <TitleContainer>
                        <Title>Resultado da Consulta</Title>
                    </TitleContainer>
                    <ResultContainer>
                        <ItemContainer>
                            <Identity>Logradouro</Identity>
                            <Value>{data.logradouro}</Value>
                        </ItemContainer>
                        <ItemContainer>
                            <Identity>Bairro</Identity>
                            <Value>{data.bairro}</Value>
                        </ItemContainer>
                        <ItemContainer>
                            <Identity>Cidade</Identity>
                            <Value>{data.localidade}</Value>
                        </ItemContainer>
                        <ItemContainer>
                            <Identity>Estado</Identity>
                            <Value>{data.uf}</Value>
                        </ItemContainer>
                        <ItemContainer>
                            <Identity>Complemento</Identity>
                            <Value>{data.complemento}</Value>
                        </ItemContainer>
                    </ResultContainer>
                    <ButtonContainer>
                        <Button onClick={() => history.push('/')}>Nova Consulta</Button>
                    </ButtonContainer>
                </CardContainer>
            </Container>
        );
    }
}

export default Result;