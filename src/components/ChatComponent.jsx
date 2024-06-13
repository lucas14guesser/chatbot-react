import React, { useState } from 'react';
import { Container, CaixaTexto, GlobalContainer, Titulo } from '../styles/styles';
import { Box, Button, Divider, TextField } from '@mui/material';
import axios from 'axios';

//model mais recente do gpt = gpt-4-turbo
//model de menor custo do gpt = gpt-3.5-turbo

const API_KEY = import.meta.env.VITE_API_KEY;

const ChatComponent = () => {
    const [message, setMessage] = useState('');
    const [arrayConversa, setArrayConversa] = useState([]);

    async function requerimentoGpt(messages) {
        try {
            const response = await axios.post('https://api.openai.com/v1/chat/completions', {
                messages: messages,
                model: 'gpt-3.5-turbo'
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${API_KEY}`
                }
            });

            response.data.choices.forEach(choice => {
                setArrayConversa((prevMessages) => [...prevMessages, { autor: 'bot', pergunta: choice.message.content }]);
            });

        } catch (error) {
            console.log(error);
        }
    }

    const AplicarTexto = (e) => {
        setMessage(e.target.value);
    }

    const EnvioMensagem = (e) => {
        e.preventDefault();

        const novaMensagem = { pergunta: message, autor: 'user' };

        const atualizarMensagens = [...arrayConversa, novaMensagem];
        setArrayConversa(atualizarMensagens);

        const mensagensApi = atualizarMensagens.map(msg => ({
            role: msg.autor === 'user' ? 'user' : 'system',
            content: msg.pergunta
        }));

        requerimentoGpt(mensagensApi);
        setMessage('');
    }

    return (
        <GlobalContainer>
            <Titulo>ChatBot - React</Titulo>
            <Container>
                <CaixaTexto>
                    <Box overflow='auto'>
                        {
                            arrayConversa.map((i, index) => (
                                <Box key={index} mt={1} display="flex" justifyContent={i.autor === 'user' ? 'right' : 'left'}>
                                    <Box style={{ maxWidth: '70%', padding: '4px', paddingLeft: '8px', paddingRight: '8px', borderRadius: '8px', backgroundColor: i.autor === 'user' ? '#DCFBC6' : '#FFFFFF', textAlign: i.autor === 'user' ? 'right' : 'left' }}>
                                        {i.pergunta}
                                    </Box>
                                </Box>
                            ))
                        }

                        <Box my={2}>
                            <Divider />
                            <form autoComplete='off' onSubmit={EnvioMensagem}>
                                <Box my={2} display='flex' alignItems='center'>
                                    <TextField
                                        placeholder="Mensagem"
                                        variant='outlined'
                                        onChange={AplicarTexto}
                                        value={message}
                                        style={{ marginRight: '10px', width: '500px' }}
                                    />
                                    <Button type='submit' variant='contained' style={{ background: '#DCFBC6', color: '#000000' }}>
                                        Enviar
                                    </Button>
                                </Box>
                            </form>
                        </Box>
                    </Box>
                </CaixaTexto>
            </Container>
        </GlobalContainer>
    );
}

export default ChatComponent;
