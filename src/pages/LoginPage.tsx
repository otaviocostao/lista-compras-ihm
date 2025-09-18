
import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { ShoppingCart } from 'lucide-react';

const mockUser = {
  email: 'usuario@exemplo.com',
  password: '123',
};

interface LoginPageProps {
  onLoginSuccess: () => void;
}

export function LoginPage({ onLoginSuccess }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState<string | null>(null);

   const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); 
    if (!email || !password) {
      setError('Por favor, preencha todos os campos.');
      return; 
    }

    if (email === mockUser.email && password === mockUser.password) {
      console.log('Login bem-sucedido!');
      onLoginSuccess();
    } else {
      setError('Email ou senha inválidos.');
    }
  };

  return (
    <div className="w-full h-full flex-1 flex items-center justify-center bg-gray-100 p-4 sm:p-8">
      <div className="p-6 bg-white  rounded-lg shadow-md w-full max-w-sm">
        <div className='flex flex-col justify-center items-center mb-1'>
          <ShoppingCart className='bg-blue-600 shadow-md text-white p-2 box-content rounded'/>
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">Lista de Compras</h1>
        </div>
        <form onSubmit={handleLogin} className="space-y-2">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <InputField 
              id="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seuemail@exemplo.com"
              value={email}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Senha</label>
            <InputField 
              id='password'
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              value={password}
            />
          </div>
          {error && (
            <p className="text-sm text-red-600 text-center">{error}</p>
          )}
          <Button className='w-full mt-2' variant='primary'>
            Entrar  
          </Button>
        </form>
          <Button className='w-full mt-1' variant='secondary'>
            Cadastrar-se 
          </Button>
      </div>
    </div>
  );
}