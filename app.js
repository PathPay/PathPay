const reports = [
  {
    user_country: "Nigeria",
    merchant_name: "Google One",
    merchant_category: "SaaS",
    payment_method: "Naira card",
    provider: "OPay",
    payment_outcome: "fail",
    failure_reason:
      "Google One renewal was declined after OPay stopped supporting international transactions.",
    workaround: "Commenters suggested Kuda, Providus, Access, and Cardtonic virtual cards.",
    fees_mentioned: "",
    time_wasted: "high",
    confidence_score: 0.94,
    source_url:
      "https://www.reddit.com/r/Nigeria/comments/1kmatga/help_i_can_no_longer_pay_for_google_one_with_my/",
  },
  {
    user_country: "Nigeria",
    merchant_name: "Google One",
    merchant_category: "SaaS",
    payment_method: "USD virtual card",
    provider: "Chipper",
    payment_outcome: "fail",
    failure_reason: "User tried Chipper Cash Dollar Card after OPay failed; Google One declined it too.",
    workaround: "Try Kuda virtual Visa, Providus, Access, or Cardtonic according to thread comments.",
    fees_mentioned: "",
    time_wasted: "high",
    confidence_score: 0.91,
    source_url:
      "https://www.reddit.com/r/Nigeria/comments/1kmatga/help_i_can_no_longer_pay_for_google_one_with_my/",
  },
  {
    user_country: "Nigeria",
    merchant_name: "Google Cloud Platform",
    merchant_category: "SaaS",
    payment_method: "Naira card",
    provider: "UBA Africard",
    payment_outcome: "fail",
    failure_reason: "GCP reportedly did not accept Nigerian cards, virtual cards, or UBA Africard.",
    workaround: "",
    fees_mentioned: "",
    time_wasted: "high",
    confidence_score: 0.9,
    source_url: "https://www.nairaland.com/8573143/google-cloud-platform-gcp-keeps",
  },
  {
    user_country: "Nigeria",
    merchant_name: "Google Pay",
    merchant_category: "SaaS",
    payment_method: "Naira card",
    provider: "Local Nigerian cards",
    payment_outcome: "fail",
    failure_reason: "Search result states most local cards tend to get declined on Google Pay.",
    workaround: "A commenter reported generating a Nosh virtual card as a workaround.",
    fees_mentioned: "",
    time_wasted: "medium",
    confidence_score: 0.66,
    source_url:
      "https://www.reddit.com/r/Nigeria/comments/1mc8xcx/what_virtual_card_accepted_in_nigeria_google_pay/",
  },
  {
    user_country: "Nigeria",
    merchant_name: "GoHighLevel",
    merchant_category: "SaaS",
    payment_method: "Naira card",
    provider: "Nigerian card",
    payment_outcome: "fail",
    failure_reason: "Free-trial checkout kept saying the user's Nigerian card had been declined.",
    workaround: "",
    fees_mentioned: "",
    time_wasted: "medium",
    confidence_score: 0.7,
    source_url:
      "https://www.reddit.com/r/gohighlevel/comments/1l7bncn/go_high_level_subscription_card_declining/",
  },
  {
    user_country: "Nigeria",
    merchant_name: "Amazon",
    merchant_category: "ecommerce",
    payment_method: "USD virtual card",
    provider: "unknown",
    payment_outcome: "fail",
    failure_reason: "User asked how to buy from Amazon after virtual card problems.",
    workaround: "",
    fees_mentioned: "",
    time_wasted: "medium",
    confidence_score: 0.58,
    source_url:
      "https://www.reddit.com/r/Nigeria/comments/11j149d/please_i_don_tire_for_this_virtual_card_wahala/",
  },
  {
    user_country: "Nigeria",
    merchant_name: "Canva Pro",
    merchant_category: "SaaS",
    payment_method: "Naira card",
    provider: "Local Mastercard",
    payment_outcome: "fail",
    failure_reason: "Local Mastercard returned payment declined while trying to pay in dollars.",
    workaround: "User switched to Geegpay USD virtual Mastercard.",
    fees_mentioned: "",
    time_wasted: "high",
    confidence_score: 0.74,
    source_url: "https://www.nairaland.com/8396986/day-local-mastercard-failed-me",
  },
  {
    user_country: "Nigeria",
    merchant_name: "Namecheap",
    merchant_category: "SaaS",
    payment_method: "Naira card",
    provider: "Local Mastercard",
    payment_outcome: "fail",
    failure_reason:
      "Local Mastercard failed during a domain purchase; post cites FX restrictions, daily limits, and card incompatibility.",
    workaround: "User switched to Geegpay USD virtual Mastercard.",
    fees_mentioned: "",
    time_wasted: "high",
    confidence_score: 0.74,
    source_url: "https://www.nairaland.com/8396986/day-local-mastercard-failed-me",
  },
  {
    user_country: "Nigeria",
    merchant_name: "Facebook Ads Manager",
    merchant_category: "ads",
    payment_method: "Naira card",
    provider: "Naira card",
    payment_outcome: "fail",
    failure_reason: "Post reports Naira card was rejected with payment declined or suspicious activity.",
    workaround: "User reported Geegpay Dollar Card worked afterward.",
    fees_mentioned: "",
    time_wasted: "medium",
    confidence_score: 0.71,
    source_url: "https://www.nairaland.com/8396996/5-things-now-geegpay-dollar",
  },
  {
    user_country: "Nigeria",
    merchant_name: "International websites",
    merchant_category: "unknown",
    payment_method: "Naira card",
    provider: "GTBank / UBA / Wema / First Bank",
    payment_outcome: "partial",
    failure_reason:
      "Nairaland/TheCable thread cites lower card limits, rejection rates on global platforms, and FX instability.",
    workaround:
      "Users compare virtual dollar cards from Chipper, Eversend, Geegpay, Fundall, BoldSwitch, Sendbit, Cardtonic, and others.",
    fees_mentioned:
      "Examples cited: Geegpay $0.50 per dollar transaction plus 0.9% on non-dollar purchases; Eversend $0.50 per transaction and 3.5% for EUR/GBP; Chipper FX rate premium; $1 monthly maintenance mentioned for some fintech cards.",
    time_wasted: "medium",
    confidence_score: 0.82,
    source_url: "https://www.nairaland.com/8474519/international-transactions-naira-cards-pits",
  },
];

