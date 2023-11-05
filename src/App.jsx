import React, {useState} from "react";
import * as S from "./Style.jsx";
import Button from "./components/Button.jsx";

function App() {
  // useState vai armazenar um dado e pode atualizar esse valor
  const [primeiroValor, setPrimeiroValor] = React.useState("");
  const [segundoValor, setSegundoValor] = React.useState("");
  const [operacao, setOperacao] = React.useState("");
  const [ resultado, setResultado] = useState();

  function handleNumberClick (numero)  {
    if(!operacao) {
      setPrimeiroValor(primeiroValor+numero);
    
     } else {
    setSegundoValor (segundoValor+numero);
    }
    

  }
  function handleClickOperactor(operacao){
   if (primeiroValor && segundoValor) {
    calcularResultado();
   }
   if (primeiroValor) {
    setOperacao(operacao);
   }
  }

  function handleClickIgual () {
    if (primeiroValor && segundoValor) {
      calcularResultado();

   }

  }

  function handlerClickLimparCE () {
    if (segundoValor && operacao && primeiroValor) {
      return setSegundoValor (segundoValor.slice(0, -1));
    }

    if (operacao) {
      return setOperacao("");
    }
    
   if (primeiroValor) {
    return setPrimeiroValor("");
   }

    if (primeiroValor && !operacao && !segundoValor) {
      return setPrimeiroValor (primeiroValor.slice(0, -1));
    }

  }

  function handlerClickLimpaC(){
    setPrimeiroValor("");
    setSegundoValor("");
    setOperacao("");
    setResultado("");

  }

  function calcularResultado() {
    const primeiro = Number(primeiroValor);
    const segundo = Number(segundoValor);
    let resultadoCalculado;

    if (operacao ==="+") {
      resultadoCalculado = primeiro + segundo;
    }
    else if (operacao === "-"){
      resultadoCalculado = primeiro - segundo;
    } else if (operacao === "*"){
      resultadoCalculado = primeiro * segundo;
    } else if (operacao === "/") {
      resultadoCalculado = primeiro / segundo;
    } else if (operacao === "%") {
      resultadoCalculado = (primeiro*segundo) / 100;
    }

    setResultado (resultadoCalculado);
    setPrimeiroValor (resultadoCalculado);
    setSegundoValor ("");
    setOperacao ("");
  }

   

  return (
    <S.Main>
      <S.GlobalStyle/>
      
      
      <section>
        <S.Divisão>
        {/*DISPLAY */}
        <S.Display>
        <div>{/*OPERAÇÃO*/}
        <h2>{primeiroValor !== "" ? `${primeiroValor}  ${operacao} ${segundoValor}` : "0"}</h2>
        </div>
        </S.Display>
        
        <div>
          <Button event={() =>handlerClickLimparCE()}>CE</Button>
          <Button event={() =>handlerClickLimpaC()} >C</Button>
          <Button event={() =>handleClickOperactor("%")}>%</Button>
          <Button event={() =>handleClickOperactor("/")}>/</Button>
        </div>
        <div>
          <Button event={() =>handleNumberClick("7")}>7</Button>
          <Button event={() =>handleNumberClick("8")}>8</Button>
          <Button event={() =>handleNumberClick("9")}>9</Button>
          <Button event={() =>handleClickOperactor("*")}>*</Button>
        </div>
        <div>
          <Button event={() =>handleNumberClick("4")}>4</Button>
          <Button event={() =>handleNumberClick("5")}>5</Button>
          <Button event={() =>handleNumberClick("6")}>6</Button>
          <Button event={() =>handleClickOperactor("-")}>-</Button>
        </div>
        <div>
          <Button event={() =>handleNumberClick("1")}>1</Button>
          <Button event={() =>handleNumberClick("2")}>2</Button>
          <Button event={() =>handleNumberClick("3")}>3</Button>
          <Button event={() =>handleClickOperactor("+")}>+</Button>
        </div>
        <div>
          <Button event={() =>handleNumberClick("0")}>0</Button>
          <Button event={() =>handleNumberClick(".")}>.</Button>
          <Button event={() =>handleClickIgual()}>=</Button>
        </div>
        </S.Divisão>
      </section>
      
    </S.Main>
  )
}

export default App