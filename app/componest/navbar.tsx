"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Roboto_Condensed, JetBrains_Mono } from "next/font/google";

const titulo = Roboto_Condensed({ subsets: ["latin"], weight: ["700"] });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"] });

export default function Navbar() {
  const [aberto, setAberto] = useState(false);

  return (
    <>
      <nav className="relative z-50 w-full bg-white border-b border-gray-200">
        <div className="px-7 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/">
            <Image
              src="/logolame.jpeg"
              alt="Logo do projeto"
              width={40}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Links centralizados */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-8 text-2xl">
            <Link
              href="/contatos"
              className="text-gray-700 hover:text-blue-600"
            >
              Contatos
            </Link>

            <Link
              href="/projetos"
              className="text-gray-700 hover:text-blue-600"
            >
              Projetos
            </Link>

            <Link
              href="/buscar"
              className="text-gray-700 hover:text-blue-600"
            >
              Buscar
            </Link>
          </div>

          {/* Dropdown à direita */}
          <div className="ml-auto relative">
            <button
              type="button"
              onClick={() => setAberto(!aberto)}
              className="text-2xl text-gray-700 hover:text-blue-600"
              aria-label="Abrir menu"
              aria-expanded={aberto}
            >
              Membros ▾
            </button>

            {aberto && (
              <div className="absolute right-0 top-full mt-3 w-48 rounded-md border border-gray-200 bg-white py-2 shadow-lg z-50">

                <Link
                  href="/curriculo"
                  onClick={() => setAberto(false)}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                >
                  Felipe
                </Link>

                <Link
                  href="/projetos"
                  onClick={() => setAberto(false)}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                >
                  Lima
                </Link>

                <Link
                  href="/contatos"
                  onClick={() => setAberto(false)}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                >
                  Rafa
                </Link>

              </div>
            )}
          </div>

        </div>
      </nav>

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
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-950/50 via-indigo-800/30 to-violet-700/20" />
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
              A Liga Acadêmica Matemática & Empresa aplica a matemática em
              problemas reais, aproximando a universidade do mercado. Escreva
              aqui a história, a missão e os objetivos da liga.
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
          ].map((item) => (
            <div key={item.titulo}>
              <h3 className={`${titulo.className} text-xl text-white`}>
                {item.titulo}
              </h3>
              <p
                className={`${mono.className} mt-3 text-xs leading-relaxed text-white/80`}
              >
                {item.texto}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}