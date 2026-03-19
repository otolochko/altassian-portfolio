const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card border-t border-border py-16 text-center overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <p className="text-sm font-medium text-muted">
        © {currentYear} Oleksandr Tolochko
      </p>
    </footer>
  );
};

export default Footer;
