import MockAdapter from 'axios-mock-adapter';
import api from './api';

const mock = new MockAdapter(api);

// Simula login exitoso
mock.onPost('/login').reply((config) => {
  const { email, password } = JSON.parse(config.data);
  if (email === 'test@example.com' && password === '1234') {
    return [200, { email, token: 'abc123' }];
  }
  return [401, { message: 'Credenciales inválidas' }];
});

// Simula lista de usuarios
mock.onGet('/users').reply(200, [
  { id: 1, name: 'Nicolás', role: 'admin' },
  { id: 2, name: 'Laura', role: 'user' },
]);