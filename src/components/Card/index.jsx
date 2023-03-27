import { RiHeartLine, RiArrowRightSLine, RiSubtractFill, RiAddFill } from "react-icons/ri";

import { Container, Content, Action } from './styles'

import { Button } from "../Button";

import Dish from '../../assets/salad.png'

export function Card({cards}) {
    return (
        <Container>
            <Content>
                <img src={Dish} alt="" />

                <RiHeartLine />

                <h2>
                    Salada Ravanello
                    <RiArrowRightSLine />
                </h2>

                <p>
                    Rabanetes, folhas verdes e molho agridoce salpicados com gergelim
                </p>

                <span>
                    R$ 49,97
                </span>

                <Action>
                    <div>
                        <RiSubtractFill />
                        <span>01</span>
                        <RiAddFill />
                    </div>
                    <Button
                        title='incluir'
                        style={
                            {
                                maxHeight: 48,
                                width: 94,
                                padding: '1.2rem .4rem'
                            }
                        }
                    />
                </Action>
            </Content>
        </Container>
    )
}