import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Facebook,
  Home,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  SprayCan,
  X,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import heroImage from "@/assets/clean-canada-hero.jpg";
import teamImage from "@/assets/clean-canada-team.jpg";
import kitchenImage from "@/assets/clean-canada-kitchen.jpg";
import officeImage from "@/assets/clean-canada-office.jpg";
import { SiteButton, SiteLinkButton } from "@/components/site-button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clean Canada | Professional Cleaning Services" },
      {
        name: "description",
        content:
          "Clean Canada provides professional residential and commercial cleaning services. Request a quote for reliable, detailed cleaning services.",
      },
      { property: "og:title", content: "Clean Canada | Professional Cleaning Services" },
      {
        property: "og:description",
        content:
          "Professional residential and commercial cleaning for a fresher, more comfortable space.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CleanCanadaPage,
});

const navItems = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["About", "#about"],
  ["Why Us", "#why-us"],
  ["How It Works", "#how-it-works"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
];

const services = [
  {
    icon: Home,
    name: "Residential Cleaning",
    text: "Thoughtful cleaning for kitchens, bathrooms, bedrooms, and shared living spaces.",
  },
  {
    icon: Sparkles,
    name: "Deep Cleaning",
    text: "A more detailed clean for spaces that need extra time, care, and attention.",
  },
  {
    icon: Building2,
    name: "Move-In / Move-Out",
    text: "Help prepare an empty home for a fresh arrival or a smooth handover.",
  },
  {
    icon: BriefcaseBusiness,
    name: "Office Cleaning",
    text: "Dependable cleaning that helps keep everyday workspaces tidy and welcoming.",
  },
  {
    icon: SprayCan,
    name: "Commercial Cleaning",
    text: "Flexible cleaning support for a range of professional and shared spaces.",
  },
  {
    icon: CalendarDays,
    name: "Recurring Cleaning",
    text: "Regular service options that make maintaining a clean space feel simple.",
  },
];

const faqs = [
  [
    "What cleaning services do you offer?",
    "Our demo service list includes residential, deep, move-in or move-out, office, commercial, and recurring cleaning. A final service list can be tailored to the business.",
  ],
  [
    "How do I request a quote?",
    "Complete the quote form with your contact details, the service you need, and a short description of the space. Your request will be sent through our quote-request automation.",
  ],
  [
    "Can I schedule recurring cleaning?",
    "Yes, recurring cleaning can be requested. Timing and frequency would be confirmed as part of the quote conversation.",
  ],
  [
    "Do you provide cleaning supplies?",
    "Supply arrangements can vary by service. Please mention any preferences or requirements when requesting a quote.",
  ],
  [
    "Do you clean both homes and offices?",
    "Yes. The service selection includes both residential and professional spaces, subject to the final business offering.",
  ],
  [
    "How far in advance should I schedule?",
    "Availability can vary, so requesting your preferred date early is helpful. The team would confirm timing after reviewing your request.",
  ],
];

function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#home"
      className={`inline-flex items-center gap-2 font-extrabold ${light ? "text-primary-foreground" : "text-foreground"}`}
      aria-label="Clean Canada home"
    >
      <span
        className={`grid size-9 place-items-center rounded-md ${light ? "bg-background text-primary" : "bg-primary text-primary-foreground"}`}
      >
        <Sparkles className="size-5" aria-hidden="true" />
      </span>
      <span className="text-lg">
        Clean <span className={light ? "text-accent" : "text-primary"}>Canada</span>
      </span>
    </a>
  );
}

