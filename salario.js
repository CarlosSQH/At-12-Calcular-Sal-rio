function pagamento() {
  const salarioH = document.getElementById("salariohora").value;
  const horaT = document.getElementById("horatrabalhada").value;
  const valeTrans = document.getElementById("valeT").value;
  const deducao = document.getElementById("deduzir").value;
  const resultado = document.getElementById("resultado");

  if (isNaN(salarioH) || isNaN(horaT) || isNaN(deducao)) {
    resultado.innerHTML = "Preencha todos os campos corretamente.";
    return;
  }

  const salarioBruto = salarioH * horaT;
  let salario = salarioH * horaT;

  let INSS = 0;
  if (salario) {
    if (salario <= 1320.0) {
      INSS = salario * 0.075;
      salario = salario - INSS;
    } else if (salario <= 2571.29) {
      INSS = salario * 0.09;
      salario = salario - INSS;
    } else if (salario <= 3856.94) {
      INSS = salario * 0.12;
      salario = salario - INSS;
    } else {
      INSS = salario * 0.14;
      salario = salario - INSS;
    }
  }

  let IRPF = 0;
  if (salario) {
    if (salario <= 2112.0) {
      IRPF = salario * 0.0;
    } else if (salario <= 2826.65) {
      IRPF = salario * 0.075;
      salario = salario - IRPF;
    } else if (salario <= 3751.06) {
      IRPF = salario * 0.15;
      salario = salario - IRPF;
    } else if (salario <= 4664.68) {
      IRPF = salario * 0.225;
      salario = salario - IRPF;
    } else {
      IRPF = salario * 0.275;
      salario = salario - IRPF;
    }
  }

  let descVT = 0;

  if (valeTrans === "Sim") {
    descVT = salario * 0.06;
    salario = salario - descVT;
  }

  salario = salario - deducao;

  resultado.innerHTML = `
  <p>Salário Bruto: R$ ${salarioBruto.toFixed(2)}</p>
  <p>Desconto INSS: R$ ${INSS.toFixed(2)}</p>
  <p>Desconto IRPF: R$ ${IRPF.toFixed(2)}</p>
  <p>Desconto Vale Transporte: R$ ${descVT.toFixed(2)}</p>
  <p>Outras Deduções: R$ ${deducao}</p>
  <p>Salário Líquido: R$ ${salario.toFixed(2)}</p>
`;
}
