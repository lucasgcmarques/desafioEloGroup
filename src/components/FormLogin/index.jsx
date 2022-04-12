import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import handleLocalStorage from '../../controllers/handleLocaStorage';
import FormInput from '../FormInput';
import './styles.css';

export function FormLogin() {

    const [values, setValues] = useState({
        username:"",
        password:"",
        confirmPassword:"",
    });
    
    const inputs = [
        {
            id:1,
            name:"username",
            type:"text",
            placeholder:"Digite seu nome de usuário",
            label:"Escolha um nome",
            errorMessage:"Nome de usuário inválido. É necessário ter de 3 a 16 caracteres!",
            required: true,
            pattern: "^[A-za-z0-9]{3,16}$"
        },
        {
            id:2,
            name:"password",
            type:"password",
            placeholder:"Digite sua melhor senha",
            label:"Crie uma senha",
            errorMessage:"A senha deve ter ao menos 8 caracteres, com pelo menos um caracter especial, uma letra e um número!",
            required: true,
            pattern: `^(?=.*[0-9])(?=.*?[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`

        },
        {
            id:3,
            name:"confirmPassword",
            type:"password",
            placeholder:"Confirme sua senha",
            label: "Confirmar senha",
            errorMessage:"As senhas não combinam!",
            required: true,
            pattern: values.password
        }
    ]

    const navigate = useNavigate();

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        handleLocalStorage();
        navigate('/');
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };  

    console.log(values);
    
    return (      
        <form onSubmit={handleLoginSubmit}>
            {inputs.map((input) => (
                <FormInput 
                    key={input.id} 
                    {...input} 
                    values={values[input.name]}
                    onChange={onChange}
                />
            ))}
            <button className='loginButton' type="submit">Registrar usuário</button>
            <small>*Todos os campos são obrigatórios</small>
        </form>
    )
  }
  

  