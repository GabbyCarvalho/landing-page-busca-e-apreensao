import { useState } from "react";
import { FaWhatsapp,FaStar,  FaGavel, FaCar, FaExclamationTriangle, FaShieldAlt, FaCheckCircle, FaClock, FaUndoAlt, FaPlus, FaMinus  } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import "./BuscaApreensao.css";
import apreensao from "./assets/apreensao.jpg"
import victor from "./assets/victor.jpeg"
import pedro from "./assets/pedro.jpeg"
import logo from "./assets/logo.png"
// ─── DADOS ──────────────────────────────────────────────────────────────────
const faqs = [
  {
    pergunta: "A Busca e Apreensão do meu veículo é legal?",
    resposta: "O procedimento pode ser legal, mas <strong>em muitos casos o banco comete erros processuais que tornam a apreensão ilegal</strong>. Questões como notificação inválida, cálculo incorreto da dívida ou cláusulas abusivas no contrato podem ser utilizadas na sua defesa. Por isso, a análise do caso por um advogado especializado é fundamental.",
  },
  {
    pergunta: "Tenho apenas 5 dias — o que acontece se eu não agir?",
    resposta: "Se você não interpuser a defesa dentro do prazo de 5 dias, <strong>a propriedade e a posse do veículo passam definitivamente para o banco</strong>. A partir daí, o banco pode vender o carro diretamente ou leiloá-lo. Além disso, se o valor obtido não quitar a dívida, você continuará devendo o saldo restante.",
  },
  {
    pergunta: "Posso perder outros bens além do veículo?",
    resposta: "Sim. <strong>Se o valor arrecadado com a venda do veículo não quitar o saldo devedor</strong>, o banco pode converter a ação em execução e buscar outros bens seus — além de manter seu nome nos órgãos de proteção ao crédito até a quitação total. Agir rapidamente é a melhor forma de evitar esse cenário.",
  },
  {
    pergunta: "Ainda consigo recuperar meu carro após a apreensão?",
    resposta: "Sim, há grandes chances de recuperação, <strong>especialmente se o banco cometeu irregularidades no processo</strong>. Nossa equipe analisa todos os documentos do contrato e da ação para identificar nulidades e construir a defesa mais eficaz para o seu caso.",
  },
  {
    pergunta: "Quanto custa a análise do meu caso?",
    resposta: "Cada situação exige uma <strong>avaliação individual.</strong> Entre em contato para que possamos entender o seu caso e fornecer informações claras sobre os próximos passos e eventuais custos envolvidos."
  },
  {
    pergunta: "O atendimento pode ser feito de forma online?",
    resposta: "Sim. <strong>Atendemos em todo o Brasil</strong>, de forma presencial ou totalmente online. Nossa estrutura tecnológica permite conduzir todo o processo de defesa sem que você precise sair de casa — do primeiro contato até a resolução do caso.",
  },
];

const riscos = [
  {
    titulo: "Leilão em 5 dias",
    desc: "Sem defesa, o banco pode vender ou leiloar seu veículo em apenas 5 dias após a apreensão.",
    icon: <FaClock />,
  },
  {
    titulo: "Dívida continua existindo",
    desc: "Mesmo perdendo o carro, o saldo devedor pode permanecer e comprometer outros bens.",
    icon: <FaExclamationTriangle />,
  },
  {
    titulo: "Histórico de crédito afetado",
    desc: "Seu CPF pode ficar negativado até a quitação integral, impedindo novos financiamentos.",
    icon: <FaShieldAlt />,
  },
    {
    titulo: "Perda definitiva não é automática",
    desc: "A apreensão do veículo não significa que tudo está perdido. Existem medidas legais que podem ser analisadas para cada situação.",
    icon: <FaGavel />,
  },
    {
    titulo: "Possíveis irregularidades no contrato",
    desc: "Juros abusivos, encargos indevidos e falhas no processo de busca e apreensão podem ser questionados judicialmente, dependendo do caso.",
    icon: <FaUndoAlt />,
  },
];

const servicos = [
  {
    icon: <FaGavel />,
    titulo: "Defesa em Busca e Apreensão",
    desc: "Analisamos o contrato e todo o processo para identificar irregularidades e construir a defesa mais sólida possível dentro do prazo legal.",
  },
  {
    icon: <FaCheckCircle />,
    titulo: "Revisão de Financiamentos",
    desc: "Identificamos cláusulas abusivas, juros acima do permitido e cobranças indevidas que podem reduzir significativamente o valor da sua dívida.",
  },
  {
    icon: <FaCar />,
    titulo: "Recuperação do Veículo",
    desc: "Atuamos com urgência para obter liminares e decisões judiciais que assegurem a devolução imediata do seu veículo.",
  },
];

