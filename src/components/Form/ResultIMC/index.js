import { useState, useEffect } from 'react';

import { Container, Text, Number } from './styles';

export function ResultIMC({ message, imc }) {
  const [classification, setClassification] = useState();

  useEffect(() => {
    showClassification();
  }, [imc]);

  function showClassification() {
    switch (true) {
      case !imc:
        setClassification();
        break;
      case imc < 18.5:
        setClassification('Abaixo do peso');
        break;
      case imc < 25:
        setClassification('Normal');
        break;
      case imc < 30:
        setClassification('Sobrepeso');
        break;
      case imc < 40:
        setClassification('Obesidade');
        break;
      case imc >= 40:
        setClassification('Obesidade grave');
        break;
      default:
        setClassification();
        break;
    }
  }

  return (
    <Container>
      <Text>{`${message || ''}`}</Text>
      <Number>{`${imc || ''}`}</Number>
      <Text>{`${imc ? 'Classificação:' : ''}`}</Text>

      <Text>{classification}</Text>
    </Container>
  );
}
