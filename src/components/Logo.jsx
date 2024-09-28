const Logo= ({ src, className }) => {
  return (
    <>
      <img 
        src={src} 
        className={`max-w-1/2 rounded-full hidden sm:block object-cover max-h-2 ${className}`} 
        alt="Logo" 
      />
    </>
  );
}

export default Logo;
