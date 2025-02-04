const vocab = [
    { italienisch: "campagna", deutsch: "Land", interval: 1, language: "it" },
    { italienisch: "ci piacciono", deutsch: "mögen wir, wir mögen", interval: 1, language: "it" },
    { italienisch: "amici", deutsch: "Freunde", interval: 1, language: "it" },
    { italienisch: "api", deutsch: "Bienen", interval: 1, language: "it" },
    { italienisch: "già", deutsch: "schon", interval: 1, language: "it" },
    { italienisch: "le piacciono", deutsch: "mag sie", interval: 1, language: "it" },
    { italienisch: "vostra", deutsch: "euer", interval: 1, language: "it" },
    { italienisch: "gli piacciono", deutsch: "mag er", interval: 1, language: "it" },
    { italienisch: "nostro", deutsch: "unser", interval: 1, language: "it" },
    { italienisch: "ti piacciono", deutsch: "magst du", interval: 1, language: "it" },
    { italienisch: "uccello", deutsch: "Vogel", interval: 1, language: "it" },
    { italienisch: "insetto", deutsch: "Insekt", interval: 1, language: "it" },
    { italienisch: "suo", deutsch: "seiner, ihres, deren", interval: 1, language: "it" },
    { italienisch: "suoi", deutsch: "seine, ihre", interval: 1, language: "it" },
    { italienisch: "mi piacciono", deutsch: "ich mag, gefallen mir", interval: 1, language: "it" },
    { italienisch: "sua", deutsch: "Seine, seine, Ihre", interval: 1, language: "it" },
    { italienisch: "utile", deutsch: "nützlich", interval: 1, language: "it" },
    { italienisch: "importante", deutsch: "wichtiges, wichtige, wichtig", interval: 1, language: "it" },
    { italienisch: "tua", deutsch: "deine", interval: 1, language: "it" },
    { italienisch: "tuoi", deutsch: "deine", interval: 1, language: "it" },
    { italienisch: "miei", deutsch: "meine, meinen", interval: 1, language: "it" },
    { italienisch: "mio", deutsch: "mein", interval: 1, language: "it" },
    { italienisch: "venti", deutsch: "zwanzig", interval: 1, language: "it" },
    { italienisch: "fine settimana", deutsch: "Wochenende", interval: 1, language: "it" },
    { italienisch: "calendario", deutsch: "Kalender", interval: 1, language: "it" },
    { italienisch: "domenica", deutsch: "Sonntag", interval: 1, language: "it" },
    { italienisch: "sabato", deutsch: "Samstag", interval: 1, language: "it" },
    { italienisch: "pausa", deutsch: "Pause", interval: 1, language: "it" },
    { italienisch: "venerdì", deutsch: "Freitag", interval: 1, language: "it" },
    { italienisch: "diciannove", deutsch: "neunzehn", interval: 1, language: "it" },
    { italienisch: "della", deutsch: "der, als, von dem", interval: 1, language: "it" },
    { italienisch: "programma", deutsch: "Programm", interval: 1, language: "it" },
    { italienisch: "impegnato", deutsch: "beschäftigt", interval: 1, language: "it" },
    { italienisch: "giovedì", deutsch: "Donnerstag", interval: 1, language: "it" },
    { italienisch: "aprire", deutsch: "öffnen", interval: 1, language: "it" },
    { italienisch: "agenda", deutsch: "Terminkalender", interval: 1, language: "it" },
    { italienisch: "appuntamento", deutsch: "Termin", interval: 1, language: "it" },
    { italienisch: "del", deutsch: "der, als der, des", interval: 1, language: "it" },
    { italienisch: "mercoledì", deutsch: "Mittwoch", interval: 1, language: "it" },
    { italienisch: "che cosa", deutsch: "was", interval: 1, language: "it" },
    { italienisch: "partire", deutsch: "wegfahren, du fährst weg, abreisen", interval: 1, language: "it" },
    { italienisch: "giorno", deutsch: "Tagen, Tag, Tage", interval: 1, language: "it" },
    { italienisch: "riunione", deutsch: "Versammlung, Besprechung", interval: 1, language: "it" },
    { italienisch: "diciotto", deutsch: "achtzehn", interval: 1, language: "it" },
    { italienisch: "lunedì", deutsch: "Montag", interval: 1, language: "it" },
    { italienisch: "dormono", deutsch: "schlafen", interval: 1, language: "it" },
    { italienisch: "martedì", deutsch: "Dienstag", interval: 1, language: "it" },
    { italienisch: "quando", deutsch: "wann, Wann", interval: 1, language: "it" },
    { italienisch: "poltrona", deutsch: "Sessel", interval: 1, language: "it" },
    { italienisch: "coperta", deutsch: "Decke", interval: 1, language: "it" },
    { italienisch: "guanti", deutsch: "Handschuhe", interval: 1, language: "it" },
    { italienisch: "pantofole", deutsch: "Hausschuhe", interval: 1, language: "it" },
    { italienisch: "morbido", deutsch: "weich", interval: 1, language: "it" },
    { italienisch: "prato", deutsch: "Rasen", interval: 1, language: "it" },
    { italienisch: "veloce", deutsch: "schnell, schnelles", interval: 1, language: "it" },
    { italienisch: "basso", deutsch: "schlecht, niedrig, niedrige", interval: 1, language: "it" },
    { italienisch: "alto", deutsch: "hoch, groß, großer", interval: 1, language: "it" },
    { italienisch: "parco", deutsch: "Park, sparsam", interval: 1, language: "it" },
    { italienisch: "giraffa", deutsch: "Giraffe", interval: 1, language: "it" },
    { italienisch: "formica", deutsch: "Ameise", interval: 1, language: "it" },
    { italienisch: "elefante", deutsch: "Elefanten, Elefant", interval: 1, language: "it" },
    { italienisch: "suoniamo", deutsch: "spielen", interval: 1, language: "it" },
    { italienisch: "teatro", deutsch: "Theater", interval: 1, language: "it" },
    { italienisch: "chitarra", deutsch: "Gitarre", interval: 1, language: "it" },
    { italienisch: "suonare", deutsch: "spielen (ein Instrument), spielen", interval: 1, language: "it" },
    { italienisch: "musicista", deutsch: "Musikerin, Musiker", interval: 1, language: "it" },
    { italienisch: "pianoforte", deutsch: "Klavier", interval: 1, language: "it" },
    { italienisch: "spaghetti", deutsch: "Spaghetti", interval: 1, language: "it" },
    { italienisch: "senza", deutsch: "ohne", interval: 1, language: "it" },
    { italienisch: "salsa di pomodoro", deutsch: "Tomatensoße", interval: 1, language: "it" },
    { italienisch: "prosciutto", deutsch: "Schinken", interval: 1, language: "it" },
    { italienisch: "mangiare", deutsch: "essen, fressen", interval: 1, language: "it" },
    { italienisch: "ordinare", deutsch: "bestellen", interval: 1, language: "it" },
    { italienisch: "lista", deutsch: "Liste", interval: 1, language: "it" },
    { italienisch: "fare la spesa", deutsch: "einkaufen", interval: 1, language: "it" },
    { italienisch: "sacchetto", deutsch: "Tüte", interval: 1, language: "it" },
    { italienisch: "supermercato", deutsch: "Supermarkt, Supermarkts", interval: 1, language: "it" },
    { italienisch: "quartiere", deutsch: "Stadtviertel, Viertel", interval: 1, language: "it" },
    { italienisch: "fa caldo", deutsch: "es ist warm", interval: 1, language: "it" },
    { italienisch: "ospite", deutsch: "Gast", interval: 1, language: "it" },
    { italienisch: "prenotare", deutsch: "reservieren", interval: 1, language: "it" },
    { italienisch: "albergo", deutsch: "Hotel", interval: 1, language: "it" },
    { italienisch: "inverno", deutsch: "Winter", interval: 1, language: "it" },
    { italienisch: "estate", deutsch: "Sommer", interval: 1, language: "it" },
    { italienisch: "primavera", deutsch: "Frühling", interval: 1, language: "it" },
    { italienisch: "autunno", deutsch: "Herbst", interval: 1, language: "it" },
    { italienisch: "fa freddo", deutsch: "es ist kalt", interval: 1, language: "it" },
    { italienisch: "fai", deutsch: "machst", interval: 1, language: "it" },
    { italienisch: "passeggiata", deutsch: "Spaziergang", interval: 1, language: "it" },
    { italienisch: "fa", deutsch: "ist, Ist, vor", interval: 1, language: "it" },
    { italienisch: "viaggio", deutsch: "reise, Reise, ich reise", interval: 1, language: "it" },
    { italienisch: "compiti", deutsch: "Hausaufgaben", interval: 1, language: "it" },
    { italienisch: "faccio", deutsch: "mache ich, ich gebe", interval: 1, language: "it" },
    { italienisch: "scuola", deutsch: "Schule", interval: 1, language: "it" },
    { italienisch: "fare", deutsch: "machen", interval: 1, language: "it" },
    { italienisch: "relazione", deutsch: "Beziehung", interval: 1, language: "it" },
    { italienisch: "collaborazione", deutsch: "Zusammenarbeit", interval: 1, language: "it" },
    { italienisch: "discorso", deutsch: "Rede, Ansprache, Gespräch", interval: 1, language: "it" },
    { italienisch: "discussione", deutsch: "Diskussion", interval: 1, language: "it" },
    { italienisch: "chiudere", deutsch: "schließen, schließt, zumachen", interval: 1, language: "it" },
    { italienisch: "di solito", deutsch: "normalerweise", interval: 1, language: "it" },
    { italienisch: "chiudono", deutsch: "beenden sie, schließen, beenden", interval: 1, language: "it" },
    { italienisch: "chiudiamo", deutsch: "beenden wir, schließen wir, Schließen", interval: 1, language: "it" },
    { italienisch: "chiudo", deutsch: "ich schließe, ich mache zu, schließe ich", interval: 1, language: "it" },
    { italienisch: "occhi", deutsch: "Augen", interval: 1, language: "it" },
    { italienisch: "chiavi", deutsch: "Schlüssel", interval: 1, language: "it" },
    { italienisch: "ascensore", deutsch: "Aufzug", interval: 1, language: "it" },
    { italienisch: "cantina", deutsch: "Keller", interval: 1, language: "it" },
    { italienisch: "edificio", deutsch: "Gebäude", interval: 1, language: "it" },
    { italienisch: "scala", deutsch: "Treppe", interval: 1, language: "it" },
    { italienisch: "dall'", deutsch: "aus, beim, von", interval: 1, language: "it" },
    { italienisch: "autobus", deutsch: "Bus", interval: 1, language: "it" },
    { italienisch: "scendete", deutsch: "steigt ihr aus, geht ihr herunter, steigt", interval: 1, language: "it" },
    { italienisch: "dal", deutsch: "aus der, von der, von dem", interval: 1, language: "it" },
    { italienisch: "alla", deutsch: "der, in, an der", interval: 1, language: "it" },
    { italienisch: "fermata", deutsch: "Haltestelle", interval: 1, language: "it" },
    { italienisch: "scendere", deutsch: "aussteigen", interval: 1, language: "it" },
    { italienisch: "prendere", deutsch: "nehmen", interval: 1, language: "it" },
    { italienisch: "treno", deutsch: "Zug, Zugs, Zuges", interval: 1, language: "it" },
    { italienisch: "stazione", deutsch: "Bahnhof", interval: 1, language: "it" },
    { italienisch: "biglietto", deutsch: "Fahrkarte, Ticket", interval: 1, language: "it" },
    { italienisch: "valigia", deutsch: "Koffer", interval: 1, language: "it" },
    { italienisch: "piango", deutsch: "weine", interval: 1, language: "it" },
    { italienisch: "piangere", deutsch: "weinen", interval: 1, language: "it" },
    { italienisch: "ridere", deutsch: "lachen", interval: 1, language: "it" },
    { italienisch: "turco", deutsch: "türkisch, Türkisch", interval: 1, language: "it" },
    { italienisch: "bandiera", deutsch: "Fahne", interval: 1, language: "it" },
    { italienisch: "correre", deutsch: "laufen, rennen", interval: 1, language: "it" },
    { italienisch: "vivere", deutsch: "leben", interval: 1, language: "it" },
    { italienisch: "cinese", deutsch: "chinesisch, Chinesisch", interval: 1, language: "it" },
    { italienisch: "e-mail", deutsch: "E-Mail", interval: 1, language: "it" },
    { italienisch: "spagnolo", deutsch: "spanisch, Spanisch", interval: 1, language: "it" },
    { italienisch: "dizionario", deutsch: "Wörterbuch", interval: 1, language: "it" },
    { italienisch: "scrivere", deutsch: "schreiben", interval: 1, language: "it" },
    { italienisch: "lezione", deutsch: "Stunde, Unterricht, Lehre", interval: 1, language: "it" },
    { italienisch: "conosco", deutsch: "ich kenne, weiß, kenne", interval: 1, language: "it" },
    { italienisch: "americano", deutsch: "amerikanisch, amerikanischen, Amerikaner", interval: 1, language: "it" },
    { italienisch: "bevono", deutsch: "trinken", interval: 1, language: "it" },
    { italienisch: "conoscere", deutsch: "kennen", interval: 1, language: "it" },
    { italienisch: "esercizio", deutsch: "Übung", interval: 1, language: "it" },
    { italienisch: "difficile", deutsch: "schwieriges, schwer, schwierig", interval: 1, language: "it" },
    { italienisch: "lingua", deutsch: "Sprache", interval: 1, language: "it" },
    { italienisch: "facile", deutsch: "einfach, einfache, leicht", interval: 1, language: "it" },
    { italienisch: "diciassette", deutsch: "siebzehn", interval: 1, language: "it" },
    { italienisch: "bracciale", deutsch: "Armband", interval: 1, language: "it" },
    { italienisch: "anello", deutsch: "Ring", interval: 1, language: "it" },
    { italienisch: "anno", deutsch: "Jahr", interval: 1, language: "it" },
    { italienisch: "ecco", deutsch: "hier sind, hier ist", interval: 1, language: "it" },
    { italienisch: "sedici", deutsch: "sechzehn", interval: 1, language: "it" },
    { italienisch: "mutande", deutsch: "Unterhose", interval: 1, language: "it" },
    { italienisch: "cassa", deutsch: "Kasse", interval: 1, language: "it" },
    { italienisch: "scontrino", deutsch: "Kassenzettel", interval: 1, language: "it" },
    { italienisch: "pagare", deutsch: "bezahlen", interval: 1, language: "it" },
    { italienisch: "quindici", deutsch: "fünfzehn", interval: 1, language: "it" },
    { italienisch: "viola", deutsch: "violett", interval: 1, language: "it" },
    { italienisch: "euro", deutsch: "Euro", interval: 1, language: "it" },
    { italienisch: "chiuso", deutsch: "geschlossen", interval: 1, language: "it" },
    { italienisch: "costare", deutsch: "kosten", interval: 1, language: "it" },
    { italienisch: "stivali", deutsch: "Stiefel", interval: 1, language: "it" },
    { italienisch: "quattordici", deutsch: "vierzehn", interval: 1, language: "it" },
    { italienisch: "quelle", deutsch: "jene", interval: 1, language: "it" },
    { italienisch: "centro commerciale", deutsch: "Einkaufszentrum", interval: 1, language: "it" },
    { italienisch: "camerino", deutsch: "Umkleidekabine", interval: 1, language: "it" },
    { italienisch: "aperto", deutsch: "geöffnet", interval: 1, language: "it" },
    { italienisch: "scarpe", deutsch: "Schuhe", interval: 1, language: "it" },
    { italienisch: "tredici", deutsch: "dreizehn", interval: 1, language: "it" },
    { italienisch: "quei", deutsch: "jene", interval: 1, language: "it" },
    { italienisch: "pantaloni", deutsch: "Hose", interval: 1, language: "it" },
    { italienisch: "vetrina", deutsch: "Schaufenster", interval: 1, language: "it" },
    { italienisch: "parcheggio", deutsch: "Parkplatz, ich parke, parke", interval: 1, language: "it" },
    { italienisch: "negozio", deutsch: "Geschäft", interval: 1, language: "it" },
    { italienisch: "a tennis", deutsch: "Tennis", interval: 1, language: "it" },
    { italienisch: "a calcio", deutsch: "Fußball", interval: 1, language: "it" },
    { italienisch: "calcio", deutsch: "Fußball", interval: 1, language: "it" },
    { italienisch: "a carte", deutsch: "Karten", interval: 1, language: "it" },
    { italienisch: "giocare", deutsch: "spielen", interval: 1, language: "it" },
    { italienisch: "palestra", deutsch: "Fitnessstudio", interval: 1, language: "it" },
    { italienisch: "in ferie", deutsch: "im Urlaub, in Urlaub", interval: 1, language: "it" },
    { italienisch: "ancora", deutsch: "noch", interval: 1, language: "it" },
    { italienisch: "settimana", deutsch: "Woche", interval: 1, language: "it" },
    { italienisch: "montagna", deutsch: "Gebirge, Bergen, Berge", interval: 1, language: "it" },
    { italienisch: "prossimo", deutsch: "nächsten, nächster, nächste", interval: 1, language: "it" },
    { italienisch: "mare", deutsch: "Meer", interval: 1, language: "it" },
    { italienisch: "a piedi", deutsch: "zu Fuß", interval: 1, language: "it" },
    { italienisch: "vai", deutsch: "fährst, gehst du, fährst du", interval: 1, language: "it" },
    { italienisch: "puntuale", deutsch: "pünktlicher, pünktlich", interval: 1, language: "it" },
    { italienisch: "ufficio", deutsch: "Büro", interval: 1, language: "it" },
    { italienisch: "va", deutsch: "fahren Sie, sie geht, geht", interval: 1, language: "it" },
    { italienisch: "biblioteca", deutsch: "Bibliothek", interval: 1, language: "it" },
    { italienisch: "capo", deutsch: "Chef", interval: 1, language: "it" },
    { italienisch: "lavoro", deutsch: "Arbeit", interval: 1, language: "it" },
    { italienisch: "orario", deutsch: "Stundenplan, Arbeitszeit, Fahrplan", interval: 1, language: "it" },
    { italienisch: "vado", deutsch: "ich gehe, gehe, fahre", interval: 1, language: "it" },
    { italienisch: "andare", deutsch: "gehen, fahren", interval: 1, language: "it" },
    { italienisch: "bicicletta", deutsch: "Fahrrad", interval: 1, language: "it" },
    { italienisch: "motorino", deutsch: "Moped", interval: 1, language: "it" },
    { italienisch: "ci piace", deutsch: "wir mögen, uns gefällt, gefällt uns", interval: 1, language: "it" },
    { italienisch: "dalle", deutsch: "aus, seit, ab", interval: 1, language: "it" },
    { italienisch: "di", deutsch: "aus, mit, in", interval: 1, language: "it" },
    { italienisch: "aiuto", deutsch: "helfe, Hilfe", interval: 1, language: "it" },
    { italienisch: "cellulare", deutsch: "Handy", interval: 1, language: "it" },
    { italienisch: "aiutare", deutsch: "helfen", interval: 1, language: "it" },
    { italienisch: "sport", deutsch: "Sport, Sportarten", interval: 1, language: "it" },
    { italienisch: "foto", deutsch: "Foto, Fotos", interval: 1, language: "it" },
    { italienisch: "guardiamo", deutsch: "sehen wir uns an, sehen wir an, schauen", interval: 1, language: "it" },
    { italienisch: "stasera", deutsch: "heute Abend", interval: 1, language: "it" },
    { italienisch: "partita", deutsch: "Spiel", interval: 1, language: "it" },
    { italienisch: "guardare", deutsch: "ansehen", interval: 1, language: "it" },
    { italienisch: "guardare la tv", deutsch: "fernsehen", interval: 1, language: "it" },
    { italienisch: "insieme", deutsch: "gemeinsam, zusammen", interval: 1, language: "it" },
    { italienisch: "pranzare", deutsch: "zu Mittag essen", interval: 1, language: "it" },
    { italienisch: "divertente", deutsch: "lustigen, lustiges, lustig", interval: 1, language: "it" },
    { italienisch: "buono", deutsch: "gut", interval: 1, language: "it" },
    { italienisch: "cenare", deutsch: "zu Abend essen", interval: 1, language: "it" },
    { italienisch: "cucinare", deutsch: "kochen", interval: 1, language: "it" },
    { italienisch: "quella", deutsch: "jene", interval: 1, language: "it" },
    { italienisch: "parlare", deutsch: "sprechen", interval: 1, language: "it" },
    { italienisch: "lavorare", deutsch: "arbeiten", interval: 1, language: "it" },
    { italienisch: "scrivania", deutsch: "Schreibtisch", interval: 1, language: "it" },
    { italienisch: "collega", deutsch: "Kollege", interval: 1, language: "it" },
    { italienisch: "studiare", deutsch: "lernen, studieren, lerne", interval: 1, language: "it" },
    { italienisch: "alle", deutsch: "Den, vor, in", interval: 1, language: "it" },
    { italienisch: "undici", deutsch: "elf", interval: 1, language: "it" },
    { italienisch: "quel", deutsch: "jener", interval: 1, language: "it" },
    { italienisch: "dodici", deutsch: "zwölf", interval: 1, language: "it" },
    { italienisch: "a che ora", deutsch: "Um wie viel Uhr, um wie viel Uhr", interval: 1, language: "it" },
    { italienisch: "mangiano", deutsch: "fressen, essen, Essen", interval: 1, language: "it" },
    { italienisch: "riso", deutsch: "Reis", interval: 1, language: "it" },
    { italienisch: "giapponese", deutsch: "japanische, japanisch, japanischen", interval: 1, language: "it" },
    { italienisch: "crudo", deutsch: "roh", interval: 1, language: "it" },
    { italienisch: "cameriere", deutsch: "Kellner, Kellnerinnen, Kellners", interval: 1, language: "it" },
    { italienisch: "cena", deutsch: "Abendessen, isst zu Abend, Abendessens", interval: 1, language: "it" },
    { italienisch: "al", deutsch: "auf, der, in", interval: 1, language: "it" },
    { italienisch: "bar", deutsch: "Café", interval: 1, language: "it" },
    { italienisch: "pranzo", deutsch: "Mittagessen, esse ich zu Mittag", interval: 1, language: "it" },
    { italienisch: "insalata", deutsch: "Salat", interval: 1, language: "it" },
    { italienisch: "uovo", deutsch: "Ei", interval: 1, language: "it" },
    { italienisch: "ristorante", deutsch: "Restaurants, Restaurant", interval: 1, language: "it" },
    { italienisch: "burro", deutsch: "Butter", interval: 1, language: "it" },
    { italienisch: "colazione", deutsch: "Frühstück, ich frühstücke", interval: 1, language: "it" },
    { italienisch: "cioccolata", deutsch: "Schokolade", interval: 1, language: "it" },
    { italienisch: "preparare", deutsch: "zubereiten", interval: 1, language: "it" },
    { italienisch: "marmellata", deutsch: "Marmelade", interval: 1, language: "it" },
    { italienisch: "hanno", deutsch: "haben", interval: 1, language: "it" },
    { italienisch: "solo", deutsch: "nur", interval: 1, language: "it" },
    { italienisch: "villa", deutsch: "Villa", interval: 1, language: "it" },
    { italienisch: "appartamento", deutsch: "Wohnung", interval: 1, language: "it" },
    { italienisch: "piscina", deutsch: "Schwimmbecken, Schwimmbad, ein Schwimmbecken", interval: 1, language: "it" },
    { italienisch: "freddo", deutsch: "kalt", interval: 1, language: "it" },
    { italienisch: "a casa", deutsch: "zu Hause, nach Hause", interval: 1, language: "it" },
    { italienisch: "loro", deutsch: "sie, deren, ihrem", interval: 1, language: "it" },
    { italienisch: "domani", deutsch: "morgen", interval: 1, language: "it" },
    { italienisch: "da solo", deutsch: "allein, selbst, selber", interval: 1, language: "it" },
    { italienisch: "gioco", deutsch: "spiele", interval: 1, language: "it" },
    { italienisch: "avete", deutsch: "habt", interval: 1, language: "it" },
    { italienisch: "nove", deutsch: "neun", interval: 1, language: "it" },
    { italienisch: "dieci", deutsch: "zehn", interval: 1, language: "it" },
    { italienisch: "mangiate", deutsch: "esst ihr", interval: 1, language: "it" },
    { italienisch: "armadio", deutsch: "Schrank", interval: 1, language: "it" },
    { italienisch: "comodo", deutsch: "bequem", interval: 1, language: "it" },
    { italienisch: "letto", deutsch: "Bett", interval: 1, language: "it" },
    { italienisch: "voi", deutsch: "ihr", interval: 1, language: "it" },
    { italienisch: "siete", deutsch: "seid", interval: 1, language: "it" },
    { italienisch: "porta", deutsch: "Tür", interval: 1, language: "it" },
    { italienisch: "balcone", deutsch: "Balkon", interval: 1, language: "it" },
    { italienisch: "bagno", deutsch: "Badezimmer, Bad, Toilette", interval: 1, language: "it" },
    { italienisch: "finestra", deutsch: "Fenster", interval: 1, language: "it" },
    { italienisch: "l'", deutsch: "die, der, das", interval: 1, language: "it" },
    { italienisch: "otto", deutsch: "acht", interval: 1, language: "it" },
    { italienisch: "divano", deutsch: "Sofa", interval: 1, language: "it" },
    { italienisch: "cucina", deutsch: "Küche", interval: 1, language: "it" },
    { italienisch: "salotto", deutsch: "Wohnzimmer", interval: 1, language: "it" },
    { italienisch: "sette", deutsch: "sieben", interval: 1, language: "it" },
    { italienisch: "quanto", deutsch: "wie, wie lange, wie viel", interval: 1, language: "it" },
    { italienisch: "sedia", deutsch: "Stuhl", interval: 1, language: "it" },
    { italienisch: "tavolo", deutsch: "Tisch", interval: 1, language: "it" },
    { italienisch: "lo", deutsch: "die, der, das", interval: 1, language: "it" },
    { italienisch: "a", deutsch: "in, am, in der", interval: 1, language: "it" },
    { italienisch: "stanza", deutsch: "Zimmer", interval: 1, language: "it" },
    { italienisch: "per", deutsch: "für", interval: 1, language: "it" },
    { italienisch: "giardino", deutsch: "Gartens, Garten", interval: 1, language: "it" },
    { italienisch: "fiore", deutsch: "Blume", interval: 1, language: "it" },
    { italienisch: "albero", deutsch: "Baum", interval: 1, language: "it" },
    { italienisch: "foglia", deutsch: "Blatt", interval: 1, language: "it" },
    { italienisch: "cinque", deutsch: "fünf, fünften, fünfte", interval: 1, language: "it" },
    { italienisch: "preferisce", deutsch: "bevorzugt, sie mag lieber, lieber", interval: 1, language: "it" },
    { italienisch: "quale", deutsch: "Welche, welchem, welche", interval: 1, language: "it" },
    { italienisch: "caldo", deutsch: "warmen, heiß, warm", interval: 1, language: "it" },
    { italienisch: "maglioni", deutsch: "Pullover", interval: 1, language: "it" },
    { italienisch: "quattro", deutsch: "vier", interval: 1, language: "it" },
    { italienisch: "preferisci", deutsch: "du magst lieber, möchtest du lieber, bevorzugst du", interval: 1, language: "it" },
    { italienisch: "anche", deutsch: "auch", interval: 1, language: "it" },
    { italienisch: "costoso", deutsch: "teuren, teuer, teures", interval: 1, language: "it" },
    { italienisch: "ragazzi", deutsch: "Jungen, Jungs", interval: 1, language: "it" },
    { italienisch: "economico", deutsch: "billig, billiges, billiger", interval: 1, language: "it" },
    { italienisch: "tre", deutsch: "drei", interval: 1, language: "it" },
    { italienisch: "preferisco", deutsch: "ich ziehe vor, ich mag lieber, ich möchte lieber", interval: 1, language: "it" },
    { italienisch: "fragole", deutsch: "Erdbeeren", interval: 1, language: "it" },
    { italienisch: "pera", deutsch: "Birne", interval: 1, language: "it" },
    { italienisch: "rosse", deutsch: "rot, rote", interval: 1, language: "it" },
    { italienisch: "patata", deutsch: "Kartoffel", interval: 1, language: "it" },
    { italienisch: "vorrei", deutsch: "möchte", interval: 1, language: "it" },
    { italienisch: "due", deutsch: "zwei", interval: 1, language: "it" },
    { italienisch: "per favore", deutsch: "bitte", interval: 1, language: "it" },
    { italienisch: "panini", deutsch: "Brötchen", interval: 1, language: "it" },
    { italienisch: "italiani", deutsch: "italienisch, italienischen, Italiener", interval: 1, language: "it" },
    { italienisch: "gelato", deutsch: "Eis", interval: 1, language: "it" },
    { italienisch: "abbiamo", deutsch: "wir haben, haben", interval: 1, language: "it" },
    { italienisch: "busta", deutsch: "Umschlag", interval: 1, language: "it" },
    { italienisch: "lettera", deutsch: "Brief", interval: 1, language: "it" },
    { italienisch: "questo", deutsch: "diesen, heute, das", interval: 1, language: "it" },
    { italienisch: "leggere", deutsch: "lesen", interval: 1, language: "it" },
    { italienisch: "sporco", deutsch: "schmutzige, schmutzig, schmutziges", interval: 1, language: "it" },
    { italienisch: "pulito", deutsch: "sauber, sauberes", interval: 1, language: "it" },
    { italienisch: "andiamo", deutsch: "Gehen, gehen, fahren", interval: 1, language: "it" },
    { italienisch: "ma", deutsch: "aber", interval: 1, language: "it" },
    { italienisch: "là", deutsch: "dort", interval: 1, language: "it" },
    { italienisch: "noi", deutsch: "wir", interval: 1, language: "it" },
    { italienisch: "siamo", deutsch: "sind wir, wir sind, sind", interval: 1, language: "it" },
    { italienisch: "stanchi", deutsch: "müde", interval: 1, language: "it" },
    { italienisch: "mangiamo", deutsch: "essen, wir essen, essen wir", interval: 1, language: "it" },
    { italienisch: "uomini", deutsch: "Männer", interval: 1, language: "it" },
    { italienisch: "occhiali", deutsch: "Brille", interval: 1, language: "it" },
    { italienisch: "gli", deutsch: "die", interval: 1, language: "it" },
    { italienisch: "ci sono", deutsch: "sind, gibt es, es gibt", interval: 1, language: "it" },
    { italienisch: "problema", deutsch: "Problem", interval: 1, language: "it" },
    { italienisch: "libri", deutsch: "Bücher, Büchern", interval: 1, language: "it" },
    { italienisch: "allegri", deutsch: "fröhlich", interval: 1, language: "it" },
    { italienisch: "c'è", deutsch: "es gibt", interval: 1, language: "it" },
    { italienisch: "qui", deutsch: "hier", interval: 1, language: "it" },
    { italienisch: "le", deutsch: "die, der, sie", interval: 1, language: "it" },
    { italienisch: "farfalle", deutsch: "Schmetterlinge", interval: 1, language: "it" },
    { italienisch: "famiglia", deutsch: "Familie", interval: 1, language: "it" },
    { italienisch: "bambini", deutsch: "Kinder, Kindern, Jungen", interval: 1, language: "it" },
    { italienisch: "i", deutsch: "die", interval: 1, language: "it" },
    { italienisch: "felici", deutsch: "glückliche, glücklichen, glücklich", interval: 1, language: "it" },
    { italienisch: "cavalli", deutsch: "Pferde, Pferden", interval: 1, language: "it" },
    { italienisch: "cani", deutsch: "Hunde, Hunden", interval: 1, language: "it" },
    { italienisch: "animale", deutsch: "Tier", interval: 1, language: "it" },
    { italienisch: "vedere", deutsch: "sehen", interval: 1, language: "it" },
    { italienisch: "natura", deutsch: "Natur", interval: 1, language: "it" },
    { italienisch: "film", deutsch: "Film", interval: 1, language: "it" },
    { italienisch: "con", deutsch: "mit", interval: 1, language: "it" },
    { italienisch: "adesso", deutsch: "jetzt, gerade", interval: 1, language: "it" },
    { italienisch: "gli piace", deutsch: "ihm gefällt, gefällt ihm, es gefällt ihm", interval: 1, language: "it" },
    { italienisch: "le piace", deutsch: "ihr gefällt, gefällt ihr, ihr schmeckt", interval: 1, language: "it" },
    { italienisch: "regalo", deutsch: "Geschenk", interval: 1, language: "it" },
    { italienisch: "musica", deutsch: "Musik", interval: 1, language: "it" },
    { italienisch: "computer", deutsch: "Computer", interval: 1, language: "it" },
    { italienisch: "mai", deutsch: "nie", interval: 1, language: "it" },
    { italienisch: "perché", deutsch: "warum, weil, wieso", interval: 1, language: "it" },
    { italienisch: "città", deutsch: "Stadt", interval: 1, language: "it" },
    { italienisch: "no", deutsch: "nein", interval: 1, language: "it" },
    { italienisch: "non", deutsch: "keine, nicht, keinen", interval: 1, language: "it" },
    { italienisch: "brutto", deutsch: "hässlichen, schlecht, hässlich", interval: 1, language: "it" },
    { italienisch: "in", deutsch: "auf, in den, in der", interval: 1, language: "it" },
    { italienisch: "spesso", deutsch: "oft", interval: 1, language: "it" },
    { italienisch: "ti piace", deutsch: "Magst du sie gern, magst du, gefällt dir", interval: 1, language: "it" },
    { italienisch: "abitare", deutsch: "wohnen", interval: 1, language: "it" },
    { italienisch: "bello", deutsch: "schön, schöne", interval: 1, language: "it" },
    { italienisch: "sì", deutsch: "ja", interval: 1, language: "it" },
    { italienisch: "sempre", deutsch: "immer", interval: 1, language: "it" },
    { italienisch: "mi piace", deutsch: "mir gefällt, gefällt mir, das gefällt mir", interval: 1, language: "it" },
    { italienisch: "gentile", deutsch: "nett", interval: 1, language: "it" },
    { italienisch: "dove", deutsch: "wo", interval: 1, language: "it" },
    { italienisch: "amico", deutsch: "Freund", interval: 1, language: "it" },
    { italienisch: "maglietta", deutsch: "T-Shirt", interval: 1, language: "it" },
    { italienisch: "camicetta", deutsch: "Bluse", interval: 1, language: "it" },
    { italienisch: "pigiama", deutsch: "Pyjama, Schlafanzug", interval: 1, language: "it" },
    { italienisch: "taglia", deutsch: "Größe", interval: 1, language: "it" },
    { italienisch: "nuovo", deutsch: "neue, neu, neuen", interval: 1, language: "it" },
    { italienisch: "vecchio", deutsch: "alter, alt, alte", interval: 1, language: "it" },
    { italienisch: "vestito", deutsch: "Kleid", interval: 1, language: "it" },
    { italienisch: "collana", deutsch: "Halskette", interval: 1, language: "it" },
    { italienisch: "sciarpa", deutsch: "Schal", interval: 1, language: "it" },
    { italienisch: "cravatta", deutsch: "Krawatte", interval: 1, language: "it" },
    { italienisch: "vendere", deutsch: "verkaufen", interval: 1, language: "it" },
    { italienisch: "camicia", deutsch: "Hemd", interval: 1, language: "it" },
    { italienisch: "cappello", deutsch: "Hut", interval: 1, language: "it" },
    { italienisch: "indosso", deutsch: "trage, trage ich", interval: 1, language: "it" },
    { italienisch: "largo", deutsch: "weiter, weiten, weit", interval: 1, language: "it" },
    { italienisch: "indossare", deutsch: "tragen, trage", interval: 1, language: "it" },
    { italienisch: "stretto", deutsch: "eng, enger", interval: 1, language: "it" },
    { italienisch: "cliente", deutsch: "Kunde", interval: 1, language: "it" },
    { italienisch: "gonna", deutsch: "Rock", interval: 1, language: "it" },
    { italienisch: "la", deutsch: "die", interval: 1, language: "it" },
    { italienisch: "il", deutsch: "der", interval: 1, language: "it" },
    { italienisch: "maglione", deutsch: "Pullover", interval: 1, language: "it" },
    { italienisch: "elegante", deutsch: "elegant", interval: 1, language: "it" },
    { italienisch: "orologio", deutsch: "Uhr", interval: 1, language: "it" },
    { italienisch: "giacca", deutsch: "Jacke", interval: 1, language: "it" },
    { italienisch: "cappotto", deutsch: "Mantel", interval: 1, language: "it" },
    { italienisch: "corto", deutsch: "kurz, kurzer, kurzes", interval: 1, language: "it" },
    { italienisch: "lungo", deutsch: "lang, langen, entlang", interval: 1, language: "it" },
    { italienisch: "stanca", deutsch: "müde", interval: 1, language: "it" },
    { italienisch: "scusi", deutsch: "Entschuldigung, Entschuldigen Sie, Entschuldigen", interval: 1, language: "it" },
    { italienisch: "abbastanza", deutsch: "ziemlich", interval: 1, language: "it" },
    { italienisch: "chi", deutsch: "wer", interval: 1, language: "it" },
    { italienisch: "scusa", deutsch: "Entschuldige bitte, Entschuldigung, Entschuldige", interval: 1, language: "it" },
    { italienisch: "arrivederci", deutsch: "Auf Wiedersehen", interval: 1, language: "it" },
    { italienisch: "tardi", deutsch: "spät", interval: 1, language: "it" },
    { italienisch: "buonanotte", deutsch: "Gute Nacht", interval: 1, language: "it" },
    { italienisch: "stanco", deutsch: "müde", interval: 1, language: "it" },
    { italienisch: "signor", deutsch: "Herr", interval: 1, language: "it" },
    { italienisch: "signora", deutsch: "Frau", interval: 1, language: "it" },
    { italienisch: "presto", deutsch: "früh", interval: 1, language: "it" },
    { italienisch: "sta", deutsch: "ihm geht's, geht es, ihr geht's", interval: 1, language: "it" },
    { italienisch: "turista", deutsch: "Tourist", interval: 1, language: "it" },
    { italienisch: "poco", deutsch: "wenig", interval: 1, language: "it" },
    { italienisch: "grazie", deutsch: "danke", interval: 1, language: "it" },
    { italienisch: "oggi", deutsch: "heute", interval: 1, language: "it" },
    { italienisch: "male", deutsch: "schlecht", interval: 1, language: "it" },
    { italienisch: "cosa", deutsch: "was", interval: 1, language: "it" },
    { italienisch: "sto", deutsch: "geht's mir, geht's, geht es mir", interval: 1, language: "it" },
    { italienisch: "bene", deutsch: "gut", interval: 1, language: "it" },
    { italienisch: "come", deutsch: "wie", interval: 1, language: "it" },
    { italienisch: "molto", deutsch: "sehr", interval: 1, language: "it" },
    { italienisch: "stai", deutsch: "geht's dir, dir geht's, geht's", interval: 1, language: "it" },
    { italienisch: "felice", deutsch: "glücklich", interval: 1, language: "it" },
    { italienisch: "buonasera", deutsch: "Guten Abend", interval: 1, language: "it" },
    { italienisch: "dormire", deutsch: "schlafen", interval: 1, language: "it" },
    { italienisch: "compri", deutsch: "kaufst", interval: 1, language: "it" },
    { italienisch: "zaino", deutsch: "Rucksack, Schulranzen", interval: 1, language: "it" },
    { italienisch: "zuppa", deutsch: "Suppe", interval: 1, language: "it" },
    { italienisch: "interessante", deutsch: "interessante, interessant, interessanten", interval: 1, language: "it" },
    { italienisch: "oliva", deutsch: "Olive", interval: 1, language: "it" },
    { italienisch: "giornale", deutsch: "Zeitung", interval: 1, language: "it" },
    { italienisch: "gustoso", deutsch: "lecker", interval: 1, language: "it" },
    { italienisch: "matita", deutsch: "Bleistift", interval: 1, language: "it" },
    { italienisch: "tè", deutsch: "Tee", interval: 1, language: "it" },
    { italienisch: "arancione", deutsch: "orange", interval: 1, language: "it" },
    { italienisch: "libro", deutsch: "Buch", interval: 1, language: "it" },
    { italienisch: "zucchero", deutsch: "Zucker", interval: 1, language: "it" },
    { italienisch: "piccola", deutsch: "klein", interval: 1, language: "it" },
    { italienisch: "vino", deutsch: "Wein", interval: 1, language: "it" },
    { italienisch: "penna", deutsch: "Kugelschreiber, Stift", interval: 1, language: "it" },
    { italienisch: "piccolo", deutsch: "klein", interval: 1, language: "it" },
    { italienisch: "quaderno", deutsch: "Heft", interval: 1, language: "it" },
    { italienisch: "compra", deutsch: "kauft", interval: 1, language: "it" },
    { italienisch: "compro", deutsch: "kaufe", interval: 1, language: "it" },
    { italienisch: "borsa", deutsch: "Tasche", interval: 1, language: "it" },
    { italienisch: "bianca", deutsch: "weiße, weißem, weiß", interval: 1, language: "it" },
    { italienisch: "nera", deutsch: "schwarz", interval: 1, language: "it" },
    { italienisch: "ombrello", deutsch: "Schirm", interval: 1, language: "it" },
    { italienisch: "grande", deutsch: "groß", interval: 1, language: "it" },
    { italienisch: "rossa", deutsch: "rot", interval: 1, language: "it" },
    { italienisch: "bevi", deutsch: "trinkst", interval: 1, language: "it" },
    { italienisch: "auto", deutsch: "Auto", interval: 1, language: "it" },
    { italienisch: "casa", deutsch: "Haus", interval: 1, language: "it" },
    { italienisch: "gialla", deutsch: "gelb", interval: 1, language: "it" },
    { italienisch: "mangi", deutsch: "isst", interval: 1, language: "it" },
    { italienisch: "beve", deutsch: "trinkt", interval: 1, language: "it" },
    { italienisch: "aranciata", deutsch: "Orangenlimonade", interval: 1, language: "it" },
    { italienisch: "formaggio", deutsch: "Käse", interval: 1, language: "it" },
    { italienisch: "stufato", deutsch: "Schmorbraten", interval: 1, language: "it" },
    { italienisch: "fragola", deutsch: "Erdbeere", interval: 1, language: "it" },
    { italienisch: "gustosa", deutsch: "lecker", interval: 1, language: "it" },
    { italienisch: "panino", deutsch: "Brötchen", interval: 1, language: "it" },
    { italienisch: "sete", deutsch: "Durst", interval: 1, language: "it" },
    { italienisch: "verdura", deutsch: "Gemüse", interval: 1, language: "it" },
    { italienisch: "caffè", deutsch: "Kaffee", interval: 1, language: "it" },
    { italienisch: "birra", deutsch: "Bier", interval: 1, language: "it" },
    { italienisch: "frutta", deutsch: "Obst", interval: 1, language: "it" },
    { italienisch: "uno", deutsch: "ein", interval: 1, language: "it" },
    { italienisch: "e", deutsch: "und", interval: 1, language: "it" },
    { italienisch: "carne", deutsch: "Fleisch", interval: 1, language: "it" },
    { italienisch: "latte", deutsch: "Milch", interval: 1, language: "it" },
    { italienisch: "fame", deutsch: "Hunger", interval: 1, language: "it" },
    { italienisch: "bevo", deutsch: "trinke", interval: 1, language: "it" },
    { italienisch: "un'", deutsch: "einem, ein, eine", interval: 1, language: "it" },
    { italienisch: "torta", deutsch: "Torte", interval: 1, language: "it" },
    { italienisch: "acqua", deutsch: "Wasser", interval: 1, language: "it" },
    { italienisch: "arancia", deutsch: "Orange", interval: 1, language: "it" },
    { italienisch: "mangia", deutsch: "isst", interval: 1, language: "it" },
    { italienisch: "pane", deutsch: "Brot", interval: 1, language: "it" },
    { italienisch: "pasta", deutsch: "Pasta", interval: 1, language: "it" },
    { italienisch: "mangio", deutsch: "esse", interval: 1, language: "it" },
    { italienisch: "mela", deutsch: "Apfel", interval: 1, language: "it" },
    { italienisch: "pizza", deutsch: "Pizza", interval: 1, language: "it" },
    { italienisch: "pomodoro", deutsch: "Tomate", interval: 1, language: "it" },
    { italienisch: "tartaruga", deutsch: "Schildkröte", interval: 1, language: "it" },
    { italienisch: "marrone", deutsch: "braun", interval: 1, language: "it" },
    { italienisch: "verde", deutsch: "grün", interval: 1, language: "it" },
    { italienisch: "farfalla", deutsch: "Schmetterling", interval: 1, language: "it" },
    { italienisch: "hai", deutsch: "hast", interval: 1, language: "it" },
    { italienisch: "cavallo", deutsch: "Pferd", interval: 1, language: "it" },
    { italienisch: "intelligente", deutsch: "intelligenten, intelligenter, intelligente", interval: 1, language: "it" },
    { italienisch: "blu", deutsch: "blau", interval: 1, language: "it" },
    { italienisch: "grigio", deutsch: "grau", interval: 1, language: "it" },
    { italienisch: "coniglio", deutsch: "Kaninchen, Kaninchens", interval: 1, language: "it" },
    { italienisch: "o", deutsch: "oder", interval: 1, language: "it" },
    { italienisch: "ha", deutsch: "hat", interval: 1, language: "it" },
    { italienisch: "pesce", deutsch: "Fisch", interval: 1, language: "it" },
    { italienisch: "giallo", deutsch: "gelb, gelbes, gelber", interval: 1, language: "it" },
    { italienisch: "triste", deutsch: "traurig", interval: 1, language: "it" },
    { italienisch: "rosso", deutsch: "rot", interval: 1, language: "it" },
    { italienisch: "nero", deutsch: "schwarz", interval: 1, language: "it" },
    { italienisch: "cane", deutsch: "Hund", interval: 1, language: "it" },
    { italienisch: "allegro", deutsch: "fröhlich", interval: 1, language: "it" },
    { italienisch: "gatto", deutsch: "Katze", interval: 1, language: "it" },
    { italienisch: "bianco", deutsch: "weiß", interval: 1, language: "it" },
    { italienisch: "ho", deutsch: "habe, ich habe, habe ich", interval: 1, language: "it" },
    { italienisch: "austriaca", deutsch: "österreichische, Österreicherin, österreichisches", interval: 1, language: "it" },
    { italienisch: "cuoca", deutsch: "Köchin", interval: 1, language: "it" },
    { italienisch: "cantante", deutsch: "Sänger", interval: 1, language: "it" },
    { italienisch: "francese", deutsch: "französisch", interval: 1, language: "it" },
    { italienisch: "cuoco", deutsch: "Koch", interval: 1, language: "it" },
    { italienisch: "austriaco", deutsch: "österreichisch", interval: 1, language: "it" },
    { italienisch: "impiegata", deutsch: "Angestellte", interval: 1, language: "it" },
    { italienisch: "impiegato", deutsch: "Angestellter", interval: 1, language: "it" },
    { italienisch: "inglese", deutsch: "englisch", interval: 1, language: "it" },
    { italienisch: "insegnante", deutsch: "Lehrer", interval: 1, language: "it" },
    { italienisch: "si chiama", deutsch: "heißt, er heißt, sie heißt", interval: 1, language: "it" },
    { italienisch: "svizzero", deutsch: "Schweizer", interval: 1, language: "it" },
    { italienisch: "commesso", deutsch: "Verkäufer", interval: 1, language: "it" },
    { italienisch: "svizzera", deutsch: "Schweizerin, Schweiz, Schweizer", interval: 1, language: "it" },
    { italienisch: "studentessa", deutsch: "Studentin, Schülerin", interval: 1, language: "it" },
    { italienisch: "commessa", deutsch: "Verkäuferin", interval: 1, language: "it" },
    { italienisch: "lui", deutsch: "er", interval: 1, language: "it" },
    { italienisch: "lei", deutsch: "sie", interval: 1, language: "it" },
    { italienisch: "pronto", deutsch: "fertig, Hallo", interval: 1, language: "it" },
    { italienisch: "studente", deutsch: "Student", interval: 1, language: "it" },
    { italienisch: "italiana", deutsch: "Italienerin, italienisches, italienische", interval: 1, language: "it" },
    { italienisch: "italiano", deutsch: "italienisch, Italiener", interval: 1, language: "it" },
    { italienisch: "tedesca", deutsch: "deutsche, deutsches, deutschen", interval: 1, language: "it" },
    { italienisch: "tedesco", deutsch: "deutsch, Deutscher", interval: 1, language: "it" },
    { italienisch: "piacere", deutsch: "sehr erfreut, erfreut, gefallen", interval: 1, language: "it" },
    { italienisch: "è", deutsch: "das ist, ist das, es ist", interval: 1, language: "it" },
    { italienisch: "ti chiami", deutsch: "du heißt, heißt du, heißt", interval: 1, language: "it" },
    { italienisch: "ragazza", deutsch: "Mädchen", interval: 1, language: "it" },
    { italienisch: "ragazzo", deutsch: "Junge", interval: 1, language: "it" },
    { italienisch: "bambina", deutsch: "Kind", interval: 1, language: "it" },
    { italienisch: "bambino", deutsch: "Kind, Junge, Jungen", interval: 1, language: "it" },
    { italienisch: "tu", deutsch: "du", interval: 1, language: "it" },
    { italienisch: "donna", deutsch: "Frau", interval: 1, language: "it" },
    { italienisch: "un", deutsch: "ein", interval: 1, language: "it" },
    { italienisch: "una", deutsch: "eine", interval: 1, language: "it" },
    { italienisch: "uomo", deutsch: "Mann", interval: 1, language: "it" },
    { italienisch: "sei", deutsch: "hast, bist du, du bist", interval: 1, language: "it" },
    { italienisch: "chiamo", deutsch: "ich rufe an", interval: 1, language: "it" },
    { italienisch: "sono", deutsch: "ich bin, bin, sind sie", interval: 1, language: "it" },
    { italienisch: "mi chiamo", deutsch: "heiße, ich heiße", interval: 1, language: "it" },
    { italienisch: "io", deutsch: "ich", interval: 1, language: "it" },
    { italienisch: "buongiorno", deutsch: "Guten Tag, guten Tag", interval: 1, language: "it" },
    { italienisch: "ciao", deutsch: "hallo", interval: 1, language: "it" }
];


