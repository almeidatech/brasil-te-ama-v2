import { Link } from 'react-router-dom';
import { NewsCardTriptych, StoryCard } from '../components';
import Footer from '../components/Footer.jsx';
import './Noticias.css';

const navLinkStyle = { color: 'inherit', textDecoration: 'none' };
const ctaLinkStyle = { display: 'inline-block', textDecoration: 'none' };

export default function Noticias() {
  return (
    <div className="page-noticias">
      <h2 className="sr-only">Wireframe da página Notícias — Instituto Brasil Te Ama — posts do site atual categorizados e clipping de imprensa</h2>

      <nav className="nav">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="nav-logo">
            <img src="/images/logo.png" alt="Instituto Brasil Te Ama" className="logo-img" />
            <div className="logo-name">Instituto Brasil Te Ama</div>
          </div>
        </Link>
        <div className="nav-links">
          <Link to="/" style={navLinkStyle}>Home</Link><Link to="/sobre" style={navLinkStyle}>Sobre</Link><Link to="/lideranca" style={navLinkStyle}>Liderança</Link><Link to="/selo" style={navLinkStyle}>Selo Brasil Te Ama</Link>
          <Link to="/projetos" style={navLinkStyle}>Projetos</Link><Link to="/noticias" className="nav-active" style={navLinkStyle}>Notícias</Link><Link to="/transparencia" style={navLinkStyle}>Transparência</Link><Link to="/contato" style={navLinkStyle}>Contato</Link>
        </div>
        <Link to="/contato" className="nav-cta" style={ctaLinkStyle}>Quero ser parceiro</Link>
      </nav>

      <div className="hero">
        <div className="hero-eyebrow">Notícias e atualizações</div>
        <h1 className="hero-headline">O que o Instituto está fazendo — em tempo real.</h1>
        <p className="hero-sub">Ações em campo, parcerias, eventos e cobertura de imprensa. Tudo documentado, com data e responsável identificado.</p>
      </div>

      <div className="section">
        <div className="aviso-box">
          <div className="aviso-title">O que foi aproveitado do site atual</div>
          <div className="aviso-text">O site atual tem 9 posts publicados no blog entre abril e julho de 2025 — todos com conteúdo real, datas reais e ações verificáveis. Todos foram aproveitados, recategorizados e enriquecidos com metadados. Nenhum foi descartado. Os 4 links de imprensa confirmados (Defensoria DF, Agência Brasília, Metrópoles, Lo Scudo) foram adicionados como seção dedicada de clipping.</div>
        </div>
        <div className="filtros">
          <div className="filtro filtro-active">Todas</div>
          <div className="filtro">Ações em campo</div>
          <div className="filtro">Parcerias</div>
          <div className="filtro">Eventos</div>
          <div className="filtro">Imprensa</div>
        </div>

        <div className="section-label">Destaque — notícia principal</div>
        <NewsCardTriptych
          variant="landscape-pair"
          size="featured"
          kicker="DESTAQUE / AÇÕES EM CAMPO"
          date="21 mai 2025"
          headline="Dia de Cidadania e Solidariedade na Rodoviária do Plano Piloto"
          lead="A Rodoviária do Plano Piloto foi palco da Quarta do Cidadão, com serviços de cidadania, justiça e cuidado em parceria com a Defensoria Pública do DF."
          href="https://institutobrasilteama.org/2025/05/22/dia-de-cidadania-e-solidariedade-na-rodoviaria-do-plano-piloto-dpdf-e-brasil-te-ama-em-acao/"
          images={[
            { src: '/images/cidadania-01.jpg', alt: 'Dia de Cidadania e Solidariedade na Rodoviária do Plano Piloto' },
            { src: '/images/cidadania-02.jpg', alt: 'Cerimônia de boas-vindas aos participantes' },
            { src: '/images/cidadania-03.jpg', alt: 'Beneficiários recebendo atendimentos' }
          ]}
        />
      </div>

      <div className="section">
        <div className="section-label">Notícias recentes — todos os posts do site atual (2025)</div>
        <div className="cards-grid">
          {/* Row 1: Triptych (hero-stack) + Triptych (mosaic) */}
          <NewsCardTriptych
            variant="hero-stack"
            kicker="EVENTOS"
            date="27 mai 2025"
            headline="Lançamento do Instituto Brasil Te Ama reúne convidados especiais"
            lead="Jantar memorável reunindo fundadores, lideranças e parceiros em celebração do novo instituto."
            href="https://institutobrasilteama.org/2025/05/27/lancamento-do-instituto-brasil-te-ama-reune-convidados-especiais-em-noite-memoravel/"
            images={[
              { src: '/images/lancamento-01.jpg', alt: 'Lançamento do Instituto Brasil Te Ama' },
              { src: '/images/nicoletti-vertical.jpg', alt: 'Franco Nicoletti na cerimônia' },
              { src: '/images/nicoletti-horizontal.jpg', alt: 'Momento de celebração com convidados' }
            ]}
          />
          <NewsCardTriptych
            variant="mosaic"
            kicker="PARCERIAS"
            date="5 mai 2025"
            headline="23ª Edição do Dia da Mulher — parceria com Defensoria Pública do DF"
            lead="Evento transformador oferecendo mais de 1.000 serviços à população feminina."
            href="https://institutobrasilteama.org/2025/05/05/elementor-421/"
            images={[
              { src: '/images/nicoletti-vertical.jpg', alt: 'Mulheres em atendimento' },
              { src: '/images/maes-01.jpg', alt: 'Momento de cuidado em ação' },
              { src: '/images/cidadania-04.jpg', alt: 'Participantes do evento' }
            ]}
          />

          {/* Row 2: Story cards */}
          <StoryCard
            kicker="AÇÕES EM CAMPO"
            date="11 mai 2025"
            headline="Ação Social em Arrozal — cidadania e cuidado à comunidade"
            lead="Parceria com DETRAN, DPDF e GDF levando serviços essenciais."
            href="https://institutobrasilteama.org/2025/05/11/acao-humanitaria-em-arrozal-df/"
            image={{ src: '/images/nigeria.jpg', alt: 'Ação Social em Arrozal' }}
          />
          <StoryCard
            kicker="IMPRENSA"
            date="11 abr 2025"
            headline="Instituto Brasil Te Ama na Rádio Sucesso — lançamento oficial"
            lead="Primeira aparição pública em entrevista ao vivo no programa É Só Subindo."
            href="https://institutobrasilteama.org/2025/04/11/instituto-brasil-te-ama-na-radio-sucesso/"
            image={{ src: '/images/institucional-widescreen.jpg', alt: 'Entrevista Rádio Sucesso' }}
          />

          {/* Row 3: Triptych (diagonal) + Story cards */}
          <NewsCardTriptych
            variant="diagonal"
            kicker="EVENTOS"
            date="15 jul 2025"
            headline="Encontro Inspirador com o Atleta Edilson"
            lead="Atleta de 75 anos compartilha seus êxitos em competições de corrida."
            href="https://institutobrasilteama.org/2025/07/15/encontro-inspirador-com-o-atleta-edilson/"
            images={[
              { src: '/images/edilson-01.jpg', alt: 'Atleta Edilson em pose vitoriosa' },
              { src: '/images/nicoletti-horizontal.jpg', alt: 'Momento de conversa com equipe' },
              { src: '/images/edilson-02.jpg', alt: 'Medalhas e conquistas apresentadas' }
            ]}
          />
          <StoryCard
            kicker="EVENTOS"
            date="27 jul 2025"
            headline="21ª Edição do World Police & Fire Games"
            lead="Participação institucional do Instituto em evento internacional."
            href="https://institutobrasilteama.org/2025/07/27/21a-edicao-do-world-police-fire/"
            image={{ src: '/images/wpfg-01.jpg', alt: 'World Police & Fire Games' }}
          />

          {/* Row 4: Story cards */}
          <StoryCard
            kicker="AÇÕES EM CAMPO"
            date="11 mai 2025"
            headline="Homenagem ao Dia das Mães — Instituto Brasil Te Ama"
            lead="Celebração de reconhecimento e cuidado com as mães do nosso Brasil."
            href="https://institutobrasilteama.org/2025/05/11/homenagem-ao-dia-das-maes-instituto-brasil-te-ama/"
            image={{ src: '/images/maes-01.jpg', alt: 'Homenagem ao Dia das Mães' }}
          />
          <StoryCard
            kicker="AÇÕES EM CAMPO"
            date="1 abr 2025"
            headline="Atleta amador de 75 anos brilha em competições em Goiás"
            lead="Edilson da Costa Dias conquista 1º lugar — história de superação apoiada."
            href="https://institutobrasilteama.org/2025/04/01/atleta-amador-de-75-anos-brilha-em-competicoes-de-corrida-e-conquista-duas-vitorias-em-goias/"
            image={{ src: '/images/edilson-02.jpg', alt: 'Atleta Edilson em competição' }}
          />
        </div>
      </div>

      <div className="section">
        <div className="section-label">Clipping de imprensa — cobertura externa confirmada</div>
        <div className="imprensa-grid">
          <a href="https://www.defensoria.df.gov.br/parceria-entre-dpdf-e-instituto-brasil-te-ama-amplia-servicos-da-quarta-do-cidadao-com-assistencia-odontologica/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div className="imprensa-card">
              <div className="imprensa-source">Defensoria Pública do DF · Institucional</div>
              <div className="imprensa-title">Parceria entre DPDF e Instituto Brasil Te Ama amplia serviços da Quarta do Cidadão com assistência odontológica</div>
              <div className="imprensa-meta">defensoria.df.gov.br · 2025 <span className="annotation ready" style={{ marginLeft: '4px' }}>link confirmado</span></div>
            </div>
          </a>
          <a href="https://www.agenciabrasilia.df.gov.br/w/servicos-do-evento-quarta-do-cidadao-sao-ampliados-com-assistencia-odontologica" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div className="imprensa-card">
              <div className="imprensa-source">Agência Brasília · Governo do DF</div>
              <div className="imprensa-title">Serviços do evento Quarta do Cidadão são ampliados com assistência odontológica</div>
              <div className="imprensa-meta">agenciabrasilia.df.gov.br · 2025 <span className="annotation ready" style={{ marginLeft: '4px' }}>link confirmado</span></div>
            </div>
          </a>
          <a href="https://www.metropoles.com/distrito-federal/quarta-do-cidadao-reune-servicos-para-homens-vulneraveis" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div className="imprensa-card">
              <div className="imprensa-source">Metrópoles · Grande imprensa</div>
              <div className="imprensa-title">Quarta do Cidadão reúne serviços para homens vulneráveis</div>
              <div className="imprensa-meta">metropoles.com · 2025 <span className="annotation ready" style={{ marginLeft: '4px' }}>link confirmado</span></div>
            </div>
          </a>
          <a href="https://loscudomagazine.it" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div className="imprensa-card">
              <div className="imprensa-source">Lo Scudo Magazine · Internacional</div>
              <div className="imprensa-title">25 artigos publicados — trajetória e projetos do Instituto Brasil Te Ama</div>
              <div className="imprensa-meta">loscudomagazine.it · 2024–2026 <span className="annotation ready" style={{ marginLeft: '4px' }}>confirmado</span></div>
            </div>
          </a>
          <a href="https://www.ultimahoraonline.com.br/noticia/fundador-franco-nicoletti-e-presidente-shirin-vafaein-explica-como-o-instituto-brasil-te-ama-conecta-quem-pode-ajudar-a-quem-precisa" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div className="imprensa-card">
              <div className="imprensa-source">Última Hora Online</div>
              <div className="imprensa-title">Fundador Franco Nicoletti e presidente Shirin Vafaein explicam como o Instituto conecta quem pode ajudar a quem precisa</div>
              <div className="imprensa-meta">ultimahoraonline.com.br <span className="annotation ready" style={{ marginLeft: '4px' }}>link confirmado</span></div>
            </div>
          </a>
          <div className="imprensa-card">
            <div className="imprensa-source">Rádio Sucesso</div>
            <div className="imprensa-title">Instituto Brasil Te Ama no programa É Só Subindo — lançamento oficial em entrevista ao vivo</div>
            <div className="imprensa-meta">Rádio Sucesso · abr/2025 <span className="annotation pending" style={{ marginLeft: '4px' }}>link a confirmar</span></div>
          </div>
        </div>
      </div>

      <div className="section" style={{ borderBottom: 'none' }}>
        <div className="section-label">Atualizações e responsável editorial</div>
        <div className="cta-newsletter">
          <div className="cta-newsletter-text">
            <h3>Fique por dentro das ações do Instituto</h3>
            <p>Acompanhe projetos, parcerias e resultados diretamente no seu e-mail.<br/>
            <span className="annotation pending" style={{ fontSize: '9px' }}>responsável pela atualização contínua — a definir pela equipe</span></p>
          </div>
          <div className="cta-newsletter-form">
            <div className="cta-newsletter-input">seu@email.com.br</div>
            <button className="cta-newsletter-btn">Assinar →</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
