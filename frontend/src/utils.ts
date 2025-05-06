import removeMd from "remove-markdown";

/**
 * Converts markdown text to plain text
 * @param markdown The markdown string to convert
 * @returns Plain text with markdown formatting removed
 */
export function markdownToText(markdown: string): string {
  if (!markdown) return "";

  // Using the remove-markdown package to convert markdown to plain text
  return removeMd(markdown);
}
