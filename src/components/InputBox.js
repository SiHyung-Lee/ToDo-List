import React from 'react';
import styled from 'styled-components';

const Outer = styled.div``;

const Input = styled.input``;

const Button = styled.button``;

function InputBox() {
    return (
        <>
            <Outer>
                <Input />
                <Button>Submit</Button>
            </Outer>
        </>
    );
}

export default InputBox;
