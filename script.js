const vocab = [
    { italienisch: "già", deutsch: "schon", interval: 1, audio: "audio/già.mp3" },
    { italienisch: "suoi", deutsch: "seine, ihre", interval: 1, audio: "audio/suoi.mp3" },
    { italienisch: "sua", deutsch: "Seine, seine, Ihre", interval: 1, audio: "audio/sua.mp3" },
    { italienisch: "mio", deutsch: "mein", interval: 1, audio: "audio/mio.mp3" },
    { italienisch: "fine settimana", deutsch: "Wochenende", interval: 1, audio: "audio/fine_settimana.mp3" },
    { italienisch: "calendario", deutsch: "Kalender", interval: 1, audio: "audio/calendario.mp3" },
    { italienisch: "domenica", deutsch: "Sonntag", interval: 1, audio: "audio/domenica.mp3" },
    { italienisch: "sabato", deutsch: "Samstag", interval: 1, audio: "audio/sabato.mp3" },
    { italienisch: "pausa", deutsch: "Pause", interval: 2, audio: "audio/pausa.mp3" },
    { italienisch: "venerdì", deutsch: "Freitag", interval: 1, audio: "audio/venerdì.mp3" },
    { italienisch: "diciannove", deutsch: "neunzehn", interval: 1, audio: "audio/diciannove.mp3" },
    { italienisch: "della", deutsch: "der, als, von dem", interval: 1, audio: "audio/della.mp3" },
    { italienisch: "programma", deutsch: "Programm", interval: 1, audio: "audio/programma.mp3" },
    { italienisch: "impegnato", deutsch: "beschäftigt", interval: 1, audio: "audio/impegnato.mp3" },
    { italienisch: "giovedì", deutsch: "Donnerstag", interval: 1, audio: "audio/giovedì.mp3" },
    { italienisch: "aprire", deutsch: "öffnen", interval: 1, audio: "audio/aprire.mp3" },
    { italienisch: "agenda", deutsch: "Terminkalender", interval: 1, audio: "audio/agenda.mp3" },
    { italienisch: "appuntamento", deutsch: "Termin", interval: 1, audio: "audio/appuntamento.mp3" },
    { italienisch: "del", deutsch: "der, als der, des", interval: 1, audio: "audio/del.mp3" },
    { italienisch: "mercoledì", deutsch: "Mittwoch", interval: 1, audio: "audio/mercoledì.mp3" },
    { italienisch: "che cosa", deutsch: "was", interval: 1, audio: "audio/che_cosa.mp3" },
    { italienisch: "partire", deutsch: "wegfahren, du fährst weg, abreisen", interval: 1, audio: "audio/partire.mp3" },
    { italienisch: "giorno", deutsch: "Tagen, Tag, Tage", interval: 1, audio: "audio/giorno.mp3" },
    { italienisch: "riunione", deutsch: "Versammlung, Besprechung", interval: 1, audio: "audio/riunione.mp3" },
    { italienisch: "diciotto", deutsch: "achtzehn", interval: 1, audio: "audio/diciotto.mp3" },
    { italienisch: "lunedì", deutsch: "Montag", interval: 1, audio: "audio/lunedì.mp3" },
    { italienisch: "dormono", deutsch: "schlafen", interval: 1, audio: "audio/dormono.mp3" },
    { italienisch: "martedì", deutsch: "Dienstag", interval: 1, audio: "audio/martedì.mp3" },
    { italienisch: "quando", deutsch: "wann, Wann", interval: 1, audio: "audio/quando.mp3" },
    { italienisch: "poltrona", deutsch: "Sessel", interval: 1, audio: "audio/poltrona.mp3" },
    { italienisch: "coperta", deutsch: "Decke", interval: 1, audio: "audio/coperta.mp3" },
    { italienisch: "guanti", deutsch: "Handschuhe", interval: 1, audio: "audio/guanti.mp3" },
    { italienisch: "pantofole", deutsch: "Hausschuhe", interval: 1, audio: "audio/pantofole.mp3" },
    { italienisch: "morbido", deutsch: "weich", interval: 1, audio: "audio/morbido.mp3" },
    { italienisch: "prato", deutsch: "Rasen", interval: 1, audio: "audio/prato.mp3" },
    { italienisch: "veloce", deutsch: "schnell, schnelles", interval: 1, audio: "audio/veloce.mp3" },
    { italienisch: "basso", deutsch: "schlecht, niedrig, niedrige", interval: 1, audio: "audio/basso.mp3" },
    { italienisch: "alto", deutsch: "hoch, groß, großer", interval: 1, audio: "audio/alto.mp3" },
    { italienisch: "parco", deutsch: "Park, sparsam", interval: 1, audio: "audio/parco.mp3" },
    { italienisch: "giraffa", deutsch: "Giraffe", interval: 1, audio: "audio/giraffa.mp3" },
    { italienisch: "formica", deutsch: "Ameise", interval: 1, audio: "audio/formica.mp3" },
    { italienisch: "elefante", deutsch: "Elefanten, Elefant", interval: 1, audio: "audio/elefante.mp3" },
    { italienisch: "suoniamo", deutsch: "spielen", interval: 1, audio: "audio/suoniamo.mp3" },
    { italienisch: "teatro", deutsch: "Theater", interval: 1, audio: "audio/teatro.mp3" },
    { italienisch: "chitarra", deutsch: "Gitarre", interval: 1, audio: "audio/chitarra.mp3" },
    { italienisch: "suonare", deutsch: "spielen (ein Instrument), spielen", interval: 1, audio: "audio/suonare.mp3" },
    { italienisch: "musicista", deutsch: "Musikerin, Musiker", interval: 1, audio: "audio/musicista.mp3" },
    { italienisch: "pianoforte", deutsch: "Klavier", interval: 1, audio: "audio/pianoforte.mp3" },
    { italienisch: "spaghetti", deutsch: "Spaghetti", interval: 1, audio: "audio/spaghetti.mp3" },
    { italienisch: "senza", deutsch: "ohne", interval: 1, audio: "audio/senza.mp3" },
    { italienisch: "salsa di pomodoro", deutsch: "Tomatensoße", interval: 1, audio: "audio/salsa_di_pomodoro.mp3" },
    { italienisch: "prosciutto", deutsch: "Schinken", interval: 1, audio: "audio/prosciutto.mp3" },
    { italienisch: "mangiare", deutsch: "essen, fressen", interval: 1, audio: "audio/mangiare.mp3" },
    { italienisch: "ordinare", deutsch: "bestellen", interval: 1, audio: "audio/ordinare.mp3" },
    { italienisch: "lista", deutsch: "Liste", interval: 1, audio: "audio/lista.mp3" },
    { italienisch: "fare la spesa", deutsch: "einkaufen", interval: 1, audio: "audio/fare_la_spesa.mp3" },
    { italienisch: "sacchetto", deutsch: "Tüte", interval: 1, audio: "audio/sacchetto.mp3" },
    { italienisch: "supermercato", deutsch: "Supermarkt, Supermarkts", interval: 1, audio: "audio/supermercato.mp3" },
    { italienisch: "quartiere", deutsch: "Stadtviertel, Viertel", interval: 1, audio: "audio/quartiere.mp3" },
    { italienisch: "fa caldo", deutsch: "es ist warm", interval: 1, audio: "audio/fa_caldo.mp3" },
    { italienisch: "ospite", deutsch: "Gast", interval: 1, audio: "audio/ospite.mp3" },
    { italienisch: "prenotare", deutsch: "reservieren", interval: 1, audio: "audio/prenotare.mp3" },
    { italienisch: "albergo", deutsch: "Hotel", interval: 1, audio: "audio/albergo.mp3" },
    { italienisch: "inverno", deutsch: "Winter", interval: 1, audio: "audio/inverno.mp3" },
    { italienisch: "estate", deutsch: "Sommer", interval: 1, audio: "audio/estate.mp3" },
    { italienisch: "primavera", deutsch: "Frühling", interval: 1, audio: "audio/primavera.mp3" },
    { italienisch: "autunno", deutsch: "Herbst", interval: 1, audio: "audio/autunno.mp3" },
    { italienisch: "fa freddo", deutsch: "es ist kalt", interval: 1, audio: "audio/fa_freddo.mp3" },
    { italienisch: "fai", deutsch: "machst", interval: 1, audio: "audio/fai.mp3" },
    { italienisch: "passeggiata", deutsch: "Spaziergang", interval: 1, audio: "audio/passeggiata.mp3" },
    { italienisch: "fa", deutsch: "ist, Ist, vor", interval: 1, audio: "audio/fa.mp3" },
    { italienisch: "viaggio", deutsch: "reise, Reise, ich reise", interval: 1, audio: "audio/viaggio.mp3" },
    { italienisch: "compiti", deutsch: "Hausaufgaben", interval: 1, audio: "audio/compiti.mp3" },
    { italienisch: "faccio", deutsch: "mache ich, ich gebe", interval: 1, audio: "audio/faccio.mp3" },
    { italienisch: "scuola", deutsch: "Schule", interval: 1, audio: "audio/scuola.mp3" },
    { italienisch: "fare", deutsch: "machen", interval: 1, audio: "audio/fare.mp3" },
    { italienisch: "relazione", deutsch: "Beziehung", interval: 1, audio: "audio/relazione.mp3" },
    { italienisch: "collaborazione", deutsch: "Zusammenarbeit", interval: 1, audio: "audio/collaborazione.mp3" },
    { italienisch: "discorso", deutsch: "Rede, Ansprache, Gespräch", interval: 1, audio: "audio/discorso.mp3" },
    { italienisch: "discussione", deutsch: "Diskussion", interval: 1, audio: "audio/discussione.mp3" },
    { italienisch: "chiudere", deutsch: "schließen, schließt, zumachen", interval: 1, audio: "audio/chiudere.mp3" },
    { italienisch: "di solito", deutsch: "normalerweise", interval: 1, audio: "audio/di_solito.mp3" },
    { italienisch: "chiudono", deutsch: "beenden sie, schließen, beenden", interval: 1, audio: "audio/chiudono.mp3" },
    { italienisch: "chiudiamo", deutsch: "beenden wir, schließen wir, Schließen", interval: 1, audio: "audio/chiudiamo.mp3" },
    { italienisch: "chiudo", deutsch: "ich schließe, ich mache zu, schließe ich", interval: 1, audio: "audio/chiudo.mp3" },
    { italienisch: "occhi", deutsch: "Augen", interval: 1, audio: "audio/occhi.mp3" },
    { italienisch: "chiavi", deutsch: "Schlüssel", interval: 1, audio: "audio/chiavi.mp3" },
    { italienisch: "ascensore", deutsch: "Aufzug", interval: 1, audio: "audio/ascensore.mp3" },
    { italienisch: "cantina", deutsch: "Keller", interval: 1, audio: "audio/cantina.mp3" },
    { italienisch: "edificio", deutsch: "Gebäude", interval: 1, audio: "audio/edificio.mp3" },
    { italienisch: "scala", deutsch: "Treppe", interval: 1, audio: "audio/scala.mp3" },
    { italienisch: "dall'", deutsch: "aus, beim, von", interval: 1, audio: "audio/dall'.mp3" },
    { italienisch: "autobus", deutsch: "Bus", interval: 1, audio: "audio/autobus.mp3" },
    { italienisch: "scendete", deutsch: "steigt ihr aus, geht ihr herunter, steigt", interval: 1, audio: "audio/scendete.mp3" },
    { italienisch: "dal", deutsch: "aus der, von der, von dem", interval: 1, audio: "audio/dal.mp3" },
    { italienisch: "alla", deutsch: "der, in, an der", interval: 1, audio: "audio/alla.mp3" },
    { italienisch: "fermata", deutsch: "Haltestelle", interval: 1, audio: "audio/fermata.mp3" },
    { italienisch: "scendere", deutsch: "aussteigen", interval: 1, audio: "audio/scendere.mp3" },
    { italienisch: "prendere", deutsch: "nehmen", interval: 1, audio: "audio/prendere.mp3" },
    { italienisch: "treno", deutsch: "Zug, Zugs, Zuges", interval: 1, audio: "audio/treno.mp3" },
    { italienisch: "stazione", deutsch: "Bahnhof", interval: 1, audio: "audio/stazione.mp3" },
    { italienisch: "biglietto", deutsch: "Fahrkarte, Ticket", interval: 1, audio: "audio/biglietto.mp3" },
    { italienisch: "valigia", deutsch: "Koffer", interval: 1, audio: "audio/valigia.mp3" },
    { italienisch: "piango", deutsch: "weine", interval: 1, audio: "audio/piango.mp3" },
    { italienisch: "piangere", deutsch: "weinen", interval: 1, audio: "audio/piangere.mp3" },
    { italienisch: "ridere", deutsch: "lachen", interval: 1, audio: "audio/ridere.mp3" },
    { italienisch: "turco", deutsch: "türkisch, Türkisch", interval: 1, audio: "audio/turco.mp3" },
    { italienisch: "bandiera", deutsch: "Fahne", interval: 1, audio: "audio/bandiera.mp3" },
    { italienisch: "correre", deutsch: "laufen, rennen", interval: 1, audio: "audio/correre.mp3" },
    { italienisch: "vivere", deutsch: "leben", interval: 1, audio: "audio/vivere.mp3" },
    { italienisch: "cinese", deutsch: "chinesisch, Chinesisch", interval: 1, audio: "audio/cinese.mp3" },
    { italienisch: "e-mail", deutsch: "E-Mail", interval: 1, audio: "audio/e-mail.mp3" },
    { italienisch: "spagnolo", deutsch: "spanisch, Spanisch", interval: 1, audio: "audio/spagnolo.mp3" },
    { italienisch: "dizionario", deutsch: "Wörterbuch", interval: 1, audio: "audio/dizionario.mp3" },
    { italienisch: "scrivere", deutsch: "schreiben", interval: 1, audio: "audio/scrivere.mp3" },
    { italienisch: "lezione", deutsch: "Stunde, Unterricht, Lehre", interval: 1, audio: "audio/lezione.mp3" },
    { italienisch: "conosco", deutsch: "ich kenne, weiß, kenne", interval: 1, audio: "audio/conosco.mp3" },
    { italienisch: "americano", deutsch: "amerikanisch, amerikanischen, Amerikaner", interval: 1, audio: "audio/americano.mp3" },
    { italienisch: "bevono", deutsch: "trinken", interval: 1, audio: "audio/bevono.mp3" },
    { italienisch: "conoscere", deutsch: "kennen", interval: 1, audio: "audio/conoscere.mp3" },
    { italienisch: "esercizio", deutsch: "Übung", interval: 1, audio: "audio/esercizio.mp3" },
    { italienisch: "difficile", deutsch: "schwieriges, schwer, schwierig", interval: 1, audio: "audio/difficile.mp3" },
    { italienisch: "lingua", deutsch: "Sprache", interval: 1, audio: "audio/lingua.mp3" },
    { italienisch: "facile", deutsch: "einfach, einfache, leicht", interval: 1, audio: "audio/facile.mp3" },
    { italienisch: "diciassette", deutsch: "siebzehn", interval: 1, audio: "audio/diciassette.mp3" },
    { italienisch: "bracciale", deutsch: "Armband", interval: 1, audio: "audio/bracciale.mp3" },
    { italienisch: "anello", deutsch: "Ring", interval: 1, audio: "audio/anello.mp3" },
    { italienisch: "anno", deutsch: "Jahr", interval: 1, audio: "audio/anno.mp3" },
    { italienisch: "ecco", deutsch: "hier sind, hier ist", interval: 1, audio: "audio/ecco.mp3" },
    { italienisch: "sedici", deutsch: "sechzehn", interval: 1, audio: "audio/sedici.mp3" },
    { italienisch: "mutande", deutsch: "Unterhose", interval: 1, audio: "audio/mutande.mp3" },
    { italienisch: "cassa", deutsch: "Kasse", interval: 1, audio: "audio/cassa.mp3" },
    { italienisch: "scontrino", deutsch: "Kassenzettel", interval: 1, audio: "audio/scontrino.mp3" },
    { italienisch: "pagare", deutsch: "bezahlen", interval: 1, audio: "audio/pagare.mp3" },
    { italienisch: "quindici", deutsch: "fünfzehn", interval: 1, audio: "audio/quindici.mp3" },
    { italienisch: "viola", deutsch: "violett", interval: 1, audio: "audio/viola.mp3" },
    { italienisch: "euro", deutsch: "Euro", interval: 1, audio: "audio/euro.mp3" },
    { italienisch: "chiuso", deutsch: "geschlossen", interval: 1, audio: "audio/chiuso.mp3" },
    { italienisch: "costare", deutsch: "kosten", interval: 1, audio: "audio/costare.mp3" },
    { italienisch: "stivali", deutsch: "Stiefel", interval: 1, audio: "audio/stivali.mp3" },
    { italienisch: "quattordici", deutsch: "vierzehn", interval: 1, audio: "audio/quattordici.mp3" },
    { italienisch: "quelle", deutsch: "jene", interval: 1, audio: "audio/quelle.mp3" },
    { italienisch: "centro commerciale", deutsch: "Einkaufszentrum", interval: 1, audio: "audio/centro_commerciale.mp3" },
    { italienisch: "camerino", deutsch: "Umkleidekabine", interval: 1, audio: "audio/camerino.mp3" },
    { italienisch: "aperto", deutsch: "geöffnet", interval: 1, audio: "audio/aperto.mp3" },
    { italienisch: "scarpe", deutsch: "Schuhe", interval: 1, audio: "audio/scarpe.mp3" },
    { italienisch: "tredici", deutsch: "dreizehn", interval: 1, audio: "audio/tredici.mp3" },
    { italienisch: "quei", deutsch: "jene", interval: 1, audio: "audio/quei.mp3" },
    { italienisch: "pantaloni", deutsch: "Hose", interval: 1, audio: "audio/pantaloni.mp3" },
    { italienisch: "vetrina", deutsch: "Schaufenster", interval: 1, audio: "audio/vetrina.mp3" },
    { italienisch: "parcheggio", deutsch: "Parkplatz, ich parke, parke", interval: 1, audio: "audio/parcheggio.mp3" },
    { italienisch: "negozio", deutsch: "Geschäft", interval: 1, audio: "audio/negozio.mp3" },
    { italienisch: "a tennis", deutsch: "Tennis", interval: 1, audio: "audio/a_tennis.mp3" },
    { italienisch: "a calcio", deutsch: "Fußball", interval: 1, audio: "audio/a_calcio.mp3" },
    { italienisch: "calcio", deutsch: "Fußball", interval: 1, audio: "audio/calcio.mp3" },
    { italienisch: "a carte", deutsch: "Karten", interval: 1, audio: "audio/a_carte.mp3" },
    { italienisch: "giocare", deutsch: "spielen", interval: 1, audio: "audio/giocare.mp3" },
    { italienisch: "palestra", deutsch: "Fitnessstudio", interval: 1, audio: "audio/palestra.mp3" },
    { italienisch: "in ferie", deutsch: "in Urlaub", interval: 1, audio: "audio/in_ferie.mp3" },
    { italienisch: "ancora", deutsch: "noch", interval: 1, audio: "audio/ancora.mp3" },
    { italienisch: "settimana", deutsch: "Woche", interval: 1, audio: "audio/settimana.mp3" },
    { italienisch: "montagna", deutsch: "Gebirge, Bergen, Berge", interval: 1, audio: "audio/montagna.mp3" },
    { italienisch: "prossimo", deutsch: "nächsten, nächster, nächste", interval: 1, audio: "audio/prossimo.mp3" },
    { italienisch: "mare", deutsch: "Meer", interval: 1, audio: "audio/mare.mp3" },
    { italienisch: "a piedi", deutsch: "zu Fuß", interval: 1, audio: "audio/a_piedi.mp3" },
    { italienisch: "vai", deutsch: "fährst, gehst du, fährst du", interval: 1, audio: "audio/vai.mp3" },
    { italienisch: "puntuale", deutsch: "pünktlicher, pünktlich", interval: 1, audio: "audio/puntuale.mp3" },
    { italienisch: "ufficio", deutsch: "Büro", interval: 1, audio: "audio/ufficio.mp3" },
    { italienisch: "va", deutsch: "fahren Sie, sie geht, geht", interval: 1, audio: "audio/va.mp3" },
    { italienisch: "biblioteca", deutsch: "Bibliothek", interval: 1, audio: "audio/biblioteca.mp3" },
    { italienisch: "capo", deutsch: "Chef", interval: 1, audio: "audio/capo.mp3" },
    { italienisch: "lavoro", deutsch: "Arbeit", interval: 1, audio: "audio/lavoro.mp3" },
    { italienisch: "orario", deutsch: "Stundenplan, Arbeitszeit, Fahrplan", interval: 1, audio: "audio/orario.mp3" },
    { italienisch: "vado", deutsch: "ich gehe, gehe, fahre", interval: 1, audio: "audio/vado.mp3" },
    { italienisch: "andare", deutsch: "gehen, fahren", interval: 1, audio: "audio/andare.mp3" },
    { italienisch: "bicicletta", deutsch: "Fahrrad", interval: 1, audio: "audio/bicicletta.mp3" },
    { italienisch: "motorino", deutsch: "Moped", interval: 1, audio: "audio/motorino.mp3" },
    { italienisch: "ci piace", deutsch: "wir mögen, uns gefällt, gefällt uns", interval: 1, audio: "audio/ci_piace.mp3" },
    { italienisch: "dalle", deutsch: "aus, seit, ab", interval: 1, audio: "audio/dalle.mp3" },
    { italienisch: "di", deutsch: "aus, mit, in", interval: 1, audio: "audio/di.mp3" },
    { italienisch: "aiuto", deutsch: "helfe, Hilfe", interval: 1, audio: "audio/aiuto.mp3" },
    { italienisch: "cellulare", deutsch: "Handy", interval: 1, audio: "audio/cellulare.mp3" },
    { italienisch: "aiutare", deutsch: "helfen", interval: 1, audio: "audio/aiutare.mp3" },
    { italienisch: "sport", deutsch: "Sport, Sportarten", interval: 1, audio: "audio/sport.mp3" },
    { italienisch: "foto", deutsch: "Foto, Fotos", interval: 1, audio: "audio/foto.mp3" },
    { italienisch: "guardiamo", deutsch: "sehen wir uns an, sehen wir an, schauen", interval: 1, audio: "audio/guardiamo.mp3" },
    { italienisch: "stasera", deutsch: "heute Abend", interval: 1, audio: "audio/stasera.mp3" },
    { italienisch: "partita", deutsch: "Spiel", interval: 1, audio: "audio/partita.mp3" },
    { italienisch: "guardare", deutsch: "ansehen", interval: 1, audio: "audio/guardare.mp3" },
    { italienisch: "guardare la tv", deutsch: "fernsehen", interval: 1, audio: "audio/guardare_la_tv.mp3" },
    { italienisch: "insieme", deutsch: "gemeinsam, zusammen", interval: 1, audio: "audio/insieme.mp3" },
    { italienisch: "pranzare", deutsch: "zu Mittag essen", interval: 1, audio: "audio/pranzare.mp3" },
    { italienisch: "divertente", deutsch: "lustigen, lustiges, lustig", interval: 1, audio: "audio/divertente.mp3" },
    { italienisch: "buono", deutsch: "gut", interval: 1, audio: "audio/buono.mp3" },
    { italienisch: "cenare", deutsch: "zu Abend essen", interval: 1, audio: "audio/cenare.mp3" },
    { italienisch: "cucinare", deutsch: "kochen", interval: 1, audio: "audio/cucinare.mp3" },
    { italienisch: "quella", deutsch: "jene", interval: 1, audio: "audio/quella.mp3" },
    { italienisch: "parlare", deutsch: "sprechen", interval: 1, audio: "audio/parlare.mp3" },
    { italienisch: "lavorare", deutsch: "arbeiten", interval: 1, audio: "audio/lavorare.mp3" },
    { italienisch: "scrivania", deutsch: "Schreibtisch", interval: 1, audio: "audio/scrivania.mp3" },
    { italienisch: "collega", deutsch: "Kollege", interval: 1, audio: "audio/collega.mp3" },
    { italienisch: "studiare", deutsch: "lernen, studieren, lerne", interval: 1, audio: "audio/studiare.mp3" },
    { italienisch: "alle", deutsch: "Den, vor, in", interval: 1, audio: "audio/alle.mp3" },
    { italienisch: "undici", deutsch: "elf", interval: 1, audio: "audio/undici.mp3" },
    { italienisch: "quel", deutsch: "jener", interval: 1, audio: "audio/quel.mp3" },
    { italienisch: "dodici", deutsch: "zwölf", interval: 1, audio: "audio/dodici.mp3" },
    { italienisch: "a che ora", deutsch: "um wie viel Uhr", interval: 1, audio: "audio/a_che_ora.mp3" },
    { italienisch: "mangiano", deutsch: "fressen, essen, Essen", interval: 1, audio: "audio/mangiano.mp3" },
    { italienisch: "riso", deutsch: "Reis", interval: 1, audio: "audio/riso.mp3" },
    { italienisch: "giapponese", deutsch: "japanische, japanisch, japanischen", interval: 1, audio: "audio/giapponese.mp3" },
    { italienisch: "crudo", deutsch: "roh", interval: 1, audio: "audio/crudo.mp3" },
    { italienisch: "cameriere", deutsch: "Kellner, Kellnerinnen, Kellners", interval: 1, audio: "audio/cameriere.mp3" },
    { italienisch: "cena", deutsch: "Abendessen, isst zu Abend, Abendessens", interval: 1, audio: "audio/cena.mp3" },
    { italienisch: "al", deutsch: "auf, der, in", interval: 1, audio: "audio/al.mp3" },
    { italienisch: "bar", deutsch: "Café", interval: 1, audio: "audio/bar.mp3" },
    { italienisch: "pranzo", deutsch: "Mittagessen, esse ich zu Mittag", interval: 1, audio: "audio/pranzo.mp3" },
    { italienisch: "insalata", deutsch: "Salat", interval: 1, audio: "audio/insalata.mp3" },
    { italienisch: "uovo", deutsch: "Ei", interval: 1, audio: "audio/uovo.mp3" },
    { italienisch: "ristorante", deutsch: "Restaurants, Restaurant", interval: 1, audio: "audio/ristorante.mp3" },
    { italienisch: "burro", deutsch: "Butter", interval: 1, audio: "audio/burro.mp3" },
    { italienisch: "colazione", deutsch: "Frühstück, ich frühstücke", interval: 1, audio: "audio/colazione.mp3" },
    { italienisch: "cioccolata", deutsch: "Schokolade", interval: 1, audio: "audio/cioccolata.mp3" },
    { italienisch: "preparare", deutsch: "zubereiten", interval: 1, audio: "audio/preparare.mp3" },
    { italienisch: "marmellata", deutsch: "Marmelade", interval: 1, audio: "audio/marmellata.mp3" },
    { italienisch: "hanno", deutsch: "haben", interval: 1, audio: "audio/hanno.mp3" },
    { italienisch: "solo", deutsch: "nur", interval: 1, audio: "audio/solo.mp3" },
    { italienisch: "villa", deutsch: "Villa", interval: 1, audio: "audio/villa.mp3" },
    { italienisch: "appartamento", deutsch: "Wohnung", interval: 1, audio: "audio/appartamento.mp3" },
    { italienisch: "piscina", deutsch: "Schwimmbecken, Schwimmbad, ein Schwimmbecken", interval: 1, audio: "audio/piscina.mp3" },
    { italienisch: "freddo", deutsch: "kalt", interval: 1, audio: "audio/freddo.mp3" },
    { italienisch: "a casa", deutsch: "zu Hause, nach Hause", interval: 1, audio: "audio/a_casa.mp3" },
    { italienisch: "loro", deutsch: "sie, deren, ihrem", interval: 1, audio: "audio/loro.mp3" },
    { italienisch: "domani", deutsch: "morgen", interval: 1, audio: "audio/domani.mp3" },
    { italienisch: "da solo", deutsch: "allein, selbst, selber", interval: 1, audio: "audio/da_solo.mp3" },
    { italienisch: "gioco", deutsch: "spiele", interval: 1, audio: "audio/gioco.mp3" },
    { italienisch: "avete", deutsch: "habt", interval: 1, audio: "audio/avete.mp3" },
    { italienisch: "nove", deutsch: "neun", interval: 1, audio: "audio/nove.mp3" },
    { italienisch: "dieci", deutsch: "zehn", interval: 1, audio: "audio/dieci.mp3" },
    { italienisch: "mangiate", deutsch: "esst ihr", interval: 1, audio: "audio/mangiate.mp3" },
    { italienisch: "armadio", deutsch: "Schrank", interval: 1, audio: "audio/armadio.mp3" },
    { italienisch: "comodo", deutsch: "bequem", interval: 1, audio: "audio/comodo.mp3" },
    { italienisch: "letto", deutsch: "Bett", interval: 1, audio: "audio/letto.mp3" },
    { italienisch: "voi", deutsch: "ihr", interval: 1, audio: "audio/voi.mp3" },
    { italienisch: "siete", deutsch: "seid", interval: 1, audio: "audio/siete.mp3" },
    { italienisch: "porta", deutsch: "Tür", interval: 1, audio: "audio/porta.mp3" },
    { italienisch: "balcone", deutsch: "Balkon", interval: 1, audio: "audio/balcone.mp3" },
    { italienisch: "bagno", deutsch: "Badezimmer, Bad, Toilette", interval: 1, audio: "audio/bagno.mp3" },
    { italienisch: "finestra", deutsch: "Fenster", interval: 1, audio: "audio/finestra.mp3" },
    { italienisch: "l'", deutsch: "die, der, das", interval: 1, audio: "audio/l'.mp3" },
    { italienisch: "otto", deutsch: "acht", interval: 1, audio: "audio/otto.mp3" },
    { italienisch: "divano", deutsch: "Sofa", interval: 1, audio: "audio/divano.mp3" },
    { italienisch: "cucina", deutsch: "Küche", interval: 1, audio: "audio/cucina.mp3" },
    { italienisch: "salotto", deutsch: "Wohnzimmer", interval: 1, audio: "audio/salotto.mp3" },
    { italienisch: "sette", deutsch: "sieben", interval: 1, audio: "audio/sette.mp3" },
    { italienisch: "quanto", deutsch: "wie, wie lange, wie viel", interval: 1, audio: "audio/quanto.mp3" },
    { italienisch: "sedia", deutsch: "Stuhl", interval: 1, audio: "audio/sedia.mp3" },
    { italienisch: "tavolo", deutsch: "Tisch", interval: 1, audio: "audio/tavolo.mp3" },
    { italienisch: "lo", deutsch: "die, der, das", interval: 1, audio: "audio/lo.mp3" },
    { italienisch: "a", deutsch: "in, am, in der", interval: 1, audio: "audio/a.mp3" },
    { italienisch: "stanza", deutsch: "Zimmer", interval: 1, audio: "audio/stanza.mp3" },
    { italienisch: "per", deutsch: "für", interval: 1, audio: "audio/per.mp3" },
    { italienisch: "giardino", deutsch: "Gartens, Garten", interval: 1, audio: "audio/giardino.mp3" },
    { italienisch: "fiore", deutsch: "Blume", interval: 1, audio: "audio/fiore.mp3" },
    { italienisch: "albero", deutsch: "Baum", interval: 1, audio: "audio/albero.mp3" },
    { italienisch: "foglia", deutsch: "Blatt", interval: 1, audio: "audio/foglia.mp3" },
    { italienisch: "cinque", deutsch: "fünf, fünften, fünfte", interval: 1, audio: "audio/cinque.mp3" },
    { italienisch: "preferisce", deutsch: "bevorzugt, sie mag lieber, lieber", interval: 1, audio: "audio/preferisce.mp3" },
    { italienisch: "quale", deutsch: "Welche, welchem, welche", interval: 1, audio: "audio/quale.mp3" },
    { italienisch: "caldo", deutsch: "warmen, heiß, warm", interval: 1, audio: "audio/caldo.mp3" },
    { italienisch: "maglioni", deutsch: "Pullover", interval: 1, audio: "audio/maglioni.mp3" },
    { italienisch: "quattro", deutsch: "vier", interval: 1, audio: "audio/quattro.mp3" },
    { italienisch: "preferisci", deutsch: "du magst lieber, möchtest du lieber, bevorzugst du", interval: 1, audio: "audio/preferisci.mp3" },
    { italienisch: "anche", deutsch: "auch", interval: 1, audio: "audio/anche.mp3" },
    { italienisch: "costoso", deutsch: "teuren, teuer, teures", interval: 1, audio: "audio/costoso.mp3" },
    { italienisch: "ragazzi", deutsch: "Jungen, Jungs", interval: 1, audio: "audio/ragazzi.mp3" },
    { italienisch: "economico", deutsch: "billig, billiges, billiger", interval: 1, audio: "audio/economico.mp3" },
    { italienisch: "tre", deutsch: "drei", interval: 1, audio: "audio/tre.mp3" },
    { italienisch: "preferisco", deutsch: "ich ziehe vor, ich mag lieber, ich möchte lieber", interval: 1, audio: "audio/preferisco.mp3" },
    { italienisch: "fragole", deutsch: "Erdbeeren", interval: 1, audio: "audio/fragole.mp3" },
    { italienisch: "pera", deutsch: "Birne", interval: 1, audio: "audio/pera.mp3" },
    { italienisch: "rosse", deutsch: "rot, rote", interval: 1, audio: "audio/rosse.mp3" },
    { italienisch: "patata", deutsch: "Kartoffel", interval: 1, audio: "audio/patata.mp3" },
    { italienisch: "vorrei", deutsch: "möchte", interval: 1, audio: "audio/vorrei.mp3" },
    { italienisch: "due", deutsch: "zwei", interval: 1, audio: "audio/due.mp3" },
    { italienisch: "per favore", deutsch: "bitte", interval: 1, audio: "audio/per_favore.mp3" },
    { italienisch: "panini", deutsch: "Brötchen", interval: 1, audio: "audio/panini.mp3" },
    { italienisch: "italiani", deutsch: "italienisch, italienischen, Italiener", interval: 1, audio: "audio/italiani.mp3" },
    { italienisch: "gelato", deutsch: "Eis", interval: 1, audio: "audio/gelato.mp3" },
    { italienisch: "abbiamo", deutsch: "wir haben, haben", interval: 1, audio: "audio/abbiamo.mp3" },
    { italienisch: "busta", deutsch: "Umschlag", interval: 1, audio: "audio/busta.mp3" },
    { italienisch: "lettera", deutsch: "Brief", interval: 1, audio: "audio/lettera.mp3" },
    { italienisch: "questo", deutsch: "diesen, heute, das", interval: 1, audio: "audio/questo.mp3" },
    { italienisch: "leggere", deutsch: "lesen", interval: 1, audio: "audio/leggere.mp3" },
    { italienisch: "sporco", deutsch: "schmutzige, schmutzig, schmutziges", interval: 1, audio: "audio/sporco.mp3" },
    { italienisch: "pulito", deutsch: "sauber, sauberes", interval: 1, audio: "audio/pulito.mp3" },
    { italienisch: "andiamo", deutsch: "Gehen, gehen, fahren", interval: 1, audio: "audio/andiamo.mp3" },
    { italienisch: "ma", deutsch: "aber", interval: 1, audio: "audio/ma.mp3" },
    { italienisch: "là", deutsch: "dort", interval: 1, audio: "audio/là.mp3" },
    { italienisch: "noi", deutsch: "wir", interval: 1, audio: "audio/noi.mp3" },
    { italienisch: "siamo", deutsch: "sind wir, wir sind, sind", interval: 1, audio: "audio/siamo.mp3" },
    { italienisch: "stanchi", deutsch: "müde", interval: 1, audio: "audio/stanchi.mp3" },
    { italienisch: "mangiamo", deutsch: "essen, wir essen, essen wir", interval: 1, audio: "audio/mangiamo.mp3" },
    { italienisch: "uomini", deutsch: "Männer", interval: 1, audio: "audio/uomini.mp3" },
    { italienisch: "occhiali", deutsch: "Brille", interval: 1, audio: "audio/occhiali.mp3" },
    { italienisch: "gli", deutsch: "die", interval: 1, audio: "audio/gli.mp3" },
    { italienisch: "ci sono", deutsch: "sind, gibt es, es gibt", interval: 1, audio: "audio/ci_sono.mp3" },
    { italienisch: "problema", deutsch: "Problem", interval: 1, audio: "audio/problema.mp3" },
    { italienisch: "libri", deutsch: "Bücher, Büchern", interval: 1, audio: "audio/libri.mp3" },
    { italienisch: "allegri", deutsch: "fröhlich", interval: 1, audio: "audio/allegri.mp3" },
    { italienisch: "c'è", deutsch: "es gibt", interval: 1, audio: "audio/c'è.mp3" },
    { italienisch: "qui", deutsch: "hier", interval: 1, audio: "audio/qui.mp3" },
    { italienisch: "le", deutsch: "die, der, sie", interval: 1, audio: "audio/le.mp3" },
    { italienisch: "farfalle", deutsch: "Schmetterlinge", interval: 1, audio: "audio/farfalle.mp3" },
    { italienisch: "famiglia", deutsch: "Familie", interval: 1, audio: "audio/famiglia.mp3" },
    { italienisch: "bambini", deutsch: "Kinder, Kindern, Jungen", interval: 1, audio: "audio/bambini.mp3" },
    { italienisch: "i", deutsch: "die", interval: 1, audio: "audio/i.mp3" },
    { italienisch: "felici", deutsch: "glückliche, glücklichen, glücklich", interval: 1, audio: "audio/felici.mp3" },
    { italienisch: "cavalli", deutsch: "Pferde, Pferden", interval: 1, audio: "audio/cavalli.mp3" },
    { italienisch: "cani", deutsch: "Hunde, Hunden", interval: 1, audio: "audio/cani.mp3" },
    { italienisch: "animale", deutsch: "Tier", interval: 1, audio: "audio/animale.mp3" },
    { italienisch: "vedere", deutsch: "sehen", interval: 1, audio: "audio/vedere.mp3" },
    { italienisch: "natura", deutsch: "Natur", interval: 1, audio: "audio/natura.mp3" },
    { italienisch: "film", deutsch: "Film", interval: 1, audio: "audio/film.mp3" },
    { italienisch: "con", deutsch: "mit", interval: 1, audio: "audio/con.mp3" },
    { italienisch: "adesso", deutsch: "jetzt, gerade", interval: 1, audio: "audio/adesso.mp3" },
    { italienisch: "gli piace", deutsch: "ihm gefällt, gefällt ihm, es gefällt ihm", interval: 1, audio: "audio/gli_piace.mp3" },
    { italienisch: "le piace", deutsch: "ihr gefällt, gefällt ihr, ihr schmeckt", interval: 1, audio: "audio/le_piace.mp3" },
    { italienisch: "regalo", deutsch: "Geschenk", interval: 1, audio: "audio/regalo.mp3" },
    { italienisch: "musica", deutsch: "Musik", interval: 1, audio: "audio/musica.mp3" },
    { italienisch: "computer", deutsch: "Computer", interval: 1, audio: "audio/computer.mp3" },
    { italienisch: "mai", deutsch: "nie", interval: 1, audio: "audio/mai.mp3" },
    { italienisch: "perché", deutsch: "warum, weil, wieso", interval: 1, audio: "audio/perché.mp3" },
    { italienisch: "città", deutsch: "Stadt", interval: 1, audio: "audio/città.mp3" },
    { italienisch: "no", deutsch: "nein", interval: 1, audio: "audio/no.mp3" },
    { italienisch: "non", deutsch: "keine, nicht, keinen", interval: 1, audio: "audio/non.mp3" },
    { italienisch: "brutto", deutsch: "hässlichen, schlecht, hässlich", interval: 1, audio: "audio/brutto.mp3" },
    { italienisch: "in", deutsch: "auf, in den, in der", interval: 1, audio: "audio/in.mp3" },
    { italienisch: "spesso", deutsch: "oft", interval: 1, audio: "audio/spesso.mp3" },
    { italienisch: "ti piace", deutsch: "Magst du sie gern, magst du, gefällt dir", interval: 1, audio: "audio/ti_piace.mp3" },
    { italienisch: "abitare", deutsch: "wohnen", interval: 1, audio: "audio/abitare.mp3" },
    { italienisch: "bello", deutsch: "schön, schöne", interval: 1, audio: "audio/bello.mp3" },
    { italienisch: "sì", deutsch: "ja", interval: 1, audio: "audio/sì.mp3" },
    { italienisch: "sempre", deutsch: "immer", interval: 1, audio: "audio/sempre.mp3" },
    { italienisch: "mi piace", deutsch: "mir gefällt, gefällt mir, das gefällt mir", interval: 1, audio: "audio/mi_piace.mp3" },
    { italienisch: "gentile", deutsch: "nett", interval: 1, audio: "audio/gentile.mp3" },
    { italienisch: "dove", deutsch: "wo", interval: 1, audio: "audio/dove.mp3" },
    { italienisch: "amico", deutsch: "Freund", interval: 1, audio: "audio/amico.mp3" },
    { italienisch: "maglietta", deutsch: "T-Shirt", interval: 1, audio: "audio/maglietta.mp3" },
    { italienisch: "camicetta", deutsch: "Bluse", interval: 1, audio: "audio/camicetta.mp3" },
    { italienisch: "pigiama", deutsch: "Schlafanzug", interval: 1, audio: "audio/pigiama.mp3" },
    { italienisch: "taglia", deutsch: "Größe", interval: 1, audio: "audio/taglia.mp3" },
    { italienisch: "nuovo", deutsch: "neue, neu, neuen", interval: 1, audio: "audio/nuovo.mp3" },
    { italienisch: "vecchio", deutsch: "alter, alt, alte", interval: 1, audio: "audio/vecchio.mp3" },
    { italienisch: "vestito", deutsch: "Kleid", interval: 1, audio: "audio/vestito.mp3" },
    { italienisch: "collana", deutsch: "Halskette", interval: 1, audio: "audio/collana.mp3" },
    { italienisch: "sciarpa", deutsch: "Schal", interval: 1, audio: "audio/sciarpa.mp3" },
    { italienisch: "cravatta", deutsch: "Krawatte", interval: 1, audio: "audio/cravatta.mp3" },
    { italienisch: "vendere", deutsch: "verkaufen", interval: 1, audio: "audio/vendere.mp3" },
    { italienisch: "camicia", deutsch: "Hemd", interval: 1, audio: "audio/camicia.mp3" },
    { italienisch: "cappello", deutsch: "Hut", interval: 1, audio: "audio/cappello.mp3" },
    { italienisch: "indosso", deutsch: "trage, trage ich", interval: 1, audio: "audio/indosso.mp3" },
    { italienisch: "largo", deutsch: "weiter, weiten, weit", interval: 1, audio: "audio/largo.mp3" },
    { italienisch: "indossare", deutsch: "tragen, trage", interval: 1, audio: "audio/indossare.mp3" },
    { italienisch: "stretto", deutsch: "eng, enger", interval: 1, audio: "audio/stretto.mp3" },
    { italienisch: "cliente", deutsch: "Kunde", interval: 1, audio: "audio/cliente.mp3" },
    { italienisch: "gonna", deutsch: "Rock", interval: 1, audio: "audio/gonna.mp3" },
    { italienisch: "la", deutsch: "die", interval: 1, audio: "audio/la.mp3" },
    { italienisch: "il", deutsch: "der", interval: 1, audio: "audio/il.mp3" },
    { italienisch: "maglione", deutsch: "Pullover", interval: 1, audio: "audio/maglione.mp3" },
    { italienisch: "elegante", deutsch: "elegant", interval: 1, audio: "audio/elegante.mp3" },
    { italienisch: "orologio", deutsch: "Uhr", interval: 1, audio: "audio/orologio.mp3" },
    { italienisch: "giacca", deutsch: "Jacke", interval: 1, audio: "audio/giacca.mp3" },
    { italienisch: "cappotto", deutsch: "Mantel", interval: 1, audio: "audio/cappotto.mp3" },
    { italienisch: "corto", deutsch: "kurz, kurzer, kurzes", interval: 1, audio: "audio/corto.mp3" },
    { italienisch: "lungo", deutsch: "lang, langen, entlang", interval: 1, audio: "audio/lungo.mp3" },
    { italienisch: "stanca", deutsch: "müde", interval: 1, audio: "audio/stanca.mp3" },
    { italienisch: "scusi", deutsch: "Entschuldigung, Entschuldigen Sie, Entschuldigen", interval: 1, audio: "audio/scusi.mp3" },
    { italienisch: "abbastanza", deutsch: "ziemlich", interval: 1, audio: "audio/abbastanza.mp3" },
    { italienisch: "chi", deutsch: "wer", interval: 1, audio: "audio/chi.mp3" },
    { italienisch: "scusa", deutsch: "Entschuldige bitte, Entschuldigung, Entschuldige", interval: 1, audio: "audio/scusa.mp3" },
    { italienisch: "arrivederci", deutsch: "Auf Wiedersehen", interval: 1, audio: "audio/arrivederci.mp3" },
    { italienisch: "tardi", deutsch: "spät", interval: 1, audio: "audio/tardi.mp3" },
    { italienisch: "buonanotte", deutsch: "Gute Nacht", interval: 1, audio: "audio/buonanotte.mp3" },
    { italienisch: "stanco", deutsch: "müde", interval: 1, audio: "audio/stanco.mp3" },
    { italienisch: "signor", deutsch: "Herr", interval: 1, audio: "audio/signor.mp3" },
    { italienisch: "signora", deutsch: "Frau", interval: 1, audio: "audio/signora.mp3" },
    { italienisch: "presto", deutsch: "früh", interval: 1, audio: "audio/presto.mp3" },
    { italienisch: "sta", deutsch: "ihm geht's, geht es, ihr geht's", interval: 1, audio: "audio/sta.mp3" },
    { italienisch: "turista", deutsch: "Tourist", interval: 1, audio: "audio/turista.mp3" },
    { italienisch: "poco", deutsch: "wenig", interval: 1, audio: "audio/poco.mp3" },
    { italienisch: "grazie", deutsch: "danke", interval: 1, audio: "audio/grazie.mp3" },
    { italienisch: "oggi", deutsch: "heute", interval: 1, audio: "audio/oggi.mp3" },
    { italienisch: "male", deutsch: "schlecht", interval: 1, audio: "audio/male.mp3" },
    { italienisch: "cosa", deutsch: "was", interval: 1, audio: "audio/cosa.mp3" },
    { italienisch: "sto", deutsch: "geht's mir, geht's, geht es mir", interval: 1, audio: "audio/sto.mp3" },
    { italienisch: "bene", deutsch: "gut", interval: 1, audio: "audio/bene.mp3" },
    { italienisch: "come", deutsch: "wie", interval: 1, audio: "audio/come.mp3" },
    { italienisch: "molto", deutsch: "sehr", interval: 1, audio: "audio/molto.mp3" },
    { italienisch: "stai", deutsch: "geht's dir, dir geht's, geht's", interval: 1, audio: "audio/stai.mp3" },
    { italienisch: "felice", deutsch: "glücklich", interval: 1, audio: "audio/felice.mp3" },
    { italienisch: "buonasera", deutsch: "Guten Abend", interval: 1, audio: "audio/buonasera.mp3" },
    { italienisch: "dormire", deutsch: "schlafen", interval: 1, audio: "audio/dormire.mp3" },
    { italienisch: "compri", deutsch: "kaufst", interval: 1, audio: "audio/compri.mp3" },
    { italienisch: "zaino", deutsch: "Rucksack, Schulranzen", interval: 1, audio: "audio/zaino.mp3" },
    { italienisch: "zuppa", deutsch: "Suppe", interval: 1, audio: "audio/zuppa.mp3" },
    { italienisch: "interessante", deutsch: "interessante, interessant, interessanten", interval: 1, audio: "audio/interessante.mp3" },
    { italienisch: "oliva", deutsch: "Olive", interval: 1, audio: "audio/oliva.mp3" },
    { italienisch: "giornale", deutsch: "Zeitung", interval: 1, audio: "audio/giornale.mp3" },
    { italienisch: "gustoso", deutsch: "lecker", interval: 1, audio: "audio/gustoso.mp3" },
    { italienisch: "matita", deutsch: "Bleistift", interval: 1, audio: "audio/matita.mp3" },
    { italienisch: "tè", deutsch: "Tee", interval: 1, audio: "audio/tè.mp3" },
    { italienisch: "arancione", deutsch: "orange", interval: 1, audio: "audio/arancione.mp3" },
    { italienisch: "libro", deutsch: "Buch", interval: 1, audio: "audio/libro.mp3" },
    { italienisch: "zucchero", deutsch: "Zucker", interval: 1, audio: "audio/zucchero.mp3" },
    { italienisch: "piccola", deutsch: "klein", interval: 1, audio: "audio/piccola.mp3" },
    { italienisch: "vino", deutsch: "Wein", interval: 1, audio: "audio/vino.mp3" },
    { italienisch: "penna", deutsch: "Kugelschreiber, Stift", interval: 1, audio: "audio/penna.mp3" },
    { italienisch: "piccolo", deutsch: "klein", interval: 1, audio: "audio/piccolo.mp3" },
    { italienisch: "quaderno", deutsch: "Heft", interval: 1, audio: "audio/quaderno.mp3" },
    { italienisch: "compra", deutsch: "kauft", interval: 1, audio: "audio/compra.mp3" },
    { italienisch: "compro", deutsch: "kaufe", interval: 1, audio: "audio/compro.mp3" },
    { italienisch: "borsa", deutsch: "Tasche", interval: 1, audio: "audio/borsa.mp3" },
    { italienisch: "bianca", deutsch: "weiße, weißem, weiß", interval: 1, audio: "audio/bianca.mp3" },
    { italienisch: "nera", deutsch: "schwarz", interval: 1, audio: "audio/nera.mp3" },
    { italienisch: "ombrello", deutsch: "Schirm", interval: 1, audio: "audio/ombrello.mp3" },
    { italienisch: "grande", deutsch: "groß", interval: 1, audio: "audio/grande.mp3" },
    { italienisch: "rossa", deutsch: "rot", interval: 1, audio: "audio/rossa.mp3" },
    { italienisch: "bevi", deutsch: "trinkst", interval: 1, audio: "audio/bevi.mp3" },
    { italienisch: "auto", deutsch: "Auto", interval: 1, audio: "audio/auto.mp3" },
    { italienisch: "casa", deutsch: "Haus", interval: 1, audio: "audio/casa.mp3" },
    { italienisch: "gialla", deutsch: "gelb", interval: 1, audio: "audio/gialla.mp3" },
    { italienisch: "mangi", deutsch: "isst", interval: 1, audio: "audio/mangi.mp3" },
    { italienisch: "beve", deutsch: "trinkt", interval: 1, audio: "audio/beve.mp3" },
    { italienisch: "aranciata", deutsch: "Orangenlimonade", interval: 1, audio: "audio/aranciata.mp3" },
    { italienisch: "formaggio", deutsch: "Käse", interval: 1, audio: "audio/formaggio.mp3" },
    { italienisch: "stufato", deutsch: "Schmorbraten", interval: 1, audio: "audio/stufato.mp3" },
    { italienisch: "fragola", deutsch: "Erdbeere", interval: 1, audio: "audio/fragola.mp3" },
    { italienisch: "gustosa", deutsch: "lecker", interval: 1, audio: "audio/gustosa.mp3" },
    { italienisch: "panino", deutsch: "Brötchen", interval: 1, audio: "audio/panino.mp3" },
    { italienisch: "sete", deutsch: "Durst", interval: 1, audio: "audio/sete.mp3" },
    { italienisch: "verdura", deutsch: "Gemüse", interval: 1, audio: "audio/verdura.mp3" },
    { italienisch: "caffè", deutsch: "Kaffee", interval: 1, audio: "audio/caffè.mp3" },
    { italienisch: "birra", deutsch: "Bier", interval: 1, audio: "audio/birra.mp3" },
    { italienisch: "frutta", deutsch: "Obst", interval: 1, audio: "audio/frutta.mp3" },
    { italienisch: "uno", deutsch: "ein", interval: 1, audio: "audio/uno.mp3" },
    { italienisch: "e", deutsch: "und", interval: 1, audio: "audio/e.mp3" },
    { italienisch: "carne", deutsch: "Fleisch", interval: 1, audio: "audio/carne.mp3" },
    { italienisch: "latte", deutsch: "Milch", interval: 1, audio: "audio/latte.mp3" },
    { italienisch: "fame", deutsch: "Hunger", interval: 1, audio: "audio/fame.mp3" },
    { italienisch: "bevo", deutsch: "trinke", interval: 1, audio: "audio/bevo.mp3" },
    { italienisch: "un'", deutsch: "einem, ein, eine", interval: 1, audio: "audio/un'.mp3" },
    { italienisch: "torta", deutsch: "Torte", interval: 1, audio: "audio/torta.mp3" },
    { italienisch: "acqua", deutsch: "Wasser", interval: 1, audio: "audio/acqua.mp3" },
    { italienisch: "arancia", deutsch: "Orange", interval: 1, audio: "audio/arancia.mp3" },
    { italienisch: "mangia", deutsch: "isst", interval: 1, audio: "audio/mangia.mp3" },
    { italienisch: "pane", deutsch: "Brot", interval: 1, audio: "audio/pane.mp3" },
    { italienisch: "pasta", deutsch: "Pasta", interval: 1, audio: "audio/pasta.mp3" },
    { italienisch: "mangio", deutsch: "esse", interval: 1, audio: "audio/mangio.mp3" },
    { italienisch: "mela", deutsch: "Apfel", interval: 1, audio: "audio/mela.mp3" },
    { italienisch: "pizza", deutsch: "Pizza", interval: 1, audio: "audio/pizza.mp3" },
    { italienisch: "pomodoro", deutsch: "Tomate", interval: 1, audio: "audio/pomodoro.mp3" },
    { italienisch: "tartaruga", deutsch: "Schildkröte", interval: 1, audio: "audio/tartaruga.mp3" },
    { italienisch: "marrone", deutsch: "braun", interval: 1, audio: "audio/marrone.mp3" },
    { italienisch: "verde", deutsch: "grün", interval: 1, audio: "audio/verde.mp3" },
    { italienisch: "farfalla", deutsch: "Schmetterling", interval: 1, audio: "audio/farfalla.mp3" },
    { italienisch: "hai", deutsch: "hast", interval: 1, audio: "audio/hai.mp3" },
    { italienisch: "cavallo", deutsch: "Pferd", interval: 1, audio: "audio/cavallo.mp3" },
    { italienisch: "intelligente", deutsch: "intelligenten, intelligenter, intelligente", interval: 1, audio: "audio/intelligente.mp3" },
    { italienisch: "blu", deutsch: "blau", interval: 1, audio: "audio/blu.mp3" },
    { italienisch: "grigio", deutsch: "grau", interval: 1, audio: "audio/grigio.mp3" },
    { italienisch: "coniglio", deutsch: "Kaninchen, Kaninchens", interval: 1, audio: "audio/coniglio.mp3" },
    { italienisch: "o", deutsch: "oder", interval: 1, audio: "audio/o.mp3" },
    { italienisch: "ha", deutsch: "hat", interval: 1, audio: "audio/ha.mp3" },
    { italienisch: "pesce", deutsch: "Fisch", interval: 1, audio: "audio/pesce.mp3" },
    { italienisch: "giallo", deutsch: "gelb, gelbes, gelber", interval: 1, audio: "audio/giallo.mp3" },
    { italienisch: "triste", deutsch: "traurig", interval: 1, audio: "audio/triste.mp3" },
    { italienisch: "rosso", deutsch: "rot", interval: 1, audio: "audio/rosso.mp3" },
    { italienisch: "nero", deutsch: "schwarz", interval: 1, audio: "audio/nero.mp3" },
    { italienisch: "cane", deutsch: "Hund", interval: 1, audio: "audio/cane.mp3" },
    { italienisch: "allegro", deutsch: "fröhlich", interval: 1, audio: "audio/allegro.mp3" },
    { italienisch: "gatto", deutsch: "Katze", interval: 1, audio: "audio/gatto.mp3" },
    { italienisch: "bianco", deutsch: "weiß", interval: 1, audio: "audio/bianco.mp3" },
    { italienisch: "ho", deutsch: "habe, ich habe, habe ich", interval: 1, audio: "audio/ho.mp3" },
    { italienisch: "austriaca", deutsch: "österreichische, Österreicherin, österreichisches", interval: 1, audio: "audio/austriaca.mp3" },
    { italienisch: "cuoca", deutsch: "Köchin", interval: 1, audio: "audio/cuoca.mp3" },
    { italienisch: "cantante", deutsch: "Sänger", interval: 1, audio: "audio/cantante.mp3" },
    { italienisch: "francese", deutsch: "französisch", interval: 1, audio: "audio/francese.mp3" },
    { italienisch: "cuoco", deutsch: "Koch", interval: 1, audio: "audio/cuoco.mp3" },
    { italienisch: "austriaco", deutsch: "österreichisch", interval: 1, audio: "audio/austriaco.mp3" },
    { italienisch: "impiegata", deutsch: "Angestellte", interval: 1, audio: "audio/impiegata.mp3" },
    { italienisch: "impiegato", deutsch: "Angestellter", interval: 1, audio: "audio/impiegato.mp3" },
    { italienisch: "inglese", deutsch: "englisch", interval: 1, audio: "audio/inglese.mp3" },
    { italienisch: "insegnante", deutsch: "Lehrer", interval: 1, audio: "audio/insegnante.mp3" },
    { italienisch: "si chiama", deutsch: "heißt, er heißt, sie heißt", interval: 1, audio: "audio/si_chiama.mp3" },
    { italienisch: "svizzero", deutsch: "Schweizer", interval: 1, audio: "audio/svizzero.mp3" },
    { italienisch: "commesso", deutsch: "Verkäufer", interval: 1, audio: "audio/commesso.mp3" },
    { italienisch: "svizzera", deutsch: "Schweizerin, Schweiz, Schweizer", interval: 1, audio: "audio/svizzera.mp3" },
    { italienisch: "studentessa", deutsch: "Studentin, Schülerin", interval: 1, audio: "audio/studentessa.mp3" },
    { italienisch: "commessa", deutsch: "Verkäuferin", interval: 1, audio: "audio/commessa.mp3" },
    { italienisch: "lui", deutsch: "er", interval: 1, audio: "audio/lui.mp3" },
    { italienisch: "lei", deutsch: "sie", interval: 1, audio: "audio/lei.mp3" },
    { italienisch: "pronto", deutsch: "fertig, Hallo", interval: 1, audio: "audio/pronto.mp3" },
    { italienisch: "studente", deutsch: "Student", interval: 1, audio: "audio/studente.mp3" },
    { italienisch: "italiana", deutsch: "Italienerin, italienisches, italienische", interval: 1, audio: "audio/italiana.mp3" },
    { italienisch: "italiano", deutsch: "italienisch, Italiener", interval: 1, audio: "audio/italiano.mp3" },
    { italienisch: "tedesca", deutsch: "deutsche, deutsches, deutschen", interval: 1, audio: "audio/tedesca.mp3" },
    { italienisch: "tedesco", deutsch: "deutsch, Deutscher", interval: 1, audio: "audio/tedesco.mp3" },
    { italienisch: "piacere", deutsch: "sehr erfreut, erfreut, gefallen", interval: 1, audio: "audio/piacere.mp3" },
    { italienisch: "è", deutsch: "das ist, ist das, es ist", interval: 1, audio: "audio/è.mp3" },
    { italienisch: "ti chiami", deutsch: "du heißt, heißt du, heißt", interval: 1, audio: "audio/ti_chiami.mp3" },
    { italienisch: "ragazza", deutsch: "Mädchen", interval: 1, audio: "audio/ragazza.mp3" },
    { italienisch: "ragazzo", deutsch: "Junge", interval: 1, audio: "audio/ragazzo.mp3" },
    { italienisch: "bambina", deutsch: "Kind", interval: 1, audio: "audio/bambina.mp3" },
    { italienisch: "bambino", deutsch: "Kind, Junge, Jungen", interval: 1, audio: "audio/bambino.mp3" },
    { italienisch: "tu", deutsch: "du", interval: 1, audio: "audio/tu.mp3" },
    { italienisch: "donna", deutsch: "Frau", interval: 1, audio: "audio/donna.mp3" },
    { italienisch: "un", deutsch: "ein", interval: 1, audio: "audio/un.mp3" },
    { italienisch: "una", deutsch: "eine", interval: 1, audio: "audio/una.mp3" },
    { italienisch: "uomo", deutsch: "Mann", interval: 1, audio: "audio/uomo.mp3" },
    { italienisch: "sei", deutsch: "hast, bist du, du bist", interval: 1, audio: "audio/sei.mp3" },
    { italienisch: "chiamo", deutsch: "ich rufe an", interval: 1, audio: "audio/chiamo.mp3" },
    { italienisch: "sono", deutsch: "ich bin, bin, sind sie", interval: 1, audio: "audio/sono.mp3" },
    { italienisch: "mi chiamo", deutsch: "heiße, ich heiße", interval: 1, audio: "audio/mi_chiamo.mp3" },
    { italienisch: "io", deutsch: "ich", interval: 1, audio: "audio/io.mp3" },
    { italienisch: "buongiorno", deutsch: "Guten Tag, guten Tag", interval: 1, audio: "audio/buongiorno.mp3" },
    { italienisch: "ciao", deutsch: "hallo", interval: 1, audio: "audio/ciao.mp3" },
    { italienisch: "importante", deutsch: "wichtiges, wichtige, wichtig", interval: 2, audio: "audio/importante.mp3" },
    { italienisch: "miei", deutsch: "meine, meinen", interval: 2, audio: "audio/miei.mp3" },
    { italienisch: "tua", deutsch: "deine", interval: 2, audio: "audio/tua.mp3" },
    { italienisch: "api", deutsch: "Bienen", interval: 2, audio: "audio/api.mp3" },
    { italienisch: "le piacciono", deutsch: "mag sie", interval: 2, audio: "audio/le_piacciono.mp3" },
    { italienisch: "venti", deutsch: "zwanzig", interval: 2, audio: "audio/venti.mp3" },
    { italienisch: "tuoi", deutsch: "deine", interval: 2, audio: "audio/tuoi.mp3" },
    { italienisch: "mi piacciono", deutsch: "ich mag, gefallen mir", interval: 2, audio: "audio/mi_piacciono.mp3" },
    { italienisch: "nostro", deutsch: "unser", interval: 2, audio: "audio/nostro.mp3" },
    { italienisch: "ci piacciono", deutsch: "mögen wir, wir mögen", interval: 2, audio: "audio/ci_piacciono.mp3" },
    { italienisch: "amici", deutsch: "Freunde", interval: 2, audio: "audio/amici.mp3" },
    { italienisch: "utile", deutsch: "nützlich", interval: 2, audio: "audio/utile.mp3" },
    { italienisch: "gli piacciono", deutsch: "mag er", interval: 2, audio: "audio/gli_piacciono.mp3" },
    { italienisch: "suo", deutsch: "seiner, ihres, deren", interval: 2, audio: "audio/suo.mp3" },
    { italienisch: "campagna", deutsch: "Land", interval: 2, audio: "audio/campagna.mp3" },
    { italienisch: "uccello", deutsch: "Vogel", interval: 2, audio: "audio/uccello.mp3" },
    { italienisch: "insetto", deutsch: "Insekt", interval: 2, audio: "audio/insetto.mp3" },
    { italienisch: "vostra", deutsch: "euer", interval: 2, audio: "audio/vostra.mp3" },
    { italienisch: "ti piacciono", deutsch: "magst du", interval: 2, audio: "audio/ti_piacciono.mp3" }
];


