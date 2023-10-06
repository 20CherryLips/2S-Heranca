import { Assalariado } from "./model/Assalariado";
import { Comissionado } from "./model/Comissionado";
import { Horista } from "./model/Horista";

const a1 = new Assalariado (`Miroslav Klose`, `13121989`, 1500)

a1.setNome(`Harry Styles`);
a1.setCpf(`7070707070`);
a1.setSalario(2500);
console.log(`Nome: ${a1.getNome()}, CPF: ${a1.getCpf()}`);
console.log(`Salário: ${a1.getSalario()}`);
console.log(`Vencimento: ${a1.vencimento()}`);

const c1 = new Comissionado (`Slipknot`, `30366560816`, 4000, 0.10);
c1.setNome(`Stratovarius`);
c1.setCpf(`cpf cancelado`);
c1.setTotalVendas(3200);
c1.setTaxaComissao(0.009);
console.log(`Nome: ${c1.getCpf()}, CPF: ${c1.getCpf()}`);
console.log(`Comissao: ${c1.getTaxaComissao()} Total Vendas: ${c1.getTotalVendas()}`);
console.log(`Vencimento:${c1.vencimento()}`);

const h1 = new Horista (`Taylor Swift`, `40455423918`, 6000, 12);
h1.setNome(`Shawn Mendes`);
h1.setCpf(`cpf cancelado`);
h1.setValorHora(5200);
h1.setHorasTrabalhadas(0.0010);
console.log(`Nome: ${c1.getCpf()}, CPF: ${c1.getCpf()}`);
console.log(`Valor Hora: ${h1.getValorHora()} Horas Trabalhadas: ${h1.getHorasTrabalhadas()}`);
console.log(`Vencimento:${h1.vencimento()}`);