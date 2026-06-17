import { useState } from "react";
import { FaWhatsapp, FaChevronDown, FaChevronUp, FaGavel, FaCar, FaExclamationTriangle, FaShieldAlt, FaCheckCircle, FaClock } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import "./BuscaApreensao.css";
import apreensao from "./assets/apreensao.jpg"
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


// ─── COMPONENTE ─────────────────────────────────────────────────────────────
export default function BuscaApreensao() {
  const [faqAberto, setFaqAberto] = useState(null);
  const WA_LINK =
    "https://wa.me/SEUNUMERO?text=Ol%C3%A1%2C%20tive%20meu%20ve%C3%ADculo%20apreendido%20e%20preciso%20de%20orienta%C3%A7%C3%A3o%20urgente.";

  const toggleFaq = (i) => setFaqAberto(faqAberto === i ? null : i);

  return (
    <>
      {/* ── HERO ── */}
      <section className="lp-hero">
        {/* LEFT */}
        <div className="lp-hero-left">
          <div className="lp-hero-eyebrow">
            <span>Defesa Especializada</span>
          </div>

          <h1 className="lp-hero-titulo">
            Seu veículo foi<br />
            apreendido?<br />
            <em>O prazo está correndo.</em>
          </h1>

          <p className="lp-hero-sub">
            Você tem apenas <strong style={{ color: "#f5f5f0" }}>5 dias</strong> para agir antes
            que o banco possa leiloar seu carro. Nossa equipe está pronta para defender seu caso
            imediatamente.
          </p>

          <div className="lp-hero-urgencia">
            <FaExclamationTriangle />
            <p>
              A apreensão não significa perda definitiva — existem meios legais para recuperar
              seu veículo. Estamos aqui para te ajudar!
            </p>
          </div>

          <div className="lp-hero-ctas">
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="lp-btn-primary">
              <FaWhatsapp /> Quero minha defesa agora
            </a>
            <a href="#faq" className="lp-btn-ghost">
              Entender meus direitos
            </a>
          </div>
        </div>

        {/* RIGHT — foto do carro */}
        <div className="lp-hero-right">
          {/* substitua src pelo import da sua foto: import fotoCarro from "./assets/carro.jpg" */}
          <img
            src={apreensao}
            alt="Veículo apreendido"
            className="lp-hero-foto"
          />
          <div className="lp-hero-foto-overlay" />
        </div>
      </section>

      {/* ── SOBRE NÓS ── */}
      <div className="lp-full-section-dark" id="sobre">
        <div className="lp-section">

          {/* Cabeçalho */}
          <div className="lp-sobre-header">
            <div className="lp-label">Quem somos</div>
            <h2 className="lp-titulo-secao">
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
                  {/* substitua por: <img src={fotoPedro} alt="Pedro" /> */}
                  <FaGavel />
                  <span>Foto — Pedro</span>
                </div>
                <div className="lp-socio-info">
                  <strong>Pedro</strong>
                  <span>Sócio Fundador</span>
                </div>
              </div>
              <div className="lp-socio-card">
                <div className="lp-socio-foto-placeholder">
                  {/* substitua por: <img src={fotoNaidhig} alt="Naidhig" /> */}
                  <FaGavel />
                  <span>Foto — Naidhig</span>
                </div>
                <div className="lp-socio-info">
                  <strong>Victor Naidhig</strong>
                  <span>Sóciof Fundador</span>
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
                  A Busca e Apreensão é um procedimento judicial que permite ao banco{" "}
                  <strong>retomar o veículo dado em garantia de financiamento</strong>. O processo
                  é rápido, mas existem defesas legais eficazes — se acionadas a tempo.
                </p>
                <p>
                  O que muitos não sabem é que os bancos frequentemente cometem{" "}
                  <strong>erros processuais e inserem cláusulas abusivas</strong> nos contratos, o
                  que pode tornar a apreensão ilegal ou reduzir significativamente o valor da
                  dívida.
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

      {/* ── COMO AJUDAMOS ── */}
      <div className="lp-full-section-alt">
        <div className="lp-section">
          <div className="lp-label">Nossa atuação</div>
          <h2 className="lp-titulo-secao">
            Conheça outras áreas em que podemos atuar<br/> para defender seus direitos e interesses
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
            Entenda seus direitos
          </h2>
          <div className="lp-faq-list">
            {faqs.map((f, i) => (
              <div className="lp-faq-item" key={i}>
                <button className="lp-faq-btn" onClick={() => toggleFaq(i)}>
                  <span className="lp-faq-pergunta">{f.pergunta}</span>
                  <span className="lp-faq-icone">
                    {faqAberto === i ? <FaChevronUp /> : <FaChevronDown />}
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
          Fale agora com um advogado especializado. A primeira consulta é gratuita e sem
          compromisso.
        </p>
        <div className="lp-cta-final-btns">
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="lp-btn-primary">
            <FaWhatsapp /> Quero minha defesa agora
          </a>
          <a href="mailto:contato@pedroenaidhig.adv.br" className="lp-btn-ghost">
            <FiMail /> Enviar e-mail
          </a>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer className="lp-footer">
        <p>
          © 2026 Pedro & Naidhig Advogados Associados.<br />
          Todos os direitos reservados.
        </p>
        <div className="lp-footer-links">
          <a href="/privacidade">Política de Privacidade</a>
          <a href="/contato">Contato</a>
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