import Navbar from "./componest/navbar";
import Reveal from "@/app/componest/reveal";
import Link from "next/link";
import Image from "next/image";
import { Roboto_Condensed, JetBrains_Mono } from "next/font/google";
import Ano from "./componest/ano";
import Footer from "./componest/rodape"

const titulo = Roboto_Condensed({ subsets: ["latin"], weight: ["700"] });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"] });

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Foto com efeito + Sobre nós */}
      <section className="w-full overflow-hidden bg-white px-6 py-12 md:px-12">
        <style>{`
          @keyframes entrada-esquerda {
            0%   { opacity: 0; transform: translateX(-120px) scale(1.05); filter: blur(14px); }
            60%  { opacity: 1; filter: blur(5px); }
            100% { opacity: 1; transform: translateX(0) scale(1); filter: blur(0px); }
          }
          @keyframes subir-suave {
            from { opacity: 0; transform: translateY(30px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .anim-foto  { animation: entrada-esquerda 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards; will-change: transform, filter; }
          .anim-texto { animation: subir-suave 1s ease-out 0.8s both; }
        `}</style>

        <div className="mx-auto grid max-w-[1200px] items-center gap-20 lg:grid-cols-[7fr_5fr]">

          {/* Foto maior, em cartão */}
          <div className="anim-foto relative aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/lame.jpeg"
              alt="Equipe da Liga Acadêmica Matemática & Empresa"
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover object-center"
            />
            {/* Overlay roxo */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-indigo-800/30 to-violet-700/20" />
          </div>

          {/* Sobre nós */}
          <div className="anim-texto">
            <h2
              className={`${titulo.className} text-4xl text-indigo-950 md:text-5xl`}
            >
              Sobre{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                nós
              </span>
            </h2>

            <p
              className={`${mono.className} mt-5 text-sm leading-relaxed text-gray-700 md:text-base`}
            >
              A Liga Acadêmica Matemática & Empresa (LAME) é uma associação civil sem fins lucrativos, vinculada ao Departamento de Matemática da UFS. Nascemos da iniciativa do Projeto Matemática e Empresa, promovido pelo Programa de Pós-graduação em Matemática da UFS (Promat), com o objetivo de aproximar as empresas do Estado de Sergipe da Matemática Universitária em níveis de graduação e pós-graduação. 
            </p>

            <Link
              href="/contatos"
              className={`${mono.className} mt-8 inline-block rounded-full bg-sky-500 px-8 py-3 font-medium text-white shadow-lg shadow-sky-500/30 transition hover:-translate-y-0.5 hover:bg-sky-400`}
            >
              Entrar em contato
            </Link>
          </div>

        </div>
      </section>

      {/* Faixa de serviços */}
      <section className="bg-indigo-950 px-6 py-12">
        <div className="mx-auto grid max-w-6xl gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              titulo: "Modelagem Matemática",
              texto:
                "Desenvolvemos modelos matemáticos para resolver problemas complexos e otimizar processos.",
            },
            {
              titulo: "Análise de Dados",
              texto:
                "Utilizamos técnicas avançadas para extrair insights valiosos de grandes volumes de dados.",
            },
            {
              titulo: "Análise Estatística",
              texto:
                "Realizamos análises estatísticas para embasar decisões estratégicas e prever tendências.",
            },
            {
              titulo: "Consultoria para Empresas",
              texto:
                "Oferecemos consultoria especializada para empresas, aplicando matemática e tecnologia.",
            },
          ].map((item, i) => (
            <Reveal key={item.titulo} delay={i * 120}>
              <h3 className={`${titulo.className} text-xl text-white`}>
                {item.titulo}
              </h3>
              <p
                className={`${mono.className} mt-3 text-xs leading-relaxed text-white/80`}
              >
                {item.texto}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Conheça nossos projetos */}
      <section className="w-full bg-gray-50 px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl">

          <Reveal className="text-center">
            <h2
              className={`${titulo.className} text-4xl text-indigo-950 md:text-5xl`}
            >
              Conheça nossos{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                projetos
              </span>
            </h2>
            <p
              className={`${mono.className} mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base`}
            >
              Confira os projetos, conquistas e iniciativas que realizamos até
              agora. Cada um deles mostra nosso trabalho e os resultados que
              alcançamos.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                titulo: "Projeto 1",
                texto: "Descreva aqui o projeto, o problema e o resultado.",
              },
              {
                titulo: "Projeto 2",
                texto: "Descreva aqui o projeto, o problema e o resultado.",
              },
              {
                titulo: "Projeto 3",
                texto: "Descreva aqui o projeto, o problema e o resultado.",
              },
            ].map((projeto, i) => (
              <Reveal key={projeto.titulo} delay={i * 150}>
                <Link
                  href="/projetos"
                  className="group block rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-5 aspect-[16/10] w-full rounded-xl bg-gradient-to-br from-indigo-100 to-violet-100" />
                  <h3
                    className={`${titulo.className} text-2xl text-indigo-950`}
                  >
                    {projeto.titulo}
                  </h3>
                  <p
                    className={`${mono.className} mt-3 text-xs leading-relaxed text-gray-600`}
                  >
                    {projeto.texto}
                  </p>
                  <span
                    className={`${mono.className} mt-5 inline-block text-sm text-sky-600 transition group-hover:translate-x-1`}
                  >
                    Ver projeto →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

        </div>
      </section>
      <Footer/>
    </main>
  );
}