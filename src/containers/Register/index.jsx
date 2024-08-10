import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import  api  from '../../services/api';

import { Container, Form, ContainerInput, LeftContainer, RightContainer, Title, Link } from './styles';
import Logo from '../../assets/logo.png';

import { Button } from '../../components';

export function Register() {
    const navigate = useNavigate()

    const schema = yup
        .object({
            name: yup
                .string()
                .required('O nome e obrigatorio'),
            email: yup
                .string()
                .email('Digite um email valido')
                .required('0 email e obrigatorio'),
            password: yup
                .string()
                .min(6, ' A senha deve ter pelo menos 6 caracteres')
                .required('Digite uma senha'),
            confirmPassword: yup
                .string()
                .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
                .required('Confirme sua senha'),
        })
        .required();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            const { status } = await api.post(
                '/users',
                {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                },
                {
                    validateStatus: () => true,
                },

            );

            if (status === 200 || status === 201) {
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
                toast.success('Conta criada com sucesso');

            } else if (status === 409) {
                toast.error('Email ja cadastrado! faca o login para continuar');
               
            } else {
                throw new Error();
            }

        } catch (error) {
            toast.error('Falha no sistema! tente novamente');
        }
       
    };
    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt='logo-devbuger' />
            </LeftContainer>
            <RightContainer>
                <Title>
                    Criar conta
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <ContainerInput>
                        <label>Nome</label>
                        <input type="text" {...register('name')} />
                        <p>{errors?.name?.message}</p>
                    </ContainerInput>
                    <ContainerInput>
                        <label>Email</label>
                        <input type="email" {...register('email')} />
                        <p>{errors?.email?.message}</p>
                    </ContainerInput>

                    <ContainerInput>
                        <label>Senha</label>
                        <input type="password" {...register('password')} />
                        <p>{errors?.password?.message}</p>
                    </ContainerInput>
                    <ContainerInput>
                        <label> Confirmar Senha</label>
                        <input type="password" {...register('confirmPassword')} />
                        <p>{errors?.confirmPassword?.message}</p>
                    </ContainerInput>

                    <Button type="submit">Criar Conta</Button>
                </Form>
                <p>
                    Ja possui conta? <Link to={"/login"}>Clique aqui.</Link>
                </p>
            </RightContainer>
        </Container>
    )
}