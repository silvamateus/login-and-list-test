import React from 'react';
import Input from './components/input';

class App extends React.Component {
    render() {
        return (
            <div className="container py-3">
                <form>
                    <Input htmlFor="name" text="Nome" type="text" />
                    <Input htmlFor="phone" text="Telefone" type="tel" />
                    <Input htmlFor="email" text="Email" type="email" />
                    <Input htmlFor="login" text="Login" type="text" />
                    <Input htmlFor="password" text="Senha" type="password" />
                    <button type="submit" className="btn btn-primary">
                        Cadastrar
                    </button>
                </form>
                <button className="btn btn-primary mt-3">Mostrar usuários</button>
            </div>
        );
    }
}

export default App;
