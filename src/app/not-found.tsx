import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="page">
      <div className="shell" style={{ textAlign: "center" }}>
        <p className="kicker">
          <span className="kickerDot" aria-hidden />
          404
        </p>
        <h1 className="h1" style={{ marginTop: 14 }}>
          Page <span className="accent">missing</span>
        </h1>
        <p className="lede" style={{ margin: "16px auto 0" }}>
          That route isn&apos;t in the library.
        </p>
        <div style={{ marginTop: 24, display: "flex", gap: 12, justifyContent: "center" }}>
          <Button href="/" variant="primary">
            Home
          </Button>
          <Button href="/work" variant="secondary">
            Work library
          </Button>
        </div>
      </div>
    </div>
  );
}
