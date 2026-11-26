"use client";

import { useState } from "react";
import {
  Activity,
  BarChart3,
  CircleHelp,
  Database,
  FileSpreadsheet,
  LayoutDashboard,
  Settings2,
  ShieldCheck,
  Sparkles,
  Table2,
} from "lucide-react";

const navigation = [
  { id: "overview", label: "Informações e gráficos", icon: LayoutDashboard },
  { id: "sheets", label: "Planilhas inteligentes", icon: Table2 },
  { id: "results", label: "Resultados", icon: BarChart3 },
] as const;

type Section = (typeof navigation)[number]["id"];

export default function Home() {
  const [active, setActive] = useState<Section>("overview");

  const current = navigation.find((item) => item.id === active)!;

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-symbol"><Sparkles size={23} /></div>
          <div>
            <div className="brand-name">KAEL<span>1.1</span></div>
            <div className="brand-caption">INTELLIGENCE PLATFORM</div>
          </div>
        </div>

        <div className="workspace">
          <div className="workspace-icon"><Activity size={18} /></div>
          <div>
            <strong>Seu espaço de trabalho</strong>
            <span>Ambiente inicial</span>
          </div>
        </div>

        <div className="nav-label">ESPAÇO DE TRABALHO</div>
        <nav className="navigation">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`nav-item ${active === item.id ? "active" : ""}`}
              >
                <Icon size={19} strokeWidth={1.8} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="sidebar-bottom">
          <div className="security-card">
            <ShieldCheck size={19} />
            <div>
              <strong>Precisão em primeiro lugar</strong>
              <span>Dados não são inventados.</span>
            </div>
          </div>
          <div className="sidebar-link"><Settings2 size={17} /> Configurações</div>
          <div className="sidebar-link"><CircleHelp size={17} /> Central de ajuda</div>
          <div className="sidebar-version">KAEL 1.1 · FUNDAÇÃO</div>
        </div>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <div className="breadcrumb">KAEL <span>/</span> {current.label}</div>
          <div className="environment">
            <span className="environment-dot" />
            Ambiente de desenvolvimento
          </div>
        </header>

        <section className="content">
          <div className="page-heading">
            <div>
              <div className="eyebrow"><Sparkles size={14} /> INTELIGÊNCIA OPERACIONAL</div>
              <h1>{current.label}</h1>
              <p>
                {active === "overview" && "Uma visão organizada da operação, alimentada pelos seus dados."}
                {active === "sheets" && "Organize informações com estruturas construídas exatamente conforme suas instruções."}
                {active === "results" && "Acompanhe análises e resultados calculados a partir dos dados fornecidos."}
              </p>
            </div>
            <div className="page-status"><span /> Fundação visual</div>
          </div>

          {active === "overview" && (
            <>
              <div className="metric-grid">
                {[
                  { title: "Dados cadastrados", icon: Database },
                  { title: "Registros analisados", icon: Activity },
                  { title: "Resultados gerados", icon: BarChart3 },
                ].map((metric) => {
                  const Icon = metric.icon;
                  return (
                    <article className="metric-card" key={metric.title}>
                      <div className="metric-top">
                        <span>{metric.title}</span>
                        <Icon size={19} />
                      </div>
                      <div className="metric-value">—</div>
                      <div className="metric-note">Aguardando dados de origem</div>
                    </article>
                  );
                })}
              </div>

              <div className="dashboard-grid">
                <article className="panel chart-panel">
                  <div className="panel-heading">
                    <div>
                      <h2>Visão dos dados</h2>
                      <p>Indicadores e evolução da operação</p>
                    </div>
                    <BarChart3 size={20} />
                  </div>
                  <div className="empty-state">
                    <div className="empty-icon"><Database size={25} /></div>
                    <h3>Nenhum dado conectado</h3>
                    <p>Os gráficos serão apresentados após a inclusão de dados reais.</p>
                  </div>
                </article>

                <article className="panel activity-panel">
                  <div className="panel-heading">
                    <div>
                      <h2>Atividade recente</h2>
                      <p>Histórico do espaço de trabalho</p>
                    </div>
                    <Activity size={20} />
                  </div>
                  <div className="empty-state compact">
                    <div className="empty-icon"><FileSpreadsheet size={24} /></div>
                    <h3>Aguardando atividade</h3>
                    <p>As ações realizadas aparecerão aqui.</p>
                  </div>
                </article>
              </div>

              <article className="precision-banner">
                <div className="precision-icon"><ShieldCheck size={21} /></div>
                <div>
                  <strong>Modo de precisão</strong>
                  <p>Nenhuma métrica, coluna ou informação será criada sem autorização ou dados de origem.</p>
                </div>
              </article>
            </>
          )}

          {active === "sheets" && (
            <article className="panel section-panel">
              <div className="large-icon"><Table2 size={28} /></div>
              <h2>Planilhas inteligentes</h2>
              <p>As planilhas serão construídas com os nomes de colunas e dados que você determinar. Sem campos extras ou valores inventados.</p>
              <div className="empty-note">Nenhuma planilha criada.</div>
            </article>
          )}

          {active === "results" && (
            <article className="panel section-panel">
              <div className="large-icon"><BarChart3 size={28} /></div>
              <h2>Central de resultados</h2>
              <p>Relatórios, cálculos e análises serão apresentados somente quando existirem dados suficientes para sustentá-los.</p>
              <div className="empty-note">Nenhum resultado disponível.</div>
            </article>
          )}

          <footer className="footer">
            <span>KAEL 1.1</span>
            <span>Inteligência operacional com rastreabilidade.</span>
          </footer>
        </section>
      </main>
    </div>
  );
}
