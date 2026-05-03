export const metadata = {
  title: "Contact",
};

const links = [
  { label: "email", href: "mailto:junykimkim99@gmail.com" },
  { label: "instagram", href: "#", external: true },
  { label: "threads", href: "#", external: true },
  { label: "linkedin", href: "#", external: true },
  { label: "github", href: "#", external: true },
  { label: "blog", href: "#", external: true },
];

export default function ContactPage() {
  return (
    <nav className="flex flex-col gap-2 text-sm text-neutral-500">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          {...(link.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="self-start hover:text-neutral-900 underline-offset-4 decoration-1 hover:underline transition-colors"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
