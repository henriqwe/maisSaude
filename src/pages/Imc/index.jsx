import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import { Container } from 'react-bootstrap'
// import { DropdownButton, Dropdown, Container, Row, Col } from "react-bootstrap";
import './Dashboard.css'

export function Imc() {
  const [altura, setaltura] = useState()
  const [peso, setPeso] = useState()
  const [result, setResult] = useState()

  const imcCal = () => {
    const resultado = peso / (altura * altura)

    const og = Math.pow(10, 2)
    const valorDecimais = Math.floor(resultado * og) / og
    setResult(valorDecimais)
  }

  return (
    <>
      <Header />
      <Container className="px-4 mt-2 container">
        <div id="teste"></div>
        <h1 className="sobe">IMC</h1>
        <h3>O que seu IMC diz sobre sua saúde?</h3>
        <p>
          IMC é a sigla para Índice de Massa Corpórea, uma medida universal de
          classificação da obesidade, é o método usado pela Organização Mundial
          de Saúde para identificar o peso ideal de cada pessoa. Essa
          classificação ajuda a revelar problemas como o sobrepeso e a
          obesidade, dessa forma é possível prevenir outras doenças, melhorar a
          qualidade vida e bem-estar. Quanto maior o IMC, maior o grau de
          obesidade, e mais elevado o risco de doenças como diabetes, pressão
          alta, colesterol elevado, esteatose hepática, trombose, apneia do
          sono, infarto, derrame, problemas ortopédicos e até câncer.
        </p>
        <h3>Como é calculado?</h3>
        <p>
          O IMC é a relação entre peso e altura e o cálculo é feito de acordo
          com a fórmula: IMC = peso / (altura x altura) O peso deve estar em kg
          e a altura em metros, e o resultado é dado em kg/m2. Depois de obter o
          resultado, é possível verificar em que faixa o IMC se encontra,
          podendo indicar: Assim, de acordo com o resultado do IMC é possível
          também saber se existe algum risco de desenvolver doenças. Isto porque
          quanto maior é o valor do IMC, maior é a quantidade de gordura
          acumulada no corpo e maior é o risco da pessoa ter doenças como
          pressão alta, diabetes e doenças cardíacas.
        </p>
        <table className="table table-bordered vamo">
          <thead>
            <tr className="table-info m-auto tth">
              <th>Classificação</th>
              <th>Magreza</th>
              <th>Normal</th>
              <th>Sobrepeso</th>
              <th>Obesidade</th>
            </tr>
          </thead>
          <tr className="table-light ttr">
            <td>IMC</td>
            <td>Resultado é menor que 18,5 kg/m2</td>
            <td>Reresultado está entre 18,5 e 24,9 kg/m2</td>
            <td>Reresultado está entre 24,9 e 30 kg/m2</td>
            <td>Resultado é maior que 30 kg/m2</td>
          </tr>
        </table>
        <p>
          Assim, de acordo com o resultado do IMC é possível também saber se
          existe algum risco de desenvolver doenças. Isto porque quanto maior é
          o valor do IMC, maior é a quantidade de gordura acumulada no corpo e
          maior é o risco da pessoa ter doenças como pressão alta, diabetes e
          doenças cardíacas.
        </p>

        <h2 className="centralizar">
          Ainda não sabe qual o seu Índice de Massa Corporal (IMC)?
        </h2>
        <p className="centralizarr">
          Faça o cálculo aqui mesmo e conheça mais sobre o seu corpo.
        </p>

        <div id="formulario" onSubmit={false}>
          <div className="imgGordox ">
            <div className="sobe1">
              <input
                type="text"
                name="altura"
                placeholder="Altura (m)"
                className="campos camposs"
                value={altura}
                onChange={(e) => {
                  setaltura(e.target.value)
                }}
              />
              <input
                type="text"
                name="quilos"
                placeholder="Peso (kg)"
                className="campos"
                value={peso}
                onChange={(e) => {
                  setPeso(e.target.value)
                }}
              />
              <button
                className="camposButton button bg-primary "
                onClick={imcCal}
              >
                Calcular
              </button>
            </div>
          </div>

          <div className="resultado">
            <h4>Resultado:</h4>
            <p> {result}</p>
          </div>
        </div>
      </Container>
    </>
  )
}
