import React from 'react';
import './App.css';
import { Screen, Wrapper, Button, ButtonBox } from './components/index';
import CalcProvider from './components/context/CalcContext';

const App = () => {

    const btnValues = [
        ['C', '+-', '%', '/'],
        [7, 8, 9, 'x'],
        [4, 5, 6, '-'],
        [1, 2, 3, '+'],
        [0, '.', '=']
    ];

    return (
        <CalcProvider>
            <Wrapper>
                <Screen />
                <ButtonBox>
                    {btnValues.flat().map((btn, i) => (
                        <Button
                            value={btn}
                            key={i}
                        />
                    ))}
                </ButtonBox>
            </Wrapper>
        </CalcProvider>
    );
};

export default App;