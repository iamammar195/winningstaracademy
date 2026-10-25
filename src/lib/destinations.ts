// ISO country and territory codes, excluding Pakistan and Israel.
const codes = `AD AE AF AG AI AL AM AO AQ AR AS AT AU AW AX AZ BA BB BD BE BF BG BH BI BJ BL BM BN BO BQ BR BS BT BV BW BY BZ CA CC CD CF CG CH CI CK CL CM CN CO CR CU CV CW CX CY CZ DE DJ DK DM DO DZ EC EE EG EH ER ES ET FI FJ FK FM FO FR GA GB GD GE GF GG GH GI GL GM GN GP GQ GR GS GT GU GW GY HK HM HN HR HT HU ID IE IM IN IO IQ IR IS IT JE JM JO JP KE KG KH KI KM KN KP KR KW KY KZ LA LB LC LI LK LR LS LT LU LV LY MA MC MD ME MF MG MH MK ML MM MN MO MP MQ MR MS MT MU MV MW MX MY MZ NA NC NE NF NG NI NL NO NP NR NU NZ OM PA PE PF PG PH PL PM PN PR PS PT PW PY QA RE RO RS RU RW SA SB SC SD SE SG SH SI SJ SK SL SM SN SO SR SS ST SV SX SY SZ TC TD TF TG TH TJ TK TL TM TN TO TR TT TV TW TZ UA UG UM US UY UZ VA VC VE VG VI VN VU WF WS YE YT ZA ZM ZW XK`.split(" ")
const europe = new Set(`AD AL AM AT AX AZ BA BE BG BY CH CY CZ DE DK EE ES FI FO FR GB GE GG GI GR HR HU IE IM IS IT JE LI LT LU LV MC MD ME MK MT NL NO PL PT RO RS RU SE SI SJ SK SM TR UA VA XK`.split(" "))
const names = new Intl.DisplayNames(["en"], { type: "region" })
export const destinations = codes.map(code => ({
  code,
  name: names.of(code) || code,
  europe: europe.has(code),
  flag: String.fromCodePoint(...[...code].map(char => 127397 + char.charCodeAt(0))),
})).sort((a, b) => a.name.localeCompare(b.name))
export const whatsappNumber = "923099942232"
export const whatsappLink = (message = "Hello Winning Stars Academy! I would like free study abroad counselling.") => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
