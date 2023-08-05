 // @ts-nocheck 
import { AccountOptions, getAccountString} from "..";
import { expect, it } from "vitest"

it("GetAccountString test", () => {
    expect(getAccountString(AccountOptions.SAVINGS)).toBe("Caja de Ahorro");
    expect(getAccountString(AccountOptions.CHECKING)).toBe("Cuenta Corriente");
    expect(getAccountString("SomeAccount")).toBe("The SomeAccount is not a valid accountType");
});