const methods = [
  "Naira card",
  "USD virtual card",
  "Crypto card",
  "Stablecoin",
  "Bank transfer",
  "Other",
];

const merchantAliases = [
  { merchant: "Google Cloud Platform", category: "SaaS", tokens: ["cloud.google", "console.cloud.google", "gcp"] },
  { merchant: "Google One", category: "SaaS", tokens: ["one.google", "google one"] },
  { merchant: "Google Pay", category: "SaaS", tokens: ["pay.google", "google pay"] },
  { merchant: "GoHighLevel", category: "SaaS", tokens: ["gohighlevel", "highlevel"] },
  { merchant: "Facebook Ads Manager", category: "ads", tokens: ["business.facebook", "adsmanager", "facebook.com/ads", "meta.com"] },
  { merchant: "Canva Pro", category: "SaaS", tokens: ["canva"] },
  { merchant: "Namecheap", category: "SaaS", tokens: ["namecheap"] },
  { merchant: "Amazon", category: "ecommerce", tokens: ["amazon", "amzn"] },
  { merchant: "ChatGPT", category: "SaaS", tokens: ["chatgpt", "openai"] },
  { merchant: "Claude", category: "SaaS", tokens: ["claude", "anthropic"] },
  { merchant: "Notion", category: "SaaS", tokens: ["notion"] },
  { merchant: "Shopify", category: "ecommerce", tokens: ["shopify"] },
];

