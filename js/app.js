const subjects = {
   love:[ 'Love encompasses a range of strong and positive emotional and mental states, from the most sublime virtue or good habit, the deepest interpersonal affection, to the simplest pleasure.[1][2][3][4][5] An example of this range of meanings is that the love of a mother differs from the love of a spouse, which differs from the love for food. Most commonly, love refers to a feeling of a strong attraction and emotional attachment',

'Love is considered to be both positive and negative, with its virtue representing human kindness, compassion, and affection, as "the unselfish loyal and benevolent concern for the good of another" and its vice representing human moral flaw, akin to vanity, selfishness, amour-propre, and egotism, as potentially leading people into a type of mania, obsessiveness or codependency.[9][10] It may also describe compassionate and affectionate actions towards other humans, ones self, or animals.[11] In its various forms, love acts as a major facilitator of interpersonal relationships and, owing to its central psychological importance, is one of the most common themes in the creative arts.[12] Love has been postulated to be a function that keeps human beings together against menaces and to facilitate the continuation of the species.[13]',
   ]
,
sports:[
    "Sport pertains to any form of physical activity or game,[1] often competitive and organized, that aims to use, maintain, or improve physical ability and skills while providing enjoyment to participants and, in some cases, entertainment to spectators.[2] Sports can, through casual or organized participation, improve participants' physical health. Hundreds of sports exist, from those between single contestants, through to those with hundreds of simultaneous participants, either in teams or competing as individuals. In certain sports such as racing, many contestants may compete, simultaneously or consecutively, with one winner; in others, the contest (a match) is between two sides, each attempting to exceed the other. Some sports allow a tieor draw in which there is no single winner; others provide tie-breaking methods to ensure one winner and one loser. A number of contests may be arranged in a tournament producing a champion. Many sports leagues make an annual champion by arranging games in a regular sports season, followed in some cases by playoffs.",
    "Sport is generally recognised as system of activities based in physical athleticism or physical dexterity, with major competitions such as the Olympic Games admitting only sports meeting this definition.[3] Other organisations, such as the Council of Europe, preclude activities without a physical element from classification as sports.[2] However, a number of competitive, but non-physical, activities claim recognition as mind sports. The International Olympic Committee (through ARISF) recognises both chess and bridge as bona fide sports, and SportAccord, the international sports federation association, recognises five non-physical sports: bridge, chess, draughts (checkers), Go and xiangqi,[4][5] and limits the number of mind games which can be admitted as sports."
],
science:[
   " Science is a neutral, rigorous, systematic endeavor that builds and organizes knowledge in the form of testable explanations and predictions about the universe.[1][2] Modern science is typically divided into three major branches:[3] natural sciences (e.g., biology, chemistry, and physics), which study the physical world; the social sciences (e.g., economics, psychology, and sociology), which study individuals and societies;[4][5] and the formal sciences (e.g., logic, mathematics, and theoretical computer science), which study formal systems, governed by axioms and rules.[6][7] There is disagreement whether the formal sciences are science disciplines,[8][9][10] because they do not rely on empirical evidence.[11][9] Applied sciences are disciplines that use scientific knowledge for practical purposes, such as in engineering and medicine.",
   "The history of scientific discipline spans the majority of the historical record, with the earliest written records of identifiable predecessors to modern science dating to Bronze Age Egypt and Mesopotamia from around 3000 to 1200 BCE. Their contributions to mathematics, astronomy, and medicine entered and shaped the Greek natural philosophy of classical antiquity, whereby formal attempts were made to provide explanations of events in the physical world based on natural causes, while further advancements, including the introduction of the Hindu–Arabic numeral system, were made during the Golden Age of India.[15]: 12 [16] [17][18] Scientific research deteriorated in these regions after the fall of the Western Roman Empire and Gupta empire during the early middle ages (400 to 1000 CE,) but was preserved and expanded upon in the Middle East during the Islamic Golden Age[19] and later by the efforts of Byzantine Greek scholars who brought Greek manuscripts from the dying Byzantine Empire to Western Europe in the Renaissance."
],
religon:[
    "Religion is a range of social-cultural systems, including designated behaviors and practices, morals, beliefs, worldviews, texts, sanctified places, prophecies, ethics, or organizations, that generally relate humanity to supernatural, transcendental, and spiritual elements[1]—although there is no scholarly consensus over what precisely constitutes a religion.[2][3] Different religions may or may not contain various elements ranging from the divine,[4] sacredness,[5] faith,[6] and a supernatural being or beings",
    "Religious practices may include rituals, sermons, commemoration or veneration (of deities or saints), sacrifices, festivals, feasts, trances, initiations, matrimonial and funerary services, meditation, prayer, music, art, dance, or public service. Religions have sacred histories and narratives, which may be preserved in sacred texts, symbols, and holy places, that primarily aim to give life meaning. Religions may contain symbolic tales that may attempt to explain the origin of life, the universe, and other phenomena; some followers believe these to be true stories. Traditionally, both faith and reason have been considered sources of religious beliefs."
]






}

var sub =''


const btn = document.getElementById('generate')
const inputelem = document.getElementById('number')
const box = document.querySelector('.box')
const titel = document.querySelector('.titel')
const titel1 = document.querySelector('.titel1')
const titel2 = document.querySelector('.titel2')
const titel3 = document.querySelector('.titel3')
console.log(titel2)
function topic(event)
{
   sub = event.target.name
   event.target.checked = 'true'
   console.log(sub)
}
titel.addEventListener('change',topic)
titel1.addEventListener('change',topic)
titel2.addEventListener('change',topic)
titel3.addEventListener('change',topic)

btn.addEventListener('click',function()
{ 
    const arr = subjects[sub]
    console.log(arr)
    var i = 0
    var number = Number(inputelem.value)
    for(i = 0;i < number;i++)
    {
        const par = document.createElement('p')
        par.innerHTML = arr[i]
        box.append(par)
        const space = document.createElement('br')
        box.append(space)

    }
    inputelem.value = ''
})