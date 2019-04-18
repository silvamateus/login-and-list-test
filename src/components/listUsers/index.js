import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './style.css';

class ListUsers extends Component {
  constructor(props) {
    super(props);
    this.state = { users: props.users };
  }

  onClick = index => {
    const { users } = this.state;
    users.splice(index, 1);
    this.setState({ users: users });
  };

  render() {
    return (
      <div className="d-flex-column p-3">
        <button
          onClick={event => this.props.onClick(true)}
          className="btn btn-primary"
        >
          Voltar
        </button>
        <div className={`d-flex flex-wrap ${style.cardNegativeMargin}`}>
          {this.state.users.map((user, index) => (
            <div
              key={user.id}
              className={`card ${style.cardMargin}`}
              style={{ width: '18rem' }}
            >
              <div className={`card-body px-3 `}>
                <div className="d-flex mb-3">
                  <div className="ml-auto">
                    <button
                      className="btn btn-danger d-flex "
                      type="button"
                      onClick={event => this.onClick(index)}
                      aria-label="Remover Usuário"
                    >
                      &times;
                    </button>
                  </div>
                </div>
                <p className="card-text text-nowrap">
                  <span className="font-weight-bold text-left">Nome:</span>{' '}
                  <span className="text-capitalize">{user.name}</span>
                </p>
                <p className="card-text text-nowrap">
                  <span className="font-weight-bold text-left">Login:</span>{' '}
                  {user.login}
                </p>
                <p className="card-text text-nowrap">
                  <span className="font-weight-bold text-left">Telefone:</span>{' '}
                  {user.phone}
                </p>
                <p className="card-text text-nowrap">
                  <span className="font-weight-bold text-left">Email:</span>{' '}
                  {user.email}
                </p>
              </div>
            </div>
          ))}
          {this.props.users.length < 1 ? (
            <p>Sem usuários para mostrar</p>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: [...state.users],
  };
};

export default connect(mapStateToProps)(ListUsers);