function SectionIntro({
  eyebrow,
  title,
  text,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="heading-balance mt-3 text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {text ? <p className="mt-4 text-base leading-7 text-muted-foreground">{text}</p> : null}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 shadow-sm">
      <div className="section-shell flex h-20 items-center justify-between">
        <Wordmark />
        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
            >
              {label}
            </a>
          ))}
        </nav>
        <SiteLinkButton href="#contact" className="hidden lg:inline-flex">
          Get a Free Quote
        </SiteLinkButton>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="grid size-11 place-items-center rounded-md border border-border text-foreground lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open ? (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-border bg-background px-4 pb-5 lg:hidden"
        >
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block border-b border-border py-3 text-sm font-semibold text-foreground"
            >
              {label}
            </a>
          ))}
          <SiteLinkButton href="#contact" onClick={() => setOpen(false)} className="mt-4 w-full">
            Get a Free Quote
          </SiteLinkButton>
        </nav>
      ) : null}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[720px] scroll-mt-20 overflow-hidden bg-footer">
      <img
        src={heroImage}
        alt="Professional cleaner wiping a bright modern kitchen island"
        width={1600}
        height={1104}
        className="absolute inset-0 h-full w-full object-cover object-[62%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--footer)_0%,color-mix(in_oklab,var(--footer)_94%,transparent)_36%,color-mix(in_oklab,var(--footer)_30%,transparent)_72%,transparent_100%)]" />
      <div className="section-shell relative flex min-h-[720px] items-center py-24">
        <div className="max-w-xl text-primary-foreground">
          <p className="mb-5 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.12em] text-accent">
            <span className="h-px w-8 bg-accent" />
            Residential &amp; commercial cleaning
          </p>
          <h1 className="heading-balance text-4xl font-extrabold leading-[1.12] md:text-6xl">
            A cleaner space, cared for properly.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-primary-foreground/85">
            Reliable cleaning for homes and workplaces, with a professional approach and thoughtful
            attention to the details that matter.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <SiteLinkButton href="#contact" variant="light" showArrow>
              Get a Free Quote
            </SiteLinkButton>
            <SiteLinkButton
              href="#services"
              className="border-primary-foreground/50 bg-transparent text-primary-foreground hover:border-primary-foreground hover:bg-background/10"
            >
              Explore Services
            </SiteLinkButton>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-primary-foreground/25 pt-6 text-sm font-semibold text-primary-foreground/90">
            <span className="flex items-center gap-2">
              <Check className="size-4 text-accent" />
              Homes &amp; workplaces
            </span>
            <span className="flex items-center gap-2">
              <Check className="size-4 text-accent" />
              Flexible service options
            </span>
            <span className="flex items-center gap-2">
              <Check className="size-4 text-accent" />
              Detailed care
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section-pad scroll-mt-20 bg-background">
      <div className="section-shell">
        <SectionIntro
          eyebrow="Our services"
          title="Cleaning services for every space"
          text="Choose the level of care that fits your home, workplace, and schedule."
        />
        <div className="mt-12 grid border-l border-t border-border md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, name, text }, index) => (
            <article
              key={name}
              className="group border-b border-r border-border bg-card p-7 transition-colors hover:bg-surface-blue md:p-9"
            >
              <div className="mb-8 flex items-start justify-between">
                <span className="grid size-11 place-items-center rounded-md bg-brand-green-soft text-brand-green">
                  <Icon className="size-5" />
                </span>
                <span className="text-xs font-bold text-muted-foreground">0{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-card-foreground">{name}</h3>
              <p className="mt-3 min-h-18 text-sm leading-6 text-muted-foreground">{text}</p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary"
              >
                Get a quote{" "}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MoreThanClean() {
  return (
    <section className="bg-surface-blue">
      <div className="mx-auto grid max-w-[90rem] lg:grid-cols-2">
        <img
          src={teamImage}
          alt="Professional cleaning team preparing supplies in a bright home"
          width={1408}
          height={1008}
          loading="lazy"
          className="h-full min-h-[460px] w-full object-cover"
        />
        <div className="flex items-center px-6 py-16 md:px-14 lg:px-20">
          <div className="max-w-xl">
            <SectionIntro
              eyebrow="Care you can feel"
              title="More than just clean"
              text="A professionally cleaned space should feel comfortable, calm, and ready to enjoy. We focus on practical service and thoughtful care for the rooms you live and work in."
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Attention to detail",
                "Professional approach",
                "Flexible scheduling",
                "Care for your space",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 font-semibold">
                  <span className="grid size-7 place-items-center rounded-full bg-brand-green text-primary-foreground">
                    <Check className="size-4" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <SiteLinkButton href="#contact" className="mt-9" showArrow>
              Get a Free Quote
            </SiteLinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    {
      icon: Clock3,
      title: "Reliable service",
      text: "A clear, dependable approach from your first request through to the clean.",
    },
    {
      icon: Sparkles,
      title: "Attention to detail",
      text: "Careful work focused on the surfaces and spaces that shape how a room feels.",
    },
    {
      icon: CalendarDays,
      title: "Flexible scheduling",
      text: "Service options designed to fit different spaces, routines, and cleaning needs.",
    },
    {
      icon: ShieldCheck,
      title: "Professional approach",
      text: "Respectful communication, practical planning, and care for your environment.",
    },
  ];
  return (
    <section id="why-us" className="section-pad bg-background">
      <div className="section-shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionIntro
          eyebrow="Why Clean Canada"
          title="A straightforward way to care for your space"
          text="Good cleaning service should be easy to arrange, considerate in your space, and consistent in its attention to detail."
        />
        <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="border-t-2 border-primary pt-5">
              <Icon className="size-6 text-brand-green" />
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Difference() {
  const [position, setPosition] = useState(52);
  return (
    <section className="section-pad bg-footer text-primary-foreground">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-accent">Before &amp; after</p>
            <h2 className="heading-balance mt-3 text-3xl font-extrabold md:text-4xl">
              See the difference
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-6 text-primary-foreground/70">
            Drag the control to compare a busy kitchen with a professionally refreshed space.
          </p>
        </div>
        <div className="relative mt-10 h-[360px] overflow-hidden rounded-md bg-muted md:h-auto md:min-h-[360px] md:aspect-[16/8]">
          <img
            src={kitchenImage}
            alt="Professionally cleaned modern kitchen"
            width={1408}
            height={1008}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-y-0 left-0 overflow-hidden grayscale-[.35] brightness-75"
            style={{ width: `${position}%` }}
          >
            <img
              src={kitchenImage}
              alt="Kitchen before professional finishing touches"
              width={1408}
              height={1008}
              loading="lazy"
              className="h-full max-w-none object-cover"
              style={{ width: "calc(min(100vw - 2rem, 76rem))" }}
            />
            <div className="absolute inset-0 bg-footer/20" />
          </div>
          <div
            className="pointer-events-none absolute inset-y-0 w-0.5 bg-background"
            style={{ left: `${position}%` }}
          >
            <span className="absolute left-1/2 top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-background font-bold text-primary shadow-lg">
              ↔
            </span>
          </div>
          <span className="absolute left-4 top-4 rounded-sm bg-footer/85 px-3 py-2 text-xs font-bold uppercase">
            Before
          </span>
          <span className="absolute right-4 top-4 rounded-sm bg-background px-3 py-2 text-xs font-bold uppercase text-primary">
            After
          </span>
          <input
            aria-label="Before and after comparison"
            type="range"
            min="15"
            max="85"
            value={position}
            onChange={(event) => setPosition(Number(event.target.value))}
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    ["01", "Request a quote", "Tell us about your space and the type of cleaning you need."],
    ["02", "Choose your service", "Select the cleaning option that best suits your priorities."],
    ["03", "Schedule your cleaning", "Share a preferred date so the details can be confirmed."],
    ["04", "Enjoy a cleaner space", "Come back to a fresher, more comfortable environment."],
  ];
  return (
    <section id="how-it-works" className="section-pad bg-background">
      <div className="section-shell">
        <SectionIntro eyebrow="How it works" title="Simple from start to finish" centered />
        <ol className="mt-14 grid gap-0 border-t border-border md:grid-cols-4">
          {steps.map(([number, title, text]) => (
            <li
              key={number}
              className="relative border-b border-border px-6 py-8 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <span className="text-sm font-extrabold text-primary">{number}</span>
              <h3 className="mt-8 text-lg font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-surface-blue">
      <div className="section-shell grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div className="relative">
          <img
            src={officeImage}
            alt="Professional cleaner vacuuming a bright office"
            width={1408}
            height={1008}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-md object-cover"
          />
          <div className="absolute -bottom-5 right-5 bg-background p-5 shadow-lg">
            <p className="text-sm font-extrabold text-primary">Homes and workplaces</p>
            <p className="mt-1 text-xs text-muted-foreground">Thoughtfully cared for</p>
          </div>
        </div>
        <div className="lg:pl-10">
          <SectionIntro
            eyebrow="About us"
            title="Cleaning made simple"
            text="Clean Canada is a demo cleaning brand focused on making homes and workplaces cleaner, fresher, and more comfortable. The approach is straightforward: understand what a space needs, communicate clearly, and care for the details."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {["Professionalism", "Reliability", "Attention to detail", "Customer care"].map(
              (value) => (
                <span
                  key={value}
                  className="border border-border bg-background px-4 py-2 text-sm font-semibold"
                >
                  {value}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    [
      "Sarah M.",
      "The whole process felt simple and professional. The space looked fresh, tidy, and carefully finished.",
    ],
    [
      "Daniel R.",
      "Clear communication and thoughtful attention to the areas that needed the most care.",
    ],
    [
      "Emily K.",
      "A friendly, dependable experience and a noticeably cleaner, more comfortable home.",
    ],
  ];
  return (
    <section className="section-pad bg-background">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <SectionIntro eyebrow="Sample testimonials" title="What customers could say" />
          <p className="max-w-md text-xs leading-5 text-muted-foreground">
            These names and comments are sample content for this demonstration website and are not
            verified customer reviews.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reviews.map(([name, quote]) => (
            <figure key={name} className="border-t-4 border-brand-green bg-muted p-7">
              <div className="text-sm text-primary" aria-label="Five star sample rating">
                ★★★★★
              </div>
              <blockquote className="mt-5 text-base leading-7 text-foreground">
                “{quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm font-bold">{name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="section-pad bg-surface-blue">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <SectionIntro
            eyebrow="Frequently asked"
            title="Good to know before you book"
            text="General answers for this demonstration site. Final service details and policies can be customized for the business."
          />
          <SiteLinkButton href="#contact" variant="secondary" className="mt-7">
            Ask a question
          </SiteLinkButton>
        </div>
        <div className="border-t border-border">
          {faqs.map(([question, answer], index) => {
            const active = open === index;
            return (
              <div key={question} className="border-b border-border">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-5 py-5 text-left font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  onClick={() => setOpen(active ? -1 : index)}
                  aria-expanded={active}
                >
                  <span>{question}</span>
                  <ChevronDown
                    className={`size-5 shrink-0 text-primary transition-transform ${active ? "rotate-180" : ""}`}
                  />
                </button>
                {active ? (
                  <p className="max-w-2xl pb-6 text-sm leading-6 text-muted-foreground">{answer}</p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function QuoteForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const next: Record<string, string> = {};
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const service = String(form.get("service") ?? "");
    if (!name) next["name"] = "Please enter your full name.";
    if (!email) next["email"] = "Please enter your email address.";
    else if (!/^\S+@\S+\.\S+$/.test(email)) next["email"] = "Please enter a valid email address.";
    if (!service) next["service"] = "Please choose a service.";
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setIsSubmitting(true);
      setSubmitted(false);
      setSubmissionError("");

      const payload = new URLSearchParams();
      form.forEach((value, key) => {
        if (typeof value === "string") payload.append(key, value);
      });
      payload.append("source", "Clean Canada quote request");

      try {
        const response = await fetch("https://hooks.zapier.com/hooks/catch/28987346/4mdcvav/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
          body: payload,
        });

        if (!response.ok) {
          throw new Error(`Quote request submission failed with status ${response.status}.`);
        }

        setSubmitted(true);
        formElement.reset();
      } catch (error) {
        console.error("Unable to submit quote request.", error);
        setSubmissionError(
          "We couldn't send your request right now. Please try again or email vishhu670sha@gmail.com.",
        );
      } finally {
        setIsSubmitting(false);
      }
    }
  }
  const inputClass =
    "mt-2 min-h-12 w-full rounded-md border border-input bg-background px-4 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";
  return (
    <form onSubmit={submit} noValidate className="bg-background p-6 shadow-xl md:p-9">
      <h3 className="text-2xl font-extrabold">Request a free quote</h3>
      <p className="mt-2 text-sm text-muted-foreground">Fields marked * are required.</p>
      {submitted ? (
        <div
          role="status"
          className="mt-5 border-l-4 border-brand-green bg-brand-green-soft p-4 text-sm font-semibold text-accent-foreground"
        >
          Thank you! Your quote request has been submitted. We’ll be in touch soon.
        </div>
      ) : null}
      {submissionError ? (
        <p role="alert" className="mt-5 text-sm font-semibold text-destructive">
          {submissionError}
        </p>
      ) : null}
      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-bold">
          Full Name *<input name="name" autoComplete="name" className={inputClass} />
          {errors["name"] ? (
            <span className="mt-1 block text-xs text-destructive">{errors["name"]}</span>
          ) : null}
        </label>
        <label className="text-sm font-bold">
          Email Address *
          <input name="email" type="email" autoComplete="email" className={inputClass} />
          {errors["email"] ? (
            <span className="mt-1 block text-xs text-destructive">{errors["email"]}</span>
          ) : null}
        </label>
        <label className="text-sm font-bold">
          Phone Number
          <input name="phone" type="tel" autoComplete="tel" className={inputClass} />
        </label>
        <label className="text-sm font-bold">
          Service Needed *
          <select name="service" className={inputClass} defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.name}>{s.name}</option>
            ))}
            <option>Other</option>
          </select>
          {errors["service"] ? (
            <span className="mt-1 block text-xs text-destructive">{errors["service"]}</span>
          ) : null}
        </label>
        <label className="text-sm font-bold sm:col-span-2">
          Preferred Date
          <input name="date" type="date" className={inputClass} />
        </label>
        <label className="text-sm font-bold sm:col-span-2">
          Message
          <textarea name="message" rows={5} className={`${inputClass} py-3`} />
        </label>
      </div>
      <SiteButton
        type="submit"
        className="mt-6 w-full sm:w-auto"
        showArrow={!isSubmitting}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Request a Quote"}
      </SiteButton>
    </form>
  );
}

function Contact() {
  return (
    <>
      <section className="bg-primary py-14 text-primary-foreground">
        <div className="section-shell flex flex-col justify-between gap-7 md:flex-row md:items-center">
          <div>
            <h2 className="heading-balance text-3xl font-extrabold">Ready for a cleaner space?</h2>
            <p className="mt-3 text-primary-foreground/80">
              Tell us what you need cleaned and we’ll help you get started.
            </p>
          </div>
          <SiteLinkButton href="#contact" variant="light" className="shrink-0">
            Request a Free Quote
          </SiteLinkButton>
        </div>
      </section>
      <section id="contact" className="section-pad bg-surface-blue">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <SectionIntro
              eyebrow="Contact"
              title="Let’s talk about your space"
              text="Share a few details about your space and we’ll follow up about your cleaning needs."
            />
            <div className="mt-9 space-y-6">
              {[
                [Phone, "Phone", "+1 XXX XXX XXXX"],
                [Mail, "Email", "vishhu670sha@gmail.com"],
                [MapPin, "Location", "Canada"],
              ].map(([Icon, label, value]) => {
                const I = Icon as typeof Phone;
                return (
                  <div key={String(label)} className="flex gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground">
                      <I className="size-5" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase text-muted-foreground">
                        {String(label)}
                      </p>
                      {label === "Email" ? (
                        <a
                          href="mailto:vishhu670sha@gmail.com"
                          className="mt-1 block font-bold hover:text-primary"
                        >
                          {String(value)}
                        </a>
                      ) : (
                        <p className="mt-1 font-bold">{String(value)}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="mt-9 border-t border-border pt-6 text-xs leading-5 text-muted-foreground">
              The phone number and location details shown here are placeholders.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-footer text-primary-foreground">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Wordmark light />
          <p className="mt-5 max-w-xs text-sm leading-6 text-primary-foreground/65">
            Professional residential and commercial cleaning presented as a customizable business
            demo.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="#home"
              aria-label="Facebook placeholder"
              className="grid size-9 place-items-center border border-primary-foreground/25"
            >
              <Facebook className="size-4" />
            </a>
            <a
              href="#home"
              aria-label="Instagram placeholder"
              className="grid size-9 place-items-center border border-primary-foreground/25"
            >
              <Instagram className="size-4" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-bold">Quick Links</h3>
          <div className="mt-4 space-y-3">
            {navItems.slice(0, 6).map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="block text-sm text-primary-foreground/65 hover:text-primary-foreground"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold">Services</h3>
          <div className="mt-4 space-y-3">
            {services.slice(0, 4).map((s) => (
              <a
                key={s.name}
                href="#services"
                className="block text-sm text-primary-foreground/65 hover:text-primary-foreground"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-bold">Contact</h3>
          <div className="mt-4 space-y-3 text-sm text-primary-foreground/65">
            <p>+1 XXX XXX XXXX</p>
            <a href="mailto:vishhu670sha@gmail.com" className="block hover:text-primary-foreground">
              vishhu670sha@gmail.com
            </a>
            <p>Canada</p>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="section-shell flex flex-col justify-between gap-2 py-5 text-xs text-primary-foreground/55 sm:flex-row">
          <p>© 2026 Clean Canada. All rights reserved.</p>
          <p>Demonstration website</p>
        </div>
      </div>
    </footer>
  );
}

function CleanCanadaPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <MoreThanClean />
        <WhyUs />
        <Difference />
        <Process />
        <About />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
