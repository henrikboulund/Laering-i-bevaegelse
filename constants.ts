import type { Parameter, DieItem } from './types';

export const SELF_EVALUATION_PARAMETERS: Parameter[] = [
    { title: "Didaktik først", description: "Anvender jeg digitale og analoge teknologier ud fra et didaktisk udgangspunkt?" },
    { title: "Teknologi først", description: "Vælger jeg mine didaktiske metoder ud fra de teknologier, jeg anvender." },
    { title: "Sammenflettet anvendelse", description: "Oplever jeg, at analog og digital teknologi er ligeværdige og sammenflettede i min undervisning?" },
    { title: "Fleksibilitet", description: "Giver anvendelsen af digitale teknologier mig frihed og fleksibilitet i min undervisning?" },
    { title: "Kontrol", description: "Giver anvendelsen af digitale teknologier mig kontrol i undervisningen?" },
    { title: "Organisatorisk støtte", description: "Får jeg organisatorisk og ledelsesmæssigt opbakning til at udvikle mine undervisningsformer?" },
    { title: "Tid og ressourcer", description: "Får jeg realistisk tid, ressourcer og mulighed for at eksperimentere og reflektere over min praksis som underviser?" },
    { title: "Alder og erfaring", description: "Påvirker min erfaring og alder mit syn på at skulle anvende nye digitale og analoge undervisningsformer?" },
    { title: "Læringsfællesskaber", description: "Søger jeg aktivt fælles idégenerering og refleksion for at udvikle mine didaktiske kompetencer?" },
    { title: "Eksperimentering", description: "Føler jeg mig tryg ved at afprøve nye teknologier (analoge og digitale), selv når resultatet er usikkert?" },
    { title: "Motivation for udvikling", description: "Er jeg motiveret for at udvikle mine didaktiske kompetencer i fællesskab med kollegaer?" },
    { title: "Tryghed og modstand", description: "Håndterer jeg usikkerhed eller modstand mod nye teknologiske tiltag, der skal anvendes i min undervisning?" },
];

export const EDUCATIONS = [
    "Bioanalytiker",
    "Bygningskonstruktør",
    "Datamatiker",
    "Ergoterapeut",
    "Ernæring og Sundhed",
    "Finansbachelor",
    "Finansøkonom",
    "Fysioterapeut",
    "Handelsøkonom",
    "Jordemoder",
    "Laborant",
    "Logistikøkonom",
    "Lærer",
    "Markedsføringsøkonom",
    "Multimediedesigner",
    "Offentlig administration",
    "Produktionsteknolog",
    "Pædagog",
    "Radiograf",
    "Serviceøkonom",
    "Socialrådgiver",
    "Sygeplejerske",
    "Andet"
];

export const SEMESTERS = [
    "1. semester",
    "2. semester",
    "3. semester",
    "4. semester",
    "5. semester",
    "6. semester",
    "7. semester"
];

