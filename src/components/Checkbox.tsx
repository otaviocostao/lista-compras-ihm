import React from 'react';

type CheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'id' | 'type' | 'onChange'
> & {
  id: string | number;
  label: string;
  checked: boolean;
  onCheckedChange: (id: string | number) => void; 
};

export function Checkbox({
  id,
  label,
  checked,
  onCheckedChange,
  className,
  ...rest
}: CheckboxProps) {
  const checkboxId = `checkbox-item-${id}`;


  const handleToggle = () => {
    onCheckedChange(id);
  };

  return (
    <div className="flex items-center">
      <input
        {...rest}
        id={checkboxId}
        type="checkbox"
        checked={!!checked} 
        onChange={handleToggle}
        className={`h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer ${className || ''}`}
      />
      <label
        htmlFor={checkboxId}
        className={`ml-3 text-lg cursor-pointer transition-colors ${
          checked ? 'line-through text-gray-400' : 'text-gray-700'
        } ${rest.disabled ? 'cursor-not-allowed opacity-50' : ''}`} 
      >
        {label}
      </label>
    </div>
  );
}