import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import api  from '../../services/api';

import { useUser } from '../../hooks/UserContext';
import { Container, Form, ContainerInput, LeftContainer,  RightContainer, Title, Link } from './styles';
import Logo from '../../assets/Cart-Img.png';

import { Button } from '../../components/';

export function Login() {
    const { putUserData }= useUser()
    const navigate = useNavigate();
    const schema = yup
  .object({
    email: yup.string().email('Digite um email valido').required('0 email e obrigatorio'),
    password: yup.string().min(6, ' A senha deve ter pelo menos 6 caracteres').required('Digite uma senha'),
  })
  .required();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

    const onSubmit = async (data) => {

        const response = await toast.promise(
            api.post('/session', {
                email:data.email,
                password: data.password,
            }),
            {
                pending: 'Verifique seus dados',
                success: {
                    render() {
                        setTimeout (() => {
                            navigate('/');
                        }, 2000);
                        return 'Seja bem-vindo(a)'
                    },
                },
                 error:'Email ou senha incorretos',
            },
        );

      
        putUserData(response)

    };
    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt='logo-devbuger' />
            </LeftContainer>
            <RightContainer>
                <Title>
                    Ola, seja bem vindo ao <span>Dev Burguer !</span>
                    <br />
                    Acesse com seu<span> Login e senha.</span>
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <ContainerInput>
                        <label>Email</label>
                        <input type="email" {...register('email')}/>
                        <p>{errors?.email?.message}</p>
                    </ContainerInput>

                    <ContainerInput>
                        <label>Senha</label>
                        <input type="password" {...register('password')}/>
                        <p>{errors?.password?.message}</p>
                    </ContainerInput>

                    <Button type="submit">Entrar</Button>
                </Form>
                <p>
                    Nao possui conta? <Link to="/cadastro">Clique aqui.</Link>
                </p>
            </RightContainer>
        </Container>
    )
}