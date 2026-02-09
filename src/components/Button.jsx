import "./Button.css";

function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  onClick,
  href,
  className = "",
}) {
  const classes = `btn btn-${variant} btn-${size} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {icon && <span className="btn-icon">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  );
}

export default Button;
