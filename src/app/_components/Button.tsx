type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

// TODO: make this either a LinkButton or Button (with prop inheritance)

export default function Button({
  type = 'button',
  children,
  ...buttonProps
}: ButtonProps) {
  return (
    <button type={type} {...buttonProps}>
      {children}
    </button>
  );
}
