export const STORE = {
  name: "Lu Indumentaria",
  shortName: "Lu",
  // Compra mínima para pedidos con envío (se controla también en la función SQL create_order)
  minOrder: 100000,
  // El envío lo paga quien compra, directo al transporte: la tienda no suma costo de envío
  shippingCarriers: "Vía Cargo o el transporte que prefieras",
  payments: "Transferencia",
  hours: "Lunes a sábado de 09:00 a 18:00 hs. Feriados de 10:00 a 16:00 hs.",
  // Número de WhatsApp en formato internacional sin "+" (también es el número del catálogo)
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "5491172461725",
  whatsappLocal: "11 7246-1725",
  // Link completo de Instagram (ej. https://www.instagram.com/usuario). Vacío = no se muestra.
  instagram: "",
};

/** URL pública del sitio (Vercel la define sola en producción) */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
  }).format(n);

/** Precio corto para textos: "$100.000" */
export const shortPrice = (n: number) => formatPrice(n).replace(/,00$/, "").replace(/\s/g, "");
