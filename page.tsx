"use client";

import { useMemo, useState } from "react";
import {
  Brain,
  Mic,
  Send,
  Printer,
  ShoppingBag,
  TrendingUp,
  Lightbulb,
  Euro,
  Package,
  Settings,
  Home,
  Zap
} from "lucide-react";

const demoData = {
  owner: "Philipp",
  printer: {
    name: "Bambu Lab P2S Combo",
    status: "Bereit",
    job: "Makita Akkuhalter V2",
    progress: 64,
    timeLeft: "1h 28min",
    nozzle: 220,
    bed: 55
  },
  business: {
    revenueToday: 87.3,
    profitWeek: 426,
    openOrders: 4,
    ideasFound: 12
  },
  shops: [
    { name: "Etsy", status: "Demo", orders: 2, trend: "+12%" },
    { name: "Willhaben", status: "Demo", orders: 1, trend: "stabil" },
    { name: "Eigener Shop", status: "geplant", orders: 0, trend: "offen" }
  ],
  market: [
    { niche: "Camper-Kabelhalter", score: 95, competition: "niedrig", profit: "hoch" },
    { niche: "Starlink Mini Kabelrolle", score: 91, competition: "niedrig", profit: "hoch" },
    { niche: "Makita Akkuhalter V2", score: 88, competition: "mittel", profit: "gut" }
  ],
  ideas: [
    {
      title: "Starlink Mini Kabelrolle",
      text: "Wenig Konkurrenz, klare Zielgruppe, hoher Nutzen für Camper.",
      profit: "6 € bis 14 € pro Verkauf"
    },
    {
      title: "Camper-Wandhaken mit Schraubabdeckung",
      text: "Saisonal stark, einfach zu drucken und gut personalisierbar.",
      profit: "4,50 € bis 9 € pro Verkauf"
    },
    {
      title: "Modularer Makita Akkuhalter V2",
      text: "Passt gut zu deiner bisherigen Zielgruppe und lässt sich als Set verkaufen.",
      profit: "3,80 € bis 7,20 € pro Verkauf"
    }
  ]
};

function philAnswer(message: string) {
  const text = message.toLowerCase();

  if (text.includes("gewinn") || text.includes("umsatz")) {
    return "Aktuell zeige ich Demo-Daten: Heute 87,30 € Umsatz und 426 € geschätzter Wochengewinn. Als nächstes verbinden wir echte Shop-Daten.";
  }

  if (text.includes("drucker") || text.includes("p2s") || text.includes("bambu")) {
    return "Dein Bambu Lab P2S Combo ist in dieser Demo als bereit hinterlegt. Später kann ich Druckstatus, Filament und Fehler automatisch überwachen.";
  }

  if (text.includes("produkt") || text.includes("idee") || text.includes("entwickle")) {
    return "Ich empfehle als erstes die Starlink Mini Kabelrolle. Sie hat wenig Konkurrenz, eine klare Zielgruppe und gutes Gewinnpotenzial.";
  }

  if (text.includes("markt") || text.includes("analyse") || text.includes("trend")) {
    return "Die stärksten Demo-Nischen sind Camper-Zubehör, Starlink Mini Zubehör und Makita-Halter. Ich würde mit Camper-Zubehör starten.";
  }

  if (text.includes("etsy") || text.includes("willhaben") || text.includes("shop")) {
    return "Etsy und Willhaben sind als Bereiche vorbereitet. In der nächsten Version speichern wir Produkte, Preise und Verkäufe.";
  }

  if (text.includes("hallo") || text.includes("servus") || text.includes("phil")) {
    return "Willkommen zurück Philipp. PhilAI ist online. Ich bin bereit, dein 3D-Druck-Business zu überwachen und neue Chancen zu finden.";
  }

  return "Verstanden. In dieser Browser-Version kann ich dir Dashboard-Daten erklären, Produktideen vorschlagen und als Jarvis-Grundlage dienen. Die echte KI-Anbindung bauen wir als nächstes ein.";
}

