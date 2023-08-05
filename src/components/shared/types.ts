export enum AccountOptions {
    SAVINGS = "CA",
    CHECKING = "CC"
};

export enum TypeCurrencyOptions {
    PESOS_ARGENTINOS = "$",
    DOLARES = "u$s",
    PESOS_URUGUAYOS = "$uy",
    BOLIVIANO = "bs"
};

export type AvaiableAccountTypes = AccountOptions.CHECKING | AccountOptions.SAVINGS;
export type TypeCurrencyTypes = TypeCurrencyOptions.DOLARES | TypeCurrencyOptions.PESOS_ARGENTINOS
    | TypeCurrencyOptions.BOLIVIANO | TypeCurrencyOptions.PESOS_URUGUAYOS;

export type AccountType = {
    e: string,
    n: number,
    t: string,
    saldo: number,
    moneda: TypeCurrencyTypes,
    tipo_letras: AvaiableAccountTypes
}