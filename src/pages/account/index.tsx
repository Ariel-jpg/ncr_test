import { useLocation, useNavigate } from "react-router-dom";
import { Footer, Header } from "../shared";
import { AccountMainPage, PrincipalSection } from "./AccountStyled";
import { AccountType, Button, getAccountString } from "../../components";
import logo from "../../assets/logo.png";

function AccountPage(): JSX.Element {
    const selectedAccount: AccountType = useLocation().state.selectedAccount;
    const navigate = useNavigate();

    return <AccountMainPage>
        <Header>
            <img src={logo} onClick={() => window.location.href = "https://www.ncr.com/"} />
        </Header>
        <PrincipalSection>
            <h2>Consulta de saldo</h2>
            <h1>Este es tu saldo actual</h1>
    
            <div>
                <strong>Saldo de la cuenta: {selectedAccount.saldo}</strong>
                <strong>Tipo de cuenta: {getAccountString(selectedAccount.tipo_letras)}</strong>
                <strong>Número de cuenta: {selectedAccount.n}</strong>
            </div>
        </PrincipalSection>
        <Footer>
            <Button onClick ={() => navigate("/")}>← Volver a mis cuentas</Button>
        </Footer>
    </AccountMainPage>
}

export default AccountPage;