const fallbackRoutes = {
  SaaS: [
    {
      provider: "Geegpay",
      payment_method: "USD virtual card",
      label: "Try Geegpay USD virtual card",
      reason: "It appears as a workaround for Nigerian users paying global SaaS tools.",
      confidence: 0.68,
    },
    {
      provider: "Cardtonic",
      payment_method: "USD virtual card",
      label: "Try Cardtonic virtual card",
      reason: "It appears in Google subscription workaround discussions.",
      confidence: 0.6,
    },
    {
      provider: "Providus / Access",
      payment_method: "Naira card",
      label: "Retry with Providus or Access",
      reason: "Thread comments mention these banks for international transactions.",
      confidence: 0.52,
    },
  ],
  ecommerce: [
    {
      provider: "Cardtonic / Geegpay",
      payment_method: "USD virtual card",
      label: "Try a USD virtual card",
      reason: "Ecommerce attempts show local and virtual card friction; USD virtual cards are the strongest fallback pattern.",
      confidence: 0.54,
    },
  ],
  ads: [
    {
      provider: "Geegpay",
      payment_method: "USD virtual card",
      label: "Try Geegpay Dollar Card",
      reason: "A Nairaland ad-platform report says naira card failed and Geegpay worked afterward.",
      confidence: 0.71,
    },
  ],
  unknown: [
    {
      provider: "Geegpay / Cardtonic / Kuda",
      payment_method: "USD virtual card",
      label: "Try a USD virtual card first",
      reason: "The memory graph has stronger workaround evidence for USD virtual cards than naira cards.",
      confidence: 0.5,
    },
  ],
};

const selectedMethods = new Set(["Naira card", "USD virtual card"]);

const $ = (id) => document.getElementById(id);

