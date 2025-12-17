import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background py-10 border-t border-primary/5 text-center transition-colors duration-500">
      <p className="text-secondary text-xs uppercase tracking-[0.2em]">
        © {new Date().getFullYear()} Aayush Tejani. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;