
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [aberto, setAberto] = useState(false);

  return (
    <nav className="relative w-full bg-white border-b border-gray-200">
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
  );
}
