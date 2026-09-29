import Link from 'next/link';

const footerLinks = {
  productos: [
    { label: 'Ethiopia Yirgacheffe', href: '#' },
    { label: 'Colombia Huila', href: '#' },
    { label: 'Brasil Cerrado', href: '#' },
    { label: 'Signature Blend', href: '#' },
  ],
  empresa: [
    { label: 'Nosotros', href: '#historia' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Contacto', href: '#footer' },
  ],
  contacto: [
    { label: 'Carrera 18 #79-47, Of 201', href: '#' },
    { label: 'Bogotá D.C., Colombia', href: '#' },
    { label: '+57 314 562 9141', href: 'tel:+573145629141' },
    { label: 'hola@goldneez.com', href: 'mailto:hola@goldneez.com' },
  ],
};

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/goldneez' },
  { label: 'Facebook', href: 'https://facebook.com/goldneez' },
  { label: 'Twitter', href: 'https://twitter.com/goldneez' },
  { label: 'TikTok', href: 'https://tiktok.com/@goldneez' },
];

const Footer = () => {
  return (
    <footer id="footer" className="relative bg-black section-padding border-t border-aluminum/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="#hero" className="inline-flex items-center gap-2 mb-6">
              <span className="font-cinzel text-amber text-3xl font-bold">G</span>
              <span className="font-cinzel text-aluminum text-xl font-bold">Goldneez</span>
            </Link>
            <p className="font-quattrocento text-aluminum/60 text-lg max-w-sm mb-6">
              Creamos recuerdos dorados a través de cada taza de café de especialidad.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-aluminum/20 rounded-full text-aluminum hover:border-amber hover:text-amber transition-colors"
                >
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-cinzel text-amber text-lg mb-4">Productos</h3>
            <ul className="space-y-3">
              {footerLinks.productos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-quattrocento text-aluminum/60 hover:text-amber transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-cinzel text-amber text-lg mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-quattrocento text-aluminum/60 hover:text-amber transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-cinzel text-amber text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              {footerLinks.contacto.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-quattrocento text-aluminum/60 hover:text-amber transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-aluminum/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-quattrocento text-aluminum/40 text-sm">
            © {new Date().getFullYear()} Goldneez. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-quattrocento text-aluminum/40 text-sm hover:text-amber transition-colors">
              Términos y Condiciones
            </a>
            <a href="#" className="font-quattrocento text-aluminum/40 text-sm hover:text-amber transition-colors">
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;