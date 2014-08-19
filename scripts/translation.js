var Lang = 0;

var _l = new Array(
	new Array( "Information", "Kontakt", "Ausstattung", "Info", "Preise", "Impressionen", "Erwachsene", "Kinder", "Auto", "Wohnanhänger", "Wohnmobil", "großes Zelt", "Zelt",
		"Motorrad", "Hunde", "Strom", "Home", "Service", "Details", "Impressum", "Partner", "Weitere Services", "Update", "Anfahrt", "Region", "Verkehr", "Camping Südtirol", "Campingplatz", "Wetter", "Film" ),

	new Array( "Information", "Contact", "Equipment", "Description", "Prices", "Impressions", "Adults", "Kids", "Car", "Caravan", "Camper", "Marquee", "Tent",
		"Motorbike", "Dog", "Electricity", "Home", "Service", "Details", "Imprint", "Partners", "More Services", "Update", "Map", "Region", "Traffic", "Camping South Tyrol", "Campsite", "Weather", "Movie" ),
	new Array(),
	new Array( "Informazioni", "Contatto", "Attrezzatura", "Annotazione", "Prezzi", "Impressioni", "Adulti", "Bambini", "Macchina", "Caravan", "Camper", "Grande tenda", "Tenda",
		"Moto", "Cani", "Corrente", "Home", "Servizio", "Dettagli", "Informazioni legali", "Partner", "Altri servizi", "Aggiornamento", "Arrivo", "Regione", "Traffico", "Camping Alto Adige", "Campeggio", "Meteo", "Film" ),
	new Array(),
	new Array(),
	new Array( "Informatie", "Contact", "Uitrusting", "Opmerking", "Prijzen", "Impressies", "Volwassenen", "Kinderen", "Auto", "Caravan", "Camper", "Grote tent", "Tent",
		"Motor", "Honden", "Stroom", "Home", "Service", "Details", "Impressum", "Partner", "Andere services", "Update", "Route", "Regio", "Verkeer", "Camping Südtirol", "Campingplaatsen", "Weer", "Film" )
	);

if( localStorage.getItem("lang") === null ) {
	language = navigator.language.split("-"); 
	language_root = (language[0]);

	if( language_root == "en" )
		Lang = 1;
	else if( language_root == "it" )
		Lang = 3;
	else if( language_root == "nl" )
		Lang = 6;

	localStorage.setItem( "lang", Lang );
}
else {
	Lang = localStorage.getItem("lang");
}


