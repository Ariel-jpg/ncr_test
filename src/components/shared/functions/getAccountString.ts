import { AccountOptions, AvaiableAccountTypes } from "..";

function getAccountString(accountType: AvaiableAccountTypes): string{
    switch(accountType){
        case AccountOptions.CHECKING: return "Cuenta Corriente";
        case AccountOptions.SAVINGS: return "Caja de Ahorro";

        default: return `The ${accountType} is not a valid accountType`;
    }
}

export default getAccountString;