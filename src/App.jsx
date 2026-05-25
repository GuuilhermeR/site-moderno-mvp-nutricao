import { useState } from 'react'

const patientNeeds = [
  'Emagrecimento saudável',
  'Reeducação alimentar',
  'Nutrição clínica',
  'Melhora da disposição',
  'Organização alimentar',
  'Acompanhamento de rotina',
]

const processSteps = [
  'Preencha seus dados',
  'Escolha o melhor dia e horário',
  'Receba a confirmação da consulta',
  'Realize sua consulta online',
]

const premiumFeatures = [
  'Plano alimentar personalizado',
  'Atendimento humanizado',
  'Acompanhamento individual',
  'Estratégias práticas para rotina',
  'Consulta 100% online',
  'Foco em resultado sustentável',
]

const initialForm = {
  name: '',
  email: '',
  whatsapp: '',
  goal: 'Emagrecimento',
  date: '',
  time: '',
  type: 'Primeira consulta',
  notes: '',
}

function scrollToSchedule() {
  document.getElementById('agendar')?.scrollIntoView({ behavior: 'smooth' })
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-olive-100/80 bg-linen/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#inicio" className="leading-tight">
          <span className="block font-display text-xl font-bold text-olive-900 sm:text-2xl">Dra. Fulana Lopes</span>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-olive-600">Nutrição Clínica e Comportamental</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-olive-700 md:flex">
          <a className="transition hover:text-olive-900" href="#inicio">Início</a>
          <a className="transition hover:text-olive-900" href="#sobre">Sobre</a>
          <a className="transition hover:text-olive-900" href="#atendimento">Atendimento</a>
          <button className="transition hover:text-olive-900" onClick={scrollToSchedule}>Agendar</button>
        </nav>

        <button
          onClick={scrollToSchedule}
          className="rounded-full bg-olive-700 px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-olive-900"
        >
          Agendar consulta
        </button>
      </div>
    </header>
  )
}

