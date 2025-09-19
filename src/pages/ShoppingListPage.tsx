
import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { Checkbox } from '../components/Checkbox';
import { LogOut, ShoppingCart, X } from 'lucide-react';

interface Item {
  id: number;
  name: string;
  completed: boolean;
}

interface ShoppingListPageProps {
  onLogout: () => void;
}

export function ShoppingListPage(props: ShoppingListPageProps) {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: 'Maçãs', completed: false },
    { id: 2, name: 'Leite', completed: false },
    { id: 3, name: 'Pão', completed: false },
  ]);
  const [newItemName, setNewItemName] = useState('');

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItemName.trim() === '') return;

    const newItem: Item = {
      id: Date.now(),
      name: newItemName,
      completed: false,
    };

    setItems([...items, newItem]);
    setNewItemName('');
  };

  const toggleItemCompletion = (id: string | number) => {
    setItems(
      items.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleDeleteItem = (idToDelete: string | number) => {
    const newItems = items.filter(item => item.id !== idToDelete);
    setItems(newItems);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 ">
      <header className='flex p-4 items-center bg-white w-full mb-4 shadow-sm justify-between'>
        <div className='flex'>
          <ShoppingCart className='bg-blue-600 shadow-md ml-2 text-white p-2 box-content rounded'/>
            <h1 className="ml-2 text-2xl font-bold text-gray-700">Lista de Compras</h1>
        </div>
        <button onClick={props.onLogout}><LogOut className='text-gray-700 cursor-pointer transition-discrete duration-300 hover:text-red-400'/></button>
      </header>
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Adicionar novo item</h1>
       
        <form onSubmit={handleAddItem} className="flex gap-2 mb-6">
          <InputField 
            type="text"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            placeholder="Ex: Tomates"
            className='w-full'
          />
          <Button 
            type='submit'
            disabled={newItemName.trim() === ''}
            className='disabled:bg-gray-300 disabled:cursor-auto transition-colors'
          >Adicionar</Button>
        </form>

        <ul className="space-y-3">
          {items.length === 0 && (<p className='text-sm text-center text-gray-700'>Nenhum item na lista de compras</p>)}
          {items.map(item => (
            <li
              key={item.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg shadow-sm group"
            >
              <Checkbox 
                id={item.id}
                label={item.name}
                checked={item.completed}
                onCheckedChange={toggleItemCompletion}
                disabled={item.name.includes('(em falta)')}
              />
              <button 
                onClick={() => handleDeleteItem(item.id)} 
                className='cursor-pointer text-gray-400 hover:text-red-400 transition-colors'
                aria-label={`Remover ${item.name}`}
              >
                <X size={20} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}