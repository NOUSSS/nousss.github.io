interface PartsProps {
  from: number;
  to: number;
  startToFirst?: boolean;
}

interface ScriptIndexProps {
  currentSaison: number;
  parts: PartsProps | PartsProps[] | undefined;
}

export default function getScriptIndex({
  currentSaison,
  parts,
}: ScriptIndexProps) {
  let scriptIndex;

  if (!parts) scriptIndex = currentSaison;

  if (Array.isArray(parts)) {
    scriptIndex = currentSaison;

    for (let part of parts) {
      if (!part) continue; // Ignore les parties non définies

      // Vérifie si currentSaison est en dehors de la plage de la partie
      if (
        part.startToFirst
          ? part.from > currentSaison
          : part.from >= currentSaison
      ) {
        // currentSaison est en dehors de la plage, passe à la partie suivante
        continue;
      }

      // Vérifie si currentSaison est supérieure à la fin de la partie
      if (currentSaison > part.to) {
        scriptIndex = (currentSaison - 1).toString(); // En dehors de la plage, ajustement
        continue; // Passe à la partie suivante
      }

      // Vérifie si currentSaison est dans la plage de la partie
      if (
        (part.startToFirst
          ? currentSaison >= part.from
          : currentSaison > part.from) &&
        currentSaison <= part.to
      ) {
        // Génère le scriptIndex pour la plage
        scriptIndex = `${part.from - 1}-${currentSaison - (part.from - 1)}`;
        break; // Sort de la boucle après avoir trouvé un scriptIndex valide
      }
    }
  } else {
    if (
      !parts ||
      (parts.startToFirst
        ? parts.from > Number(currentSaison)
        : parts.from >= Number(currentSaison))
    ) {
      scriptIndex = currentSaison;
    } else {
      if (Number(currentSaison) > parts.to) {
        scriptIndex = (Number(currentSaison) - 1).toString();
      }

      if (
        (parts.startToFirst
          ? Number(currentSaison) >= parts.from
          : Number(currentSaison) > parts.from) &&
        Number(currentSaison) <= parts.to
      ) {
        scriptIndex = `${parts.from}-${Number(currentSaison) - (parts.from - 1)}`;
      }
    }
  }

  return scriptIndex;
}
