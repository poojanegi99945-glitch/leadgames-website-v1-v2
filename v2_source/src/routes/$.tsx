import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { stubRoutes } from "@/content/site";

export const Route = createFileRoute("/$")({
  head:({params})=>{const path=`/${params._splat ?? ""}`;const page=getPage(path);return {meta:[{title:`${page.title} | TezPlay`},{name:"description",content:page.intro},{name:"robots",content:"noindex"},{property:"og:title",content:`${page.title} | TezPlay`},{property:"og:description",content:page.intro},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}],links:[{rel:"canonical",href:path}]};},
  component:StubPage,
});
function titleCase(value:string){return value.split("/").filter(Boolean).pop()?.split("-").map(x=>x[0]?.toUpperCase()+x.slice(1)).join(" ") || "Page Not Found"}
function getPage(path:string){return stubRoutes[path] ?? {title:titleCase(path),intro:"This page is coming next. In the meantime, tell us what you want your interactive campaign to achieve."}}
function StubPage(){const { _splat }=Route.useParams();const path=`/${_splat ?? ""}`;const exists=Object.keys(stubRoutes).some(p=>path===p)||path.startsWith("/services/")||path.startsWith("/industries/")||path.startsWith("/sample-experiences/")||path.startsWith("/resources/");const page=getPage(path);return <section className="stub-page"><div className="container"><nav aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span>{page.title}</span></nav><span className="eyebrow">{exists?"Coming next":"404 — Page not found"}</span><h1>{page.title}</h1><p>{page.intro}</p><div className="button-row"><Button asChild><a href="/request-proposal">Request a Proposal</a></Button><Button asChild variant="outline"><a href="/">Back to homepage</a></Button></div></div></section>}