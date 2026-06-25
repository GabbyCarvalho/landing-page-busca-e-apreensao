import "./Politica.css"
import {FiShield, FiDatabase, FiEye, FiShare2, FiLock, FiUser, FiExternalLink, FiRefreshCw, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa"

const sections = [
  {
    icon: <FiUser />,
    title: "Quem somos",
    content: (
      <>
        <p>
          O website <strong>pedroenaidhig.adv.br</strong> é mantido por{" "}
          <strong>Pedro & Naidhig Sociedade de Advogados</strong>, responsável
          pelo tratamento dos dados pessoais coletados através deste website.
        </p>
        <div className="privContato">
          <span><FiMail /> contato@pntadvogados.com.br</span>
          <span>📞 (19) 3020-0163</span>
        </div>
      </>
    ),
  },
  {
    icon: <FiDatabase />,
    title: "Dados que coletamos",
    content: (
      <>
        <p>
          Poderemos coletar os dados fornecidos voluntariamente por você através
          do formulário de contato:
        </p>
        <div className="privTagsGrid">
          {["Nome completo", "Telefone / WhatsApp", "E-mail", "Área de interesse jurídica", "Modalidade de atendimento", "Mensagem enviada"].map((t) => (
            <span className="privTag" key={t}>{t}</span>
          ))}
        </div>
        <p style={{ marginTop: "1.25rem" }}>
          Também poderão ser coletados automaticamente dados técnicos de
          navegação — como endereço IP, navegador, dispositivo, data e páginas
          acessadas — por ferramentas como o Google Analytics, exclusivamente
          para fins estatísticos e melhoria da experiência.
        </p>
      </>
    ),
  },
  {
    icon: <FiEye />,
    title: "Para que usamos seus dados",
    content: (
      <>
        <p>Os dados coletados poderão ser utilizados para:</p>
        <ul className="privList">
          <li>Responder às suas solicitações e tirar dúvidas</li>
          <li>Entrar em contato via e-mail, telefone ou WhatsApp</li>
          <li>Realizar triagem inicial do atendimento jurídico</li>
          <li>Agendar reuniões, consultas ou atendimentos</li>
          <li>Melhorar a experiência de navegação no website</li>
          <li>Cumprir obrigações legais e regulatórias</li>
        </ul>
      </>
    ),
  },
  {
    icon: <FiShare2 />,
    title: "Compartilhamento de dados",
    content: (
      <>
        <p>
          O Pedro & Naidhig Sociedade de Advogados{" "}
          <strong>não comercializa, vende ou compartilha</strong> dados pessoais
          com terceiros para fins comerciais.
        </p>
        <p>
          O compartilhamento ocorre apenas quando estritamente necessário com
          prestadores de hospedagem, ferramentas de análise como o Google
          Analytics, e autoridades públicas quando houver obrigação legal.
        </p>
      </>
    ),
  },
  {
    icon: <FiLock />,
    title: "Cookies",
    content: (
      <p>
        Este website poderá utilizar cookies e tecnologias semelhantes para
        garantir o funcionamento adequado, obter estatísticas de acesso e
        melhorar a experiência do usuário. Você pode configurar seu navegador
        para bloquear ou remover cookies a qualquer momento, embora algumas
        funcionalidades possam ser impactadas.
      </p>
    ),
  },
  {
    icon: <FiShield />,
    title: "Armazenamento e segurança",
    content: (
      <p>
        Adotamos medidas técnicas, administrativas e organizacionais razoáveis
        para proteger seus dados pessoais contra acesso não autorizado, perda,
        alteração ou destruição indevida. Apesar dos esforços empregados, nenhum
        ambiente digital é completamente isento de riscos.
      </p>
    ),
  },
  {
    icon: <FiUser />,
    title: "Seus direitos",
    content: (
      <>
        <p>
          Nos termos da LGPD, você pode solicitar, a qualquer momento, através
          do e-mail <strong>contato@pntadvogados.com.br</strong>:
        </p>
        <ul className="privList">
          <li>Confirmação da existência de tratamento dos seus dados</li>
          <li>Acesso aos seus dados pessoais</li>
          <li>Correção de dados incompletos, inexatos ou desatualizados</li>
          <li>Exclusão de dados pessoais, quando aplicável</li>
          <li>Revogação do consentimento</li>
        </ul>
      </>
    ),
  },
  {
    icon: <FiExternalLink />,
    title: "Links externos",
    content: (
      <p>
        Este website poderá conter links para websites de terceiros. O Pedro &
        Naidhig Sociedade de Advogados não se responsabiliza pelas políticas de
        privacidade ou práticas adotadas por esses websites externos.
      </p>
    ),
  },
  {
    icon: <FiRefreshCw />,
    title: "Atualizações desta política",
    content: (
      <p>
        Esta Política de Privacidade poderá ser atualizada periodicamente para
        refletir alterações legais, técnicas ou operacionais. Recomendamos que
        você consulte esta página regularmente para estar ciente de eventuais
        mudanças.
      </p>
    ),
  },
];

export default function Privacidade() {
    
  return (
    <div className="privPage">

      {/* ── HERO ── */}
      <section className="privHero">
        <div className="privHeroBg" />
        <div className="privHeroInner">
          <div className="privShieldBadge">
            <FiShield />
          </div>
          <span className="heroTag">Transparência & Proteção</span>
          <h1 className="privHeroTitle">Política de Privacidade</h1>
          <p className="privHeroSub">
            Em conformidade com a Lei Geral de Proteção de Dados
            <br />
            <strong>LGPD — Lei nº 13.709/2018</strong>
          </p>
          <span className="privData">Última atualização: 27 de maio de 2026</span>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="privIntro">
        <div className="privContainer">
          <p>
            Esta Política de Privacidade descreve como o{" "}
            <strong>Pedro & Naidhig Sociedade de Advogados</strong> coleta,
            utiliza, armazena e protege os dados pessoais dos usuários que
            acessam este website. Ao utilizá-lo, você declara estar ciente dos
            termos aqui descritos.
          </p>
        </div>
      </section>

      {/* ── SEÇÕES ── */}
      <section className="privSections">
        <div className="privContainer">
          {sections.map((s, i) => (
            <div className="privCard" key={i}>
              <div className="privCardIcon">{s.icon}</div>
              <div className="privCardBody">
                <h2 className="privCardTitle">{s.title}</h2>
                <div className="privCardContent">{s.content}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── RODAPÉ CTA ── */}
     {/* ── FOOTER ── */}
      <footer className="lp-footer">
        <p>
          OAB do escritório: 62676 <br/>
          CNPJ escritório: 62.347.819/0001-87 <br/><br/>
          © 2026 Pedro & Naidhig Advogados Associados.<br />
          Todos os direitos reservados.
        </p>
        <div className="lp-footer-links">
          <a href="/politica-de-privacidade">Política de Privacidade</a>
          <a href="https://wa.me/SEUNUMERO" target="_blank" rel="noreferrer">
            <FaWhatsapp style={{ marginRight: 4 }} /> WhatsApp
          </a>
        </div>
      </footer>

    </div>
  );
}