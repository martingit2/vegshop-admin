# Vegshop - Fullstack Admin Dashboard

Dette er backend- og administrasjons-panelet for Vegshop e-handelsplattformen. Det er en komplett, full-stack og multi-tenant løsning bygget med Next.js, Prisma og Clerk. Applikasjonen fungerer som et CMS (Content Management System) hvor butikkeiere kan administrere hele sin nettbutikk.

**Prosjektstatus:** Dette prosjektet er et uferdig, men omfattende, selvstudium i moderne webutvikling. Kjernefunksjonaliteten for å administrere en butikk er implementert.

**Se den tilhørende butikk-frontenden her:** [github.com/dittnavn/vegshop-butikk-front](https://github.com/dittnavn/vegshop-butikk-front)

---

## Om Prosjektet

Målet var å bygge en komplett SaaS (Software as a Service)-løsning hvor flere brukere kan opprette og administrere sine egne, separate nettbutikker fra ett enkelt dashboard. Prosjektet dekker hele livssyklusen, fra database-design med Prisma til et interaktivt brukergrensesnitt bygget med Shadcn/UI.

### Implementerte Funksjoner

*   ✅ **Full Autentisering:** Sikker innlogging og brukerhåndtering med **Clerk**.
*   ✅ **Multi-Tenant Arkitektur:** Hver bruker kan opprette flere butikker, og all data er isolert per butikk.
*   ✅ **Komplett CMS:** Full CRUD (Create, Read, Update, Delete) funksjonalitet for:
    *   Reklametavler (Billboards)
    *   Kategorier
    *   Produkter (inkludert bilder, størrelser, farger)
    *   Størrelser og Farger
*   ✅ **Ordreadministrasjon:** En oversikt over innkommende ordre.
*   ✅ **Dashboard med statistikk:** Viser total omsetning, antall salg, og produkter på lager, med en visuell graf over inntekt per måned.
*   ✅ **Dynamisk generert API:** API-endepunkter for hver butikk, med dokumentasjon vist i grensesnittet.
*   ✅ **Bildeopplasting:** Integrasjon med Cloudinary for enkel håndtering av produktbilder.
*   ✅ **Betalingsintegrasjon:** Forberedt for Stripe med webhook for å håndtere betalingsbekreftelser.

### Teknologistack

*   **Rammeverk:** Next.js (App Router)
*   **Språk:** TypeScript
*   **Database / ORM:** PostgreSQL med Prisma
*   **Autentisering:** Clerk
*   **Styling:** Tailwind CSS
*   **UI-komponenter:** Shadcn/UI
*   **Skjemahåndtering:** React Hook Form med Zod for validering
*   **Bildehåndtering:** Cloudinary
*   **Betaling:** Stripe

---

## Komme i Gang

### Forutsetninger
*   Node.js (v18+)
*   En PostgreSQL database (f.eks. via Supabase)
*   Kontoer hos Clerk, Cloudinary og Stripe for API-nøkler.

### Installasjon
1.  **Klon repositoriet og naviger inn i mappen.**
2.  **Installer avhengigheter:** `npm install`
3.  **Sett opp miljøvariabler:**
    *   Kopier `.env.example` til `.env` og fyll inn dine egne nøkler for databasen (DATABASE_URL), Clerk, Cloudinary og Stripe.
4.  **Synkroniser databasen:**
    *   Kjør `npx prisma db push` for å opprette databasetabellene basert på `schema.prisma`.
5.  **Start utviklingsserveren:**
    *   Kjør `npm run dev`.