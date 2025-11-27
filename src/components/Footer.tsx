const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Tuti Rahmawati. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Project Manager • Scrum Master • Agile Coach
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
