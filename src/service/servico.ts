import { Service } from "../model/service";

export class ServicoService {
    lista: Service[] = [];

    constructor(public armazenamento: Service[]) {
        this.lista = armazenamento;
    }

    createServico(servico: {
        nome: string;
        preco: number;
        tempoEstimado: number;
    }): Service {
        const uuid = crypto.randomUUID();
        const servicoCreated = new Service(
            uuid,
            servico.nome,
            servico.preco,
            servico.tempoEstimado
        );

        this.lista.push(servicoCreated);
        return servicoCreated;
    }

    getServicos(): Service[] {
        return this.lista;
    }
}