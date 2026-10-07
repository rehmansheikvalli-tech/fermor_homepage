"use client";
import { useMemo, useState } from "react";

const inr = (n) => "₹" + Math.round(n).toLocaleString("en-IN");
const short = (n) =>
  n >= 1e7 ? `₹${(n / 1e7).toFixed(2)} Cr` : n >= 1e5 ? `₹${(n / 1e5).toFixed(2)} L` : inr(n);

function project(monthly, years, rate) {
  const r = rate / 1200;
  const pts = [];
  for (let y = 0; y <= years; y++) {
    const n = y * 12;
    const value = r === 0 ? monthly * n : monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    pts.push({ y, value, put: monthly * n });
  }
  return pts;
}

function Slider({ id, label, value, min, max, step, onChange, display }) {
  return (
    <div className="slider">
      <label htmlFor={id}>{label}</label>
      <output htmlFor={id}>{display}</output>
      <input id={id} type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(+e.target.value)} />
    </div>
  );
}

export default function Growth() {
  const [monthly, setMonthly] = useState(10000);
  const [years, setYears] = useState(12);
  const [rate, setRate] = useState(11);

  const pts = useMemo(() => project(monthly, years, rate), [monthly, years, rate]);
  const end = pts[pts.length - 1];
  const gain = end.value - end.put;

  const W = 520, H = 220, pad = 8;
  const x = (y) => pad + (y / years) * (W - pad * 2);
  const yy = (v) => H - pad - (v / end.value) * (H - pad * 2);
  const line = (key) => pts.map((p, i) => `${i ? "L" : "M"}${x(p.y).toFixed(1)} ${yy(p[key]).toFixed(1)}`).join(" ");
  const area = `${line("value")} L${x(years)} ${H - pad} L${x(0)} ${H - pad} Z`;

  return (
    <div className="growth" id="try">
      <p className="sentence">
        Put away <b>{inr(monthly)}</b> a month for <b>{years} years</b> at <b>{rate}%</b> a year, and you end up with
      </p>
      <p className="result" aria-live="polite">{short(end.value)}</p>
      <p className="split">
        <span><i className="dot put" /> You put in {short(end.put)}</span>
        <span><i className="dot gain" /> Growth adds {short(gain)}</span>
      </p>

      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Projected value grows from zero to ${short(end.value)} over ${years} years`}>
        <path d={area} className="area" />
        <path d={line("put")} className="l-put" />
        <path d={line("value")} className="l-gain" />
      </svg>

      <div className="sliders">
        <Slider id="m" label="Monthly amount" value={monthly} min={1000} max={100000} step={1000} onChange={setMonthly} display={inr(monthly)} />
        <Slider id="y" label="Years" value={years} min={1} max={30} step={1} onChange={setYears} display={`${years}`} />
        <Slider id="r" label="Yearly return" value={rate} min={1} max={18} step={0.5} onChange={setRate} display={`${rate}%`} />
      </div>
      <p className="fine">An illustration with steady returns, not a promise. Real markets move up and down.</p>
    </div>
  );
}
