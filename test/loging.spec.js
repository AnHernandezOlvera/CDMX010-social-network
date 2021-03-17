/* eslint-disable max-len */
/* eslint-disable jest/no-disabled-tests */
import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { login } from '../src/login.js';
import { onNavigate } from '../src/routes.js';

describe('login', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
  });
  it('should take me to the post when I click the post title', async () => {
    const target = document.getElementById('root');

    // Mockeamos la funcion de login de Firebase la cual sera invocada cuando el usuario haga click sobre el boton "Sign In"
    // Por que?  La idea central es verificar que esta funcion es invocada lo cual haremos linea mas abajo
    const access = jest.fn().mockImplementation(() => Promise.resolve('ok'));
    const firebase = { access };
    await login(target, firebase);
    expect(target.innerHTML).toMatchSnapshot();
    const email = 'test@example.com';
    const password = '123456789';
    // Referencia: https://testing-library.com/docs/ecosystem-user-event/#api
    userEvent.type(screen.getByLabelText('Email'), email);
    userEvent.type(screen.getByLabelText('Password'), password);
    userEvent.click(screen.getByDisplayValue('Acceder'));
    // Verificamos que nuestro mock de la funcion login de firebase es llamada con el email y password que el usuario escribio mas arriba
    // Referencia: https://jestjs.io/docs/en/expect#tohavebeencalledwitharg1-arg2-
    expect(access).toHaveBeenCalledWith(email, password, onNavigate);
  });
});