let repeatSchedule = []; // Liste der geplanten Wiederholungen
let currentVocab = null;
let currentIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;

// 🌟 Falsche Vokabeln speichern
function saveIncorrectVocab(vocab) {
    let incorrectVocab = JSON.parse(localStorage.getItem("incorrectVocab")) || [];
    incorrectVocab.push(vocab);
    localStorage.setItem("incorrectVocab", JSON.stringify(incorrectVocab));
}

// 🌟 Falsche Vokabeln laden
function loadIncorrectVocab() {
    const incorrectVocab = JSON.parse(localStorage.getItem("incorrectVocab")) || [];
    repeatSchedule = incorrectVocab.map(v => ({ vocab: v, due: 0 })); // Alle sofort fällig
    localStorage.removeItem("incorrectVocab"); // Nach dem Laden löschen
}

// 🌟 Vokabel zur Wiederholung hinzufügen
function addToRepeatSchedule(vocab) {
    repeatSchedule.push({ vocab: vocab, due: 2 });
    repeatSchedule.push({ vocab: vocab, due: 5 });
    repeatSchedule.push({ vocab: vocab, due: 10 });
    console.log(`🔁 Vokabel zur Wiederholung hinzugefügt: ${vocab.italienisch}`);
}

// 🌟 Fortschrittsanzeige aktualisieren
function updateProgress() {
    const totalAnswers = correctAnswers + incorrectAnswers;
    const progressPercent = totalAnswers > 0 ? (correctAnswers / totalAnswers) * 100 : 0;
    const progressBar = document.getElementById("progress-bar-inner");

    progressBar.style.width = `${progressPercent}%`;
    document.getElementById("progress-text").textContent = `Fortschritt: ${correctAnswers} richtig, ${incorrectAnswers} falsch`;
}

