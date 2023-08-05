import { useEffect, useState } from "react";
import { AccountOptions, AccountType, AvaiableAccountTypes, Button, TypeCurrencyOptions, getAccountString } from "../../components";
import { MainPage, PrincipalSection } from "./HomeStyled";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { Footer, Header } from "../shared";

function HomePage(): JSX.Element {
    const [validAccounts, setValidAccounts] = useState<[AccountType[]]>();
    const [accountsCounter, setAccountsCounter] = useState<number>(-1);
    const [fetchError, setFetchError] = useState<{ error: boolean, message?: string }>({ error: false });
    const navigate = useNavigate();

    useEffect(() => { 
        fetch("https://api.npoint.io/97d89162575a9d816661")
            .then(res => res.json())   
            .then((res : { cuentas: AccountType[] }) => { 
                const accounts = res.cuentas.map(account => ({ ...account, tipo_letras: (account.tipo_letras.toUpperCase() as AvaiableAccountTypes) }));

                const validAccounts: AccountType[] = accounts.filter(account => 
                    (
                        account.tipo_letras.toUpperCase() == AccountOptions.CHECKING || 
                        account.tipo_letras.toUpperCase() == AccountOptions.SAVINGS
                    ) && (
                        account.moneda === TypeCurrencyOptions.PESOS_ARGENTINOS || 
                        account.moneda === TypeCurrencyOptions.DOLARES
                    )
                );

                if(validAccounts.length > 6) {
                    let tmpValidAccounts: [AccountType[]] = [validAccounts.slice(0, 5)];

                    for(let i = 5; i < validAccounts.length;){
                        tmpValidAccounts.push(validAccounts.slice(i, i + 5));                        
                        i += 4;
                    }
                    
                    setValidAccounts(tmpValidAccounts);
                    setAccountsCounter(0);
                } else setValidAccounts([validAccounts]);
            })
            .catch(err => setFetchError({ error: true, message: err?.message }))
        }, [])
    
    const AccountButton = ({ account }: { account: AccountType }) => {
        const accountTypeString = getAccountString(account.tipo_letras);

        return <Button onClick={() => navigate("account", { state: { selectedAccount: account } })}>
            <strong>{accountTypeString}</strong> 
            <br />
            <strong>Nro: {account.n}</strong> 
        </Button>
    }

    return <MainPage>
        <Header>
            <img src={Logo} onClick={() => window.location.href = "https://www.ncr.com/"} />
        </Header>
        <PrincipalSection>
            <h2>Consulta de saldo</h2>
            <h1>Seleccione la cuenta a consultar</h1>
            <div>
                {
                    validAccounts ?  
                        validAccounts[accountsCounter].map((account, i) => 
                            ((accountsCounter != -1 && i === 4) || (validAccounts[accountsCounter].length === 4 && i === 3 && validAccounts[accountsCounter+1]))  ?
                            <>
                                <AccountButton key={account.n+i} account={account} /> 
                                <Button onClick={() => (accountsCounter < validAccounts.length-1) && setAccountsCounter(accountsCounter + 1)}>Ver más opciones →</Button>
                            </> : ((accountsCounter > 0 && i == 0) ? 
                                <>
                                    <Button onClick={() => setAccountsCounter(accountsCounter - 1)}>← Volver</Button>
                                    <AccountButton key={account.n+i} account={account} /> 
                                </> 
                                : <AccountButton key={account.n+i} account={account} />
                            )
                        ) : (
                            fetchError.error ? 
                                <span>
                                    {fetchError.message ? fetchError.message : "Ha ocurrido un error inesperado, consulte de nuevo más tarde"}
                                </span> : <span>Cargando, por favor espere...</span>
                        )
                }
            </div>
        </PrincipalSection>
        <Footer>
            <Button>Salir</Button>
        </Footer>
    </MainPage>
}



export default HomePage;