let repeatSchedule = [];
let currentVocab = null;
let correctAnswers = 0;
let incorrectAnswers = 0;
let mainVocabIndex = 0;
const preferredVoiceGender = 'male';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function showNewQuestion() {
    if (!currentVocab) {
        document.getElementById('question').textContent = "Fehler: Keine Vokabel geladen.";
        return;
    }
    const questionEl = document.getElementById('question');
    const solutionEl = document.getElementById('solution');
    questionEl.textContent = currentVocab.italienisch;
    solutionEl.textContent = currentVocab.deutsch;
    solutionEl.style.visibility = 'hidden';
}

function showSolution() {
    const solutionEl = document.getElementById('solution');
    if (!solutionEl) {
        console.error("⚠️ Das Element mit id='solution' wurde nicht gefunden.");
        return;
    }
    solutionEl.style.visibility = 'visible';
    console.log("💡 Lösung angezeigt.");
}

function playAudio() {
    if (currentVocab?.italienisch) {
        const utterance = new SpeechSynthesisUtterance(currentVocab.italienisch);
        utterance.lang = 'it-IT';

        // Stimmen abrufen
        const voices = window.speechSynthesis.getVoices();

        // Priorität: männliche Stimme (it-IT)
        let selectedVoice = voices.find(voice => voice.lang === 'it-IT' && voice.name.toLowerCase().includes('male'));

        // Fallback: irgendeine italienische Stimme
        if (!selectedVoice) {
            selectedVoice = voices.find(voice => voice.lang === 'it-IT');
        }

        // Stimme setzen, wenn verfügbar
        if (selectedVoice) {
            utterance.voice = selectedVoice;
            console.log(`✅ Stimme ausgewählt: ${selectedVoice.name} (${selectedVoice.lang})`);
        } else {
            console.warn("⚠️ Keine passende Stimme gefunden, Standardsprache wird verwendet.");
        }

        // Audio abspielen
        window.speechSynthesis.speak(utterance);
    } else {
        alert("⚠️ Keine Audiodaten verfügbar.");
    }
}

