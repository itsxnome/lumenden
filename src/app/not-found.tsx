import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="page">
      <div className="shell" style={{ textAlign: "center" }}>
        <p className="kicker">
          404
        </p>
        <h1 className="h1" style={{ marginTop: 14 }}>That page isn&apos;t here</h1>
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
