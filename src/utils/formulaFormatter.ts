/**
 * Utility to convert raw machine-readable math symbols into elegant textbook-grade notation.
 * Replaces '*', '**', '^2', and LaTeX scripts with Unicode equivalent characters.
 */
export function formatMathFormula(text: string): string {
  if (!text) return "";
  
  let formatted = text;

  // Replace double asterisks (powers)
  formatted = formatted.replace(/\*\*/g, "^");

  // Handle common variables and subscripts
  formatted = formatted.replace(/E_k/g, "Eₖ");
  formatted = formatted.replace(/E_p/g, "Eₚ");
  formatted = formatted.replace(/E_m/g, "Eₘ");
  formatted = formatted.replace(/E_k/g, "Eₖ");
  formatted = formatted.replace(/P_geo/g, "P_geo");
  formatted = formatted.replace(/Q_bio/g, "Q_bio");
  formatted = formatted.replace(/Q_reaktor/g, "Q_reaktor");
  formatted = formatted.replace(/P_air/g, "P_air");
  formatted = formatted.replace(/P_angin/g, "P_angin");
  formatted = formatted.replace(/P_surya/g, "P_surya");
  formatted = formatted.replace(/Q_kalor/g, "Q");
  formatted = formatted.replace(/E_p/g, "Eₚ");

  // Replace LaTeX code chunks commonly used
  formatted = formatted.replace(/\\frac\{1\}\{2\}/g, "½");
  formatted = formatted.replace(/\\cdot/g, "·");
  formatted = formatted.replace(/\\times/g, "×");
  formatted = formatted.replace(/\\cdot/g, "·");
  formatted = formatted.replace(/\\dot\{m\}/g, "ṁ");
  formatted = formatted.replace(/dot_m/g, "ṁ");
  formatted = formatted.replace(/\\theta/g, "θ");
  formatted = formatted.replace(/_\{uap\}/g, "ᵤₐₚ");
  formatted = formatted.replace(/_\{cair\}/g, "꜀ₐᵢᵣ");
  formatted = formatted.replace(/_\{bio\}/g, "♭ᵢₒ");
  formatted = formatted.replace(/_\{listrik\}/g, "ₗᵢₛₜᵣᵢₖ");
  formatted = formatted.replace(/_\{mekanik\}/g, "ₘₑₖ");
  formatted = formatted.replace(/_\{panas\}/g, "ₚₐₙ");

  // Replace raw asterisks with middle-dots for multiplication
  formatted = formatted.replace(/\s*\*\s*/g, " · ");

  // Convert powers / exponents
  formatted = formatted.replace(/\^2/g, "²");
  formatted = formatted.replace(/\^3/g, "³");
  formatted = formatted.replace(/\^4/g, "⁴");
  formatted = formatted.replace(/\^x/g, "˟");

  // Format subscripts
  formatted = formatted.replace(/_k/g, "ₖ");
  formatted = formatted.replace(/_p/g, "ₚ");
  formatted = formatted.replace(/_m/g, "ₘ");
  formatted = formatted.replace(/_e/g, "ₑ");
  formatted = formatted.replace(/_g/g, "_g");

  // Clean remaining LaTeX backslahes if any are left
  formatted = formatted.replace(/\\/g, "");

  return formatted;
}
