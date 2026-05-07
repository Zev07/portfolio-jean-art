interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-zinc-600 uppercase tracking-wider">
        {label}
      </label>
      <input
        {...props}
        className="w-full text-black dark:text-white bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 p-4 rounded-lg outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:border-transparent transition-all"
      />
    </div>
  );
}