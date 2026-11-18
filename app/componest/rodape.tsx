"use client";

import Reveal from "./reveal";
import Ano from "./ano";
import { JetBrains_Mono } from "next/font/google";

const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"] });

export default function Footer() {
  return (
    <footer className="w-full bg-indigo-950 px-6 py-10 text-center">
      <Reveal>
        <div className="flex items-center justify-center gap-5">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/lame.ufs?cnvx=NzFteTU3NmcyZ3pl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white transition hover:-translate-y-0.5 hover:text-sky-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
            </svg>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/+557597147224"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-white transition hover:-translate-y-0.5 hover:text-sky-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.95L2 22l5.22-1.37A9.9 9.9 0 1 0 12.04 2Zm0 18.1c-1.5 0-2.97-.4-4.25-1.16l-.3-.18-3.1.81.83-3.02-.2-.31A8.1 8.1 0 1 1 12.04 20.1Zm4.44-6.07c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06a6.6 6.6 0 0 1-1.95-1.2 7.3 7.3 0 0 1-1.35-1.68c-.14-.24 0-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.8-.2-.47-.4-.41-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.1.16 1.52.1.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
            </svg>
          </a>
        </div>

        <a
          href="mailto:lame@mat.ufs.br"
          className={`${mono.className} mt-6 inline-block text-sm text-white hover:text-sky-300`}
        >
          lame@mat.ufs.br
        </a>

        <p
          className={`${mono.className} mt-3 text-xs text-white/80 md:text-sm`}
        >
          © <Ano /> Liga Acadêmica Matemática & Empresa. Todos os direitos
          reservados.
        </p>
      </Reveal>
    </footer>
  );
}