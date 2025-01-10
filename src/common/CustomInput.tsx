import { FieldErrors, UseFormRegister } from "react-hook-form";

type Props = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<any>;
  errors?: FieldErrors<any>;
};

const CustomInput = ({
  label,
  name,
  type,
  placeholder,
  register,
  errors,
}: Props) => {
  return (
    <div className="relative mb-1">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        {...register(name)}
        type={type}
        name={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
      />
      {errors && errors[name] && (
        <span className="text-red-600 text-sm absolute mt-[2px]">
          {errors[name]?.message?.toString()}
        </span>
      )}
    </div>
  );
};

export default CustomInput;
