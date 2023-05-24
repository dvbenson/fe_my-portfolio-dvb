export default function Button({
    onClick,
    label,
    variant,
    className,
    disabled = false,
  }) {
    const base = 'rounded-full text-base'; //base button
    const primary = 'font-bold h-8 w-20 bg-[#121212] text-[#e9e3e6] mx-2.5 mt-1.5 mb-0.5 hover:my-1 hover:shadow-solid-primary'; //black button long
    const secondary = 'font-bold h-8 w-8 bg-[#121212] text-[#e9e3e6] mx-2.5 mt-1.5 mb-0.5 hover:my-1 grid place-items-center hover:shadow-solid-primary'; //black button round
    const tertiary = 'font-bold h-8 w-20 bg-[#cab8ff] text-[#121212] mx-2.5 mt-1.5 mb-0.5 hover:my-1 hover:shadow-solid-tertiary'; //purple button long

    return (
      <button
        onClick={onClick}
        className={`${base} ${ variant === 'primary'
        ? primary
        : variant === 'secondary'
        ? secondary
        : variant === 'tertiary'
        ? tertiary
        : '' } ${className}`}
        disabled={disabled}
      >
        {label}
      </button>
    );
  }
  