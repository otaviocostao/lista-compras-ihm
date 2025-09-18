interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;      
  id?: string;         
  error?: string;
  labelClassName?: string;
}

const InputField: React.FC<InputFieldProps> = ({ id, className, error, ...rest }) => {

  return (

    <div className={className}>
      <input
        id={id}
        className={`
          block w-full px-3 py-2 bg-white border border-gray-400 rounded-md  
          placeholder-gray-400 sm:text-sm
          focus:outline-none focus:ring-2 focus:ring-offset-1
          focus:ring-blue-500
          transition duration-150 ease-in-out
        `}
        {...rest}
      />
    </div>
  );
};

export default InputField
