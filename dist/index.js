"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Assalariado_1 = require("./model/Assalariado");
const a1 = new Assalariado_1.Assalariado(`Miroslav Klose`, `13121989`, 1500);
a1.setNome(`Harry Styles`);
a1.setCpf(`7070707070`);
a1.setSalario(2500);
console.log(`Nome: ${a1.getNome()}, CPF: ${a1.getCpf()}`);
console.log(`Salário: ${a1.getSalario()}`);
console.log(`Vencimento: ${a1.vencimento()}`);
//# sourceMappingURL=index.js.map