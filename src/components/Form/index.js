import React, { useState } from 'react';

import { ResultIMC } from './ResultIMC';

import {
  Container,
  FormContainer,
  Label,
  Input,
  TouchableOpacity,
  ButtonText,
} from './styles';

export function Form() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [IMC, setIMC] = useState('');
  const [messageIMC, setMessageIMC] = useState('');
  const [textButton, setTextButton] = useState('Calcular IMC');

  function imcCalculator() {
    setIMC((weight / height ** 2).toFixed(2));
  }

  function imcValidator() {
    if (height && weight) {
      imcCalculator();
      setMessageIMC('Seu IMC é:');
      setTextButton('Calcular novamete');
      return;
    }
    setIMC('');
    setTextButton('Calcular');
    setMessageIMC('Preencha o peso e altura');
  }

  return (
    <Container>
      <FormContainer>
        <Label>Altura(m):</Label>
        <Input
          placeholder="Ex. 1.75"
          keyboardType="numeric"
          onChangeText={setHeight}
          value={height}
        />

        <Label>Peso(kg)</Label>
        <Input
          placeholder="Ex. 75.5"
          keyboardType="numeric"
          onChangeText={setWeight}
          value={weight}
        />

        <TouchableOpacity onPress={() => imcValidator()}>
          <ButtonText>{textButton}</ButtonText>
        </TouchableOpacity>

        <ResultIMC message={messageIMC} imc={IMC} />
      </FormContainer>
    </Container>
  );
}
