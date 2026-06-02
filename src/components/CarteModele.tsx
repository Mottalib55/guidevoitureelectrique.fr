import Link from "next/link";
import type { Modele } from "@/data/modeles";

const euro = (n: number) =>
  new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);

export default function CarteModele({ modele }: { modele: Modele }) {
  return (
    <Link href={`/modeles/${modele.slug}/`} className="carte-modele">
      {modele.statut === "a-venir" && (
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            background: "var(--warn, #d98a1f)",
            color: "#fff",
            fontSize: 11,
            fontWeight: 700,
            padding: "3px 8px",
            borderRadius: 6,
            letterSpacing: "0.03em",
            textTransform: "uppercase",
            zIndex: 1,
          }}
        >
          À venir
        </div>
      )}
      <div className="carte-modele-badge">{modele.note}/10</div>
      <div className="carte-modele-marque">{modele.marque}</div>
      <h3 className="carte-modele-nom">{modele.modele}</h3>
      <div className="carte-modele-stats">
        <div>
          <span className="carte-modele-val">{euro(modele.prixBase)}</span>
          <span className="carte-modele-lbl">à partir de</span>
        </div>
        <div>
          <span className="carte-modele-val">{modele.autonomieReelle} km</span>
          <span className="carte-modele-lbl">autonomie réelle</span>
        </div>
        <div>
          <span className="carte-modele-val">{modele.batterieKwh} kWh</span>
          <span className="carte-modele-lbl">batterie</span>
        </div>
      </div>
      <div className="carte-modele-stats" style={{ marginTop: 8 }}>
        <div>
          <span className="carte-modele-val">{modele.chargeRapideKw} kW</span>
          <span className="carte-modele-lbl">charge rapide max</span>
        </div>
        <div>
          <span className="carte-modele-val">{modele.tempsChargeRapide.split("(")[0].trim()}</span>
          <span className="carte-modele-lbl">10→80 % rapide</span>
        </div>
        <div>
          <span className="carte-modele-val">{modele.tempsChargeAC.split("(")[0].trim()}</span>
          <span className="carte-modele-lbl">charge domicile</span>
        </div>
      </div>
      {modele.tags.length > 0 && (
        <div className="carte-modele-tags">
          {modele.tags.slice(0, 3).map((t) => (
            <span key={t} className="carte-modele-tag">
              {t}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
