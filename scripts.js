/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir samhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');
// longest prufa
console.assert(longest("hæ ég er staerdsta") === 'staerdsta', "longest: skilar strengnum 'stærðsta' fyrir inntak");
console.assert(longest("i balt i kol") === "balt", "longest: skilar strengnum 'balt' fyrir inntak");
// shortest prufa
console.assert(shortest("hæ minnsta") === "hæ", "shortest: skilar strengnum 'hæ' fyrir inntak");
console.assert(shortest("eg er minnsta") === 'eg', "shortest: skilar strengnum 'ég' fyrir inntak því það er fyrsta minnsta orðið");
// reverse prufa
console.assert(reverse("hæ ég er stærðsta") === "atsðræts re gé æh", "reverse: skilar strengnum 'atsðræts re gé æh' fyrir inntak");
console.assert(reverse(" ég er stærðsta") === "atsðræts re gé ", "reverse: skilar strengnum 'atsðræts re gé ' fyrir inntak");
// palindrome prufa
console.assert(palindrome("tacocat") === true, "reverse: skilar 'true' fyrir palindrome");
console.assert(palindrome("ekki palindrome") === false, "reverse: skilar 'false' fyrir  streng sem er ekki palindrome");
// vowels prufa
console.assert(vowels("aaaabb") === 4, "reverse: skilar '4' fyrir inntak");
console.assert(vowels("bb") === 0, "reverse: skilar '0' fyrir inntak");
// consonants prufa
console.assert(consonants("bb") === 2, "reverse: skilar '2' fyrir inntak");
console.assert(consonants("aaaaaaébbd") === 3, "reverse: skilar '3' fyrir inntak");
/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  // Útfæra
  // þarf að vera strengur
  if(isString(str)){
    // splitar strenginn með regex
    str = str.match(/[a-zA-Z0-9]+/gi);
    // tómur strengur til að geyma stærðsta orðið
    let largest = "";
    // fer í gegnum splittaða strenginn 
    for (let i = 0; i < str.length; i++) {
      
      // ef str[i] er stærra en lengdinn á stærðsta strengnum 
      // breytir það stærðsta yfir í hvaða orð sem str[i] er
      if (str[i].length > largest.length) {
          largest = str[i];
      }
    }
    //skilar stærðsta
    return largest;
  }
  else{
    return null;
  }
}

function shortest(str) {
  // Útfæra
  // þarf að vera strengur
  if(isString(str)){
    // splitar strenginn við hvert bil
    
    var words = str.split(' ');
    // skoðar öll splituðu orðinn  og athugar hvort ordidN(orðið sem er núna í setninguni)
    // og gáir hvort það sé minna en nuverandi styðsta orðið
    var minnsta = words.reduce((stydst, ordidN) => {
      return ordidN.length < stydst.length ? ordidN : stydst;
    }, words[0]);
    //skilar minnsta
    return minnsta;
    
  }
  else{
    return null;
  }
}

function reverse(str) {
  // Útfæra
  if(isString(str)){
    // splitar strenginn í fylki t.d hallo = ["H","a","l","l","o"]
    var splitString = str.split("");
    // reversear arrayið með reverse();
    var reverseArray = splitString.reverse();
    // sameinar síðan reverseaða fylkinu aftur í streng
    var joinArray = reverseArray.join("");

    // skilar reverseaða strengnum
    return joinArray;
  }
  else{
    return null;
  }
}

function palindrome(str) {
  // Útfæra
  if(isString(str)){
    str = str.toLowerCase();
    var strSplit = str.split("");
    for (let i = 0; i < strSplit.length; i++) {
      if(strSplit[i] === strSplit.reverse()[i] && strSplit[i+1] === strSplit.reverse()[i+1]){

        return true
      }else{
        return false
    }
  }
  }
  else{
    return false;
  }

}

function vowels(str) {
  // Útfæra
  // þarf að vera strengur
  if(isString(str)){
    //gerir streng lowercase svo léttara er að kíkja
    str = str.toLowerCase();
    // allir íslensku samhljóðar splitaðir með regex aðferð
    const VOWELS = /[aeiouyáéýúíóöæ]/gi;
    // notum .match til að sjá hversu margir samhlóðar eru í setninguni
    // t.d. .match skilar frá sér nyjan streng af öllum hlutum sem eru sameigninlegir
    // þar með ef strengur er t.d "aaaabb" mun það gefa "aaaa" útaf þeim fyrirmælum sem
    // gefnar eru til þess 
    const strMatches = str.match(VOWELS);
    if (strMatches) {
        // skilar lengdini af þeim þeim samhljóðum sem voru í strengnum
        return strMatches.length;
    }else {
      // annars skilar það núll ef engir samhljóðar voru í streng
      return 0; 
    }
    }
    else{
      return null;
    }
}

function consonants(str) {
  // Útfæra
  // þarf að vera strengur
  if(isString(str)){
    //gerir streng lowercase svo léttara er að kíkja
    str = str.toLowerCase();
    // allir íslensku sérhljómar splitaðir með regex aðferð
    const CONSONANTS = /[bcdfghjklmnpqrstvwxz]/gi;
    // notum .match til að sjá hversu margir sérhljómar eru í setninguni
    // t.d. .match skilar frá sér nyjan streng af öllum hlutum sem eru sameigninlegir
    // þar með ef strengur er t.d "aaaabb" mun það gefa "bb" útaf þeim fyrirmælum sem
    // gefnar eru til þess 
    const strMatches = str.match(CONSONANTS);
    if (strMatches) {
        // skilar lengdini af þeim þeim sérhljómum sem voru í strengnum
        return strMatches.length;
    }else {
      // annars skilar það núll ef engir sérhljomar voru í streng
      return "0"; 
    }
    }
    else{
      return null;
    }
}

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  // Útfæra
  alert("Leiðbeiningar: Lesið er inn strengur frá notenda sem er síðan unnin af missmunadi föllum"+ "\n" + "t.d til að finna stærðsta orðið í setninguni");
  let inntak = prompt("Settu in streng")
  if(inntak === null){
    return;
  }
  else{
    alert(longest(inntak) + "\n" + shortest(inntak) + "\n" + 
    reverse(inntak) + "\n" + vowels(inntak)+ "\n" + consonants(inntak) + "\n" +
    palindrome(inntak))
    
  }
}
