const links = [
  { label: "email", href: "mailto:junykimkim99@gmail.com" },
  { label: "instagram", href: "#", external: true },
  { label: "threads", href: "#", external: true },
  { label: "linkedin", href: "#", external: true },
  { label: "github", href: "#", external: true },
  { label: "blog", href: "#", external: true },
];

export default function Home() {
  return (
    <div className="space-y-20">
      <section className="space-y-4 text-[15px] leading-[1.85] text-neutral-800">
        <p>
          디자이너로 시작해 비즈니스를 만드는 사람이 되어가고 있습니다.
        </p>
        <p>
          예중·예고·홍익대 디자인학부를 거치며 시각 언어를 익혔습니다. 군대에서
          책을 읽으며 자본과 사업의 세계에 끌렸고, 복학 후에는 스스로의 길을
          만들기로 했습니다. 미대 입시 컨설팅 ‘하이미대’를 운영하며 시장과
          콘텐츠의 힘을 배웠고, 2025년 12월부터는 챌린저스에서 사업개발을 맡고
          있습니다.
        </p>
        <p>
          만들고 싶은 것은 사람들의 삶을 조금이라도 더 나은 방향으로 움직이는
          무언가입니다. 디자인의 정밀함과 비즈니스의 야심을 함께 가져갑니다.
          마지막 호흡의 순간 후회가 없도록, 오늘을 성실히 채워나갑니다.
        </p>
      </section>

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
    </div>
  );
}