export default function Page() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Guten Morgen Philipp. PhilAI ist online. Ich überwache Drucker, Shops, Marktanalyse und Produktideen."
    }
  ]);

  const greeting = useMemo(() => {
    const h = new Date().getHours();
    if (h < 11) return "Guten Morgen";
    if (h < 18) return "Guten Tag";
    return "Guten Abend";
  }, []);

  function send() {
    if (!input.trim()) return;
    const userText = input.trim();
    setInput("");
    setMessages((old) => [...old, { role: "user", text: userText }, { role: "ai", text: philAnswer(userText) }]);
  }

  function voiceDemo() {
    setMessages((old) => [
      ...old,
      {
        role: "ai",
        text: "Der Sprachmodus ist vorbereitet. In v0.3 bauen wir echte Spracheingabe und Sprachausgabe ein, damit du mit mir sprechen kannst."
      }
    ]);
  }

  return (
    <main className="shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brandOrb" />
          <div>
            <b>PhilAI</b>
            <span>Browser v0.2</span>
          </div>
        </div>

        <nav>
          <a className="active"><Home size={18} /> Dashboard</a>
          <a><Printer size={18} /> Drucker</a>
          <a><ShoppingBag size={18} /> Shops</a>
          <a><TrendingUp size={18} /> Marktanalyse</a>
          <a><Lightbulb size={18} /> Ideen</a>
          <a><Euro size={18} /> Gewinne</a>
          <a><Package size={18} /> Lager</a>
          <a><Settings size={18} /> Einstellungen</a>
        </nav>
      </aside>

      <section className="workspace">
        <header className="hero">
          <div>
            <p className="eyebrow"><Zap size={16} /> Jarvis-Modus aktiv</p>
            <h1>{greeting}, {demoData.owner}.</h1>
            <p>
              Ich bin dein KI-Agent für 3D-Druck, Produktideen, Marktanalyse,
              Shops und spätere Automatisierung.
            </p>
          </div>
          <div className="core">
            <div className="coreRing" />
            <Brain size={46} />
          </div>
        </header>

        <section className="stats">
          <div className="card">
            <span>🖨 Drucker</span>
            <b>{demoData.printer.progress}%</b>
            <small>{demoData.printer.status} · {demoData.printer.timeLeft}</small>
            <div className="bar"><i style={{ width: `${demoData.printer.progress}%` }} /></div>
          </div>
          <div className="card">
            <span>💰 Umsatz heute</span>
            <b>{demoData.business.revenueToday.toFixed(2)} €</b>
            <small>Demo-Daten</small>
          </div>
          <div className="card">
            <span>📦 Bestellungen</span>
            <b>{demoData.business.openOrders}</b>
            <small>offen</small>
          </div>
          <div className="card">
            <span>💡 Ideen gefunden</span>
            <b>{demoData.business.ideasFound}</b>
            <small>heute vorbereitet</small>
          </div>
        </section>

        <section className="columns">
          <div className="panel wide">
            <h2>💡 Neue Vorschläge</h2>
            <div className="list">
              {demoData.ideas.map((idea) => (
                <div className="item" key={idea.title}>
                  <div>
                    <b>{idea.title}</b>
                    <p>{idea.text}</p>
                  </div>
                  <strong>{idea.profit}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="panel">
            <h2>📈 Markt</h2>
            <div className="list">
              {demoData.market.map((m) => (
                <div className="mini" key={m.niche}>
                  <b>{m.niche}</b>
                  <span>Score {m.score}%</span>
                  <small>Konkurrenz: {m.competition} · Gewinn: {m.profit}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="panel">
          <h2>🛒 Shops</h2>
          <div className="shopgrid">
            {demoData.shops.map((shop) => (
              <div className="shop" key={shop.name}>
                <b>{shop.name}</b>
                <span>{shop.status}</span>
                <p>{shop.orders} Bestellungen · Trend {shop.trend}</p>
              </div>
            ))}
          </div>
        </section>
      </section>

      <aside className="assistant">
        <h2>🎙 PhilAI Agent</h2>
        <div className="avatar">
          <div className="avatarOrb" />
        </div>

        <div className="chat">
          {messages.map((m, i) => (
            <div className={`bubble ${m.role}`} key={i}>
              {m.text}
            </div>
          ))}
        </div>

        <div className="chatbar">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Frag PhilAI..."
          />
          <button onClick={send} title="Senden"><Send size={18} /></button>
          <button onClick={voiceDemo} className="voice" title="Sprache"><Mic size={18} /></button>
        </div>
      </aside>
    </main>
  );
}
