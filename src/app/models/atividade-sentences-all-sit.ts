import { FraseAllsituations } from "./frase-allsituations";
import { SentencesSituacao } from "./sentences-situacao";

export interface AtividadeSentencesAllSit {
    id?: string;
    idusuario?: string;
    idsentence?: string;
    grupo?: string;
    fraseallsituations?: FraseAllsituations[];
    situacao?: SentencesSituacao[];
    status?: string;// aberto-finalizado
    datafinalizacao?: Date;
}