function normalize(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function detectMerchant(input) {
  const value = normalize(input);
  const match = merchantAliases.find((item) =>
    item.tokens.some((token) => value.includes(normalize(token))),
  );

  if (match) return { merchant: match.merchant, category: match.category, exact: true };

  let host = "";
  try {
    host = new URL(input).hostname.replace(/^www\./, "");
  } catch {
    host = input;
  }

  const readable = host
    .split(".")[0]
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

  return {
    merchant: readable || "Unknown merchant",
    category: "unknown",
    exact: false,
  };
}

function reportMatches(report, merchant, country) {
  const sameCountry = country === "unknown" || report.user_country === country;
  const reportMerchant = normalize(report.merchant_name);
  const queryMerchant = normalize(merchant);
  return sameCountry && (reportMerchant === queryMerchant || reportMerchant.includes(queryMerchant) || queryMerchant.includes(reportMerchant));
}

function categoryMatches(report, category, country) {
  const sameCountry = country === "unknown" || report.user_country === country;
  return sameCountry && report.merchant_category === category;
}

function extractWorkaroundRoutes(report) {
  const text = report.workaround || "";
  const candidates = [
    ["Geegpay", "USD virtual card"],
    ["Cardtonic", "USD virtual card"],
    ["Kuda", "Naira card"],
    ["Providus", "Naira card"],
    ["Access", "Naira card"],
    ["Nosh", "USD virtual card"],
    ["Eversend", "USD virtual card"],
    ["Fundall", "USD virtual card"],
    ["BoldSwitch", "USD virtual card"],
    ["Sendbit", "USD virtual card"],
  ];

  return candidates
    .filter(([provider]) => text.toLowerCase().includes(provider.toLowerCase()))
    .map(([provider, method]) => ({
      provider,
      payment_method: method,
      label: `Try ${provider}`,
      reason: text,
      confidence: Math.max(0.48, report.confidence_score - 0.12),
      source_url: report.source_url,
    }));
}

function dedupeRoutes(routes) {
  const seen = new Set();
  return routes.filter((route) => {
    const key = `${route.provider}-${route.payment_method}-${route.label}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function buildRoute(input, country) {
  const detected = detectMerchant(input);
  const exactReports = reports.filter((report) => reportMatches(report, detected.merchant, country));
  const categoryReports = reports.filter((report) => categoryMatches(report, detected.category, country));
  const evidence = exactReports.length ? exactReports : categoryReports.slice(0, 5);

  const avoid = evidence
    .filter((report) => ["fail", "partial"].includes(report.payment_outcome))
    .filter((report) => selectedMethods.has(report.payment_method) || selectedMethods.size === 0)
    .sort((a, b) => b.confidence_score - a.confidence_score);

  const fromWorkarounds = evidence.flatMap(extractWorkaroundRoutes);
  const fallback = fallbackRoutes[detected.category] || fallbackRoutes.unknown;
  const recommendations = dedupeRoutes([...fromWorkarounds, ...fallback])
    .filter((route) => selectedMethods.has(route.payment_method) || selectedMethods.size === 0)
    .sort((a, b) => b.confidence - a.confidence)
    .slice(0, 5);

  const score = evidence.length
    ? evidence.reduce((sum, item) => sum + item.confidence_score, 0) / evidence.length
    : 0.35;

  return {
    detected,
    exactReports,
    evidence,
    avoid,
    recommendations,
    score,
  };
}

function confidenceLabel(score) {
  if (score >= 0.76) return "High";
  if (score >= 0.52) return "Medium";
  return "Low";
}

function badgeClass(outcome) {
  if (outcome === "success") return "good";
  if (outcome === "partial") return "warn";
  return "bad";
}

function routeCard(route) {
  return `
    <article class="route-card">
      <div class="route-head">
        <strong>${route.label}</strong>
        <span class="badge good">${Math.round(route.confidence * 100)}%</span>
      </div>
      <p>${route.payment_method} via ${route.provider}</p>
      <p>${route.reason}</p>
    </article>
  `;
}

function avoidCard(report) {
  return `
    <article class="route-card">
      <div class="route-head">
        <strong>${report.provider}</strong>
        <span class="badge ${badgeClass(report.payment_outcome)}">${report.payment_outcome}</span>
      </div>
      <p>${report.payment_method} at ${report.merchant_name}</p>
      <p>${report.failure_reason}</p>
      ${report.fees_mentioned ? `<p>${report.fees_mentioned}</p>` : ""}
    </article>
  `;
}

function evidenceCard(report) {
  return `
    <article class="evidence-card">
      <a href="${report.source_url}" target="_blank" rel="noreferrer">${report.merchant_name} - ${report.provider}</a>
      <p>${report.failure_reason || report.workaround}</p>
    </article>
  `;
}

function edgeCard(report) {
  const finalClass = report.payment_outcome === "partial" ? "partial" : "";
  return `
    <div class="edge">
      <span>${report.user_country}</span>
      <span>${report.payment_method}</span>
      <span>${report.provider}</span>
      <span>${report.merchant_name}</span>
      <span class="${finalClass}">${report.payment_outcome}</span>
    </div>
  `;
}

function render(route) {
  $("merchantName").textContent = route.detected.merchant;
  $("routeScore").textContent = confidenceLabel(route.score);

  $("recommendationCount").textContent = route.recommendations.length;
  $("avoidCount").textContent = route.avoid.length;
  $("edgeCount").textContent = `${route.evidence.length} edges`;
  $("evidenceCount").textContent = `${route.evidence.length} sources`;

  $("recommendations").innerHTML = route.recommendations.length
    ? route.recommendations.map(routeCard).join("")
    : `<div class="empty">No strong route yet. Try a known global merchant or broaden the selected payment methods.</div>`;

  $("avoidList").innerHTML = route.avoid.length
    ? route.avoid.map(avoidCard).join("")
    : `<div class="empty">No direct failure found for the selected method.</div>`;

  $("graphEdges").innerHTML = route.evidence.length
    ? route.evidence.map(edgeCard).join("")
    : `<div class="empty">No graph edge found yet.</div>`;

  $("evidenceList").innerHTML = route.evidence.length
    ? route.evidence.map(evidenceCard).join("")
    : `<div class="empty">No evidence source matched this merchant yet.</div>`;
}

function renderMethodGrid() {
  $("methodGrid").innerHTML = methods
    .map(
      (method) => `
        <button
          class="method-pill ${selectedMethods.has(method) ? "active" : ""}"
          type="button"
          data-method="${method}"
        >
          ${method}
        </button>
      `,
    )
    .join("");
}

function currentRoute() {
  return buildRoute($("productUrl").value, $("country").value);
}

function boot() {
  $("memoryCount").textContent = `${reports.length} reports`;
  $("productUrl").value = "https://www.namecheap.com/domains";
  renderMethodGrid();
  render(currentRoute());

  $("methodGrid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-method]");
    if (!button) return;
    const method = button.dataset.method;
    if (selectedMethods.has(method)) {
      selectedMethods.delete(method);
    } else {
      selectedMethods.add(method);
    }
    renderMethodGrid();
    render(currentRoute());
  });

  $("routeForm").addEventListener("submit", (event) => {
    event.preventDefault();
    render(currentRoute());
  });

  $("productUrl").addEventListener("input", () => render(currentRoute()));
  $("country").addEventListener("change", () => render(currentRoute()));
}

boot();
