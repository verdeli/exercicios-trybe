const giao = (who) => `O cumpadi, cê ta baum ${who}`;
const manoGian = (who) =>`EAE maaaaan, firmeza ${who}`;
const gian = (who) => `Olá ! ${who}!`;


const greetingThalles = (how) => {
  const who = 'Thalles';
  // console.logs(typeof how);
  return how(who);
}

// console.log(greetingThalles((who) =>`bão ce tá bein? ${who}`));
console.log(greetingThalles(giao));

