import { EstruturaFrase } from "./estrutura-frase";
import { Verb } from "./Verb";



export interface Conjugacao {
    regra?: string;
    i?: string;
    you?: string;
    he?: string;
    she?: string;
    it?: string;
    we?: string;
    you_plural?: string;
    they?: string;
    preenchimentoaltomatico?: string;// produzido pelo service
}

export interface TempoVerbal {
    regra?: [];// produzido pelo service
    estrutura?: string// produzido pelo service
    frases?: EstruturaFrase;
}
export interface AtividadeVerboPresente {
    descricao?: string;
    afirmativo?: TempoVerbal;
    negativo?: TempoVerbal;
    pergunta?: TempoVerbal;
    conjugacao?: Conjugacao;
    regraingles?: string;
    descricaoingles?: string;// produzido pelo service
    estruturaingles?: string;// produzido pelo service
}
export interface AtividadeVerboPresenteContinuo {
    descricao?: string;// produzido pelo service
    estrutura?: string;// produzido pelo service
    regra?: [];// produzido pelo service
    frases?: EstruturaFrase;
    conjugacao?: Conjugacao;
    
    regraingles?: string;
    descricaoingles?: string;// produzido pelo service
    estruturaingles?: string;// produzido pelo service
}
export interface AtividadeVerboFuturo {
    descricao?: string;// produzido pelo service
    estrutura?: string;// produzido pelo service
    regra?: [];// produzido pelo service
    regraingles?: string;
    descricaoingles?: string;// produzido pelo service
    estruturaingles?: string;// produzido pelo service
    frases?: EstruturaFrase;
    conjugacao?: Conjugacao;
}
export interface AtividadeVerboPassado {
    descricao?: string;// produzido pelo service
    estrutura?: string;// produzido pelo service
    regra?: [];// produzido pelo service
    regraingles?: string;
    frases?: EstruturaFrase;
    descricaoingles?: string;// produzido pelo service
    estruturaingles?: string;// produzido pelo service
    conjugacao?: Conjugacao;
}
export interface AtividadesVerbais {
    presente?: AtividadeVerboPresente;
    presentecontinuo?: AtividadeVerboPresenteContinuo;
    futuro?: AtividadeVerboFuturo;
    passado?: AtividadeVerboPassado;
}


export interface AtividadeVerbo {
    id?: string;
    idverb?: string;
    verb?: Verb;
    idusuario?: string;// produzido pelo service
    palavraingles?: string;// produzido pelo service
    palavratraduzida?: string;// produzido pelo service
    atividadesverbais?: AtividadesVerbais;
    status?: string;
    datafinalizacao?: Date;
}
