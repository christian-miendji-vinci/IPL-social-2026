export function isValidEmail(email: string): boolean {

  // 1. Aucun espace autorisé
  for (let i = 0; i < email.length; i++) {
    if (email[i] === " ") {
      return false;
    }
  }

  // 2. Trouver la position du @ manuellement
  let atPos = -1;
  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      atPos = i;
      break;
    }
  }

  if (atPos === -1) {
    return false; // pas de @
  }

  // 3. Vérifier qu'il y a du texte avant et après le @
  if (atPos === 0 || atPos === email.length - 1) {
    return false;
  }

  // 4. Vérifier la présence d'un point dans le domaine
  //    (après le @)
  let dotPos = -1;
  for (let i = atPos + 1; i < email.length; i++) {
    if (email[i] === ".") {
      dotPos = i;
      break;
    }
  }

  if (dotPos === -1) {
    return false; // pas de point dans le domaine
  }

  // 5. Le point ne peut pas être le dernier caractère
  if (dotPos === email.length - 1) {
    return false;
  }

  return true;
}