// Avaliações do Google
const avaliacoes = [
  {
    nome: "Carlos M.",
    nota: 5,
    texto: "Recuperei meu veículo apreendido em menos de uma semana! Equipe muito competente e atenciosa, me orientaram em cada etapa do processo.",
    data: "há 2 semanas",
  },
  {
    nome: "Fernanda Ribeiro",
    nota: 5,
    texto: "Fui surpreendida com a eficiência. Carro apreendido numa sexta, segunda já tinha advogado cuidando do caso. Recomendo muito!",
    data: "há 1 mês",
  },
  {
    nome: "Roberto Santos",
    nota: 5,
    texto: "Além de recuperar meu carro, ainda conseguiram reduzir o saldo devedor do financiamento. Serviço excelente e transparente.",
    data: "há 1 mês",
  },
  {
    nome: "Juliana Silva",
    nota: 5,
    texto: "Atendimento 100% online, rápido e eficiente. Não precisei sair de casa e consegui reverter a busca e apreensão do meu veículo.",
    data: "há 2 meses",
  },
];


// ─── COMPONENTE ─────────────────────────────────────────────────────────────
export default function BuscaApreensao() {
  const [faqAberto, setFaqAberto] = useState(null);
  const WA_LINK =
    "https://wa.me/1930200163?text=Ol%C3%A1%2C%20tive%20meu%20ve%C3%ADculo%20apreendido%20e%20preciso%20de%20orienta%C3%A7%C3%A3o%20urgente.";

  const toggleFaq = (i) => setFaqAberto(faqAberto === i ? null : i);
  const renderEstrelas = (nota) =>
    Array.from({ length: nota }, (_, i) => (
      <FaStar key={i} className="lp-estrela" />
    ));


  return (
    <>
      {/* ── HERO ── */}
      <section className="lp-hero">
        {/* LEFT */}
        <div className="lp-hero-left">

          <div className="lp-logo">
            <img src={logo} alt="Pedro & Naidhig Advogados Associados" />
          </div>

            <h1 className="lp-hero-titulo">
              Veículo apreendido em <em>busca e apreensão</em>?<br />
             É possível <em>recuperar seu carro</em> mas o prazo está correndo.
            </h1>



          <div className="lp-hero-ctas">
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="lp-btn-primary">
              <FaWhatsapp /> Quero minha defesa agora
            </a>
            <a href="#faq" className="lp-btn-ghost">
              Entender meus direitos
            </a>
          </div>

          <div className="lp-hero-urgencia-mobile">
            <FaExclamationTriangle />
            <p>
              A apreensão <strong>não</strong> significa perda definitiva.{" "}
              Você tem apenas <strong>5 dias</strong> para agir antes que o
              banco possa leiloar seu carro.
            </p>
          </div>
        </div>

        {/* RIGHT — foto do carro */}
        <div className="lp-hero-right">
          
          <img
            src={apreensao}
            alt="Veículo apreendido"
            className="lp-hero-foto"
          />
       
          <div className="lp-hero-right-box">
            <FaExclamationTriangle />
            <p>
              A apreensão <strong>não</strong> significa perda definitiva. <br/>
              Você tem apenas <strong>5 dias</strong> para agir antes que o banco possa leiloar seu carro.
             Estamos aqui para te ajudar!
            </p>
          </div>
          <div className="lp-hero-foto-overlay" />
        </div>
      </section>

      {/* ── SOBRE NÓS ── */}
      <div className="lp-full-section-intro" id="sobre">
        <div className="lp-section">

          {/* Cabeçalho */}
          <div className="lp-sobre-header">
            <div className="lp-label">Quem somos</div>
            <h2 className="lp-titulo-secao-intro">
              Pedro & Naidhig<br /><em>Advogados Associados</em>
            </h2>
          </div>

          {/* Texto + fotos lado a lado */}
          <div className="lp-sobre-novo-grid">

            {/* Coluna de texto */}
            <div className="lp-sobre-novo-texto">
              <div className="lp-oab-badge">
                <FaShieldAlt /> Sociedade de Advogados
              </div>
              <p>
                A Pedro & Naidhig Sociedade de Advogados nasceu da união da experiência, da
                confiança e dos valores compartilhados por seus sócios fundadores, que ao longo
                de suas trajetórias profissionais construíram uma{" "}
                <strong>sólida atuação em diferentes áreas do Direito</strong>. Desde sua
                fundação, o escritório tem como compromisso oferecer atendimento jurídico
                personalizado, pautado pela ética, transparência e excelência técnica.
              </p>
              <p>
                Com uma abordagem estratégica e foco na defesa dos interesses de seus clientes,
                o escritório atua na análise e condução de demandas complexas, buscando sempre{" "}
                <strong>soluções seguras e eficazes</strong>. Na área de busca e apreensão de
                veículos, presta suporte jurídico especializado para consumidores que enfrentam
                dificuldades relacionadas a financiamentos, negociações bancárias e processos
                judiciais, oferecendo orientação clara e acompanhamento próximo em todas as
                etapas.
              </p>
              <p>
                Mais do que prestar serviços jurídicos, buscamos{" "}
                <strong>construir relações de confiança</strong>, proporcionando segurança e
                tranquilidade para que nossos clientes possam tomar decisões com respaldo
                jurídico e confiança.
              </p>

              {/* Números */}
              <div className="lp-numeros-inline">
                <div className="lp-numero-inline-item">
                  <div className="lp-numero-val">+500</div>
                  <div className="lp-numero-label">Processos defendidos</div>
                </div>
                <div className="lp-numero-inline-item">
                  <div className="lp-numero-val">10+</div>
                  <div className="lp-numero-label">Anos de experiência</div>
                </div>
                <div className="lp-numero-inline-item lp-numero-inline-last">
                  <div className="lp-numero-val">100%</div>
                  <div className="lp-numero-label">Brasil coberto</div>
                </div>
              </div>

              <a href={WA_LINK} target="_blank" rel="noreferrer" className="lp-btn-primary">
                <FaWhatsapp /> Falar com um advogado
              </a>
            </div>

            {/* Fotos dos sócios */}
            <div className="lp-socios-fotos">
              <div className="lp-socio-card">
                <div className="lp-socio-foto-placeholder">
                   <img src={pedro} alt="Pedro" /> 
                </div>
                <div className="lp-socio-info">
                  <strong>Pedro</strong>
                  <span>Sócio Fundador</span>
                  <span>OAB: 329.648</span>
                </div>
              </div>
              <div className="lp-socio-card">
                <div className="lp-socio-foto-placeholder">
                  <img src={victor} alt="Naidhig" /> 
                </div>
                <div className="lp-socio-info">
                  <strong>Victor</strong>
                  <span>Sócio Fundador</span>
                  <span>OAB: 330.578</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── PROBLEMA ── */}
      <div className="lp-full-section">
        <div className="lp-section">
          <div className="lp-problema-grid">
            <div>
              <div className="lp-label">O que está em jogo</div>
              <h2 className="lp-titulo-secao">
                A demora pode<br />custar muito mais<br />do que o carro.
              </h2>
              <div className="lp-problema-texto">
                  <p>
                    A <strong>Busca e Apreensão</strong> é um procedimento judicial que permite ao banco{" "}
                    retomar o veículo dado em garantia de financiamento. Se você está enfrentando
                    um caso de <strong>veículo apreendido</strong> ou <strong>carro apreendido</strong>,
                    saiba que a apreensão <strong>nem sempre significa a perda definitiva do bem</strong>. Em muitos
                    casos, ainda  <strong>é possível recuperar o veículo</strong> por meio das medidas
                    jurídicas adequadas.
                  </p>
                   <p>
                    O processo de <strong>Busca e Apreensão</strong> costuma ser rápido, mas existem
                    defesas legais eficazes quando acionadas dentro do prazo. O que muitos não
                    sabem é que os bancos frequentemente cometem <strong>erros processuais e utilizam
                    cláusulas abusivas</strong> nos contratos, o que pode tornar a apreensão ilegal ou
                    reduzir significativamente o valor da dívida, aumentando as chances de
                    <strong> recuperar o veículo apreendido</strong>.
                  </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="lp-btn-primary"
                  style={{ marginTop: "1rem" }}
                >
                  <FaWhatsapp /> Análise gratuita agora
                </a>
              </div>
            </div>
            <div>
              <ul className="lp-risco-list">
                {riscos.map((r, i) => (
                  <li key={i}>
                    {r.icon}
                    <div>
                      <div className="lp-risco-titulo">{r.titulo}</div>
                      <div className="lp-risco-desc">{r.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

        {/* ── AVALIAÇÕES DO GOOGLE ── */}
      <div className="lp-full-section-intro" id="avaliacoes">
        <div className="lp-section">
          <div className="lp-label">Avaliações Google</div>
          <h2 className="lp-titulo-secao-intro">
            O que dizem nossos clientes
          </h2>
          <div className="lp-avaliacoes-nota-geral">
            <div className="lp-avaliacoes-nota-numero">5,0</div>
            <div className="lp-avaliacoes-nota-info">
              <div className="lp-avaliacoes-estrelas">
                {renderEstrelas(5)}
              </div>
              <div className="lp-avaliacoes-google-label">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ verticalAlign: "middle", marginRight: 4 }}>
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google — Avaliações verificadas
              </div>
            </div>
          </div>
          <div className="lp-avaliacoes-grid">
            {avaliacoes.map((av, i) => (
              <div className="lp-avaliacao-card" key={i}>
                <div className="lp-avaliacao-header">
                  <div className="lp-avaliacao-avatar">{av.nome.charAt(0)}</div>
                  <div>
                    <div className="lp-avaliacao-nome">{av.nome}</div>
                    <div className="lp-avaliacao-estrelas">{renderEstrelas(av.nota)}</div>
                  </div>
                  <div className="lp-avaliacao-data">{av.data}</div>
                </div>
                <p className="lp-avaliacao-texto">{av.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── COMO AJUDAMOS ── */}
      <div className="lp-full-section-alt">
        <div className="lp-section">
          <div className="lp-label">Nossa atuação</div>
          <h2 className="lp-titulo-secao">
            Conheça outras áreas em que podemos atuar<br/> para defender <em>seus direitos e interesses</em>
          </h2>
          <div className="lp-como-grid">
            {servicos.map((s, i) => (
              <div className="lp-como-card" key={i}>
                <div className="lp-como-icon">{s.icon}</div>
                <h3>{s.titulo}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>



      {/* ── FAQ ── */}
      <div className="lp-full-section-dark" id="faq">
        <div className="lp-section">
          <div className="lp-label">Perguntas frequentes</div>
          <h2 className="lp-titulo-secao">
            Entenda <em>seus direitos</em>
          </h2>
          <div className="lp-faq-list">
            {faqs.map((f, i) => (
              <div className="lp-faq-item" key={i}>
                <button className="lp-faq-btn" onClick={() => toggleFaq(i)}>
                  <span className="lp-faq-pergunta">{f.pergunta}</span>
                  <span className="lp-faq-icone">
                    {faqAberto === i ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>
                {faqAberto === i && (
                  <div
                    className="lp-faq-resposta"
                    dangerouslySetInnerHTML={{ __html: f.resposta }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA FINAL ── */}
      <div className="lp-cta-final">
        <div className="lp-label" style={{ justifyContent: "center" }}>
          Análise gratuita
        </div>
        <h2 className="lp-cta-titulo">
          Não deixe o prazo<br />encerrar <em>sem agir.</em>
        </h2>
        <p className="lp-cta-sub">
         Descubra qual é o melhor caminho para o seu caso com orientação especializada.
        </p>
        <div className="lp-cta-final-btns">
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="lp-btn-primary">
            <FaWhatsapp /> Quero minha defesa agora
          </a>

        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="lp-footer">
        <p> OAB do escritório: 62676 <br/>
          CNPJ escritório: 62.347.819/0001-87 <br/><br/>
          © 2026 Pedro & Naidhig Advogados Associados.<br />
          Todos os direitos reservados.
        </p>
        <div className="lp-footer-links">
          <a href="/politica-de-privacidade">Política de Privacidade</a>
          {/* <a href="/contato">Contato</a> */}
          <a href={WA_LINK} target="_blank" rel="noreferrer">
            <FaWhatsapp style={{ marginRight: 4 }} /> WhatsApp
          </a>
        </div>
      </footer>

      {/* ── WHATSAPP FLUTUANTE ── */}
      <a href={WA_LINK} target="_blank" rel="noreferrer" className="lp-float-wa" aria-label="WhatsApp">
        <FaWhatsapp />
      </a>
    </>
  );
}