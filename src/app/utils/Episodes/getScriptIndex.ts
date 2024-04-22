interface ScriptIndexProps {
  currentSaison: string | undefined;
  parts:
    | {
        from: number;
        to: number;
        startToFirst: boolean;
      }
    | undefined;
}

export default function getScriptIndex({
  currentSaison,
  parts,
}: ScriptIndexProps) {
  let scriptIndex;

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

  return scriptIndex;
}