var legende = new Array(
		new Array("Gras oder Erdboden", "Wenig Schatten durch B&auml;ume", "Guter Schatten durch B&auml;ume", "Stromanschlu&szlig; f&uuml;r Caravans mit Voltangabe", "Einheiten (Caravans und Zelte)", "Duschen", "Gasversorgung", "Ausgu&szlig; f&uuml;r Chemikaltoiletten", "Trockenhaube", "Kinderspielplatz", "Beheizbare Sanit&auml;ranlagen", "Stromanschl&uuml;sse f&uuml;r Rassierapparat", "Geschirrsp&uuml;lbecken", "W&auml;schewaschbecken", "Platzbeleuchtung vorhanden", "Lebensmittel", "Imbiss", "Gastst&auml;tte", "Waschr&auml;ume nach Geschlechtern getrennt", "Tankstelle bei Camping", "Trockner", "Eislaufplatz", "Kunsteislaufplatz", "Toiletten mit Wassersp&uuml;lung", "Fu&szlig;waschbecken", "Skieinstellraum", "Seestrand", "Acc&egrave;s handicap&eacute;s", "Kinder-/Jugendzimmer", "Bibliothek", "Skilift", "Langlaufloipe", "Boccia", "Fitne&szlig;raum", "Bungalows oder Appartments", "Planschbecken", "Mietcaravan", "Minigolf", "Diskothek", "Kegelbahn", "Tischtennis", "Tennis", "Reitm&ouml;glichkeit", "Sauna", "Dampfbad", "Fernsehraum", "Solarium", "Whirlpool", "Waschmaschine", "Badegelegenheit auch f&uuml;r Kinder im offenen Gew&auml;sser", "Schwimmbecken", "Hallenbad", "Verleih von Ruderbooten der sonstigen Booten", "H&ouml;he &uuml;ber dem Meer", "Gesamtfl&auml;che", "Sanit&auml;rkabinen, die gemietet werden k&ouml;nnen", "Enteehrungsstation f&uuml;r Wohnmobil-Abwassertanks", "Entleehrung f&uuml;r Abwasser- und F&auml;kaltanks", "Gasanschl&uuml;sse", "Satelitenanlage", "Abwasser-/Frischwasseranschl&uuml;sse", "Imbisstube oder Imbissstand", "Umweltorientierte Betriebsf&uuml;hrung", "Internet", "&Ouml;ffentliche Verkehrsmittel in der N&auml;he", "Einzelwaschkabinen", "Campinplatz mit herausragendem Ergebnis bei der ADAC-Inspektion"),
		new Array("Grassy or bare ground", "A little shade from trees", "Well shaded by trees", "Elecricity with voltage indicatin for caravans", "No. of units (caravans and tent)", "Showers", "Gas connection", "Chemical cleset disposal point", "Electic Hairdryer", "Children Childr", "Sanitary block can be heated", "Electric razor points", "Washing-up facilities", "Laundry facilities", "Site can be iluminated", "Food-shop", "Snack bar", "Restaurant", "Seperate washrooms for men and women", "Petrol station near site", "Linen dryer", "Ice-skating rink", "Ice-skating rink", "Flush toilets", "Footsbaths", "Ski shed", "Beach on the lake", "Suitable for the handicapped", "Children Chi", "Library", "Lift facilities", "Cross-country ski track", "Boule", "Fitness room", "Bungalows or appartmnets", "Padding pool", "Rent-a-caravan", "Minigolf", "Discotheque", "Skittle allry", "Table-tennis", "Tennis", "Horseriding", "Sauna", "Steam bath", "TV room", "Solarium", "Whirlpool", "Washing machine", "Bathing (also for children) in open waters", "Swimming pool", "Indoor swimming pool", "Rowing and/or other boats for hire", "Altidude", "total area", "Sanitary cubicles available for rent", "Emptying facility for caravan and camper van sewage tanks", "Emptying facility for sewage and toilet tanks", "Gas connections", "Sat", "Sewage and drinking water connections", "Snack Bar", "Environmentally friendly operation", "Internet", "Public transport near", "Individual wash cabines", "Campsite was awarded excellency after ADAC inspection"),
		new Array(),
		new Array("Terreno erboso o terroso", "Poco ombreggiato dagli alberi", "Ben ombreggiato dagli alberi", "Presa elettrica per caravan con indicazione del voltaggio", "Capacit&agrave; (caravan e tende)", "Docce", "Bombole gas", "Scarico per WC chimico", "Asciugacapelli", "Campo giochi", "Servizi sanitari riscaldabili", "Presa corrente per rasoio", "Lavello stoviglie", "Lavatoio biancheria", "Posto illuminato a richiesta", "Vendita alimentari", "Bar", "Ristorante", "Lavatoi separati uomini/donne", "Distributore benzina vicino", "Centrifuga", "Pista di pattinaggio", "Stadio di pattinaggio artistico", "WC con acqua", "Acquaio per piedi", "Deposito sci", "Spiaggia sul lago", "Senza barriere architettoniche", "Sala per bambini/giovani", "Biblioteca", "Skilift", "Pista di fondo", "Bocce", "Sala fi tness", "Bungalows o appartamenti", "Piscina per bambini", "Affi to roulottes", "Minigolf", "Discoteca", "Pista dei birilli", "Ping pong", "Tennis", "Equitazione", "Sauna", "Bagno turco", "Sala TV", "Solarium", "Whirlpool", "Lavatrice", "Possibilit&agrave; di bagnarsi (per bambini) in acque aperte", "Piscina", "Piscina coperta", "Noleggio barche a remi o di altro tipo", "Altitudine", "Area tot.", "Cabine sanitarie in affi tto", "Stazione svuotamento serbatoi acque di scarico di roulottes", "Stazione svuotamento serbatoi acque di scarico e fecali", "Allacciamenti gas", "Sat", "Allacciamenti acqua di scarico e acqua pulita", "Snack bar o chiosco", "Gestione ecologica", "Internet", "Fermata mezzi pubblici nelle immediate vicinanze", "Cabine individuali", "Campeggio con ottima valutazione ADAC"),
		new Array(),
		new Array(),
		new Array("Gras of harde grond", "Weinig schaduw van bomen", "Veel schaduw van bomen", "Stroomaansluiting met indicatie van voltage voor caravans", "Eenheden (caravans en tenten)", "Douches", "Gas verzorging", "Stortplaats chemische toiletten", "Haardroger", "Kinderspeelplaats", "Verwarmde sanitaire voorzieningen", "Stroomaansluiting voor elektrisch scheerapparaat", "Afwasgelegenheid", "Handwasgelegenheid", "Staanplaatsen kunnen worden verlicht", "Levensmiddelen", "Bar", "Restaurant", "Gescheiden wasgelegenheden", "Tankstation bij de camping", "Droger", "IJsbaan", "Kunstijsbaan", "Toiletten met waterspoeling", "Voetenwasbak", "Bergruimte voor ski&rsquo;s", "Strand aan het meer", "Toegankelijk voor gehandicapten", "Kinderkamerr", "Bibliotheek", "Skilift", "Langlaufl oipe", "Jeu de boules", "Fitnessruimte", "Bungalows of appartementen", "Kinderbad", "Caravan verhuur", "Minigolf", "Discotheek", "Kegelbaan", "Tafeltennis", "Tennis", "Paardrijden", "Sauna", "Turks bad", "TV kamer", "Solarium", "Whirlpool", "Wasserette", "Zwemgelegenheid in open water (voor kinderen)", "Zwembad", "Overdekt zwembad", "Verhuur van roeiboten of andere boten", "Hoogte", "Oppervlakte", "Verhuur van sanitaire cabines", "Mogelijkheid om afvoerwatertanks van campers en caravans te legen", "Emptying facility for sewage and toilet tanks", "Gasaansluiting", "Sat", "Afvoer- en drinkwater aansluitingen", "Snack bar", "Milieuvriendelijke bedrijfsvoering", "Internet", "Openbaar vervoer vlakbij", "Individuele wascabines", "Campingplaats met zeer goede ADAC waardering")
	);


