import React, { useState, useEffect } from 'react';
import {
    Wrapper,
    Header,
    Title,
    Logo,
    Filter,
    Content,
    Text,
    Name,
    Scroll,
    Table,
    Head,
    Body
} from './App_Styled';
import Products from './core/Products';

import home from './images/FrogHome.png';
import test from './images/test.png';

const App = () => {
    const [content, setContent] = useState('');
    const [type, setType] = useState('none');

    const updateData = () => {
        Products.getProducts(type).then((res) => {
            setContent(res.data.data);
        });
    };

    useEffect(() => {
        updateData();
    }, [type]);

    const returnTable = () => {
        return (
            <Table id="table">
                <Head>
                    <tr>
                        <th>Nome</th>
                        <th>Quantidade</th>
                        <th>Proteínas</th>
                        <th>Carboidratos</th>
                        <th>Gorduras</th>
                    </tr>
                </Head>
                <Body>
                    {content &&
                        content.map((item) => {
                            return (
                                <tr key={item.name}>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.protein}</td>
                                    <td>{item.carbohydrates}</td>
                                    <td>{item.fat}</td>
                                </tr>
                            );
                        })}
                </Body>
            </Table>
        );
    };

    return (
        <Wrapper>
            <Header>
                <Title onClick={() => setType('none')}>
                    <Logo src={home} alt="Frog Logo" />
                    <h2>Home</h2>
                </Title>
                <Filter>
                    <button onClick={() => setType('protein')}>
                        <h3>Proteínas</h3>
                    </button>
                    <button onClick={() => setType('carbohydrates')}>
                        <h3>Carboidratos</h3>
                    </button>
                    <button onClick={() => setType('fat')}>
                        <h3>Gorduras</h3>
                    </button>
                </Filter>
            </Header>
            <Content>
                <Text>
                    Bem-vindo ao <Name>Sapo Alimentício</Name>, aqui você irá encontrar informações
                    nutricionais dos principais alimentos do mercado
                </Text>
                <Scroll>
                    <a href="#table">
                        <Logo src={test} alt="Scroll Logo" />
                    </a>
                </Scroll>
                {returnTable()}
            </Content>
        </Wrapper>
    );
};

export default App;
