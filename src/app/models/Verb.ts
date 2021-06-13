export interface Conditional {
    heading?: string;
    forms?: any[];
}
export interface Indicative {
    heading?: string;
    forms?: any[];
}
export interface Passive {
    heading?: string;
    forms?: any[];
}

export interface ConjugationTables {
    conditional?: Conditional[];
    indicative?: Indicative[];
    passive?: Passive[];
}
export interface Root {
    result?: string;
    conjugated_forms?: any[];
    conjugation_tables?: ConjugationTables;
}

export interface Verb {
    id?: string;
    past?: string;
    pastparticiple?: string;
    tranlate?: string;
    present?: string;
    root?: Root;
}
