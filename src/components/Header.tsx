import React from 'react';
import { Calendar, CalendarDays, Users, Plus, RefreshCw, Sparkles, Coins, Settings2 } from 'lucide-react';
import { ConfiguracaoPrecos } from '../types';

export type AbaNavegacao = 'diaria' | 'semanal' | 'mensal' | 'pacientes';

interface HeaderProps {
  abaAtiva: AbaNavegacao;
  onAbaChange: (aba: AbaNavegacao) => void;
  onNovoAgendamento: () => void;
  onResetarDados: () => void;
  configPrecos: ConfiguracaoPrecos;
  onAbrirConfigPrecos: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  abaAtiva,
  onAbaChange,
  onNovoAgendamento,
  onResetarDados,
  configPrecos,
  onAbrirConfigPrecos,
}) => {
  return (
    <header id="main-header" className="bg-stone-900 text-white shadow-md sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2.5 sm:py-4 gap-2">
          {/* Logo & Clinical identity */}
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white shadow-xs font-bold text-sm sm:text-base tracking-wider border border-teal-400/30 shrink-0">
              RO
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                <h1 className="text-sm sm:text-lg font-bold tracking-tight text-white truncate">
                  Liberação Miofascial Renata Okoti
                </h1>
                <span className="hidden xs:inline-flex text-[10px] sm:text-[11px] bg-teal-900/90 text-teal-300 font-semibold px-2 py-0.5 rounded-full border border-teal-600/50">
                  Agenda
                </span>
              </div>
              {/* Badge de Preços Clicável */}
              <button
                type="button"
                onClick={onAbrirConfigPrecos}
                title="Clique para definir valores de sessão avulsa e pacotes"
                className="flex items-center gap-1.5 sm:gap-2 mt-0.5 text-[11px] sm:text-xs text-stone-300 flex-wrap hover:opacity-90 transition-opacity cursor-pointer group text-left"
              >
                <span className="bg-stone-800 text-stone-300 group-hover:bg-stone-700 px-1.5 sm:px-2 py-0.5 rounded font-medium text-[10px] sm:text-xs border border-stone-700/80 transition-colors">
                  Avulso: <strong className="text-white">R$ {configPrecos.precoAvulso}</strong>
                </span>
                <span className="bg-teal-950/90 text-teal-300 group-hover:bg-teal-900 border border-teal-700/60 px-1.5 sm:px-2 py-0.5 rounded font-medium text-[10px] sm:text-xs transition-colors">
                  Pacote {configPrecos.sessoesPorPacote}x: <strong className="text-white">R$ {configPrecos.precoPacote}</strong>
                </span>
                <span className="text-[10px] text-teal-400 underline decoration-dotted hidden sm:inline">
                  Editar
                </span>
              </button>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Botão de Definir Valor de Sessão Avulsa e Pacote */}
            <button
              id="btn-definir-valores-precos"
              type="button"
              onClick={onAbrirConfigPrecos}
              title="Definir valor da sessão avulsa e valor de pacote com quantidade de sessões"
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-2 bg-stone-800 hover:bg-stone-700 active:scale-95 text-stone-200 hover:text-white rounded-xl text-xs font-semibold border border-stone-700 transition-all min-h-[38px]"
            >
              <Coins className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="hidden md:inline">Definir Valores</span>
              <span className="md:hidden">Valores</span>
            </button>

            <button
              type="button"
              onClick={onResetarDados}
              title="Restaurar dados de demonstração"
              className="p-2 text-stone-400 hover:text-stone-200 hover:bg-stone-800 rounded-xl border border-stone-800 text-xs transition-colors min-h-[38px] min-w-[38px] flex items-center justify-center"
            >
              <RefreshCw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            <button
              type="button"
              onClick={onNovoAgendamento}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-teal-600 hover:bg-teal-500 active:scale-95 text-white rounded-xl text-xs sm:text-sm font-semibold shadow-xs transition-all cursor-pointer min-h-[38px]"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Novo Agendamento</span>
              <span className="sm:hidden">Agendar</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs Bar (Desktop / Tablet) */}
        <div className="hidden md:flex items-center space-x-1 overflow-x-auto pt-1 pb-3 border-t border-stone-800">
          <button
            type="button"
            onClick={() => onAbaChange('diaria')}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              abaAtiva === 'diaria'
                ? 'bg-teal-700 text-white shadow-xs'
                : 'text-stone-400 hover:text-white hover:bg-stone-800'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Visão Diária (Timeline)</span>
          </button>

          <button
            type="button"
            onClick={() => onAbaChange('semanal')}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              abaAtiva === 'semanal'
                ? 'bg-teal-700 text-white shadow-xs'
                : 'text-stone-400 hover:text-white hover:bg-stone-800'
            }`}
          >
            <CalendarDays className="w-4 h-4" />
            <span>Visão Semanal</span>
          </button>

          <button
            type="button"
            onClick={() => onAbaChange('mensal')}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              abaAtiva === 'mensal'
                ? 'bg-teal-700 text-white shadow-xs'
                : 'text-stone-400 hover:text-white hover:bg-stone-800'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Visão Mensal</span>
          </button>

          <button
            type="button"
            onClick={() => onAbaChange('pacientes')}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
              abaAtiva === 'pacientes'
                ? 'bg-teal-700 text-white shadow-xs'
                : 'text-stone-400 hover:text-white hover:bg-stone-800'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Pacientes & Prontuários</span>
          </button>
        </div>
      </div>
    </header>
  );
};
