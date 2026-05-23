import { Database } from "lucide-react";

export function TopBar() {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-border bg-card px-6 py-4">
      <div className="text-lg font-semibold tracking-tight">
        <span className="text-foreground">Sec</span>
        <span className="text-primary">Pipeline</span>
      </div>
      <div className="flex items-center gap-2 rounded-md border border-border bg-background/60 px-4 py-1.5 text-sm text-foreground">
        <Database className="h-4 w-4 text-muted-foreground" />
        <span>Mattermost v9.x · Docker · PostgreSQL</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" />
        Entorno listo
      </div>
    </header>
  );
}
