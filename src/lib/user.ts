export function getUserInitials(name: string) {
  const rgx = /(\p{L}{1})\p{L}+/gu;

  const initials: string[] = [];
  const matches = Array.from(name.matchAll(rgx));

  initials.push(...matches.map((match) => match[1].toUpperCase()));

  return initials.join('');
}
