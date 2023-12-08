interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function Button(props: ButtonProps) {
  const { text } = props;
  return (
    <button {...props} className="bg-blue-300">
      {text}
    </button>
  );
}
