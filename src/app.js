import React from 'react';
import Input from './components/input';
import { connect } from 'react-redux';
import { userRegister, getUsers } from './redux/actions/userRegister';
import ListUser from './components/listUsers';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      phone: '',
      email: '',
      login: '',
      password: '',
      isRegistering: true,
    };
  }
  onSubmit = event => {
    event.preventDefault();
    this.props.userRegister({
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      login: this.state.login,
      password: this.state.password,
    });
  };

  onClick = answer => {
    this.setState({ isRegistering: answer });
  };

  updateValue = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  componentDidMount() {
    if (JSON.parse(localStorage.getItem('users')))
      this.props.getUsers([...JSON.parse(localStorage.getItem('users'))]);
  }
  render() {
    if (this.state.isRegistering) {
      return (
        <div className="container py-3">
          <form onSubmit={this.onSubmit}>
            <Input
              value={this.updateValue}
              htmlFor="name"
              text="Nome"
              type="text"
              required={true}
            />
            <Input
              value={this.updateValue}
              htmlFor="phone"
              text="Telefone"
              type="tel"
              required={false}
            />
            <Input
              value={this.updateValue}
              htmlFor="email"
              text="Email"
              type="email"
              required={true}
            />
            <Input
              value={this.updateValue}
              htmlFor="login"
              text="Login"
              type="text"
              required={true}
            />
            <Input
              value={this.updateValue}
              htmlFor="password"
              text="Senha"
              type="password"
              required={true}
            />
            <button type="submit" className="btn btn-primary">
              Cadastrar
            </button>
          </form>
          <button
            className="btn btn-primary mt-3"
            onClick={event => this.onClick(false)}
          >
            Mostrar usuários
          </button>
        </div>
      );
    } else {
      return <ListUser onClick={this.onClick} />;
    }
  }
}

const mapDispatchToProps = {
  userRegister,
  getUsers,
};

export default connect(
  null,
  mapDispatchToProps
)(App);