function loadIncorrectVocab() {
    const incorrectVocab = JSON.parse(localStorage.getItem("incorrectVocab")) || [];
    repeatSchedule = incorrectVocab.map(vocab => ({ vocab, due: 0 }));
    localStorage.removeItem("incorrectVocab");
}

function markWrong() {
    if (currentVocab) {
        repeatSchedule.push({ vocab: currentVocab, due: 2 });
        repeatSchedule.push({ vocab: currentVocab, due: 5 });
        repeatSchedule.push({ vocab: currentVocab, due: 10 });

        const incorrectVocab = JSON.parse(localStorage.getItem("incorrectVocab")) || [];
        incorrectVocab.push(currentVocab);
        localStorage.setItem("incorrectVocab", JSON.stringify(incorrectVocab));

        incorrectAnswers++;
        updateProgress();
    }
    selectNextVocab();
}

function markCorrect() {
    if (currentVocab) {
        currentVocab.interval = Math.min(currentVocab.interval * 2, 50);
        correctAnswers++;
        updateProgress();
    }
    selectNextVocab();
}

function updateProgress() {
    const totalAnswers = correctAnswers + incorrectAnswers;
    const progressPercent = totalAnswers > 0 ? (correctAnswers / totalAnswers) * 100 : 0;
    document.getElementById("progress-bar-inner").style.width = `${progressPercent}%`;
    document.getElementById("progress-text").textContent = `Fortschritt: ${correctAnswers} richtig, ${incorrectAnswers} falsch`;
}

function selectNextVocab() {
    if (repeatSchedule.length > 0) {
        const nextRepeat = repeatSchedule[0];
        if (nextRepeat.due === 0) {
            currentVocab = nextRepeat.vocab;
            repeatSchedule.shift();
            showNewQuestion();
            return;
        }
    }

    repeatSchedule.forEach(item => {
        if (item.due > 0) item.due--;
    });

    if (mainVocabIndex < vocab.length) {
        currentVocab = vocab[mainVocabIndex];
        mainVocabIndex++;
        showNewQuestion();
    } else {
        document.getElementById("question").textContent = "Keine Vokabeln mehr!";
    }
}

function initializeTrainer() {
    console.log("🚀 Initialisiere den Trainer...");
    loadIncorrectVocab();
    shuffleArray(vocab);
    mainVocabIndex = 0;
    selectNextVocab();
}

initializeTrainer();
