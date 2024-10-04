import { HeaderContainer, HeaderContent } from "./styles";
import logoPasswordImg from '../../assets/logo-password.svg'

export function HeaderPass() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoPasswordImg} alt="" />

            </HeaderContent>
        </HeaderContainer>
    )
}