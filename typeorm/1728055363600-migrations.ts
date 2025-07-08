import {MigrationInterface, QueryRunner} from "typeorm";
import {VilleEntity} from "../src/villes/entity/ville.entity";
import {ClientEntity} from "../src/clients/entity/client.entity";

export class Migrations1728055363600 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    const sites = [
      {
        nom: "BOIS JOLIMONT",
        typeOuvrage: "1 PR",
        numAffaire: "13-1133",
        mailContact: "fact@smhlm.org;dt_equipements@smhlm.org",
        ville: "LAMENTIN"
      },
      {
        nom: "IME LES GOMMIERS",
        typeOuvrage: "1 STEP",
        numAffaire: "13-906",
        mailContact: "econome.ime1@orange.fr",
        ville: "GOURBEYRE"
      },
      {
        nom: "GCS MANGOT VULCIN",
        typeOuvrage: "1 PRELEVEUR - 1 MESURE PH - 1 DEBITMETRE -2 SONDES PH - SOFREL + ARMOIRE",
        numAffaire: "14-1250",
        mailContact: "maryse.BRAFINE@chu-martinique.fr",
        ville: "LAMENTIN"
      },
      {
        nom: "ASL LA MICHELE 2",
        typeOuvrage: "2 PR",
        numAffaire: "14-1335",
        mailContact: "comptabilite@mpi-immobilier.com",
        ville: "DIAMANT"
      },
      {
        nom: "ASL LE GRAND BLEU",
        typeOuvrage: "1 PR + 1 DEGRILLEUR",
        numAffaire: "14-1337",
        mailContact: "mvanterpool@groupeagidom.com;nmondesir@groupeagidom.com",
        ville: "SCHOELCHER"
      },
      {
        nom: "CIRAD",
        typeOuvrage: "1 STEP",
        numAffaire: "14-1338",
        mailContact: "facture-mar@cirad.fr; olivier.bironien@cirad.fr",
        ville: "LAMENTIN"
      },
      {
        nom: "SC CHAMPIGONE",
        typeOuvrage: "1 STEP + 1 POSTE + 1 DEGRAISSEUR",
        numAffaire: "14-1339",
        mailContact: "scchampigone@gmail.com",
        ville: "FORT-DE-FRANCE"
      },
      {
        nom: "ASL DU STADE",
        typeOuvrage: "1 PR",
        numAffaire: "14-1340",
        mailContact: "syndicmq@groupimo.com;sbernard@groupimo.com",
        ville: "VAUCLIN"
      },
      {
        nom: "ASL WALL HOUSE",
        typeOuvrage: "2 PR",
        numAffaire: "14-1343",
        mailContact: "syndic@iccsyndic.com",
        ville: "Trois-Îlets"
      },
      {
        nom: "ASL LIBRE AVENIR",
        typeOuvrage: "1 PR + 1 STEP",
        numAffaire: "14-1344",
        mailContact: "syndic@guyhoquet-antilles.com",
        ville: "DUCOS"
      },
      {
        nom: "ASL LES ACACIAS",
        typeOuvrage: "1 PR",
        numAffaire: "14-1354",
        mailContact: "gestion97@ajassocies.fr",
        ville: "DIAMANT"
      },
      {
        nom: "ASL BEAUSEJOUR",
        typeOuvrage: "1 STEP + EPANDAGE",
        numAffaire: "14-1355",
        mailContact: "",
        ville: "Saint-Esprit"
      },
      {
        nom: "GENDARMERIE",
        typeOuvrage: "2 PR + 1 STEP",
        numAffaire: "14-1357",
        mailContact: "A DEPOSER SUR CHORUS AVEC LE BDC - ETAT - SIRET 11000201100044",
        ville: "Saint-François"
      },
      {
        nom: "GENDARMERIE",
        typeOuvrage: "2 PR + 1 STEP",
        numAffaire: "14-1366",
        mailContact: "A DEPOSER SUR CHORUS AVEC LE BDC - ETAT - SIRET 11000201100044",
        ville: "Saint-François"
      },
      {
        nom: "GENDARMERIE",
        typeOuvrage: "2 PR + 1 STEP",
        mailContact: "A DEPOSER SUR CHORUS AVEC LE BDC - ETAT - SIRET 11000201100044",
        ville: "Saint-François"
      },
      {
        nom: "EHPAD LES GLIRICIDIAS",
        typeOuvrage: "1 STEP",
        mailContact: "marie-joseph.gliricidias@orange.fr;jeanlouis.mr.gliricidias@orange.fr",
        ville: "François"
      },
      {
        nom: "LE CLOS D'ISTYA",
        typeOuvrage: "1 PR",
        numAffaire: "14-301",
        nomContact: "MAROT",
        prenomContact: "Vincent",
        telContact: "05 94 31 13 29",
        mailContact: "compta.syndic@gestimmo.biz",
        ville: "Cayenne",
        latitude: "4.928300",
        longitude: "-52.302247"
      },
      {
        nom: "ATTILA CABASSOU",
        typeOuvrage: "1 SURPRESSEUR",
        numAffaire: "14-305",
        mailContact: "pbweirback@semsamar.fr;mcdaniel@semsamar.fr;facturation-gl-guyane@semsamar.fr",
        ville: "Cayenne"
      },
      {
        nom: "EUREKA",
        typeOuvrage: "1 MINISTEP",
        numAffaire: "14-938",
        mailContact: "david.pedurand@wanadoo.fr",
        ville: "Baie-Mahault"
      },
      {
        nom: "KARL'S TRAITEUR",
        typeOuvrage: "1 PR + 1 BAC A GRAISSE",
        numAffaire: "15-1131",
        mailContact: "karlstraiteur@orange.fr;charles-rinaldo@orange.fr",
        ville: "GOSIER"
      },
      {
        nom: "SDC SALAKA",
        typeOuvrage: "1 GROUPE SURPRESSEUR EAU POTABLE",
        numAffaire: "15-1147",
        mailContact: "caroleimmo971@gmail.com\npar courrier : IMMO 97.1 - SDC RESIDENCE SALAKA -  8 PLACE CREOLE - MARINA BAS DU FORT- 97 190 LE GOSIER(pas d'envoi mail pour le moment)",
        ville: "Pointe-à-Pitre"
      },
      {
        nom: "VILLE ST ESPRIT",
        typeOuvrage: "1 STEP + DEGRILLEUR",
        numAffaire: "15-1486",
        mailContact: "COURRIER",
        ville: "Saint-Esprit"
      },
      {
        nom: "SDC REPUBLIQUE GALLIENI",
        typeOuvrage: "1 PR",
        numAffaire: "15-1506",
        mailContact: "facturation@modusimmo.fr",
        ville: "FORT-DE-FRANCE"
      },
      {
        nom: "SDC CALANTHE",
        typeOuvrage: "1 PR + 1 STEP",
        numAffaire: "15-1518",
        mailContact: "syndicmq@groupimo.com;sbernard@groupimo.com",
        ville: "FORT-DE-FRANCE"
      },
      {
        nom: "ASL PETITE FRANCE",
        typeOuvrage: "1 PR",
        numAffaire: "15-1574",
        mailContact: "agenceagi@wanadoo.fr;agisyndic@orange.fr",
        ville: "FRANCOIS"
      },
      {
        nom: "RESIDENCE VIVENTURA",
        typeOuvrage: "1 STEP",
        numAffaire: "15-321",
        mailContact: "compta.syndic@gestimmo.biz",
        ville: "Cayenne"
      },
      {
        nom: "RESIDENCE LA RHUMERIE",
        typeOuvrage: "1 PR",
        numAffaire: "15-322",
        mailContact: "assistante.syndic@groupeoceanic.com;charles.gruneisen@groupeoceanic.com",
        ville: "MATOURY"
      },
      {
        nom: "PALMA ROSA",
        typeOuvrage: "1 STEP",
        numAffaire: "15-331",
        mailContact: "compta.syndic@gestimmo.biz",
        ville: "Cayenne"
      },
      {
        nom: "AUPLATA",
        typeOuvrage: "1 PR + 1 DEGRILLEUR",
        numAffaire: "15-346",
        mailContact: "facturation@auplata.fr",
        ville: "MATOURY",
        latitude: "4.857242",
        longitude: "-52.271085"
      },
      {
        nom: "TERRA NOVA",
        typeOuvrage: "1 STEP",
        numAffaire: "15-352",
        mailContact: "compta.syndic@gestimmo.biz",
        ville: "Cayenne"
      },
      {
        nom: "MAHO CIGARE",
        typeOuvrage: "1 STEP",
        numAffaire: "15-354",
        mailContact: "compta.syndic@gestimmo.biz",
        ville: "Remire-Montjoly"
      },
      {
        nom: "SDC LE CLOS DE SAMANA 2",
        typeOuvrage: "1 PR + 1 STEP",
        numAffaire: "15-359",
        mailContact: "syndic@guyhoquetguyane.com",
        ville: "Cayenne"
      },
      {
        nom: "SDC LA KAMPAGN",
        typeOuvrage: "1 PR",
        numAffaire: "15-360",
        mailContact: "compta.syndic@gestimmo.biz",
        ville: "Cayenne"
      },
      {
        nom: "SDC LES ESTUDOMS",
        typeOuvrage: "1 PR",
        numAffaire: "15-364",
        mailContact: "compta.syndic@gestimmo.biz",
        ville: "Cayenne"
      },
      {
        nom: "APAJH IME",
        typeOuvrage: "1 PR",
        numAffaire: "15-383",
        mailContact: "comptable1@apajhguyane.org",
        ville: "Remire-Montjoly",
        latitude: "4.905502",
        longitude: "-52.279624"
      },
      {
        nom: "SDE RESIDENCE ANGELIQUE",
        typeOuvrage: "1 PR",
        numAffaire: "15-401",
        mailContact: "compta.syndic@gestimmo.biz",
        ville: "Remire-Montjoly"
      },
      {
        nom: "LYCEE LEON GONTRAN DAMAS",
        typeOuvrage: "1 STEP",
        numAffaire: "15-415",
        mailContact: "gfc.9730196a@ac-guyane.fr;sylvaine.genevieve@ac-guyane.fr",
        ville: "Cayenne"
      },
      {
        nom: "LYCEE MELKIOR GARRE",
        typeOuvrage: "1 SURPRESSEUR",
        numAffaire: "15-419",
        mailContact: "brigitte-mariet.monfort@ac-guyane.fr;dominique.dede@ac-guyane.fr",
        ville: "Cayenne"
      },
      {
        nom: "SDC CELINA",
        typeOuvrage: "1 GROUPE SURPRESSEUR EAU POTABLE",
        numAffaire: "15-422",
        mailContact: "assistante.syndic@groupeoceanic.com;charles.gruneisen@groupeoceanic.com",
        ville: "Cayenne"
      },
      {
        nom: "LYCEE LEON GONTRAN DAMAS",
        typeOuvrage: "1 SURPRESSEUR",
        numAffaire: "15-424",
        mailContact: "gfc.9730196a@ac-guyane.fr;sylvaine.genevieve@ac-guyane.fr",
        ville: "Cayenne"
      },
      {
        nom: "SDC CITRONNELLE",
        typeOuvrage: "1 STEP",
        numAffaire: "15-425",
        mailContact: "compta.syndic@gestimmo.biz",
        ville: "Cayenne"
      },
      {
        nom: "SDC CORIANDRE",
        typeOuvrage: "1 STEP",
        numAffaire: "15-426",
        mailContact: "compta.syndic@gestimmo.biz",
        ville: "Cayenne"
      },
      {
        nom: "SDC PITAYA",
        typeOuvrage: "1 STEP",
        numAffaire: "15-431",
        mailContact: "compta.syndic@gestimmo.biz",
        ville: "Remire-Montjoly"
      },
      {
        nom: "ASL PETIT HAVRE",
        typeOuvrage: "1 PR + 1 STEP",
        numAffaire: "16-1253",
        mailContact: "compta3@patrimoine971.com;ms@patrimoine971.com;syndic@patrimoine971.com ",
        ville: "GOSIER"
      },
      {
        nom: "SDC MIZALO",
        typeOuvrage: "1 PR",
        numAffaire: "16-1262",
        mailContact: "kvenot@agetis.fr;syndic@agetis.fr;sdoulayram@agetis.fr",
        ville: "Baie-Mahault"
      },
      {
        nom: "SDC DE LA BAIE",
        typeOuvrage: "1 PR",
        numAffaire: "16-1272",
        mailContact: "kvenot@agetis.fr;syndic@agetis.fr",
        ville: "Baie-Mahault"
      },
      {
        nom: "SDC ALIZEA",
        typeOuvrage: "1 PR",
        numAffaire: "16-1277",
        mailContact: "kvenot@agetis.fr;syndic@agetis.fr",
        ville: 'Sainte-Anne'
      },
      {
        nom: "PREFECTURE REGION GUADELOUPE",
        typeOuvrage: "1 PR",
        numAffaire: "16-1293",
        mailContact: "par courrier avec 3 fiches + Mail Mme Lignier,  slignier@ag50pas-guadeloupe.fr  - cspi971-fournisseur@guadeloupe.pref.gouv.fr",
        ville: "BASSE-TERRE"
      },
      {
        nom: "MAIRIE DE PETIT BOURG",
        typeOuvrage: "1 PR",
        numAffaire: "16-1295",
        mailContact: "EXPEDIEE PAR COURRIER à partir du 28\/02\/19 \/\/  Fait par mail à ketty.maurice@ville-petitbourg.fr",
        ville: 'Petit-Bourg'
      },
      {
        nom: "SDC LES PALETUVIERS",
        typeOuvrage: "1 PR",
        numAffaire: "16-1477",
        mailContact: "kvenot@agetis.fr;syndic@agetis.fr",
        ville: "Baie-Mahault"
      },
      {
        nom: "SDC FRUYAPEN",
        typeOuvrage: "1 PR",
        numAffaire: "16-1478",
        mailContact: "kvenot@agetis.fr;syndic@agetis.fr",
        ville: 'Abymes'
      },
      {
        nom: "SARL MODEL'AGE",
        typeOuvrage: "1 SURPRESSEUR",
        numAffaire: "16-1509",
        mailContact: "cecilie.foy@rainbow-sante.com",
        ville: 'Saint-Claude'
      },
      {
        nom: "SCI PETIT BOURG CANNELLE",
        typeOuvrage: "1 PR",
        numAffaire: "16-1596",
        mailContact: "orpilamentin.cannelle@orange.fr",
        ville: 'Lamentin'
      },
      {
        nom: "SCI BG MONTAIGNE",
        typeOuvrage: "1 PR + 1 STEP",
        numAffaire: "16-1716",
        mailContact: "lhamann@fincar.mq",
        ville: 'Lamentin'
      },
      {
        nom: "SDC LES PLUVIERS",
        typeOuvrage: "1 PR + 1 MiniSTEP",
        numAffaire: "16-1761",
        mailContact: "m.abati@ajassocies.fr;gestion97@ajassocies.fr",
        ville: "FORT-DE-FRANCE"
      },
      {
        nom: "SDC LES JARDINS DE SUZINI",
        typeOuvrage: "1 PR + 1 STEP",
        numAffaire: "16-438",
        mailContact: "compta.syndic@gestimmo.biz",
        ville: "Cayenne"
      },
      {
        nom: "SDC TERRASSE DE MONTABO",
        typeOuvrage: "1 SURPRESSEUR",
        numAffaire: "16-448",
        mailContact: "compta.syndic@gestimmo.biz",
        ville: "Cayenne"
      },
      {
        nom: "SDC VIOLA",
        typeOuvrage: "1 PR + 1 STEP enterrée",
        numAffaire: "16-479",
        mailContact: "assistante.syndic@groupeoceanic.com;charles.gruneisen@groupeoceanic.com;gestionnaire.copro2@groupeoceanic.com",
        ville: "Cayenne"
      },
      {
        nom: "SDC LE CLOS DES ALPINIAS",
        typeOuvrage: "1 PR + 1 STEP enterrée",
        numAffaire: "16-524",
        mailContact: "compta.syndic@gestimmo.biz",
        ville: "Cayenne"
      },
      {
        nom: "SDC PAPAYER",
        typeOuvrage: "groupe de recirculation eau chaude",
        numAffaire: "17-1566",
        mailContact: "compta3@patrimoine971.com;ms@patrimoine971.com;syndic@patrimoine971.com ",
        ville: 'Abymes'
      },
      {
        nom: "CENTRE HOSPITALIER LOUIS-DANIEL BEAUPERTHUY",
        typeOuvrage: "2 PR + 1 STEP",
        numAffaire: "17-1569",
        mailContact: "BDC DU 02\/03\/2020 POUR 11 MOIS - RENOUVELLER LA COMMANDE AVANT FEVRIER 2022",
        ville: 'Pointe-Noire'
      },
      {
        nom: "SDC SEMAG",
        typeOuvrage: "1 PR",
        numAffaire: "17-1578",
        mailContact: "l.severien@semag.fr",
        ville: 'Abymes'
      },
      {
        nom: "MAJESTIC",
        typeOuvrage: "1 PR",
        numAffaire: "17-1580",
        mailContact: "compta.syndic@immoconseil-gpe.com;service.juridique@immoconseil-gpe.com",
        ville: "GOSIER"
      },
      {
        nom: "IME IONA",
        typeOuvrage: "1 STEP BIODISC",
        numAffaire: "17-1647",
        mailContact: "frederic.berthe@ime-iona.fr",
        ville: "Baie-Mahault"
      },
      {
        nom: "CHUM",
        typeOuvrage: "1 DEGRILLEUR",
        numAffaire: "17-1804",
        mailContact: "comptabilite@tunzini-antilles.fr;delphine.deboulle@tunzini-antilles.fr;adelaide.guillerme@tunzini-antilles.fr",
        ville: "FORT-DE-FRANCE"
      },
      {
        nom: "SDC BELVEDERE",
        typeOuvrage: "1 STEP",
        numAffaire: "17-1835",
        mailContact: "comptabilite@mpi-immobilier.com",
        ville: 'Fort-de-France'
      },
      {
        nom: "ASL ARC EN CIEL",
        typeOuvrage: "2 PR",
        numAffaire: "17-1858",
        mailContact: "syndic@guyhoquet-antilles.com",
        ville: "VAUCLIN"
      },
      {
        nom: "SDC LA CANONNIERE",
        typeOuvrage: "1 PR",
        numAffaire: "23-2959",
        mailContact: "ajouan@vrignaudbiron.com",
        ville: "DIAMANT"
      },
      {
        nom: "COLLEGE DILLON 2",
        typeOuvrage: "1 GROUPE SURPRESSEUR EAU POTABLE",
        numAffaire: "17-1878",
        mailContact: "sandine.dunon@ac-martinique.fr;ramon.rosa-arsene@ac-martinique.fr",
        ville: 'Fort-de-France'
      },
      {
        nom: "SDC ARGANE",
        typeOuvrage: "1 PR",
        numAffaire: "17-1889",
        mailContact: "service.comptabilité@adb972immobilier.fr;jlorasyndic@adb972immobilier.fr",
        ville: "SCHOELCHER"
      },
      {
        nom: "RESIDENCE TERRASSES MARINA",
        typeOuvrage: "1 PR",
        numAffaire: "17-1910",
        mailContact: "facturation-gl-martinique@semsamar.fr;jnijean@semsamar.fr;hthimodent@semsamar.fr",
        ville: 'Fort-de-France'
      },
      {
        nom: "SDC RESIDENCE SYRIANNE",
        typeOuvrage: "1 PR + 1 STEP",
        numAffaire: "17-553",
        mailContact: "syndic@guyhoquetguyane.com; gestionnaire.syndic@guyhoquetguyane.com",
        ville: "Cayenne"
      },
      {
        nom: "AXIONNAZ",
        typeOuvrage: "1 SURPRESSEUR",
        numAffaire: "17-560",
        mailContact: "factures.fournisseurs@simko.fr;vi.avril@simko.fr;al.garcia@simko.fr",
        ville: "ROURA",
        latitude: "4.729218",
        longitude: "-52.320003"
      },
      {
        nom: "SDC TERRASSE DE MONTABO",
        typeOuvrage: "1 PR + 1 STEP",
        numAffaire: "17-608",
        mailContact: "compta.syndic@gestimmo.biz",
        ville: "Cayenne"
      },
      {
        nom: "SDC TERRASSES DE BADUEL",
        typeOuvrage: "1 STEP GRAF",
        numAffaire: "17-609",
        mailContact: "compta.syndic@gestimmo.biz",
        ville: "Cayenne"
      },
      {
        nom: "SDC LES MOMBINS 3",
        typeOuvrage: "1 STEP",
        numAffaire: "17-611",
        mailContact: "compta.syndic@gestimmo.biz",
        ville: "Remire-Montjoly"
      },
      {
        nom: "SDC FORUM BADUEL",
        typeOuvrage: "1 STEP GRAF",
        numAffaire: "17-630",
        mailContact: "compta.syndic@gestimmo.biz",
        ville: "Cayenne"
      },
      {
        nom: "SDC ATHELIA",
        typeOuvrage: "STEP",
        numAffaire: "17-643",
        mailContact: "compta.syndic@gestimmo.biz",
        ville: "Cayenne"
      },
      {
        nom: "CCOG (Abattoir de Mana)",
        typeOuvrage: "1 STEP",
        numAffaire: "17-648",
        mailContact: "paog@ouestguyane.fr",
        ville: "MANA"
      },
      {
        nom: "SDC TERRASSES DE BADUEL",
        typeOuvrage: "6 PPES VIDE CAVE",
        numAffaire: "17-650",
        mailContact: "compta.syndic@gestimmo.biz",
        ville: "Cayenne"
      },
      {
        nom: "CARINE KUO TSING JEN-CRUMIERE",
        typeOuvrage: "1 PR",
        numAffaire: "18-0658",
        mailContact: "pl.kervistin@cara-immobilier.com ;gestion@cara-immobilier.com ;carine.kuotsingjen@allianz-caraibe.fr",
        ville: "Cayenne"
      },
      {
        nom: "SEMSAMAR SLM",
        numAffaire: "18-0676",
        mailContact: "pbweirback@semsamar.fr;mcdaniel@semsamar.fr;facturation-gl-guyane@semsamar.fr",
        ville: 'Saint-Laurent-du-Maroni'
      },
      {
        nom: "SDC FORUM DE BADUEL",
        typeOuvrage: "PPES VIDE CAVE ASCENSEURS + PPES FONTAINE",
        numAffaire: "18-0679",
        mailContact: "compta.syndic@gestimmo.biz",
        ville: "Cayenne"
      },
      {
        nom: "GRAN PARADISIO",
        typeOuvrage: "1 STEP",
        numAffaire: "18-0717",
        mailContact: "compta.syndic@gestimmo.biz",
        ville: "Cayenne"
      },
      {
        nom: "NEVADA",
        typeOuvrage: "1 STEP + 1 PR",
        numAffaire: "18-1689",
        mailContact: "agence-agit-syndic@fontenoy.com",
        ville: "Baie-Mahault"
      },
      {
        nom: "FOYER DE L'ESPERANCE",
        typeOuvrage: "1 PR",
        numAffaire: "18-1982",
        mailContact: "compta.psl@apprentis-auteuil.org",
        ville: 'Fort-de-France'
      },
      {
        nom: "ASL LES FLIBUSTIERS",
        typeOuvrage: "1 STEP",
        numAffaire: "18-1992",
        mailContact: "aslflibustiers@gmail.com",
        ville: "LAMENTIN"
      },
      {
        nom: "TOUR GERMAINE",
        typeOuvrage: "1 GPE SURPRESSION INCENDIE",
        numAffaire: "18-2019",
        mailContact: "fact@smhlm.org; dt_equipements@smhlm.org",
        ville: 'Fort-de-France'
      },
      {
        nom: "TOUR GERMAINE",
        typeOuvrage: "1 GPE SURPESSION EAU POTABLE",
        numAffaire: "18-2020",
        mailContact: "fact@smhlm.org;dt_equipements@smhlm.org",
        ville: 'Fort-de-France'
      },
      {
        nom: "COLLEGE SUZANNE ROUSSI CESAIRE",
        typeOuvrage: "1 POSTE",
        numAffaire: "18-2055",
        mailContact: "Yannic.louis-sidney@ac-martinique.fr"
      },
      {
        nom: "SDC LA MOUINA",
        typeOuvrage: "1 STEP 100EH",
        numAffaire: "18-2059",
        mailContact: "si.syndic@slpcvm.com",
        ville: 'Lamentin'
      },
      {
        nom: "NEVISSE",
        typeOuvrage: "1 PR + 1 STEP enterrée",
        numAffaire: "18-2061",
        mailContact: "residence.nevisse@gmail.com;mvanterpool@groupeagidom.com;scgaccabit@gmail.com;nmondesir@groupeagidom.com",
        ville: 'Fort-de-France'
      },
      {
        nom: "SDC UNION TAMARIS",
        typeOuvrage: "1 POSTE + 1 MINISTEP",
        numAffaire: "18-2089",
        mailContact: "mvanterpool@groupeagidom.com;nmondesir@groupeagidom.com",
        ville: 'Fort-de-France'
      },
      {
        nom: "CLOS POINTE LYNCH",
        typeOuvrage: "1 PR",
        numAffaire: "18-2094",
        mailContact: "si.syndic@slpcvm.com",
        ville: "ROBERT"
      },
      {
        nom: "RESIDENCE FOND CORRE (Bâche)",
        typeOuvrage: "1 BACHE INCENDIE",
        numAffaire: "18-2102",
        mailContact: "ozanam@ozanam-hlm.fr",
        ville: 'Saint-Pierre'
      },
      {
        nom: "RESIDENCE LES MANGUIERS",
        typeOuvrage: "1 POSTE",
        numAffaire: "18-2118",
        mailContact: "fact@smhlm.org;dt_equipements@smhlm.org",
        ville: 'Fort-de-France'
      },
      {
        nom: "RESIDENCE CALDEIRA",
        typeOuvrage: "1 BACHE INCENDIE",
        numAffaire: "18-2119",
        mailContact: "ozanam@ozanam-hlm.fr",
        ville: 'Saint-Pierre'
      },
      {
        nom: "LES TROIS POIRIERS",
        typeOuvrage: "1 STEP 120EH",
        numAffaire: "18-2130",
        mailContact: "gestion97@ajassocies.fr",
        ville: 'Rivière-Salée'
      },
      {
        nom: "SDC COCONUT PLAGE",
        typeOuvrage: "1 SURRPESSEUR",
        numAffaire: "19-0759",
        mailContact: "charles.gruneisen@groupeoceanic.com;assistante.syndic@groupeoceanic.com",
        ville: "Cayenne"
      },
      {
        nom: "SDC SUNRISE - SDC SUNSET",
        typeOuvrage: "1 POSTE",
        numAffaire: "19-0770",
        mailContact: "compta.syndic@gestimmo.biz",
        ville: "Remire-Montjoly"
      },
      {
        nom: "BATIMENT GUYANAIS",
        typeOuvrage: "1 POSTE",
        numAffaire: "19-0771",
        mailContact: "compta@tigresarl.com",
        ville: "MATOURY"
      },
      {
        nom: "SDC EDEN ROC",
        typeOuvrage: "1 POSTE",
        numAffaire: "19-0772",
        mailContact: "steven.ollivierre@groupeoceanic.com ; assistante.syndic@groupeoceanic.com",
        ville: "Remire-Montjoly"
      },
      {
        nom: "SDC ATLANTIS",
        typeOuvrage: "1 SURPRESSEUR EP",
        numAffaire: "19-0794",
        mailContact: "assistante.syndic@groupeoceanic.com;charles.gruneisen@groupeoceanic.com",
        ville: "Cayenne"
      },
      {
        nom: "SDC ANSE MONTABO",
        typeOuvrage: "SURP",
        numAffaire: "19-0809",
        mailContact: "adeline.urdiel@groupeoceanic.com;assistante.syndic@groupeoceanic.com",
        ville: "Cayenne"
      },
      {
        nom: "SDC FLEUR DES CARAIBES",
        typeOuvrage: "1 POSTE",
        numAffaire: "19-1746",
        mailContact: "compta3@patrimoine971.com;ms@patrimoine971.com;syndic@patrimoine971.com ",
        ville: 'Basse-Terre'
      },
      {
        nom: "SDC BELLEVUE LES SALINES",
        typeOuvrage: "1 SURPRESSEUR",
        numAffaire: "19-1749",
        mailContact: "syndic.compta1@fgc971.com;syndic.gestion2@fgc971.com",
        ville: 'Gosier'
      },
      {
        nom: "GCBC",
        typeOuvrage: "1 POSTE + 1 DEGRILLEUR + 1 BIODISQUE",
        numAffaire: "19-1764",
        mailContact: "accounting@gcbc.com",
        ville: 'Grand-Bourg'
      },
      {
        nom: "RESIDENCE DU PARC",
        typeOuvrage: "1 STEP 135EH",
        numAffaire: "19-2164",
        mailContact: "residenceduparc@madin-immo.fr",
        ville: 'Fort-de-France'
      },
      {
        nom: "ASL LE MONT VERT",
        typeOuvrage: "1 POSTE",
        numAffaire: "19-2231",
        mailContact: "factures@idisyndic.com",
        ville: 'Robert'
      },
      {
        nom: "MAIRIE TROIS ILETS",
        typeOuvrage: "3 POSTES",
        numAffaire: "19-2236",
        mailContact: "LETTRE DE COMMANDE DE 36 MOIS A RENOUVELLER EN OCTOBRE 2022 \n",
        ville: 'Trois-Îlets'
      },
      {
        nom: "COMGEND",
        typeOuvrage: "1 POSTE",
        numAffaire: "19-2277",
        mailContact: "COMMANDE DE UN AN - DEBUT DECEMBRE 2019 - A RENOUVELLER AVANT DECEMBRE 2020",
        ville: 'Fort-de-France'
      },
      {
        nom: "SDC PAPRIKAU",
        typeOuvrage: "1 POSTE",
        numAffaire: "20-2336",
        mailContact: "syndic@iccsyndic.com"
      },
      {
        nom: "SDC PERLE NOIRE",
        typeOuvrage: "1 POSTE + 1 STEP",
        numAffaire: "20-0837",
        mailContact: "carolimmo.compta@orange.fr;syndic.cayenne2@carol-immo.fr"
      },
      {
        nom: "SDC BUTERFLY",
        typeOuvrage: "PR",
        numAffaire: "21-0921",
        mailContact: "compta.syndic@gestimmo.biz",
        ville: "Remire-Montjoly"
      },
      {
        nom: "SDC NORD BEACH",
        typeOuvrage: "STEP",
        numAffaire: "21-1032",
        mailContact: "carolimmo.compta@orange.fr;syndic.cayenne2@carol-immo.fr",
        ville: "Remire-Montjoly"
      },
      {
        nom: "GRAND PORT MARITIME",
        typeOuvrage: "PR",
        numAffaire: "21-1072",
        mailContact: "SUR CHORUS",
        ville: 'Remire-Montjoly'
      },
      {
        nom: "AGROPARISTECH",
        typeOuvrage: "PR",
        numAffaire: "21-1075",
        mailContact: "fred.pericarpin@ecofog.gf;Paul.Arrive@ecofog.gf",
        ville: "KOUROU"
      },
      {
        nom: "ROUTES DE GUADELOUPE",
        typeOuvrage: "PR",
        numAffaire: "21-1978",
        mailContact: "yannick.mobetie@routesdeguadeloupe.com",
        ville: "Baie-Mahault"
      },
      {
        nom: "ASL DOMAINE DU PARC",
        typeOuvrage: "PR",
        numAffaire: "21-1980",
        mailContact: "syndic@patrimoine971.com",
        ville: 'Saint-François'
      },
      {
        nom: "MAS UDAF",
        typeOuvrage: "PR",
        numAffaire: "21-1995",
        mailContact: "masbaillif@udaf971.fr;jmartine@udaf971.fr",
        ville: 'Basse-Terre'
      },
      {
        nom: "VILLE ST ESPRIT",
        typeOuvrage: "1 PR",
        numAffaire: "20-2422",
        mailContact: "servicestechniques@mairie-saint-esprit.fr",
        ville: "Saint-Esprit"
      },
      {
        nom: "SDC VICTORIA",
        typeOuvrage: "STEP",
        numAffaire: "22-1145",
        mailContact: "carolimmo.compta@orange.fr;syndic.cayenne2@carol-immo.fr",
        ville: "Remire-Montjoly"
      },
      {
        nom: "RESIDENCE ANGELIQUE 2 \/ SCI COROSSOL 502",
        typeOuvrage: "PR",
        numAffaire: "22-1153",
        mailContact: "gestionloc.cayenne@carol-immo.fr",
        ville: "Cayenne"
      },
      {
        nom: "SDC CREOL'ILES",
        typeOuvrage: "STEP",
        numAffaire: "22-2024",
        mailContact: "kvenot@agetis.fr;syndic@agetis.fr",
        ville: 'Petit-Bourg'
      },
      {
        nom: "CHU  \/ PZQ SURP",
        typeOuvrage: "SURPRESSEUR",
        numAffaire: "21-2622",
        ville: 'Fort-de-France'
      },
      {
        nom: "CHU LA MEYNARD",
        typeOuvrage: "1 SURPRESSEUR CLARAC",
        numAffaire: "21-2623"
      },
      {
        nom: "CHU LA MEYNARD",
        typeOuvrage: "1SURPRESSEUR EMMA VENTURA",
        numAffaire: "21-2624"
      },
      {
        nom: "SDC BELLE VUE DU PHARE",
        typeOuvrage: "PR",
        numAffaire: "22-2062",
        mailContact: "n.carlini@immo971.com",
        ville: 'Gosier'
      },
      {
        nom: "RESIDENCE COMPAS",
        typeOuvrage: "FOSSE SEPTIQUE",
        numAffaire: "22-1214",
        mailContact: "syndic@guyhoquetguyane.com",
        ville: 'Remire-Montjoly'
      },
      {
        nom: "SDC CHRYSTAL BEACH",
        typeOuvrage: "PR",
        numAffaire: "22-2066",
        mailContact: "ecinet@agetis.fr",
        ville: 'Saint-François'
      },
      {
        nom: "SDC DAHLIA",
        typeOuvrage: "STEP",
        numAffaire: "22-2681",
        mailContact: "belsyndic@gmail.com;comptabelsyndic@gmail.com",
        ville: 'Ajoupa-Bouillon'
      },
      {
        nom: "SDC RESIDENCE MELODY",
        typeOuvrage: "SURPRESSEUR",
        numAffaire: "22-2689",
        mailContact: "msaintaime@magplusimmobilier.fr;jpoussel@magplusimmobilier.fr",
        ville: 'Sainte-Anne'
      },
      {
        nom: "CH CAYENNE",
        typeOuvrage: "PR",
        numAffaire: "22-1242",
        mailContact: "emmanuel.creff@ch-cayenne.fr",
        ville: "Cayenne"
      },
      {
        nom: "SDC LA BELLE EOLE",
        typeOuvrage: "1 GPE SURPRESSION INCENDIE",
        numAffaire: "22-2072",
        mailContact: "n.carlini@immo971.com;res.immeuble1immo971@gmail.com",
        ville: 'Gosier'
      },
      {
        nom: "SDC TOPAZE",
        typeOuvrage: "GPE SURPRESSEUR",
        numAffaire: "22-1258",
        mailContact: "assistante.syndic@groupeoceanic.com;charles.gruneisen@groupeoceanic.com;adeline.urdiel@groupeoceanic.com",
        ville: "Cayenne"
      },
      {
        nom: "RESIDENCE ST PIERRE",
        typeOuvrage: "MINI STATION EU",
        numAffaire: "22-2700",
        mailContact: "fact@smhlm.org;dt_equipements@smhlm.org",
        ville: "FRANCOIS"
      },
      {
        nom: "SCI IMUTURF",
        typeOuvrage: "1 POSTE D E RELEVAGE",
        numAffaire: "22-2740",
        mailContact: "compta@mutufr.com;jbguieau@mutufr.com;sjacques@mutufr.com). ",
        ville: 'Lamentin'
      },
      {
        nom: "GCS MANGOT VULCIN",
        typeOuvrage: "PR+DEGRILLEUR +BACHE +SONDE",
        numAffaire: "22-2764",
        mailContact: "maryse.BRAFINE@chu-martinique.fr",
        ville: 'Lamentin'
      },
      {
        nom: "SDC MONTRAVEL",
        typeOuvrage: "1 STEP",
        numAffaire: "22-1323",
        mailContact: "gestionnaire.syndic@guyhoquetguyane.com",
        ville: 'Remire-Montjoly'
      },
      {
        nom: "SCCV PRIMEROSE",
        typeOuvrage: "1 POSTE RELEVAGE",
        numAffaire: "22-2794",
        mailContact: "ag.100immo@gmail.com",
        ville: 'Ajoupa-Bouillon'
      },
      {
        nom: "RESIDENCE BARBADINE",
        client: "LOT N°1 -CENTRE NORD",
        typeOuvrage: "SURPRESSEUR",
        numAffaire: "22-2798"
      },
      {
        nom: "RESIDENCE MANSFENIL",
        client: "LOT N°1 -CENTRE NORD",
        typeOuvrage: "SURPRESSEUR",
        numAffaire: "22-2798"
      },
      {
        nom: "RESIDENCE 3L",
        client: "LOT N°1 -CENTRE NORD",
        typeOuvrage: "SURPRESSEUR",
        numAffaire: "22-2798"
      },
      {
        nom: "RESIDENCE GUIMAUVE",
        client: "LOT N°1 -CENTRE NORD",
        typeOuvrage: "SURPRESSEUR",
        numAffaire: "22-2799"
      },
      {
        nom: "SDC LES JARDINS DE PLAISANCE",
        typeOuvrage: "PR ET STEU",
        numAffaire: "22-2148",
        mailContact: "claireimmo971@gmail.com;cathia.immo971@gmail.com",
        ville: "Baie-Mahault"
      },
      {
        nom: "RESIDENCE VENT LEVE",
        typeOuvrage: "STEP",
        numAffaire: "23-2814",
        mailContact: "facturation.belsyndic@gmail.com \n",
        ville: 'Fort-de-France'
      },
      {
        nom: "RESIDENCE DANMIE",
        typeOuvrage: "MINI STATION EU",
        numAffaire: "23-2828",
        mailContact: "fact@smhlm.org;dt_equipements@smhlm.org",
        ville: 'Sainte-Marie'
      },
      {
        nom: "TESIDENCE DE LA BAIE BAT 1",
        typeOuvrage: "POSTE DE RELVEAGE",
        numAffaire: "23-2829",
        mailContact: "forestile@iccsyndic.com",
        ville: 'Fort-de-France'
      },
      {
        nom: "TESIDENCE DE LA BAIE BAT 2",
        typeOuvrage: "POSTE DE RELVEAGE",
        numAffaire: "23-2830",
        mailContact: "forestile@iccsyndic.com",
        ville: 'Fort-de-France'
      },
      {
        nom: "RESIDENCE CARRIERE DOREE",
        typeOuvrage: "MINI STATION EU",
        numAffaire: "23-2847",
        mailContact: "fact@smhlm.org;dt_equipements@smhlm.org",
        ville: 'Lamentin'
      },
      {
        nom: "RESIDENCE SENPIL",
        typeOuvrage: "MINI STATION EU",
        numAffaire: "23-2848",
        mailContact: "fact@smhlm.org;dt_equipements@smhlm.org",
        ville: 'Sainte-Marie'
      },
      {
        nom: "RESIDENCE KABEL ET BELE",
        typeOuvrage: "MINI STATION EU",
        numAffaire: "23-2849",
        mailContact: "fact@smhlm.org;dt_equipements@smhlm.org",
        ville: 'Sainte-Marie'
      },
      {
        nom: "RESIDENCE KOALINE",
        typeOuvrage: "POSTE RELEVAGE",
        numAffaire: "23-1495",
        mailContact: "compta.syndic@gestimmo.biz",
        ville: "Remire-Montjoly"
      },
      {
        nom: "RESIDENCE ACAJOU",
        typeOuvrage: "POSTE DE RELEVAGE",
        numAffaire: "23-2880",
        mailContact: "fact@smhlm.org;dt_equipements@smhlm.org",
        ville: 'Lamentin'
      },
      {
        nom: "RESIDENCE CASSIS",
        typeOuvrage: "MINI STEP",
        numAffaire: "23-1496",
        mailContact: "compta.syndic@gestimmo.biz",
        ville: "Cayenne"
      },
      {
        nom: "SDC JARDIN DE TAMARIS",
        typeOuvrage: "STEP",
        numAffaire: "23-1506",
        mailContact: "carolimmo.compta@orange.fr;syndic.cayenne2@carol-immo.fr",
        ville: "Cayenne"
      },
      {
        nom: "COLLEGE IV",
        typeOuvrage: "PR+MICRO STATION",
        numAffaire: "23-1543",
        mailContact: "Soilihi.Salime@ac-guyane.fr",
        ville: 'Saint-Laurent-du-Maroni'
      },
      {
        nom: "SDC SAINT CYR",
        typeOuvrage: "POSTE RELEVAGE",
        numAffaire: "24-1579",
        mailContact: "compta.syndic@gestimmo.biz",
        ville: "Remire-Montjoly"
      },
      {
        nom: "SDC DIAMANT",
        typeOuvrage: "POSTE RELEVAGE",
        numAffaire: "24-1595",
        mailContact: "compta.syndic@gestimmo.biz",
        ville: "Cayenne"
      },
      {
        nom: "VOLTALIA",
        typeOuvrage: "SUR¨PRESSEUR",
        numAffaire: "24-1605",
        mailContact: "dl_compta@voltalia.com;e.emery@voltalia.com;r.piel-ext@voltalia.com",
        ville: "SINNAMARY"
      },
      {
        nom: "SDC CITY MARKET KWATA",
        typeOuvrage: "POSTE RELEVAGE",
        numAffaire: "24-1607",
        mailContact: "crousseau@arthurloyd-iccdom.com;jedward@iccdom.org",
        ville: "Cayenne"
      },
      {
        nom: "SDC PANAMA",
        typeOuvrage: "GROUPE SURPRESSEUR",
        numAffaire: "24-2283",
        mailContact: "m.jacq@immo971.com",
        ville: 'Gosier'
      },
      {
        nom: "SDC QUISSY",
        typeOuvrage: "POSTE RELEVAGE",
        numAffaire: "24-3016",
        mailContact: "myriam.frebet@acs-syndic.com",
        ville: "SCHOELCHER"
      },
      {
        nom: "SDC LES FLAMBOYANTS",
        typeOuvrage: "POSTE RELEVAGE",
        numAffaire: "24-2284",
        mailContact: "ecinet@agetis.fr",
        ville: 'Gosier'
      }
    ];

    for (let site of sites) {
      const villeEntity = await queryRunner.manager.findOneBy(
        VilleEntity,
        {
          nom: site.ville,
        },
      );
      const clientEntity = await queryRunner.manager.findOneBy(
        ClientEntity,
        {
          nom: site.client ?? site.nom,
        },
      );

      console.log(`Vile: ${villeEntity?.nom}(${villeEntity?.id})`, `Client: ${clientEntity?.nom}(${clientEntity?.id})`);

      await queryRunner.manager.save('sites', {
        clientId: clientEntity.id,
        nom: site.nom?.trim(),
        affaire: site.numAffaire?.trim() ?? '',
        contactNom: site.nomContact?.trim() ?? '',
        contactPrenom: site.prenomContact?.trim(),
        contactTel: site.telContact?.trim() ?? '',
        contactMail: site.mailContact?.trim(),
        latitude: site.latitude,
        longitude: site.longitude,
        adresse: '',
        codePostal: villeEntity.codePostal,
        villeId: villeEntity.id,
        departementId: villeEntity.departementId,
      });
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}
