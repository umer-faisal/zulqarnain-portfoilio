export default function SiteFooter() {
  return (
    <footer className="site-footer flex flex-col md:flex-row justify-between items-center gap-3 md:gap-6 px-6 md:px-8 py-6 bg-brand-deep border-t border-white/25 font-label text-xs uppercase text-brand-white">
      <span>ZS.Productions</span>
      <span className="text-white/70">Video · Photography · Production</span>
      <a href="#home" className="hover:text-brand-yellow transition-colors">
        Back to the first frame ↑
      </a>
    </footer>
  );
}
