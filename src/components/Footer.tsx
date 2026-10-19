const Footer = () => {
  return (
    <footer className="border-t border-line/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
        <p>© {new Date().getFullYear()} Tuti Rahmawati</p>
        <p>AI solutions builder, Agile and SAFe delivery</p>
      </div>
    </footer>
  );
};

export default Footer;