var area = new Array(
	new Array( 
		"Bozen (265 m), die Landeshauptstadt von Südtirol, ist eine Stadt mit zwei Gesichtern; unitalienisch herb für die Leute aus dem Süden und mediterran für den, der aus dem Norden kommt. In unmittelbarer Reichweite umgeben die Stadt verschiedene Höhenzüge: der Ritten mit seinen Erdpyramiden und schmucken Gasthäusern, Jenesien am Tschöggelberg und der Kohlererberg (älteste Seilbahn der Welt), als nahe Ausflugsziele. Nahe ist auch das originelle Sarntal, bekannt nicht nur für seine Trachten, sondern auch für die Federkielstickereien. In Bozen fand auch der Mann aus dem Eis \"Ötzi\" im Archäologiemuseum seine letzte Ruhestätte.",
		"Hier werden alle wichtigen Angelegenheiten bei einem \"Glasl guten Wein\" ausgemacht. Die Sonne erweckt eine reiche Vielfalt in dieser üppigen Obst- und Weinlandschaft, denn große zusammenhängende Obstanbauflächen und eine seit Jahrhunderten gepflegte Weinkultur bestimmen das Bild dieses Landstriches. Direkt an der Weinstraße liegt der Kalterer See, der als Ursprungsort des weltbekannten Weines gilt. Nicht nur bei den Weinbauern, sondern auch in den herrschaftlichen Ansitzen kann man sich verwöhnen lassen.",
		"Südöstlich von Etsch- und Eisacktal erhebt sich das \"Land der Berge\", wie die Dolomiten mit ihrer reichen vielfältigen Naturlandschaft im Volksmund genannt werden. Dolomiten: aus den Urmeeren entstanden - traumhafte Märchenarchitektur - bizarre Wände; beschrieben, abgebildet und besungen; erfahrbar, erkletterbar und belebt. Nirgendwo sonst gibt es so viele Naturparks. Viele Sagen, Bräuche und Traditionen sprechen ihre eigene Sprache, aber alle erzählen von der faszinierenden Welt der \"bleichen Berge\".",
		"",
		"Man befindet sich an der traditionellen Nord-Süd-Verbindung Südtiols und nicht nur der Handel, sondern auch die drei wichtigsten Ortschaften, wie das Fuggerstädtchen Sterzing, die ehemalige Bischofstadt Brixen und Klausen, einst berühmtes Künstlerdomizil, profitieren von dieser Lage. Aber abseits der historischen Transitstrecke zwischen Bozen und Brenner, bestimmen alte Einzelhöfe, Streusiedlungen und Weiler das Bild der urigen kleinen Seitentäler.",
		"Die Obst- und Reblandschaft, die subtropische Pflanzenwelt, die Promenaden und Waalwege und allen voran, das Stammschloß des Grafen von Tirol, haben schon seit eh und je Gäste in das Burgrafenamt gelockt. Den Erholungsbedürftigen bietet das Gebiet Gelegenheit, um Ruhe zu finden: in den kleinen Seitentälern, wie im Ultental mit seinen sonnenbraunen hölzernen Bauernhöfen, im Passeiertal, das einen alpinen Kleinkosmos mit hohen Paßstraßen aufzuweisen hat, Täler, die ihren vom bäuerlichen Leben geformten Charakter bewahrt haben.",
		"Nicht nur der \"Ötzi\", eine über 5000 Jahre alte Gletschermumie, am Similaun hoch über dem Schnalstal gefunden, sondern auch die Yaks (Himalaya-Rinder) des weltbekannten Extrembergsteigers Reinhold Messner sind einige der Kuriositäten, die im Vinschgau als Begegnungsort verschiedener Sprachen und Kulturen schlummern. Außerdem gibt es ein interessantes Wechselspiel zwischen einem warmen, südländischen Klima im unteren Vinschgau und einer hochalpinen Gebirgswelt (mit einigen Dreitausendern, wie dem Ortler) im oberen Teil."
	),
	new Array(
		"Bozen (265m), the provincial capital of South Tyrol has two faces. Visitors from further south in Italy feel almost as if they were abroad, while those from beyond the Alps enjoy the Mediterranean influence in climate and vegetation. The city lies al the confluence of three valleys, two of which have been the main routes across the central Alps and is cradled between high plateaus on all sides. Ritten is historically the place to which the town´s inhabitants fled to escape the summer heat. Noted for its earth pyramids and congenial farmsteads which often have dual function as simple restaurants offering home made food and drink and sometims accomodation. Opposite is the Tschöggelberg and the east, the Kohlernberg (the worlds first cable care), both of which offer excellent high altitude excursions within the city´s limits. The Sarntal valley seems to have been left unscathed by the modern world and is famous for its traditional costums and quill emproidery, while Bozen itself is proud of its archeological museum which houses the 5000 year-old mummy, ötzi, found preserved in a glacier a few years ago together with his tools and weapons.",
		"Both landscape an culture in this area, called Unterland are strongly influenced by wine-growing and all impotant business matters are agreed upon over a \"Glasl\" of wine. Here the cimatic influence from the south is strongest, resulting in an opulent choice of fruit (from apples to peaches) and wine varieties ranging from cool climate with grapes grown in high vineyards, to Bordeaux varieties from the lower slopes. The spicy Gewürztraminer wine is a speciality. It is now grown and loved all over the world, though the grape derivedits name from Tramin, a village on the South Tyrolean wine route (Weinstrasse) which cuts through Unterland. You can spoil yourself in the many vine cellars as well as in the numerous stately homes and castles.",
		"The Dolomites tower majestically to the south-east of the Etsch (Adige) and Eisack valleys. Called the \"pale mountains\" they glow like embers in the autum sunset. Formed from coral and chalk, nature has worked them to produce some of its most attractively bizzare architecture which has fired the imaginations of people since prehistoric times. Not surprisingly they are shrouded in legends and fairytales and feature in many old folk songs. Nowhere else will you find so many nature reserves in such a small area.",
		"",
		"This is the historic north-south route between Italy and northern Europe. Its towns and villages have benefitted from this factor through the milleniums: Sterzing, a commercial base of the powerful Fugger family in late medieval times; Brixen, the bishopric town and Klausen, famous as a residence for artists. Away from the transit route between Bozen and Brenner, Eisacktal´s small side valleys are loved for their original centuries-old farmhouses perched on the steep mountainsides, and their scattered mountain villages and hamlets.",
		"Meran and the sourrounding countryside is characterised by orchards, vineyards, subtropical vegetation, breath-takingly high mountains, the promenades, the pathways beside the unique irrigation streams called “Waalwege” and above all, the castle “Shloss Tirol”, the medieval home of the counts of Tyrol, which has given its name to the whole province both north and south of the Brenner. These and many more features – not least the mild climate – have attracted visitors from all over Europe since time immemorial. Those in search of relaxation can flee to the side valleys, such as Ultental with its original sunburnt wooden farmhouses, or Passeiertal, a small Alpine cosmos with high pass routes, all strongly influenced by the traditional Alpine farming culture which is just as alive today as it was centuries ago.",
		"Curiosites here go far beyond the place were “Ötzi”, the famous mummified 5000 year-old man was found in a glacier on the Similaun mountain high above the Schnalstal valley, or the yaks, the Himalayan mountain cattle belonging to the world famous mountaineer Reinhold Messner. Vinschgau is a place where various cultures and three countries merge. There is also the interesting contrast between the warm, southern climate in the lower part of the valley and the high Alpine mountain world (with various peaks well over 3000 metres high, such as the Ortler) in the upper part."
	),
	new Array(),
	new Array(
		"Bolzano (265 m), il capoluogo di provincia dell´Alto Adige, è una città dai due volti: uno \"non italiano\", scostante per la gente del Sud e l'altro mediterraneo per coloro che vengono dal Nord. Diverse catene montuose circondano la città : Renon con le sue piramidi di terra e le sue graziose locande, S. Genesio sul monte Tschöggel e il monte Kohler (la seggiovia più vecchia del mondo), che sono mete di escursioni a breve distanza. Vicina è anche la singolare Val Sarentina, nota non solo per i suoi costumi, ma anche per i suoi ricami su cuoio realizzati con penne di pavone. A Bolzano anche l´uomo venuto dal ghiaccio \"Ötzi\" ha trovato la sua ultima dimora nel museo archeologico.",
		"Qui tutte le questioni importanti vengono risolte con un \"bicchiere di buon vino\". Il sole risveglia una profusa varietà in questo lussureggiante paesaggio di alberi da frutto e di vigneti, perché grandi superfici coltivate a frutteto e i vigneti curati da secoli determinano l´immagine di questa area. Proprio sulla strada del vino si trova il lago di Caldaro, che è considerato il luogo d´origine del vino noto in tutto il mondo. È possibile farsi coccolare non solo dai viticoltori, ma anche dai deliziosi punti di ristoro.",
		"A sud-est della Valle dell´Adige e della Val d´Isarco si erge la \"regione dei monti\", come vengono chiamate nella tradizione popolare le Dolomiti, con il loro paesaggio naturale ricco ed eterogeneo. Dolomiti: sorte dai mari primitivi - incantevole architettura fiabesca - pareti bizzarre, descritte, ritratte e cantate; praticabili, scalabili e animate. Da nessun´altra parte ci sono così tante riserve naturali. Molte leggende, usanze e tradizioni pur parlando una lingua propria, narrano tutte dell´affascinante mondo dei \"monti pallidi\".",
		"",
		"Ci si trova nel tradizionale punto d´unione tra nord e sud dell´Alto Adige e non solo il commercio, ma anche le tre località più importanti, come Vipiteno, cittadina dei Fugger, Bressanone, ex città vescovile, e Chiusa, un tempo famosa residenza di artisti, traggono vantaggio da questa posizione. Ma lontano dallo storico percorso di transito tra Bolzano e il Brennero, vecchie fattorie isolate, villaggi sparsi e paesini determinano l´immagine delle tipiche piccole valli laterali.",
		"Il paesaggio di alberi da frutto e di vigneti, la flora subtropicale, le passeggiate ed i sentieri e soprattutto, il Castello avito del Conte del Tirolo, hanno da sempre attirato i visitatori del burgraviato. A quanti hanno bisogno di riposo la regione offre la possibilità di trovare quiete; nelle piccole valli laterali, come nella Val d´Ultimo con le sue fattorie di legno esposte al sole, nella Val Passiria, un microcosmo alpino con alte strade di passo, che hanno mantenuto il loro carattere, plasmato dalla vita contadina.",
		"Non solo \"Ötzi\", una mummia risalente all´era glaciale vecchia più di 5000 anni, trovata a Similaun sopra la Val Senales, ma anche gli Yaks, (bovini dell´Himalaya) di Reinhold Messner, alpinista estremo conosciuto in tutto il mondo, costituiscono alcune delle curiosità della Val Venosta, punto d´incontro di lingue e culture diverse. Inoltre qui si osserva un interessante scambio tra il clima caldo meridionale della bassa Val Venosta e il clima montano prettamente alpino (con vette che raggiungono i tremila metri, come l´Ortles) nella parte alta."
	),
	new Array(),
	new Array(),
	new Array(
		"Bolzano (265 m), hoofdstad van het gewest Zuid-Tirol, is een stad met twee gezichten; on-italiaans en haast koud aandoend voor de mensen uit het zuiden, mediterraans voor de mensen die uit het noorden komen. In de onmiddellijke nabijheid wordt de stad omringd door verscheidene bergketens: de Ritten met zijn piramides van aarde en de aantrekkelijke hotelletjes, Jenesien aan de Tschöggelberg en de Kohlernberg (de oudste kabelspoorbaan ter wereld), voor een uitstapje dichtbij. Ook dichtbij bevindt zich het originele Sarndal, niet alleen bekend om zijn klederdrachten, maar ook om zijn borduurwerk met penneschachten. In Bolzano heeft ook de man uit het ijs \"Ötzi\" zijn laatste rustplaats gevonden in het archeologisch museum.",
		"Hier worden alle belangrijke zaken afgewikkeld bij een \"glas goede wijn\". De zon verwekt een rijke varieteit aan vruchten in dit weelderige landschap van fruitbomen en wijngaarden, want grote oppervlakten van fruitboomkwekerijen en een sinds honderden jaren uitgeoefende wijnbouw bepalen het beeld van deze landstreek. Vlak aan de \"wijnweg\" bevindt zich de Kalterer See beschouwd wordt als het gebied van oorsprong van de wereldbekende wijn. Niet alleen bij de wijnbouwers maar ook in de gastvrije uitspanningen kan men zich heerlijk laten verwennen.",
		"Ten zuidoosten van het Etsch- en Eisackdal rijst het \"land der bergen\" op, zoals de Dolomieten met zijn rijk afwisselende natuurlandschap in de volksmond genoemd worden. De Dolomieten, ontstaan uit de oerzeen - fabelachtige sprookjesarchitectuur - bizarre bergwanden; beschreven, uitgebeeld en bezongen; te leren kennen, te beklimmen en te beleven. Nergens anders zijn er zoveel natuurparken. Vele volksverhalen, gebruiken en tradities spreken hun eigen taal, maar allemaal vertellen ze van de fascinerende wereld der \"bleke bergen\".",
		"",
		"Men bevindt zich hier op het traditionele noord-zuid verbindingspunt van Zuid-Tirol en niet alleen de handel profiteert van deze gunstige ligging, maar ook de drie belangrijkste plaatsen, nl. het stadje Sterzing, de voormalige bisschopsstad Brixen en Klausen, ooit een beroemd artiestenoord. Maar ver van het historische transito-gebied tussen Bolzano en de Brenner bepalen oude, afgelegen boerderijen, her en der verspreide dorpjes en gehuchten het beeld van de oeroude, kleine zijvalleien.",
		"Het landschap van fruitbomen en wijngaarden, de subtropische plantenwereld, de wandellanen en de weggetjes langs de rivier en vooral het door de eeuwen heen aan dezelfde familie behorende kasteel van de Graaf van Tirol hebben van oudsher gasten naar de burggraafstad gelokt. Mensen die naar rust verlangen kunnen daar in deze streek van genieten; in de kleine zijdalen zoals het Ultental met zijn door de zon verweerde houten boerderijen of in het Passeiertal, een microkosmos in de Alpen, met hooggelegen wegen over bergpassen, die hun door het boerenleven gevormde karakter hebben behouden.",
		"Niet alleen \"Ötzi\", een meer dan 5000 jaar oude gletschermummie, die in Similaun hoog boven het Schnalsdal werd gevonden, maar ook de Yaks (Himalaya runderen) van de wereldbekende extreembergbeklimmer Reinhold Messner zijn enkele van de bijzonderheden die te vinden zijn in Vinschgau, een ontmoetingspunt van verschillende talen en kulturen. Bovendien vindt men hier een interessante wisselwerking tussen een warm, zuidelijk klimaat in het laaggelegen Vinschgau en een wereld van het hoge alpengebergte (met enkele toppen boven de drieduizend meter zoals de Ortler)."
	)
);

