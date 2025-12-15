import React from 'react';

export const FACILITATOR_CONTENT = [
    {
        tab: 'Teori',
        title: '📚 Teoretiske perspektiver på digital og postdigital læring',
        content: React.createElement(React.Fragment, null,
            React.createElement('h4', { className: "font-bold text-lg mt-4 mb-2" }, "💡 Tim Fawns: Sammenfiltret (entangled) pædagogik"),
            React.createElement('p', null, "Tim Fawns (2022) udvikler begrebet entangled pedagogy, som beskriver, hvordan pædagogik, teknologi, værdier og kontekst altid er gensidigt forbundet. Han kritiserer både teknologisk determinisme (teknologien styrer læringen) og pædagogisk determinisme (pædagogikken styrer uafhængigt af teknologi). I stedet skal læring forstås som en sammenfiltret praksis, hvor undervisningens form og kvalitet afhænger af det komplekse samspil mellem mennesker, teknologier og formål."),
            React.createElement('p', { className: 'mt-2' }, "➡️ Centralt er, at læring ikke kan planlægges ud fra faste metoder, men må tilpasses og forhandles i konteksten – en erkendelse, der ligger tæt på det postdigitale perspektiv."),
            React.createElement('p', { className: 'text-sm italic mt-1' }, "📖 (Fawns, 2019, 2022)"),

            React.createElement('h4', { className: "font-bold text-lg mt-6 mb-2" }, "🌐 Linda Harasim: Interaktion som grundlag for online læring"),
            React.createElement('p', null, "Linda Harasim (2017) beskriver tre centrale former for interaktion i netbaseret læring:"),
            React.createElement('ul', { className: "list-disc pl-5 space-y-1 my-2" },
                React.createElement('li', null, React.createElement('strong', null, "Intellectual Convergence (IC)"), " – hvor deltagere skaber fælles forståelse og viden gennem samarbejde."),
                React.createElement('li', null, React.createElement('strong', null, "Idea Generation (IG)"), " – hvor nye idéer opstår i dialog."),
                React.createElement('li', null, React.createElement('strong', null, "Idea Organization (IO)"), " – hvor idéer struktureres og diskuteres kritisk.")
            ),
            React.createElement('p', null, "Hun ser online læring som en kollaborativ proces, hvor viden ikke overføres, men konstrueres gennem kommunikation og refleksion. Harasim lægger vægt på, at teknologien muliggør nye sociale rum for læring – men kun, hvis den faciliteres pædagogisk."),
            React.createElement('p', { className: 'text-sm italic mt-1' }, "📖 (Harasim, Learning Theory and Online Technologies, 2017)"),

            React.createElement('h4', { className: "font-bold text-lg mt-6 mb-2" }, "🔄 Lamb: Sociomaterielle og postdigitale læringsrum"),
            React.createElement('p', null, "Brian Lamb (2023) bygger videre på postdigital tænkning og sociomaterielle perspektiver. Han argumenterer for, at teknologi og menneskelig praksis er sammenflettede i læringsrummet, og at undervisning derfor må ses som en del af et økosystem af både materielle, tekniske og sociale elementer."),
            React.createElement('p', { className: 'mt-2' }, "Lambs perspektiv peger på, at læringsrummet ikke blot indeholder teknologi, men er formet af den – og at undervisning i en postdigital tid kræver refleksiv bevidsthed om, hvordan teknologier, steder og relationer skaber læringens betingelser."),
            React.createElement('p', { className: 'text-sm italic mt-1' }, "📖 (Lamb, 2023)"),

            React.createElement('h4', { className: "font-bold text-lg mt-6 mb-2" }, "👥 Lave & Wenger: Situeret læring"),
            React.createElement('p', null, "Jean Lave og Etienne Wenger (1991) ser læring som deltagelse i sociale praksisser frem for tilegnelse af viden. I teorien om situeret læring lærer man gennem legitim perifer deltagelse – altså ved gradvist at blive en del af et praksisfællesskab."),
            React.createElement('p', { className: 'mt-2' }, "Her forstås viden ikke som noget, der kan overføres fra lærer til elev, men som noget der udvikles i relation til aktivitet, kontekst og fællesskab. Teknologiske læringsmiljøer kan dermed fungere som praksisfællesskaber, hvor studerende lærer gennem samarbejde og deltagelse."),
            React.createElement('p', { className: 'text-sm italic mt-1' }, "📖 (Lave & Wenger, Situated Learning, 1991)"),

            React.createElement('h4', { className: "font-bold text-lg mt-6 mb-2" }, "🏛️ Wenger: Praksisfællesskaber"),
            React.createElement('p', null, "I sin senere teori uddyber Etienne Wenger (1998) begrebet praksisfællesskaber som sociale enheder, hvor deltagere deler fælles engagement, fælles praksis og gensidigt ansvar."),
            React.createElement('p', { className: 'mt-2' }, "Læring opstår i deltagelsen i fælles meningsskabelse og i de forhandlinger, der finder sted i fællesskabet. Perspektivet er særligt relevant i digitale sammenhænge, hvor fællesskaber kan eksistere både online og fysisk, og hvor grænserne mellem læring, samarbejde og identitet bliver flydende."),
            React.createElement('p', { className: 'text-sm italic mt-1' }, "📖 (Wenger, Communities of Practice, 1998)"),
            
            React.createElement('h4', { className: "font-bold text-lg mt-6 mb-2" }, "🔄 Anna Sfard: To metaforer for læring"),
            React.createElement('p', null, "Anna Sfard (1998) skelner mellem to dominerende metaforer for læring:"),
            React.createElement('ul', { className: "list-disc pl-5 space-y-1 my-2" },
                React.createElement('li', null, React.createElement('strong', null, "Tilegnelsesmetaforen (acquisition)"), " – læring som individuel opsamling af viden."),
                React.createElement('li', null, React.createElement('strong', null, "Deltagelsesmetaforen (participation)"), " – læring som aktiv deltagelse i fællesskaber.")
            ),
            React.createElement('p', null, "Hun argumenterer for, at begge metaforer er nødvendige, men at uddannelsespraksis ofte overvægter tilegnelse frem for deltagelse. I digitale og postdigitale læringsrum bliver Sfards skel særligt relevant, fordi teknologier både muliggør individuel adgang til viden og kollektiv meningsdannelse."),
            React.createElement('p', { className: 'text-sm italic mt-1' }, "📖 (Sfard, On Two Metaphors for Learning and the Dangers of Choosing Just One, 1998)"),

            React.createElement('h4', { className: "font-bold text-lg mt-6 mb-2" }, "📋 ABC-metoden – et kollaborativt læringsdesign for den postdigitale undervisning"),
            React.createElement('p', null, "ABC-metoden (Arena Blended Connected Curriculum Design) er en hurtig, kollaborativ og visuel tilgang til læringsdesign, der understøtter undervisere i at skabe blandede og sammenhængende læringsforløb. Metoden blev oprindeligt udviklet på University College London (UCL) af Clive Young og Nataša Perović (2015) og er siden videreudviklet i europæiske netværk som 4EU+ og Aalborg Universitets Center for Digitalt Understøttet Læring (CDUL)."),
            React.createElement('p', { className: 'mt-2' }, "🎯 Formålet med ABC-metoden er at hjælpe undervisere med at oversætte læringsmål til konkrete læringsaktiviteter, der kombinerer fysiske, digitale og kollaborative elementer i et meningsfuldt flow. Det sker gennem en kort workshop (typisk 90 minutter), hvor undervisere i fællesskab designer deres kursus ved hjælp af farvekodede aktivitetskort og et storyboard."),
            React.createElement('p', { className: 'mt-2' }, "Metoden bygger på Laurillards (2012) “Conversational Framework”, som identificerer seks typer læringsaktiviteter:"),
            React.createElement('ul', { className: "list-disc pl-5 space-y-1 my-2" },
                React.createElement('li', null, "Tilegnelse (Acquisition) – fx læsning, video, forelæsning 📖"),
                React.createElement('li', null, "Diskussion (Discussion) – dialog og argumentation 💬"),
                React.createElement('li', null, "Undersøgelse (Inquiry) – søge og analysere data 🔍"),
                React.createElement('li', null, "Samarbejde (Collaboration) – fælles opgaveløsning og videndeling 🤝"),
                React.createElement('li', null, "Praksis (Practice) – anvendelse af teori i handling 🧠"),
                React.createElement('li', null, "Produktion (Production) – skabe et produkt, præsentation eller refleksion ✍️")
            ),
            React.createElement('p', null, "I workshoppen planlægges, hvor og hvordan disse aktiviteter forekommer i undervisningsforløbet. Det resulterer i et visuelt kort over læringsforløbet, som synliggør balancen mellem forskellige læringsformer og medier."),
            React.createElement('p', { className: 'mt-2' }, "📘 Den nyeste version af ABC Learning Design Toolkit (4EU+, 2022) inkluderer også refleksioner over alignement mellem læringsmål, aktiviteter og vurderingsformer samt hvordan forløbet understøtter sammenhængende læringsrejser på tværs af digitale og fysiske læringsrum."),
            React.createElement('p', { className: 'mt-2' }, "ABC-metoden fungerer derfor ikke blot som et designværkøj, men som en pædagogisk samtale, hvor undervisere forhandler, hvilke typer læring og teknologi der giver mening i netop deres kontekst. Det er i tråd med det postdigitale perspektiv (Fawns, 2022), hvor teknologi, mennesker og pædagogik ses som sammenvævede faktorer i undervisningen."),
            React.createElement('p', { className: 'mt-2 font-semibold' }, "💡 Kort sagt:"),
            React.createElement('p', null, "ABC-metoden hjælper undervisere med at skabe refleksivt, aktivt og varieret læringsdesign, hvor digitale og analoge aktiviteter integreres meningsfuldt."),
            React.createElement('p', { className: 'mt-2 font-semibold' }, "Kilder:"),
            React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
                React.createElement('li', null, "UCL Digital Education (2015). ABC: Arena Blended Connected Curriculum Design."),
                React.createElement('li', null, "4EU+ Alliance (2022). ABC Learning Design Curriculum Worksheet."),
                React.createElement('li', null, "ABC-LD Official Site"),
                React.createElement('li', null, "CDUL, Aalborg Universitet. ABC-metoden – Læringsdesign i praksis.")
            ),

            React.createElement('h4', { className: "font-bold text-lg mt-6 mb-2" }, "🔄 Læringscirkler – kollaborativ refleksion og praksisnær læring"),
            React.createElement('p', null, "Læringscirkler er en struktureret og dialogbaseret metode til fælles refleksion, videndeling og kompetenceudvikling i mindre grupper. Modellen trækker på en nordisk tradition for kollektiv læring – fx studiecirkler og folkeoplysning – og bruges i dag både i uddannelses-, ledelses- og udviklingskontekster."),
            React.createElement('p', { className: 'mt-2' }, "Metoden er særligt udbredt gennem Dansk Kompetence- og Læringscenter (DKGL) og bygger på erfaringer fra projekter støttet af Uddannelses- og Forskningsministeriets digitaliseringspulje samt forskning i praksisfællesskaber (Wenger, 1998) og erfaringsbaseret læring (Kolb, 1984)."),
            React.createElement('h5', { className: "font-semibold mt-4 mb-2" }, "🧩 Grundidé og proces"),
            React.createElement('p', null, "En læringscirkel består typisk af 4–8 deltagere, som mødes gentagne gange for at udvikle egen praksis gennem fælles undersøgelse, sparring og refleksion. Deltagerne arbejder ud fra en fælles struktur, der skaber balance mellem erfaringsudveksling og fremadrettet læring."),
            React.createElement('p', { className: 'mt-2' }, "En læringscirkel gennemløber ofte følgende faser (jf. DKGL, 2021):"),
             React.createElement('ol', { className: "list-decimal pl-5 space-y-1 my-2" },
                React.createElement('li', null, "Initiering og rammesætning – gruppen etablerer fælles formål, spilleregler og temaer for læring."),
                React.createElement('li', null, "Deling af praksisfortællinger – hver deltager præsenterer konkrete udfordringer eller eksempler fra egen praksis."),
                React.createElement('li', null, "Refleksion og fælles undersøgelse – gruppen stiller undersøgende spørgsmål, udfordrer perspektiver og kobler teori på erfaringer."),
                React.createElement('li', null, "Aftale om handling – deltagerne beslutter nye tiltag, afprøver ideer mellem møderne og bringer erfaringer tilbage."),
                React.createElement('li', null, "Opsamling og dokumentation – læring synliggøres gennem logbog, fælles noter eller visuelle opsummeringer.")
            ),
            React.createElement('p', null, "Metoden understøttes af en facilitator, som hjælper gruppen med at holde fokus, sikre lige deltagelse og skabe refleksivt rum frem for evaluativt."),
            React.createElement('h5', { className: "font-semibold mt-4 mb-2" }, "💬 Læring som social og iterativ proces"),
            React.createElement('p', null, "Læringscirkler hviler på en forståelse af læring som social, situeret og kontinuerlig, i tråd med Lave & Wenger’s (1991) teori om situeret læring og praksisfællesskaber. Deltagerne bliver en del af et midlertidigt fællesskab, hvor erfaringer og perspektiver kobles med teoretisk viden – en proces, der både styrker refleksiv praksis og faglig identitet."),
            React.createElement('p', { className: 'mt-2' }, "💡 Metoden skaber dermed et læringsrum, der ikke blot handler om at tilegne sig ny viden, men om at deltage i meningsskabende dialoger og eksperimentere med egen praksis – i tråd med Sfards (1998) deltagelsesmetafor for læring."),
            React.createElement('h5', { className: "font-semibold mt-4 mb-2" }, "🌍 Læringscirkler i en postdigital kontekst"),
            React.createElement('p', null, "I en postdigital virkelighed (Fawns, 2022; Dalsgaard & Ryberg, 2022) kan læringscirkler foregå hybride eller helt online, og teknologien bliver en naturlig del af læringsrummet frem for et adskilt redskab. Digitale platforme som Teams, Padlet eller Miro bruges her til at fastholde kontinuitet, samskabelse og visuel refleksion, uden at det går på kompromis med nærværet."),
            React.createElement('p', { className: 'mt-2' }, "Hermed bliver læringscirklen en sociomateriel praksis, hvor teknologi, mennesker og refleksion smelter sammen i et dynamisk læringsrum — et konkret udtryk for postdigital pædagogik i praksis."),
            React.createElement('p', { className: 'mt-2 font-semibold' }, "📚 Centrale kilder"),
             React.createElement('ul', { className: 'list-disc pl-5 space-y-1 text-sm' },
                React.createElement('li', null, "DKGL (2021). Guides og agendaer til læringscirkler."),
                React.createElement('li', null, "Uddannelses- og Forskningsministeriet (2020). Digital kompetenceudvikling gennem læringscirkler."),
                React.createElement('li', null, "Wenger, E. (1998). Communities of Practice: Learning, Meaning, and Identity. Cambridge University Press."),
                React.createElement('li', null, "Lave, J., & Wenger, E. (1991). Situated Learning: Legitimate Peripheral Participation. Cambridge University Press."),
                React.createElement('li', null, "Sfard, A. (1998). On Two Metaphors for Learning and the Dangers of Choosing Just One. Educational Researcher, 27(2), 4–13."),
                React.createElement('li', null, "Fawns, T. (2022). An Entangled Pedagogy. Postdigital Science and Education, 4(2), 711–728."),
                React.createElement('li', null, "Dalsgaard, C., & Ryberg, T. (2022). Digitale læringsrum. Aarhus Universitetsforlag.")
            )
        )
    },
    {
        tab: 'Møde 1',
        title: '🚀 Møde 1 – Opstart, Selvevaluering & Introduktion til ABC-metoden',
        content: React.createElement(React.Fragment, null,
            React.createElement('p', { className: "font-semibold" }, "🎯 Tema: ", React.createElement('span', { className: "font-normal" }, "Hvor står jeg som underviser i den postdigitale praksis?")),
            React.createElement('p', { className: "font-semibold mt-2" }, "💡 Formål: ", React.createElement('span', { className: "font-normal" }, "At skabe fælles forståelse, introducere redskaberne (læringscirkler, selv-evaluering og ABC-metoden) og identificere individuelle udviklingsområder.")),
            React.createElement('h4', { className: "font-bold text-lg mt-6 mb-2" }, "📝 Aktiviteter:"),
            React.createElement('ul', { className: "list-disc pl-5 space-y-3" },
                React.createElement('li', null, "Introduktion til læringscirkler – prinpperne fra DKGL: eksperimentering, refleksion og kollegial sparring."),
                React.createElement('li', null,
                    "Introduktion til ABC-metoden – kort gennemgang af de seks læringsaktiviteter:",
                    React.createElement('ul', { className: "list-circle pl-5 mt-2 space-y-1" },
                        React.createElement('li', null, "Erhvervelse"),
                        React.createElement('li', null, "Samarbejde"),
                        React.createElement('li', null, "Diskussion"),
                        React.createElement('li', null, "Anvendelse"),
                        React.createElement('li', null, "Produktion"),
                        React.createElement('li', null, "Undersøgelse")
                    ),
                    React.createElement('p', { className: "mt-1" }, "Samt hvordan de kan bruges til at designe og analysere undervisning i en postdigital kontekst.")
                ),
                React.createElement('li', null, "Fælles drøftelse: Hvad betyder postdigital undervisning for os – og hvor kan ABC’s læringsaktiviteter hjælpe os med at skabe balance mellem digitale og analoge læringsformer?"),
                React.createElement('li', null, "Selv-evaluering: Hver deltager vurderer sig selv på de 13 parametre (1–5)."),
                React.createElement('li', null,
                    "Refleksion i par:",
                    React.createElement('ul', { className: "list-circle pl-5 mt-2 space-y-1" },
                        React.createElement('li', null, "Hvad viser min selv-evaluering?"),
                        React.createElement('li', null, "Hvilke kompetencer ser jeg som mine styrker, og hvor oplever jeg udviklingspotentiale?"),
                        React.createElement('li', null, "Hvordan hænger min selv-evaluering sammen med de læringsaktiviteter, jeg typisk bruger (ABC)?"),
                        React.createElement('li', null, "Hvordan afspejler min praksis balancen mellem digitale og analoge aktiviteter?")
                    )
                ),
                React.createElement('li', null, "Fælles mapping: Deltagerne plotter deres fokusområder i et fælles læringskort (Miro eller fysisk)."),
                React.createElement('li', null, "Afslutning: Formulér et personligt læringsmål frem mod næste møde.")
            ),
            React.createElement('h4', { className: "font-bold text-lg mt-6 mb-2" }, "🏠 Hjemmeopgave:"),
            React.createElement('ul', { className: "list-disc pl-5 space-y-2" },
                React.createElement('li', null, "Vælg ét fokusområde fra selv-evalueringen (fx “brug af analoge teknologier i digitale rum”) og medbring et konkret eksempel fra egen undervisning. Marker samtidig, hvilke ABC-læringsaktiviteter der indgår i eksemplet.")
            )
        )
    },
    {
        tab: 'Møde 2',
        title: '🔎 Møde 2 – Udforskning, Didaktisk design & ABC-kortlægning',
        content: React.createElement(React.Fragment, null,
            React.createElement('p', { className: "font-semibold" }, "🤔 Tema: ", React.createElement('span', { className: "font-normal" }, "Hvordan kan jeg udvikle min praksis?")),
            React.createElement('p', { className: "font-semibold mt-2" }, "🔗 Formål: ", React.createElement('span', { className: "font-normal" }, "At koble resultaterne fra selv-evalueringen med didaktiske valg via terningerne og ABC-metoden for at skabe nye idéer til eksperimenter.")),
            React.createElement('h4', { className: "font-bold text-lg mt-6 mb-2" }, "🎲 Aktiviteter:"),
            React.createElement('ul', { className: "list-disc pl-5 space-y-3" },
                React.createElement('li', null, "Tjek-ind: Hvad lærte jeg af mit fokusområde siden sidst?"),
                React.createElement('li', null, "ABC-analyse: Kortlæg dit eksisterende undervisningsforløb på et ABC-læringsdesignkort for at synliggøre, hvilke læringsaktiviteter der dominerer (fx meget “Erhvervelse”, lidt “Samarbejde”)."),
                React.createElement('li', null,
                    "Refleksion før terningeøvelsen:",
                    React.createElement('ul', { className: "list-circle pl-5 mt-2 space-y-1" },
                        React.createElement('li', null, "Hvordan kan denne kombination af didaktik, digitale og analoge teknologier skabe værdi i min undervisning?"),
                        React.createElement('li', null, "Hvilke læringsmål ønsker jeg, at mine studerende skal opnå med dette design?"),
                        React.createElement('li', null, "Hvilke udfordringer kan opstå, når det digitale og analoge skal integreres?"),
                        React.createElement('li', null, "Hvordan kan jeg sikre, at teknologien understøtter – og ikke styrer – det didaktiske formål?")
                    )
                ),
                React.createElement('li', null,
                    "Terningeøvelse 1: Kast de tre terninger (Digital, Analog, Didaktisk metode).",
                    React.createElement('ol', { className: "list-decimal pl-5 mt-2 space-y-1" },
                        React.createElement('li', null, "Diskutér i grupper: Hvordan kunne denne kombination se ud i praksis?"),
                        React.createElement('li', null, "Hvilket læringsmål kunne det understøtte?"),
                        React.createElement('li', null, "Hvilke ABC-læringsaktiviteter aktiveres her?")
                    )
                ),
                React.createElement('li', null, "Mini-workshop: Design et lille eksperiment ud fra terningekastet (fx et blended læringsforløb, en analog refleksionsøvelse med digital feedback osv.) og placer det på ABC-kortet."),
                React.createElement('li', null, "Peer-feedback: Deltagerne giver hinanden input som “kritiske venner”."),
                React.createElement('li', null, "Afslutning: Planlæg at afprøve eksperimentet i egen undervisning inden næste møde.")
            ),
            React.createElement('h4', { className: "font-bold text-lg mt-6 mb-2" }, "🧪 Hjemmeopgave:"),
            React.createElement('ul', { className: "list-disc pl-5 space-y-2" },
                React.createElement('li', null, "Afprøv dit eksperiment i praksis. Notér observationer, udfordringer og reaktioner fra de studerende, og vurder hvordan de forskellige ABC-læringsaktiviteter kom i spil.")
            )
        )
    },
    {
        tab: 'Møde 3',
        title: '🤝 Møde 3 – Eksperimentering & Kollegial sparring',
        content: React.createElement(React.Fragment, null,
            React.createElement('p', { className: "font-semibold" }, "📈 Tema: ", React.createElement('span', { className: "font-normal" }, "Hvad skete der, da jeg prøvede det af?")),
            React.createElement('p', { className: "font-semibold mt-2" }, "💬 Formål: ", React.createElement('span', { className: "font-normal" }, "At dele erfaringer, analysere læring og reflektere over samspillet mellem digitalt, analogt og didaktisk design – og koble erfaringerne til ABC-aktiviteterne.")),
            React.createElement('h4', { className: "font-bold text-lg mt-6 mb-2" }, "🗣️ Aktiviteter:"),
            React.createElement('ul', { className: "list-disc pl-5 space-y-3" },
                React.createElement('li', null, "Tjek-ind: Kort præsentation af afprøvningen – “Hvad gjorde jeg, og hvad oplevede jeg?”"),
                React.createElement('li', null,
                    "Fælles refleksion:",
                    React.createElement('ul', { className: "list-circle pl-5 mt-2 space-y-1" },
                        React.createElement('li', null, "Hvad fungerede godt, og hvorfor?"),
                        React.createElement('li', null, "Hvordan virkede kombinationen af de tre elementer (fra terningerne)?"),
                        React.createElement('li', null, "Hvordan støttede det mit læringsmål fra selv-evalueringen?"),
                        React.createElement('li', null, "Hvilke barrierer opstod, og hvordan håndterede jeg dem?"),
                        React.createElement('li', null, "Hvordan reagerede de studerende på det nye forløb?"),
                        React.createElement('li', null, "Hvilke ABC-læringsaktiviteter blev styrket – og hvilke blev måske overset?"),
                        React.createElement('li', null, "Hvad lærte jeg om min egen undervisningsstil?"),
                        React.createElement('li', null, "Hvordan ændrede min forståelse af postdigital undervisning sig undervejs?")
                    )
                ),
                React.createElement('li', null, "Sparringsrunder: Deltagerne giver hinanden feedback og idéer til justering."),
                React.createElement('li', null, "Terningeøvelse 2: Kast igen – men med et kollegialt fokus: Hvordan kan jeg støtte en kollega i at arbejde med denne kombination og udvide brugen af ABC-metoden?"),
                React.createElement('li', null, "Afslutning: Justér dit eksperiment og planlæg næste iteration.")
            ),
            React.createElement('h4', { className: "font-bold text-lg mt-6 mb-2" }, "🔄 Hjemmeopgave:"),
            React.createElement('ul', { className: "list-disc pl-5 space-y-2" },
                React.createElement('li', null, "Foretag en ny version af dit eksperiment i undervisningen, og dokumentér ændringerne (video, noter, studenterfeedback).")
            )
        )
    },
    {
        tab: 'Møde 4',
        title: '🧩 Møde 4 – Sammenhæng & Overførsel',
        content: React.createElement(React.Fragment, null,
            React.createElement('p', { className: "font-semibold" }, "🌱 Tema: ", React.createElement('span', { className: "font-normal" }, "Hvordan forankres læringen i praksis?")),
            React.createElement('p', { className: "font-semibold mt-2" }, "📊 Formål: ", React.createElement('span', { className: "font-normal" }, "At samle læring, tydeliggøre ændringer i praksis og identificere næste skridt – med fokus på ABC-aktiviteter og udvikling i selv-evalueringen.")),
            React.createElement('h4', { className: "font-bold text-lg mt-6 mb-2" }, "👥 Aktiviteter:"),
            React.createElement('ul', { className: "list-disc pl-5 space-y-3" },
                React.createElement('li', null, "Fælles deling: Hvad har ændret sig i min undervisning siden start?"),
                React.createElement('li', null,
                    "Gruppedrøftelse:",
                    React.createElement('ul', { className: "list-circle pl-5 mt-2 space-y-1" },
                        React.createElement('li', null, "Hvilke mønstre ser vi i vores selv-evalueringspunkter nu?"),
                        React.createElement('li', null, "Hvad viser forskellen mellem min første og min anden selv-evaluering?"),
                        React.createElement('li', null, "Er der udvikling på udvalgte akser? (gentag evt. selvevalueringen)"),
                        React.createElement('li', null, "Hvilke kompetencer har jeg udviklet – og hvad skyldes det?"),
                        React.createElement('li', null, "Hvordan hænger det sammen med de ABC-læringsaktiviteter, jeg har arbejdet mest med?"),
                        React.createElement('li', null, "Hvordan kan jeg bringe mine erfaringer videre til kolleger eller organisationen?"),
                        React.createElement('li', null, "Hvad vil jeg gerne fortsætte med at udforske i næste iteration?"),
                        React.createElement('li', null, "Hvordan kan læringscirklen og ABC-metoden forankres som en del af vores fælles praksis?")
                    )
                ),
                React.createElement('li', null, "Opsamling på terningerne: Hvilke kombinationer har fungeret bedst – og hvorfor?"),
                React.createElement('li', null, "Plan for videndeling: Hvordan kan vi bringe dette videre i kollegiale fora (fx workshop, afdelingsmøde)?"),
                React.createElement('li', null, "Afslutning: Evaluering af forløbet med korte refleksioner (“Hvad tager jeg med mig?”).")
            ),
            React.createElement('h4', { className: "font-bold text-lg mt-6 mb-2" }, "📖 Hjemmeopgave:"),
            React.createElement('ul', { className: "list-disc pl-5 space-y-2" },
                React.createElement('li', null, "Udarbejd en kort læringsfortælling eller case, som beskriver din udvikling i læringscirklen med udgangspunkt i selv-evalueringen og ABC-metoden.")
            )
        )
    },
    {
        tab: 'Møde 5',
        title: '🎉 (Valgfrit) Møde 5 – Videndeling & Fremadrettet forankring',
        content: React.createElement(React.Fragment, null,
            React.createElement('p', { className: "font-semibold" }, "🌱 Tema: ", React.createElement('span', { className: "font-normal" }, "Hvordan holder vi læringen levende?")),
            React.createElement('p', { className: "font-semibold mt-2" }, "🏆 Formål: ", React.createElement('span', { className: "font-normal" }, "At evaluere processen, samle cases og planlægge organisatorisk forankring.")),
            React.createElement('h4', { className: "font-bold text-lg mt-6 mb-2" }, "🎤 Aktiviteter:"),
            React.createElement('ul', { className: "list-disc pl-5 space-y-3" },
                React.createElement('li', null, "Fælles præsentation: Deltagerne fremlægger deres læringsfortællinger."),
                React.createElement('li', null, "Refleksion: Hvilke organisatoriske rammer understøttede læringen – og hvad manglede?"),
                React.createElement('li', null, "Fælles plan: Opret nye læringscirkler, hvor deltagerne fungerer som “peer-facilitatorer”."),
                React.createElement('li', null, "Afslutning: Fejring og certificering af deltagelse.")
            )
        )
    },
    {
        tab: 'Kvikrunde',
        title: '🎲 Kvikrunde: Skab læringsdesign med ABC-metoden og terningerne',
        content: React.createElement(React.Fragment, null,
            React.createElement('p', { className: "italic" }, "Varighed: 1–2 timer"),
            React.createElement('p', { className: "font-semibold mt-2" }, "Formål: ", React.createElement('span', { className: "font-normal" }, "At give deltagerne en hurtig og legende oplevelse med at skabe et nyt lærings- eller undervisningsdesign ved hjælp af ABC-metoden og de tre terninger (Digital, Analog, Didaktisk metode).")),
            React.createElement('p', { className: "mt-2" }, "Forløbet kan gennemføres solo (individuelt refleksionsforløb) eller i grupper på 2–4 personer (kollegial workshop)."),
            
            React.createElement('h4', { className: "font-bold text-lg mt-6 mb-2" }, "🔹 Trin 1 – Introduktion (10–15 min)"),
            React.createElement('p', { className: "font-semibold" }, "Formål: ", React.createElement('span', { className: "font-normal" }, "At skabe en fælles forståelse af metoden og rammerne.")),
            React.createElement('p', { className: "mt-2" }, "Facilitator introducerer kort:"),
            React.createElement('ul', { className: "list-disc pl-5 space-y-3 mt-2" },
                React.createElement('li', null, React.createElement('strong', null, 'ABC-metoden:'), " De seks læringsaktiviteter: Erhvervelse, Samarbejde, Diskussion, Anvendelse, Produktion, Undersøgelse. Deltagerne bruger disse som ramme for at tænke over, hvilke typer læringsaktiviteter de ønsker at styrke eller variere."),
                React.createElement('li', null, React.createElement('strong', null, 'Terningerne:'), " Bruges som kreative katalysatorer. De repræsenterer:",
                     React.createElement('ul', { className: "list-circle pl-5 mt-2 space-y-1" },
                        React.createElement('li', null, "Digital (fx video, Padlet, online quiz, diskussion på Teams)"),
                        React.createElement('li', null, "Analog (fx samtale, papirøvelser, walk-and-talk, fysisk modellering)"),
                        React.createElement('li', null, "Didaktisk metode (fx casearbejde, refleksion, rollespil, feedback, gruppearbejde)")
                    )
                )
            ),
             React.createElement('p', { className: "mt-3" }, React.createElement('strong', null, 'Output:'), " Fælles forståelse af, hvordan terninger og ABC hænger sammen i læringsdesign."),

            React.createElement('h4', { className: "font-bold text-lg mt-6 mb-2" }, "🎲 Trin 2 – Kast & Kombinér (20 min)"),
            React.createElement('p', { className: "font-semibold" }, "Formål: ", React.createElement('span', { className: "font-normal" }, "At skabe et kreativt udgangspunkt for et konkret læringsdesign.")),
            React.createElement('p', { className: "font-semibold mt-2" }, "Sådan gør du:"),
             React.createElement('ul', { className: "list-disc pl-5 space-y-1 mt-1" },
                React.createElement('li', null, React.createElement('strong', null, 'Solo:'), " Kast alle tre terninger selv, eller træk tre kort fra hver kategori."),
                React.createElement('li', null, React.createElement('strong', null, 'Gruppe:'), " Kast på skift eller sammen, og vælg en kombination, I vil arbejde med.")
            ),
            React.createElement('p', { className: "font-semibold mt-2" }, "Eksempel på kast:"),
             React.createElement('ul', { className: "list-disc pl-5 space-y-1 mt-1" },
                React.createElement('li', null, React.createElement('strong', null, 'Digital:'), " Padlet"),
                React.createElement('li', null, React.createElement('strong', null, 'Analog:'), " Walk-and-talk"),
                React.createElement('li', null, React.createElement('strong', null, 'Didaktisk metode:'), " Caseanalyse")
            ),
            React.createElement('p', { className: "font-semibold mt-2" }, "Refleksionsspørgsmål:"),
             React.createElement('ul', { className: "list-disc pl-5 space-y-1 mt-1" },
                React.createElement('li', null, "Hvordan kunne denne kombination se ud i praksis?"),
                React.createElement('li', null, "Hvilket læringsmål kunne den understøtte?"),
                React.createElement('li', null, "Hvilke ABC-læringsaktiviteter indgår her?"),
                React.createElement('li', null, "Hvordan skaber kombinationen variation, engagement og læring?")
            ),
             React.createElement('p', { className: "mt-3" }, React.createElement('strong', null, 'Output:'), " En idé til et konkret mini-læringsdesign."),
            
            React.createElement('h4', { className: "font-bold text-lg mt-6 mb-2" }, "🧩 Trin 3 – Design & Del (30–40 min)"),
            React.createElement('p', { className: "font-semibold" }, "Formål: ", React.createElement('span', { className: "font-normal" }, "At omsætte idéen til et konkret undervisnings- eller læringsforløb.")),
            React.createElement('p', { className: "font-semibold mt-2" }, "Opgave:"),
             React.createElement('ul', { className: "list-disc pl-5 space-y-2 mt-1" },
                React.createElement('li', null, "Brug ABC-kortet (digitalt eller printet) til at markere, hvilke læringsaktiviteter din idé dækker."),
                React.createElement('li', null, "Udfyld derefter en kort skabelon:",
                    React.createElement('ul', { className: "list-circle pl-5 mt-2 space-y-1" },
                        React.createElement('li', null, React.createElement('strong', null, 'Læringsmål:'), " Hvad skal de studerende lære/gøre?"),
                        React.createElement('li', null, React.createElement('strong', null, 'Aktiviteter:'), " Hvad skal de konkret foretage sig?"),
                        React.createElement('li', null, React.createElement('strong', null, 'Rollefordeling:'), " Hvad gør underviseren, og hvad gør de studerende?"),
                        React.createElement('li', null, React.createElement('strong', null, 'Materialer/teknologier:'), " Hvilke medier, værktøjer eller fysiske elementer indgår?"),
                        React.createElement('li', null, React.createElement('strong', null, 'Varighed:'), " Hvor lang tid varer aktiviteten?"),
                        React.createElement('li', null, React.createElement('strong', null, 'ABC-aktiviteter:'), " Marker, hvilke der dominerer i dit design.")
                    )
                ),
                React.createElement('li', null, React.createElement('strong', null, 'Hvis solo:'), " Lav skitsen alene, og brug refleksionen til at identificere, hvor du kunne variere din undervisning næste gang."),
                React.createElement('li', null, React.createElement('strong', null, 'Hvis i grupper:'), " Lav designet sammen på flipover, Miro, eller i et fælles Google-slide.")
            ),
             React.createElement('p', { className: "mt-3" }, React.createElement('strong', null, 'Output:'), " Et færdigt mini-læringsdesign, som kan bruges eller afprøves direkte."),

            React.createElement('h4', { className: "font-bold text-lg mt-6 mb-2" }, "💬 Trin 4 – Del & Reflektér (20–25 min)"),
            React.createElement('p', { className: "font-semibold" }, "Formål: ", React.createElement('span', { className: "font-normal" }, "At samle og dele læring fra processen.")),
            React.createElement('p', { className: "font-semibold mt-2" }, "Hvis i grupper:"),
             React.createElement('ul', { className: "list-disc pl-5 space-y-2 mt-1" },
                React.createElement('li', null, "Præsentér jeres design for de andre (2–3 min pr. gruppe)."),
                React.createElement('li', null, "Fortæl:",
                     React.createElement('ul', { className: "list-circle pl-5 mt-2 space-y-1" },
                        React.createElement('li', null, "Hvad var jeres terningekombination?"),
                        React.createElement('li', null, "Hvad lærte I undervejs?"),
                        React.createElement('li', null, "Hvilke ABC-aktiviteter blev sat i spil?")
                    )
                )
            ),
             React.createElement('p', { className: "font-semibold mt-2" }, "Hvis solo:"),
             React.createElement('ul', { className: "list-disc pl-5 space-y-2 mt-1" },
                React.createElement('li', null, "Lav en kort refleksion (skriftlig eller mundtlig) over:",
                     React.createElement('ul', { className: "list-circle pl-5 mt-2 space-y-1" },
                        React.createElement('li', null, "Hvilke typer læringsaktiviteter du oftest bruger – og hvilke du gerne vil styrke."),
                        React.createElement('li', null, "Hvordan du kunne bruge terningemetoden til at udvikle nye ideer næste gang.")
                    )
                )
            ),
            React.createElement('p', { className: "font-semibold mt-2" }, "Fælles opsamling:"),
             React.createElement('ul', { className: "list-disc pl-5 space-y-1 mt-1" },
                React.createElement('li', null, "Hvilke kombinationer overraskede eller inspirerede?"),
                React.createElement('li', null, "Hvilke læringsaktiviteter blev mest synlige?"),
                React.createElement('li', null, "Hvad tager vi med os til næste undervisningsforløb?")
            ),

            React.createElement('h4', { className: "font-bold text-lg mt-6 mb-2" }, "✨ Bonusidéer"),
            React.createElement('ul', { className: "list-disc pl-5 space-y-2 mt-1" },
                React.createElement('li', null, "Brug Mentimeter eller Padlet til at samle billeder eller stikord fra designene."),
                React.createElement('li', null, "Skift terningekombination midtvejs for at udfordre kreativiteten."),
                React.createElement('li', null, "Afslut med en hurtig ”idé-galleri”: Hæng designs op, så alle kan gå rundt og se hinandens forslag.")
            )
        )
    },
    {
        tab: 'Ressourcer',
        title: '📂 Ressourcer',
        content: React.createElement(React.Fragment, null,
            React.createElement('p', { className: "mb-6" }, "Her kan du hente materialer til print og brug i dine workshops."),
            
            React.createElement('h4', { className: "font-bold text-lg text-[#1F7A75] mb-4" }, "Terninger til print"),
            React.createElement('div', { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8" },
                
                // Didactic Die
                React.createElement('div', { className: "border border-gray-200 rounded-lg p-4 bg-white hover:shadow-md transition-all" },
                    React.createElement('div', { className: "flex items-center mb-3" },
                        React.createElement('span', { className: "text-2xl mr-3" }, "🎲"),
                        React.createElement('h5', { className: "font-bold text-[#464646]" }, "Didaktiske metoder")
                    ),
                    React.createElement('p', { className: "text-sm text-gray-600 mb-4" }, "Print-selv terning med metoder som Casebaseret læring, PBL og Feedback."),
                    React.createElement('button', { className: "text-sm font-bold text-[#1F7A75] flex items-center hover:underline" }, 
                        "Download PDF",
                        React.createElement('svg', { className: "w-4 h-4 ml-1", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
                            React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" })
                        )
                    )
                ),

                 // Digital Die
                React.createElement('div', { className: "border border-gray-200 rounded-lg p-4 bg-white hover:shadow-md transition-all" },
                    React.createElement('div', { className: "flex items-center mb-3" },
                        React.createElement('span', { className: "text-2xl mr-3" }, "📱"),
                        React.createElement('h5', { className: "font-bold text-[#464646]" }, "Digitale teknologier")
                    ),
                    React.createElement('p', { className: "text-sm text-gray-600 mb-4" }, "Print-selv terning med AI, LMS, Podcast, QR-koder m.fl."),
                    React.createElement('button', { className: "text-sm font-bold text-[#1F7A75] flex items-center hover:underline" }, 
                        "Download PDF",
                        React.createElement('svg', { className: "w-4 h-4 ml-1", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
                            React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" })
                        )
                    )
                ),

                 // Analog Die
                React.createElement('div', { className: "border border-gray-200 rounded-lg p-4 bg-white hover:shadow-md transition-all" },
                    React.createElement('div', { className: "flex items-center mb-3" },
                        React.createElement('span', { className: "text-2xl mr-3" }, "✏️"),
                        React.createElement('h5', { className: "font-bold text-[#464646]" }, "Analoge teknologier")
                    ),
                    React.createElement('p', { className: "text-sm text-gray-600 mb-4" }, "Print-selv terning med Whiteboard, Post-its, Rollespil og Artefakter."),
                    React.createElement('button', { className: "text-sm font-bold text-[#1F7A75] flex items-center hover:underline" }, 
                        "Download PDF",
                        React.createElement('svg', { className: "w-4 h-4 ml-1", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
                            React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" })
                        )
                    )
                )
            ),

            React.createElement('h4', { className: "font-bold text-lg text-[#1F7A75] mb-4 mt-8" }, "Selvevaluering til print"),
            React.createElement('div', { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8" },
                React.createElement('div', { className: "border border-gray-200 rounded-lg p-4 bg-white hover:shadow-md transition-all" },
                    React.createElement('div', { className: "flex items-center mb-3" },
                        React.createElement('span', { className: "text-2xl mr-3" }, "📝"),
                        React.createElement('h5', { className: "font-bold text-[#464646]" }, "Selvevalueringsskema")
                    ),
                    React.createElement('p', { className: "text-sm text-gray-600 mb-4" }, "Skema med refleksionsspørgsmål til de 12 parametre."),
                    React.createElement('button', { className: "text-sm font-bold text-[#1F7A75] flex items-center hover:underline" }, 
                        "Download PDF",
                        React.createElement('svg', { className: "w-4 h-4 ml-1", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
                            React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" })
                        )
                    )
                ),
                React.createElement('div', { className: "border border-gray-200 rounded-lg p-4 bg-white hover:shadow-md transition-all" },
                    React.createElement('div', { className: "flex items-center mb-3" },
                        React.createElement('span', { className: "text-2xl mr-3" }, "🍎"),
                        React.createElement('h5', { className: "font-bold text-[#464646]" }, "Selvevalueringsdiagram (Æblediagram)")
                    ),
                    React.createElement('p', { className: "text-sm text-gray-600 mb-4" }, "De 12 parametre til pædagogisk selvevaluering (Æblediagrammet) til print."),
                    React.createElement('button', { className: "text-sm font-bold text-[#1F7A75] flex items-center hover:underline" }, 
                        "Download PDF",
                        React.createElement('svg', { className: "w-4 h-4 ml-1", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
                            React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" })
                        )
                    )
                )
            ),

            React.createElement('h4', { className: "font-bold text-lg text-[#1F7A75] mb-4" }, "Andre ressourcer"),
            React.createElement('div', { className: "grid grid-cols-1 sm:grid-cols-2 gap-4" },
                React.createElement('div', { className: "border border-gray-200 rounded-lg p-4 bg-white hover:shadow-md transition-all" },
                    React.createElement('div', { className: "flex items-center mb-3" },
                        React.createElement('span', { className: "text-2xl mr-3" }, "🔄"),
                        React.createElement('h5', { className: "font-bold text-[#464646]" }, "Læringscirkler")
                    ),
                    React.createElement('p', { className: "text-sm text-gray-600 mb-4" }, "Guides og værktøjer til facilitering af læringscirkler (DKGL)."),
                    React.createElement('a', { href: "https://dkgl.dk/auto-draft/", target: "_blank", rel: "noopener noreferrer", className: "text-sm font-bold text-[#1F7A75] flex items-center hover:underline" }, 
                        "Gå til hjemmeside",
                        React.createElement('svg', { className: "w-4 h-4 ml-1", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
                            React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" })
                        )
                    )
                ),
                 React.createElement('div', { className: "border border-gray-200 rounded-lg p-4 bg-white hover:shadow-md transition-all" },
                    React.createElement('div', { className: "flex items-center mb-3" },
                        React.createElement('span', { className: "text-2xl mr-3" }, "📋"),
                        React.createElement('h5', { className: "font-bold text-[#464646]" }, "ABC Læringsdesign")
                    ),
                    React.createElement('p', { className: "text-sm text-gray-600 mb-4" }, "Kort og storyboard-skabelon til ABC-metoden."),
                    React.createElement('a', { href: "https://abc-ld.org/download-abc/", target: "_blank", rel: "noopener noreferrer", className: "text-sm font-bold text-[#1F7A75] flex items-center hover:underline" }, 
                        "Gå til hjemmeside",
                        React.createElement('svg', { className: "w-4 h-4 ml-1", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" },
                            React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" })
                        )
                    )
                )
            )
        )
    }
];