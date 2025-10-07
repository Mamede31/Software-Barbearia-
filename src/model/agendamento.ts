import { User } from "./User";
import { Barbeiro } from "./barbeiro";
import { Service } from "./service";

export class Agendamento {
    constructor(
        private id: string,
        private cliente: User,
        private barbeiro: Barbeiro,
        private servico: Service,
        private dataHora: Date
    ) {
        if (!cliente) throw new Error("cliente obrigatório");
        if (!barbeiro) throw new Error("barbeiro obrigatório");
        if (!servico) throw new Error("serviço obrigatório");
        if (!dataHora) throw new Error("dataHora obrigatória");
    }

    static create(cliente: User, barbeiro: Barbeiro, servico: Service, dataHora: Date) {
        const id = crypto.randomUUID();
        return new Agendamento(id, cliente, barbeiro, servico, dataHora);
    }

    getId(): string {
        return this.id;
    }

    getCliente(): User {
        return this.cliente;
    }

    getBarbeiro(): Barbeiro {
        return this.barbeiro;
    }

    getServico(): Service {
        return this.servico;
    }

    getDataHora(): Date {
        return this.dataHora;
    }
}
