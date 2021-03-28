type Props = {
  className?: string;
}

const Container: React.FC<Props> = ({ children, className = '', ...props }) => {
  return (
    <div className={`container mx-auto px-4 ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Container