var area_list = new Array(
	new Array(
		"Bozen und Umgebung",
		"Der Süden Südtirols",
		"Dolomiten/Pustertal",
		"Eisacktal/Wipptal",
		"Meranerland",
		"Vinschgau"
	),
	new Array(
		"Bozen and surroundings",
		"The South of South Tyrol",
		"The Dolomites",
		"Eisacktal – Wipptal",
		"Meran and surroundings",
		"Vinschgau"
	),
	new Array(),
	new Array(
		"Bolzano e dintorni",
		"Il Sud del Sud Tirolo",
		"Dolomiti",
		"Val d´Isarco/Wipptal",
		"La zona di Merano",
		"Val Venosta"
	),
	new Array(),
	new Array(),
	new Array(
		"Bolzano en omgeving",
		"Het zuiden van Zuid-Tirol",
		"Dolomieten",
		"Eisacktal/Wipptal",
		"De streek van Merano",
		"Vinschgau"
	),
);



/* Translate */
if( Lang != 0 ) {
	$('#lng_camping').html(_l[Lang][27]);
	$('#lng_campingsuedtirol').html(_l[Lang][26]);
	$('#lng_home').html(_l[Lang][16]);
	$('#lng_service').html(_l[Lang][17]);
	$('#lng_details').html(_l[Lang][18]);
	$('#lng_back').html(_l[Lang][18]);
	$('#lng_impressum').html(_l[Lang][5]);
	$('#lng_partner').html(_l[Lang][20]);
	$('#lng_moreservices').html(_l[Lang][21]);
	$('#lng_wetter').html(_l[Lang][28]);
	$('#lng_verkehr').html(_l[Lang][25]);
	$('#lng_film').html(_l[Lang][29]);
}
