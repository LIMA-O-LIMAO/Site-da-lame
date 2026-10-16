
import Navbar from "../componest/navbar";
export default function CurriculoPage() {
  return (
     <body>
        
     <Navbar />
    <main className="min-h-screen bg-slate-100 px-6 py-12">

      <div className="mx-auto max-w-4xl">

        {/* Apresentação */}
        <section className="rounded-2xl bg-white p-8 shadow-sm border border-slate-200">

          <div className="flex flex-col sm:flex-row items-center gap-6">

        <img
    src="/ph.jpeg"
    alt="Logo do projeto"
    className="w-30 h-30 object-contain rounded-full"

  />


            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-bold text-slate-900">
                Phelipe Melo
              </h1>

              <p className="mt-2 text-lg text-slate-600">
               Graduando em Matemática Aplicada e Computacional
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Matemática, tecnologia e educação
              </p>
            </div>

          </div>

          <div className="mt-8 border-t border-slate-200 pt-6">
            <h2 className="text-xl font-semibold text-slate-900">
              Sobre mim
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Escreva aqui uma apresentação sobre sua trajetória,
              seus interesses acadêmicos, suas habilidades e seus
              objetivos profissionais.
            </p>
          </div>

        </section>

        {/* Informações do currículo */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">

          {/* Formação */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">
              Formação acadêmica
            </h2>

            <div className="mt-5 border-l-2 border-blue-600 pl-4">
              <h3 className="font-semibold text-slate-800">
                Bacharelado em Matemática
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Nome da universidade
              </p>

              <p className="mt-2 text-sm text-slate-600">
                Descreva seus estudos e áreas de interesse.
              </p>
            </div>
          </section>

          {/* Habilidades */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">
              Habilidades
            </h2>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Python",
                "Nodejs",
                "Lua",
                "Back-end",
                "Otimizaçao",
                "Banco de dados",
                "Análise de Dados", 
              ].map((habilidade) => (
                <span
                  key={habilidade}
                  className="rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-700"
                >
                  {habilidade}
                </span>
              ))}
            </div>
          </section>

          {/* Projetos */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">
              Projetos
            </h2>

            <div className="mt-5 space-y-4">
              <div>
                <h3 className="font-semibold text-slate-800">
                  Projeto acadêmico
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Descreva um projeto que você desenvolveu,
                  o problema que ele resolve e as tecnologias usadas.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-800">
                  Projeto pessoal
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Adicione outro projeto relevante para seu currículo.
                </p>
              </div>
            </div>
          </section>

          {/* Experiência */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">
              Experiência
            </h2>

            <p className="mt-5 text-sm leading-6 text-slate-600">
              Adicione experiências profissionais, iniciação
              científica, monitorias, atividades acadêmicas ou
              trabalhos voluntários.
            </p>
          </section>

        </div>

        {/* Rodapé */}
        <footer className="py-8 text-center text-sm text-slate-500">
          Currículo acadêmico e profissional
        </footer>

      </div>
    </main>
    </body>
  );
}
