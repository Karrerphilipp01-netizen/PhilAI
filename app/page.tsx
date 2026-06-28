"use client";

import {
  Brain,
  Home,
  Printer,
  ShoppingBag,
  TrendingUp,
  Lightbulb,
  Euro,
  Package,
  Settings,
  Mic,
  Send,
  Zap,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";
import { useMemo, useState } from "react";

type Message = {
  role: "ai" | "user";
  text: string;
};

const stats = [
  { label: "Umsatz heute", value: "87,30 €", hint: "Demo", icon: "💰" },
  { label: "Gewinn Woche", value: "426 €", hint: "geschätzt", icon: "📈" },
  { label: "Offene Aufträge", value: "4", hint: "Etsy + Willhaben", icon: "📦" },
  { label: "Neue Ideen", value: "12", hint: "heute", icon: "💡" }
];

const ideas = [
  {
    title: "Starlink Mini Kabelrolle",
    score: 96,
    reason: "Klare Zielgruppe, wenig Konkurrenz und guter Nutzen für Camper.",
    profit: "6–14 €"
  },
  {
    title: "Camper-Wandhaken Pro",
    score: 92,
    reason: "Saisonal stark, schnell zu drucken und gut als Set verkaufbar.",
    profit: "4–9 €"
  },
  {
    title: "Makita Akkuhalter V2",
    score: 88,
    reason: "Passt perfekt zu deiner bestehenden Werkzeughalter-Zielgruppe.",
    profit: "3–7 €"
  }
];

const market = [
  { name: "Camper Zubehör", status: "steigend", score: 95 },
  { name: "Starlink Mini", status: "niedrige Konkurrenz", score: 91 },
  { name: "Werkzeughalter", status: "stabil", score: 84 },
  { name: "Whirlpool Zubehör", status: "saisonal", score: 78 }
];

const shops = [
  { name: "Etsy", state: "vorbereitet", orders: 2, color: "green" },
  { name: "Willhaben", state: "vorbereitet", orders: 1, color: "yellow" },
  { name: "Eigener Shop", state: "geplant", orders: 0, color: "blue" }
];

function createAnswer(input: string) {
  const text = input.toLowerCase();

  if (text.includes("gewinn") || text.includes("umsatz")) {
    return "Aktuell sehe ich in den Demo-Daten 87,30 € Umsatz heute und 426 € Wochengewinn. Sobald wir echte Shop-Daten anbinden, werte ich alles automatisch aus.";
  }

  if (text.includes("drucker") || text.includes("bambu") || text.includes("p2s")) {
    return "Dein Bambu Lab P2S Combo ist als Drucker-Modul vorbereitet. In einer späteren Version zeige ich Live-Status, AMS-Filament, Druckfortschritt und Fehlerwarnungen.";
  }

  if (text.includes("produkt") || text.includes("idee") || text.includes("entwickle")) {
    return "Meine beste Empfehlung ist die Starlink Mini Kabelrolle. Sie hat eine klare Zielgruppe, wenig Konkurrenz und gutes Gewinnpotenzial.";
  }

  if (text.includes("markt") || text.includes("analyse") || text.includes("trend")) {
    return "Die stärksten Bereiche sind aktuell Camper-Zubehör, Starlink Mini Zubehör und Werkzeughalter. Ich würde zuerst Camper-Zubehör testen.";
  }

  if (text.includes("etsy") || text.includes("willhaben") || text.includes("shop")) {
    return "Die Shop-Bereiche sind vorbereitet. Als nächstes bauen wir echte Produktlisten, Preise und Bestellungen ein.";
  }

  if (text.includes("sprache") || text.includes("reden") || text.includes("mikro")) {
    return "Der Sprachmodus ist vorbereitet. In der nächsten Version baue ich echte Spracheingabe und Sprachausgabe ein, damit du mit mir reden kannst.";
  }

  return "Verstanden. Ich bin als PhilAI 1.0 bereit. Du kannst mich nach Gewinn, Drucker, Produktideen, Marktanalyse und Shops fragen.";
}

export default function Page() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      text: "Willkommen zurück Philipp. PhilAI 1.0 ist online. Ich überwache dein 3D-Druck-Business, deine Produktideen und die Marktchancen."
    }
  ]);

  const greeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 11) return "Guten Morgen";
    if (hour < 18) return "Guten Tag";
    return "Guten Abend";
  }, []);

  function sendMessage() {
    const value = input.trim();
    if (!value) return;

    setInput("");
    setMessages((old) => [
      ...old,
      { role: "user", text: value },
      { role: "ai", text: createAnswer(value) }
    ]);
  }

  function voiceInfo() {
    setMessages((old) => [
      ...old,
      {
        role: "ai",
        text: "Sprachsteuerung wird als nächster Schritt aktiviert. Ziel: Du sagst zum Beispiel 'Phil, entwickle ein neues Produkt' und ich antworte per Sprache."
      }
    ]);
  }

  return (
    <main className="layout">
      <aside className="sidebar">
        <div className="brand">
          <div className="brandOrb" />
          <div>
            <strong>PhilAI</strong>
            <span>Jarvis Business OS</span>
          </div>
        </div>

        <nav className="nav">
          <a className="active"><Home size={18} /> Dashboard</a>
          <a><Printer size={18} /> Drucker</a>
          <a><ShoppingBag size={18} /> Shops</a>
          <a><TrendingUp size={18} /> Marktanalyse</a>
          <a><Lightbulb size={18} /> Ideen</a>
          <a><Euro size={18} /> Finanzen</a>
          <a><Package size={18} /> Lager</a>
          <a><Settings size={18} /> Einstellungen</a>
        </nav>
      </aside>

      <section className="main">
        <header className="hero">
          <div>
            <div className="statusLine">
              <Zap size={16} />
              Jarvis-Modus aktiv
            </div>
            <h1>{greeting}, Philipp.</h1>
            <p>
              Dein KI-Agent für 3D-Druck, Etsy, Willhaben, Marktanalyse,
              Produktideen und spätere Automatisierung.
            </p>
          </div>

          <div className="aiCore">
            <div className="ring" />
            <Brain size={48} />
          </div>
        </header>

        <section className="statGrid">
          {stats.map((item) => (
            <div className="statCard" key={item.label}>
              <span>{item.icon} {item.label}</span>
              <strong>{item.value}</strong>
              <small>{item.hint}</small>
            </div>
          ))}
        </section>

        <section className="split">
          <div className="panel">
            <div className="panelHead">
              <h2>💡 Beste Produktvorschläge</h2>
              <span>KI-Auswahl</span>
            </div>

            <div className="ideaList">
              {ideas.map((idea) => (
                <article className="idea" key={idea.title}>
                  <div>
                    <h3>{idea.title}</h3>
                    <p>{idea.reason}</p>
                    <small>Gewinn pro Verkauf: {idea.profit}</small>
                  </div>
                  <div className="score">{idea.score}%</div>
                </article>
              ))}
            </div>
          </div>

          <div className="panel">
            <div className="panelHead">
              <h2>📈 Marktanalyse</h2>
              <span>Demo</span>
            </div>

            <div className="marketList">
              {market.map((item) => (
                <div className="marketItem" key={item.name}>
                  <div>
                    <strong>{item.name}</strong>
                    <small>{item.status}</small>
                  </div>
                  <b>{item.score}</b>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="split bottom">
          <div className="panel printer">
            <div className="panelHead">
              <h2>🖨 Bambu Lab P2S Combo</h2>
              <span>Demo-Modul</span>
            </div>
            <div className="printerBox">
              <div>
                <strong>Makita Akkuhalter V2</strong>
                <small>Druckfortschritt 64% · Restzeit 1h 28min</small>
              </div>
              <div className="progress">
                <i style={{ width: "64%" }} />
              </div>
              <div className="printerStats">
                <span>Düse 220°</span>
                <span>Bett 55°</span>
                <span>AMS PLA Schwarz 74%</span>
              </div>
            </div>
          </div>

          <div className="panel">
            <div className="panelHead">
              <h2>🛒 Shops</h2>
              <span>vorbereitet</span>
            </div>
            <div className="shopGrid">
              {shops.map((shop) => (
                <div className="shop" key={shop.name}>
                  <strong>{shop.name}</strong>
                  <small>{shop.state}</small>
                  <span>{shop.orders} Aufträge</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>

      <aside className="assistant">
        <div className="assistantHead">
          <h2>🎙 PhilAI Agent</h2>
          <div className="online">
            <CheckCircle2 size={16} />
            online
          </div>
        </div>

        <div className="avatar">
          <div className="avatarOrb" />
        </div>

        <div className="notice">
          <AlertTriangle size={16} />
          Demo-Modus: echte KI kommt in v1.1
        </div>

        <div className="chat">
          {messages.map((message, index) => (
            <div className={`bubble ${message.role}`} key={index}>
              {message.text}
            </div>
          ))}
        </div>

        <div className="inputRow">
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") sendMessage();
            }}
            placeholder="Frag PhilAI..."
          />
          <button onClick={sendMessage} aria-label="Senden">
            <Send size={18} />
          </button>
          <button className="voice" onClick={voiceInfo} aria-label="Sprache">
            <Mic size={18} />
          </button>
        </div>
      </aside>
    </main>
  );
}