// 🌟 Array mischen
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// 🌟 Nächste Vokabel auswählen
function selectNextVocab() {
    console.log("🔄 Auswahl der nächsten Vokabel gestartet...");

    // Schritt 1: Wiederholungen prüfen
    if (repeatSchedule.length > 0) {
        const nextRepeat = repeatSchedule[0];
        if (nextRepeat.due === 0) {
            currentVocab = nextRepeat.vocab;
            repeatSchedule.shift(); // Entferne aus der Warteschlange
            console.log(`🔁 Wiederholung: ${currentVocab.italienisch}`);
            showNewQuestion();
            return;
        }
    }

    // Countdown für geplante Wiederholungen reduzieren
    repeatSchedule.forEach(item => {
        if (item.due > 0) item.due--;
    });

    // Schritt 2: Normale gewichtete Auswahl
    if (vocab.length > 0) {
        currentVocab = vocab[currentIndex % vocab.length];
        currentIndex++;
        console.log(`🎲 Zufällige Vokabel: ${currentVocab.italienisch}`);
        showNewQuestion();
    } else {
        console.log("⚠️ Keine Vokabeln mehr verfügbar.");
        document.getElementById("question").textContent = "Keine Vokabeln mehr!";
    }
}

// 🌟 Neue Frage anzeigen
function showNewQuestion() {
    if (!currentVocab) {
        console.error("⚠️ Keine Vokabel ausgewählt.");
        document.getElementById('question').textContent = "Fehler: Keine Vokabel geladen.";
        return;
    }

    const questionEl = document.getElementById('question');
    const solutionEl = document.getElementById('solution');

    questionEl.textContent = currentVocab.italienisch;
    solutionEl.textContent = currentVocab.deutsch;
    solutionEl.style.visibility = 'hidden';
    console.log(`📝 Frage angezeigt: ${currentVocab.italienisch}`);
}