export const DICE_DATA: { didactic: DieItem[], digital: DieItem[], analog: DieItem[] } = {
    didactic: [
        { emoji: "💬", title: "Casebaseret læring", description: "Underviseren tager udgangspunkt i realistiske cases fra praksis for at skabe refleksion og dialog.", example: "En sygeplejerskestuderende analyserer et patientforløb, mens en finansøkonom arbejder med en kundecase fra bankverdenen." },
        { emoji: "🧠", title: "Problembaseret læring (PBL)", description: "De studerende arbejder selvstændigt og undersøgende med åbne problemstillinger.", example: "En gruppe pædagogstuderende undersøger, hvordan man kan styrke børns trivsel gennem naturaktiviteter. Datamatikerstuderende designer en digital løsning til en lokal virksomhed." },
        { emoji: "🎭", title: "Simulationsbaseret læring", description: "Læring gennem rollespil, scenarier og simulerede situationer, hvor teori afprøves i praksis.", example: "Sygeplejersker træner akutte patientforløb i simulationsrum. Serviceøkonomer øver konflikthåndtering i receptionen." },
        { emoji: "🔄", title: "Flipped classroom", description: "De studerende tilegner sig teori hjemme, mens undervisningen bruges på anvendelse, samarbejde og refleksion.", example: "Multimediedesignere ser UX-teori som video hjemme og arbejder i klassen med redesign. Lærerstuderende ser undervisningsobservationer online og drøfter dem i grupper." },
        { emoji: "🤝", title: "Samarbejdsbaseret læring", description: "Fælles opgaveløsning med fokus på dialog, refleksion og fælles meningsskabelse.", example: "Markedsføringsøkonomer udvikler kampagner for lokale iværksættere. Fysioterapeuter planlægger træningsforløb i teams." },
        { emoji: "💬", title: "Feedback og peer review", description: "Læring gennem at give og modtage konstruktiv feedback fra medstuderende.", example: "Studerende giver hinanden respons på refleksionsopgaver i Padlet. Lærerstuderende laver peer feedback på didaktiske designs." },
    ],
    digital: [
        { emoji: "🧩", title: "Miro, Padlet, Kahoot, m.fl.", description: "Værktøjer til idéudvikling, refleksion, hurtig feedback og fælles opsamling.", example: "En underviser i innovation bruger Miro til at strukturere gruppernes designproces. En pædagoguddannelse anvender Padlet til at samle refleksioner fra praktik." },
        { emoji: "🤖", title: "AI-assistenter (ChatGPT, Copilot)", description: "Støtter idéudvikling, tekstanalyse og refleksion som sparringspartnere.", example: "En fysioterapeutstuderende bruger AI til at formulere patientvejledning. En markedsføringsøkonom analyserer kundedata og skriver rapportudkast med ChatGPT." },
        { emoji: "📂", title: "Office 365 (Word, Teams, OneNote)", description: "Muliggør fælles produktion, præsentation og koordinering i projekter.", example: "Datamatikergrupper bruger Teams til versionsstyring af apps. Sygeplejerskestuderende deler kliniske refleksioner i OneNote." },
        { emoji: "🧱", title: "LMS (Moodle, Canvas, Itslearning)", description: "Ramme for blended learning, refleksionsopgaver og digitale porteføljer.", example: "En underviser i logistik lægger cases og quizzer i Moodle. Pædagogstuderende afleverer refleksionslogs via Itslearning." },
        { emoji: "🎙️", title: "Podcast, lyd og video", description: "Fremmer læring gennem produktion af lydfortællinger, interviews og refleksioner.", example: "Serviceøkonomer laver podcast om bæredygtig turisme. Lærerstuderende producerer videoanalyse af undervisning." },
        { emoji: "📱", title: "QR-koder", description: "Kobler fysiske objekter til digitale ressourcer i læringsrummet.", example: "Laborantstuderende scanner QR-koder ved udstyr for at se instruktioner. Pædagogstuderende bruger QR-spor i uderum." },
    ],
    analog: [
        { emoji: "✏️", title: "Whiteboard og tavle", description: "Visuelt redskab til fælles planlægning, brainstorm og refleksion.", example: "Økonomistuderende laver visuelle budgetmodeller. Lærerstuderende planlægger undervisningsforløb sammen på tavlen." },
        { emoji: "🗒️", title: "Papir, blyant, farver og Post-its", description: "Fremmer kreativitet, struktur og fysisk samarbejde.", example: "Multimediedesignere tegner wireframes med Post-its. Pædagogstuderende laver farvekodede plancher over læringsmål." },
        { emoji: "🎭", title: "Rollespil, dialogkort og flashcards", description: "Træner kommunikation, samarbejde og refleksion i trygge rammer.", example: "Sygeplejerskestuderende træner patientdialog. Erhvervsøkonomer øver kundemøder gennem rollespil." },
        { emoji: "🧵", title: "Plancher og plakater", description: "Visualiserer processer, ideer og resultater i fælles læringsrum.", example: "Markedsføringsstuderende laver kampagneplancher. Lærerstuderende skaber plakater, der viser didaktiske valg." },
        { emoji: "⚙️", title: "Artefakter fra praksis", description: "Brug konkrete genstande fra erhvervet som læringsværktøjer.", example: "Laborantstuderende anvender laboratorieudstyr. Pædagogstuderende analyserer legetøj og læringsmiljøer." },
        { emoji: "🪑", title: "Rumdesign og møblering", description: "Skab fleksible zoner og læringsmiljøer, der inviterer til samarbejde.", example: "Entreprenørskabsstuderende arbejder i “idézoner”. Læreruddannelsen laver stationsarbejde i klasserummet." },
    ]
};