function SectionTitle({ eyebrow, title, text, centered = true }) {
  return (
    <div className={centered ? 'mx-auto mb-12 max-w-3xl text-center' : 'mb-10 max-w-3xl'}>
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.24em] text-champagne">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold text-olive-900 sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-8 text-olive-700 sm:text-lg">{text}</p>}
    </div>
  )
}

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-linen">
      <div className="absolute inset-x-0 top-0 h-40 bg-white/70" />
      <div className="relative mx-auto grid min-h-[calc(100vh-82px)] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-champagne/50 bg-white px-4 py-2 text-sm font-bold text-olive-700 shadow-sm">
            Atendimento nutricional online e personalizado
          </p>
          <h1 className="max-w-4xl font-display text-4xl font-bold leading-tight text-olive-900 sm:text-5xl lg:text-6xl">
            Nutrição personalizada para transformar sua saúde com equilíbrio
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-olive-700">
            Consultas online com acompanhamento individualizado para quem busca emagrecimento saudável,
            melhora da alimentação, performance e qualidade de vida.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={scrollToSchedule}
              className="rounded-full bg-olive-700 px-8 py-4 text-base font-bold text-white shadow-premium transition hover:-translate-y-0.5 hover:bg-olive-900"
            >
              Agendar consulta
            </button>
            <a
              href="#atendimento"
              className="rounded-full border border-olive-200 bg-white px-8 py-4 text-center text-base font-bold text-olive-800 shadow-sm transition hover:-translate-y-0.5 hover:border-champagne"
            >
              Conhecer atendimento
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 top-8 h-28 w-28 rounded-full border border-champagne/40" />
          <div className="absolute -right-4 bottom-8 h-36 w-36 rounded-full bg-olive-100/70" />
          <article className="relative overflow-hidden rounded-[2rem] border border-white bg-white shadow-premium">
            <div className="aspect-[4/3] bg-gradient-to-br from-olive-100 via-white to-[#eadfc8] p-8">
              <div className="flex h-full items-end justify-center rounded-[1.5rem] bg-[linear-gradient(135deg,#f8f3e9,#dfe6d0)]">
                <div className="mb-0 h-[86%] w-[68%] rounded-t-full bg-[linear-gradient(160deg,#c5a764,#7c8a58)] shadow-2xl" />
              </div>
            </div>
            <div className="p-7 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold text-olive-900">Dra. Fulana Lopes</h3>
                  <p className="mt-1 font-semibold text-olive-600">CRN 00000-0</p>
                </div>
                <div className="rounded-full bg-linen px-4 py-2 text-sm font-bold text-champagne">★★★★★</div>
              </div>
              <p className="mt-5 rounded-2xl border border-olive-100 bg-olive-50 px-5 py-4 text-sm font-semibold leading-6 text-olive-700">
                Atendimento online humanizado
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="sobre" className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-olive-900 p-8 text-white shadow-premium">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-champagne">Sobre a nutricionista</p>
          <h2 className="mt-5 font-display text-4xl font-bold">Dra. Fulana Lopes</h2>
          <p className="mt-5 text-lg leading-8 text-olive-100">
            Nutricionista especializada em nutrição clínica, emagrecimento saudável e reeducação alimentar.
          </p>
        </div>
        <div>
          <p className="text-lg leading-9 text-olive-700">
            O atendimento é baseado em escuta ativa, personalização e acompanhamento próximo. Cada plano é
            construído para respeitar sua rotina, preferências alimentares e objetivos de saúde, com estratégias
            aplicáveis para uma evolução consistente.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ['+800', 'pacientes atendidos'],
              ['7', 'anos de experiência'],
              ['96%', 'de satisfação'],
            ].map(([number, label]) => (
              <div key={label} className="rounded-3xl border border-olive-100 bg-linen p-6 shadow-sm">
                <strong className="block font-display text-4xl text-olive-900">{number}</strong>
                <span className="mt-2 block text-sm font-semibold text-olive-600">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Audience() {
  return (
    <section id="atendimento" className="bg-linen px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Atendimento"
          title="Para quem é o atendimento"
          text="Um acompanhamento pensado para quem quer cuidar da alimentação com leveza, método e orientação profissional."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {patientNeeds.map((item) => (
            <div key={item} className="rounded-3xl border border-white bg-white p-7 shadow-soft transition hover:-translate-y-1">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-olive-100 text-xl text-olive-700">✓</div>
              <h3 className="text-xl font-bold text-olive-900">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section className="bg-white px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Processo"
          title="Como funciona"
          text="Da solicitação ao atendimento, tudo foi desenhado para ser simples, claro e acolhedor."
        />
        <div className="grid gap-5 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step} className="rounded-3xl border border-olive-100 bg-white p-7 shadow-soft">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-olive-900 font-display text-xl font-bold text-champagne">
                {index + 1}
              </span>
              <h3 className="mt-6 text-lg font-bold leading-7 text-olive-900">{step}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PremiumFeatures() {
  return (
    <section className="bg-olive-900 px-5 py-20 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Diferenciais"
          title="Cuidado premium, próximo e prático"
          text="A consulta une ciência, comportamento e rotina para transformar orientação nutricional em hábitos possíveis."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {premiumFeatures.map((feature) => (
            <div key={feature} className="rounded-3xl border border-white/10 bg-white/8 p-7 shadow-soft backdrop-blur">
              <div className="mb-5 h-1.5 w-12 rounded-full bg-champagne" />
              <h3 className="text-xl font-bold text-white">{feature}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ScheduleForm() {
  const [form, setForm] = useState(initialForm)
  const [success, setSuccess] = useState(false)

  function updateField(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSuccess(true)
    setForm(initialForm)
  }

  const inputClass = 'w-full rounded-2xl border border-olive-100 bg-white px-4 py-4 text-olive-900 outline-none transition placeholder:text-olive-400 focus:border-champagne focus:ring-4 focus:ring-champagne/20'
  const labelClass = 'mb-2 block text-sm font-bold text-olive-800'

  return (
    <section id="agendar" className="bg-linen px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionTitle
            centered={false}
            eyebrow="Agendamento"
            title="Solicite sua consulta online"
            text="Preencha seus dados e a equipe entrará em contato para confirmar disponibilidade, horário e próximos passos."
          />
          <div className="rounded-3xl border border-olive-100 bg-white p-6 shadow-soft">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-champagne">Contato</p>
            <p className="mt-4 text-lg font-bold text-olive-900">WhatsApp: (11) 99999-0000</p>
            <p className="mt-2 text-olive-700">Retorno em horário comercial.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white bg-white p-6 shadow-premium sm:p-8">
          {success && (
            <div className="mb-6 rounded-2xl border border-olive-200 bg-olive-50 px-5 py-4 font-semibold leading-7 text-olive-800">
              Solicitação enviada com sucesso! Em breve entraremos em contato para confirmar sua consulta.
            </div>
          )}

          <div className="grid gap-5 sm:grid-cols-2">
            <label>
              <span className={labelClass}>Nome completo</span>
              <input className={inputClass} name="name" value={form.name} onChange={updateField} required placeholder="Seu nome" />
            </label>
            <label>
              <span className={labelClass}>E-mail</span>
              <input className={inputClass} type="email" name="email" value={form.email} onChange={updateField} required placeholder="voce@email.com" />
            </label>
            <label>
              <span className={labelClass}>WhatsApp</span>
              <input className={inputClass} name="whatsapp" value={form.whatsapp} onChange={updateField} required placeholder="(00) 00000-0000" />
            </label>
            <label>
              <span className={labelClass}>Objetivo principal</span>
              <select className={inputClass} name="goal" value={form.goal} onChange={updateField}>
                <option>Emagrecimento</option>
                <option>Reeducação alimentar</option>
                <option>Nutrição clínica</option>
                <option>Melhora de hábitos</option>
                <option>Outro</option>
              </select>
            </label>
            <label>
              <span className={labelClass}>Data desejada</span>
              <input className={inputClass} type="date" name="date" value={form.date} onChange={updateField} required />
            </label>
            <label>
              <span className={labelClass}>Horário desejado</span>
              <input className={inputClass} type="time" name="time" value={form.time} onChange={updateField} required />
            </label>
            <label className="sm:col-span-2">
              <span className={labelClass}>Tipo de consulta</span>
              <select className={inputClass} name="type" value={form.type} onChange={updateField}>
                <option>Primeira consulta</option>
                <option>Retorno</option>
              </select>
            </label>
            <label className="sm:col-span-2">
              <span className={labelClass}>Observação</span>
              <textarea
                className={`${inputClass} min-h-32 resize-y`}
                name="notes"
                value={form.notes}
                onChange={updateField}
                placeholder="Conte brevemente sobre sua rotina, preferências ou necessidades."
              />
            </label>
          </div>

          <button className="mt-7 w-full rounded-full bg-olive-700 px-8 py-4 text-base font-bold text-white shadow-soft transition hover:bg-olive-900">
            Solicitar agendamento
          </button>
        </form>
      </div>
    </section>
  )
}

function FinalCall() {
  return (
    <section className="bg-white px-5 py-20 text-center lg:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-champagne">Próximo passo</p>
        <h2 className="font-display text-3xl font-bold text-olive-900 sm:text-5xl">
          Comece hoje sua mudança com acompanhamento profissional
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-olive-700">
          Um cuidado nutricional construído com calma, ciência e presença para apoiar sua saúde e sua evolução gradual.
        </p>
        <button
          onClick={scrollToSchedule}
          className="mt-9 rounded-full bg-olive-700 px-8 py-4 text-base font-bold text-white shadow-premium transition hover:-translate-y-0.5 hover:bg-olive-900"
        >
          Agendar minha consulta
        </button>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-olive-900 px-5 py-12 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_1.2fr] md:items-end">
        <div>
          <h2 className="font-display text-2xl font-bold">Dra. Fulana Lopes Nutrição</h2>
          <p className="mt-2 text-olive-100">Nutrição Clínica e Comportamental</p>
        </div>
        <div className="grid gap-2 text-sm font-semibold text-olive-100 sm:grid-cols-3 md:text-right">
          <p>WhatsApp: (11) 99999-0000</p>
          <p>Instagram: @draFulanalopesnutri</p>
          <p>E-mail: contato@Fulanalopesnutri.com</p>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-olive-100">
        Este é um protótipo MVP para apresentação.
      </p>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Audience />
        <HowItWorks />
        <PremiumFeatures />
        <ScheduleForm />
        <FinalCall />
      </main>
      <Footer />
    </>
  )
}