// 🌟 Lösung anzeigen
function showSolution() {
    const solutionEl = document.getElementById('solution');
    if (!solutionEl) {
        console.error("⚠️ Das Element mit id='solution' wurde nicht gefunden.");
        return;
    }
    solutionEl.style.visibility = 'visible';
    console.log("💡 Lösung angezeigt.");
}

// 🔊 Audio abspielen
function playAudio() {
    if (currentVocab?.audio) {
        console.log(`🔊 Versuche, Audio abzuspielen: ${currentVocab.audio}`);
        const audio = new Audio(currentVocab.audio);
        audio.play().catch(err => console.error("❌ Fehler beim Abspielen des Audios:", err));
    } else {
        alert("⚠️ Audio-Datei nicht gefunden.");
    }
}

// 🌟 Als falsch markieren
function markWrong() {
    if (currentVocab) {
        currentVocab.interval = 1; // Intervall zurücksetzen
        addToRepeatSchedule(currentVocab); // Zur Wiederholung hinzufügen
        saveIncorrectVocab(currentVocab); // Für nächste Sitzung speichern
        console.log(`❌ Zur Wiederholung hinzugefügt: ${currentVocab.italienisch}`);
        incorrectAnswers++;
        updateProgress();
    }
    selectNextVocab();
}

// 🌟 Als richtig markieren
function markCorrect() {
    if (currentVocab) {
        currentVocab.interval = Math.min(currentVocab.interval * 2, 50);
        console.log(`✅ Intervall erhöht: ${currentVocab.interval}`);
        correctAnswers++;
        updateProgress();
    }
    selectNextVocab();
}

// 🌟 Trainer initialisieren
function initializeTrainer() {
    console.log("🚀 Initialisiere den Trainer...");
    loadIncorrectVocab(); // Falsche Vokabeln laden

    // Mische das Vokabelarray
    shuffleArray(vocab);

    // Erste Vokabel auswählen
    selectNextVocab();
}

// Trainer starten
initializeTrainer();
