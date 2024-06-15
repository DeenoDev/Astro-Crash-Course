import type { APIRoute } from "astro";

export const GET: APIRoute = ({ url }): Response => {
   const query: string | null = url.searchParams.get('query');

   // Handle if query is not present
   if (query === null) {
    return new Response(JSON.stringify({
        error: 'Query param is missing'
    }), {
        status: 400, // Bad Request
        headers: {
            'Content-Type': 'application/json'
        }
    });
   } 

   return new Response(JSON.stringify({ query }), {
    status: 200,
    headers: {
        'Content-Type': 'application/json'
    }
});  
};