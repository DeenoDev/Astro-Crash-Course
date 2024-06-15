import type { APIRoute } from "astro";

export const GET: APIRoute = ({ url }): Response => {
   const query: string | null = url.searchParams.get('query');
   console.log(query); 
};