import { Building2, Mail, MapPin, Phone } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'
import { CONTACT_PAGE_OVERRIDE_ENABLED, ContactPageOverride } from '@/overrides/contact-page'
import { ContactLeadForm } from "@/components/shared/contact-lead-form";

const tone = {
  shell: 'bg-[#f8fbff] text-slate-950',
  panel: 'border border-slate-200 bg-white',
  soft: 'border border-slate-200 bg-slate-50',
  muted: 'text-slate-600',
  action: 'bg-slate-950 text-white hover:bg-slate-800',
}

const lanes = [
  {
    icon: Building2,
    title: 'List your business',
    body: 'Create your listing, add photos and hours, and get discovered by local customers searching for what you offer.',
  },
  {
    icon: Phone,
    title: 'Support',
    body: 'Questions about your listing, account, or how to improve your visibility? We are here to help.',
  },
  {
    icon: MapPin,
    title: 'Suggestions',
    body: 'Tell us which businesses, categories, or features you would like to see added to the directory.',
  },
]

export default function ContactPage() {
  if (CONTACT_PAGE_OVERRIDE_ENABLED) {
    return <ContactPageOverride />
  }

  const contactEmail = `hello@${SITE_CONFIG.domain}`
  const contactEmailHref = `mailto:${contactEmail}`

  return (
    <div className={`min-h-screen ${tone.shell}`}>
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] opacity-70">Contact {SITE_CONFIG.name}</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em]">Business listing support, routed to the right team.</h1>
            <p className={`mt-5 max-w-2xl text-sm leading-8 ${tone.muted}`}>
              Share what you need for your listing or local directory coverage. We will route your message to onboarding,
              verification, or operations without sending you through generic support loops.
            </p>
            <div className="mt-8 space-y-4">
              {lanes.map((lane) => (
                <div key={lane.title} className={`rounded-[1.6rem] p-5 ${tone.soft}`}>
                  <lane.icon className="h-5 w-5" />
                  <h2 className="mt-3 text-xl font-semibold">{lane.title}</h2>
                  <p className={`mt-2 text-sm leading-7 ${tone.muted}`}>{lane.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`rounded-[2rem] p-7 ${tone.panel}`}>
            <h2 className="text-2xl font-semibold">Send a message</h2>
            <form className="mt-6 grid gap-4">
              <input className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm" placeholder="Your name" />
              <input className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm" placeholder="Email address" />
              <input className="h-12 rounded-xl border border-current/10 bg-transparent px-4 text-sm" placeholder="Business name or listing URL" />
              <textarea className="min-h-[180px] rounded-2xl border border-current/10 bg-transparent px-4 py-3 text-sm" placeholder="Describe the issue or request in detail so we can help faster." />
              <button type="submit" className={`inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold ${tone.action}`}>Send message</button>
            </form>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-semibold">Send a message</h2>
              <a
                href={contactEmailHref}
                className={`inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold ${tone.action}`}
              >
                <Mail className="mr-2 h-4 w-4" />
                Email us
              </a>
            </div>
            <p className={`mt-3 text-sm ${tone.muted}`}>{contactEmail}</p>
            <ContactLeadForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
