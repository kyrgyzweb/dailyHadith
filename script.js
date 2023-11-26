let hadiths = [
    "Nothing is heavier on the Scale of Deeds than one’s good manners.",
    "The most beloved of Allah’s slaves to Allah are those with the best manners.",
    "A person may attain through good manners the same level of virtue as those who spend their nights in prayer.",
    "The best among you in Islam are those with the best manners.",
    "When asked about the definition of righteousness, the Prophet (peace be upon him) replied, “Righteousness is good character.",
    "“Whoever believes in Allah and the Last Day, let him speak good things or remain silent.",
    "None of you will have faith until he loves for his brother what he loves for himself.",
    "He who does not show mercy to our young ones or show respect for our elders is not one of us.",
    "Allah will not show mercy to a person who does not show mercy to other people.",
    "A good word is charity,"
];

const hadith = document.getElementById('hadith');
const hadithButton = document.getElementById('hadith-button');

const selectHadith = () => {
    let randomHadith = Math.floor(Math.random() * hadiths.length);
    return hadiths[randomHadith];
}

const showHadith = () => {
    hadith.innerHTML = selectHadith();
    hadithButton.innerHTML = 'Come back tomorrow.';
    hadithButton.style.cursor = 'default';
    hadithButton.removeEventListener('click', showHadith);

}

hadithButton.addEventListener('click', showHadith);