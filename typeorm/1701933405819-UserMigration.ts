import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm"
import * as bcrypt from "bcrypt";
import {TableIndex} from "typeorm/schema-builder/table/TableIndex";

export class UserMigration1701933405819 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "departements",
      columns: [
        {
          name: "id",
          type: "int",
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: "code",
          type: "varchar",
        },
        {
          name: "nom",
          type: "varchar",
        },
        {
          name: 'createdAt',
          type: 'timestamp',
          default: 'now()'
        },
        {
          name: 'updatedAt',
          type: 'timestamp',
          default: 'now()'
        }
      ]
    }), true)

    await queryRunner.manager.query("INSERT INTO `departements` (`id`, `code`, `nom`) VALUES " +
      "(1, '971', 'Guadeloupe')," +
      "(2, '972', 'Martinique')," +
      "(3, '973', 'Guyane')," +
      "(4, '974', 'Réunion')," +
      "(5, '978', 'Saint Martin')");

    await queryRunner.createTable(new Table({
      name: "villes",
      columns: [
        {
          name: "id",
          type: "int",
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: "departementId",
          type: "int",
        },
        {
          name: "nom",
          type: "varchar",
        },
        {
          name: "codePostal",
          type: "varchar",
        },
        {
          name: 'createdAt',
          type: 'timestamp',
          default: 'now()'
        },
        {
          name: 'updatedAt',
          type: 'timestamp',
          default: 'now()'
        }
      ]
    }), true)

    await queryRunner.createIndex("villes", new TableIndex({
      columnNames: ["departementId"]
    }))

    await queryRunner.createForeignKey("villes", new TableForeignKey({
      columnNames: ["departementId"],
      referencedColumnNames: ["id"],
      referencedTableName: "departements",
      onDelete: "CASCADE",
    }))


    await queryRunner.manager.query("INSERT INTO `villes` (`id`, `departementId`, `nom`, `codePostal`) VALUES " +
      "(1, 1, 'Abymes', '97142'), " +
      "(2, 1, 'Anse-Bertrand','97121'), " +
      "(3, 1, 'Baie-Mahault',  '97122'), " +
      "(4, 1, 'Baillif','97123'), " +
      "(5, 1, 'Basse-Terre', '97100'), " +
      "(6, 1, 'Bouillante', '97132'), " +
      "(7, 1, 'Capesterre-Belle-Eau','97130'), " +
      "(8, 1, 'Capesterre-de-Marie-Galante', '97140'), " +
      "(9, 1, 'Gourbeyre', '97113'), " +
      "(10, 1, 'Désirade','97127'), " +
      "(11, 1, 'Deshaies','97126'), " +
      "(12, 1, 'Grand-Bourg', '97112'), " +
      "(13, 1, 'Gosier','97190'), " +
      "(14, 1, 'Goyave','97128'), " +
      "(15, 1, 'Lamentin', '97129'), " +
      "(16, 1, 'Morne-à-l\\'Eau', '97111'), " +
      "(17, 1, 'Moule','97160'), " +
      "(18, 1, 'Petit-Bourg','97170'), " +
      "(19, 1, 'Petit-Canal', '97131'), " +
      "(20, 1, 'Pointe-à-Pitre', '97110'), " +
      "(21, 1, 'Pointe-Noire', '97116'), " +
      "(22, 1, 'Port-Louis', '97117'), " +
      "(23, 1, 'Saint-Claude','97120'), " +
      "(24, 1, 'Saint-François','97118'), " +
      "(25, 1, 'Saint-Louis','97134'), " +
      "(26, 1, 'Sainte-Anne', '97180'), " +
      "(27, 1, 'Sainte-Rose','97115'), " +
      "(28, 1, 'Terre-de-Bas','97136'), " +
      "(29, 1, 'Terre-de-Haut', '97137'), " +
      "(30, 1, 'Trois-Rivières', '97114'), " +
      "(31, 1, 'Vieux-Fort','97141'), " +
      "(32, 1, 'Vieux-Habitants','97119'), " +
      "(33, 2, 'Ajoupa-Bouillon','97216'), " +
      "(34, 2, 'Les Anses-d\\'Arlet', '97217'), " +
      "(35, 2, 'Basse-Pointe', '97218'), " +
      "(36, 2, 'Carbet', '97221'), " +
      "(37, 2, 'Case-Pilote', '97222'), " +
      "(38, 2, 'Diamant','97223'), " +
      "(39, 2, 'Ducos', '97224'), " +
      "(40, 2, 'Fonds-Saint-Denis', '97250'), " +
      "(41, 2, 'Fort-de-France', '97234'), " +
      "(42, 2, 'François', '97240'), " +
      "(43, 2, 'Grand\\'Rivière', '97218'), " +
      "(44, 2, 'Gros-Morne', '97213'), " +
      "(45, 2, 'Lamentin','97232'), " +
      "(46, 2, 'Lorrain', '97214'), " +
      "(47, 2, 'Macouba', '97218'), " +
      "(48, 2, 'Marigot', '97225'), " +
      "(49, 2, 'Marin', '97290'), " +
      "(50, 2, 'Morne-Rouge','97260'), " +
      "(51, 2, 'Prêcheur', '97250'), " +
      "(52, 2, 'Rivière-Pilote', '97211'), " +
      "(53, 2, 'Rivière-Salée', '97215'), " +
      "(54, 2, 'Robert', '97231'), " +
      "(55, 2, 'Saint-Esprit', '97270'), " +
      "(56, 2, 'Saint-Joseph','97212'), " +
      "(57, 2, 'Saint-Pierre', '97250'), " +
      "(58, 2, 'Sainte-Anne', '97227'), " +
      "(59, 2, 'Sainte-Luce','97228'), " +
      "(60, 2, 'Sainte-Marie', '97230'), " +
      "(61, 2, 'Schoelcher','97233'), " +
      "(62, 2, 'Trinité', '97220'), " +
      "(63, 2, 'Trois-Îlets','97229'), " +
      "(64, 2, 'Vauclin', '97280'), " +
      "(65, 2, 'Morne-Vert','97226'), " +
      "(66, 2, 'Bellefontaine', '97222'), " +
      "(67, 3, 'Régina', '97390'), " +
      "(68, 3, 'Cayenne', '97300'), " +
      "(69, 3, 'Iracoubo',  '97350'), " +
      "(70, 3, 'Kourou', '97310'), " +
      "(71, 3, 'Macouria Tonate', '97355'), " +
      "(72, 3, 'Mana','97360'), " +
      "(73, 3, 'Matoury', '97351'), " +
      "(74, 3, 'Saint-Georges', '97313'), " +
      "(75, 3, 'Remire-Montjoly','97354'), " +
      "(76, 3, 'Roura','97352'), " +
      "(77, 3, 'Saint-Laurent-du-Maroni','97320'), " +
      "(78, 3, 'Sinnamary', '97315'), " +
      "(79, 3, 'Montsinéry-Tonnegrande','97356'), " +
      "(80, 3, 'Ouanary', '97380'), " +
      "(81, 3, 'Saül', '97314'), " +
      "(82, 3, 'Maripasoula','97370'), " +
      "(83, 3, 'Camopi','97330'), " +
      "(84, 3, 'Grand-Santi', '97340'), " +
      "(85, 3, 'Saint-Élie', '97312'), " +
      "(86, 3, 'Apatou','97317'), " +
      "(87, 3, 'Awala-Yalimapo','97319'), " +
      "(88, 3, 'Pompidou Papa Ichton','97316'), " +
      "(89, 4, 'Avirons','97425'), " +
      "(90, 4, 'Bras-Panon', '97412'), " +
      "(91, 4, 'Entre-Deux','97414'), " +
      "(92, 4, 'Étang-Salé', '97427'), " +
      "(93, 4, 'Petite-Île',  '97429'), " +
      "(94, 4, 'Plaine-des-Palmistes', '97431'), " +
      "(95, 4, 'Port', '97420'), " +
      "(96, 4, 'Possession','97419'), " +
      "(97, 4, 'Saint-André', '97440'), " +
      "(98, 4, 'Saint-Benoît','97470'), " +
      "(99, 4, 'Saint-Denis', '97490'), " +
      "(100, 4, 'Saint-Joseph', '97480'), " +
      "(101, 4, 'Saint-Leu', '97436'), " +
      "(102, 4, 'Saint-Louis', '97450'), " +
      "(103, 4, 'Saint-Paul', '97460'), " +
      "(104, 4, 'Saint-Pierre','97432'), " +
      "(105, 4, 'Saint-Philippe','97442'), " +
      "(106, 4, 'Sainte-Marie','97438'), " +
      "(107, 4, 'Sainte-Rose','97439'), " +
      "(108, 4, 'Sainte-Suzanne','97441'), " +
      "(109, 4, 'Salazie', '97433'), " +
      "(110, 4, 'Tampon','97430'), " +
      "(111, 4, 'Trois-Bassins', '97434'), " +
      "(112, 4, 'Cilaos', '97413'), " +
      "(113, 1, 'Saint-Barthélemy','97133'), " +
      "(114, 1,  'Saint-Martin', '97150')");

    await queryRunner.createTable(new Table({
      name: "utilisateurs",
      columns: [
        {
          name: "id",
          type: "int",
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: "password",
          type: "varchar",
        },
        {
          name: "sessionToken",
          type: "varchar",
          isNullable: true,
        },
        {
          name: "code",
          type: "varchar",
          isNullable: false,
        },
        {
          name: "nom",
          type: "varchar",
          isNullable: false,
        },
        {
          name: "prenom",
          type: "varchar",
          isNullable: false,
        },
        {
          name: "tel",
          type: "varchar",
          isNullable: false,
        },
        {
          name: "mail",
          type: "varchar",
          isNullable: false,
        },
        {
          name: "departementId",
          type: "int",
          isNullable: false,
        },
        {
          name: 'createdAt',
          type: 'timestamp',
          default: 'now()',
          isNullable: false,
        },
        {
          name: 'updatedAt',
          type: 'timestamp',
          default: 'now()',
          isNullable: false,
        },
        {
          name: "role",
          type: "int",
          default: 0,
          isNullable: false,
        }
      ]
    }), true)


    await queryRunner.createIndex("utilisateurs", new TableIndex({
      columnNames: ["code"],
      isUnique: true,
    }))

    await queryRunner.createIndex("utilisateurs", new TableIndex({
      columnNames: ["departementId"]
    }))
    await queryRunner.createForeignKey("utilisateurs", new TableForeignKey({
      columnNames: ["departementId"],
      referencedColumnNames: ["id"],
      referencedTableName: "departements",
      onDelete: "CASCADE",
    }))


    const password = await bcrypt.hash('123456', 10);

    await queryRunner.manager.query(`INSERT INTO utilisateurs (password, code, nom, prenom, tel, mail, departementId, role)
                                     VALUES ('${password}', 'utilisateur', 'Utilisateur', 'prenom', '',
                                             'utilisateur@test.fr', 1, 0)`);

    await queryRunner.manager.query(`INSERT INTO utilisateurs (password, code, nom, prenom, tel, mail, departementId, role)
                                     VALUES ('${password}', 'admin', 'Admin', 'prenom', '', 'admin@test.fr', 1, 1)`);

    await queryRunner.manager.query(`INSERT INTO utilisateurs (password, code, nom, prenom, tel, mail, departementId, role)
                                     VALUES ('${password}', 'superadmin', 'Saint-Yves', 'Ludovic', '',
                                             'superadmin@test.fr', 1, 2)`);


    await queryRunner.createTable(new Table({
      name: "clients",
      columns: [
        {
          name: "id",
          type: "int",
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: "nom",
          type: "varchar",
        },
        {
          name: "departementId",
          type: "int",
          isNullable: false,
        },
        {
          name: 'createdAt',
          type: 'timestamp',
          default: 'now()'
        },
        {
          name: 'updatedAt',
          type: 'timestamp',
          default: 'now()'
        }
      ]
    }), true)

    await queryRunner.createIndex("clients", new TableIndex({
      columnNames: ["departementId"]
    }))
    await queryRunner.createForeignKey("clients", new TableForeignKey({
      columnNames: ["departementId"],
      referencedColumnNames: ["id"],
      referencedTableName: "departements",
      onDelete: "CASCADE",
    }))

    await queryRunner.createTable(new Table({
      name: "sites",
      columns: [
        {
          name: "id",
          type: "int",
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: "clientId",
          type: "int",
          isNullable: false,
        },
        {
          name: "nom",
          type: "varchar",
          isNullable: false,
        },
        {
          name: "affaire",
          type: "varchar",
          isNullable: false,
        },
        {
          name: "contactNom",
          type: "varchar",
          isNullable: false,
        },
        {
          name: "contactPrenom",
          type: "varchar",
          isNullable: true,
          default: null,
        },
        {
          name: "contactTel",
          type: "varchar",
          isNullable: false,
        },
        {
          name: "contactMail",
          type: "varchar",
          isNullable: true,
          default: null,
        },
        {
          name: "adresse",
          type: "varchar",
          isNullable: false,
        },
        {
          name: "codePostal",
          type: "varchar",
          isNullable: false,
        },
        {
          name: "villeId",
          type: "int",
          isNullable: false,
        },
        {
          name: "departementId",
          type: "int",
          isNullable: false,
        },
        {
          name: "latitude",
          type: "decimal(10, 8)",
          isNullable: true,
          default: null,
        },
        {
          name: "longitude",
          type: "decimal(10, 8)",
          isNullable: true,
          default: null,
        },
        {
          name: 'createdAt',
          type: 'timestamp',
          default: 'now()',
          isNullable: false,
        },
        {
          name: 'updatedAt',
          type: 'timestamp',
          default: 'now()',
          isNullable: false,
        }
      ]
    }), true)


    await queryRunner.createIndex("sites", new TableIndex({
      columnNames: ["departementId"]
    }))
    await queryRunner.createForeignKey("sites", new TableForeignKey({
      columnNames: ["departementId"],
      referencedColumnNames: ["id"],
      referencedTableName: "departements",
      onDelete: "CASCADE",
    }))

    await queryRunner.createIndex("sites", new TableIndex({
      columnNames: ["villeId"]
    }))
    await queryRunner.createForeignKey("sites", new TableForeignKey({
      columnNames: ["villeId"],
      referencedColumnNames: ["id"],
      referencedTableName: "villes",
      onDelete: "CASCADE",
    }))

    await queryRunner.createIndex("sites", new TableIndex({
      columnNames: ["clientId"]
    }))
    await queryRunner.createForeignKey("sites", new TableForeignKey({
      columnNames: ["clientId"],
      referencedColumnNames: ["id"],
      referencedTableName: "clients",
      onDelete: "CASCADE",
    }))

    await queryRunner.createTable(new Table({
      name: "interventionTypes",
      columns: [
        {
          name: "id",
          type: "int",
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: "nom",
          type: "varchar",
          isNullable: false,
          length: "150",
        },
        {
          name: 'visible',
          type: 'TINYINT',
          default: true,
          isNullable: false,
        },
        {
          name: 'createdAt',
          type: 'timestamp',
          default: 'now()'
        },
        {
          name: 'updatedAt',
          type: 'timestamp',
          default: 'now()'
        }
      ]
    }), true)


    await queryRunner.manager.query(`INSERT INTO interventionTypes (id, nom, visible)
                                     VALUES (1, 'Maintenance - Groupe de surpression', false),
                                            (2, 'ENTRETIEN et MAINTENANCE des OUVRAGES de TRAITEMENT des EAUX USEES', false),
                                            (3, 'Fiche de Travaux', true)`);

    await queryRunner.createTable(new Table({
      name: "interventionSections",
      columns: [
        {
          name: "id",
          type: "int",
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: "interventionTypeId",
          type: "int",
          isNullable: true,
        },
        {
          name: "position",
          type: "int",
          isNullable: false,
        },
        {
          name: "label",
          type: "varchar",
          isNullable: false,
          length: "200",
        },
        {
          name: 'createdAt',
          type: 'timestamp',
          default: 'now()'
        },
        {
          name: 'updatedAt',
          type: 'timestamp',
          default: 'now()'
        }
      ]
    }), true)

    await queryRunner.createIndex("interventionSections", new TableIndex({
      columnNames: ["interventionTypeId"]
    }))
    await queryRunner.createForeignKey("interventionSections", new TableForeignKey({
      columnNames: ["interventionTypeId"],
      referencedColumnNames: ["id"],
      referencedTableName: "interventionTypes",
      onDelete: "CASCADE",
    }))
    await queryRunner.createIndex("interventionSections", new TableIndex({
      columnNames: ["interventionTypeId", "position"],
      isUnique: true
    }))

    await queryRunner.createTable(new Table({
      name: "interventionBlocks",
      columns: [
        {
          name: "id",
          type: "int",
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: "sectionId",
          type: "int",
          isNullable: true,
        },
        {
          name: "position",
          type: "int",
          isNullable: false,
        },
        {
          name: "label",
          type: "varchar",
          isNullable: false,
          length: "200",
        },
        {
          name: 'createdAt',
          type: 'timestamp',
          default: 'now()'
        },
        {
          name: 'updatedAt',
          type: 'timestamp',
          default: 'now()'
        }
      ]
    }), true)

    await queryRunner.createIndex("interventionBlocks", new TableIndex({
      columnNames: ["sectionId"]
    }))
    await queryRunner.createForeignKey("interventionBlocks", new TableForeignKey({
      columnNames: ["sectionId"],
      referencedColumnNames: ["id"],
      referencedTableName: "interventionSections",
      onDelete: "CASCADE",
    }))
    await queryRunner.createIndex("interventionBlocks", new TableIndex({
      columnNames: ["sectionId", "position"],
      isUnique: true
    }))

    await queryRunner.createTable(new Table({
      name: "interventionQuestions",
      columns: [
        {
          name: "id",
          type: "int",
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: "blockId",
          type: "int",
          isNullable: false,
        },
        {
          name: "position",
          type: "int",
          isNullable: false,
        },
        {
          name: "key",
          type: "varchar",
          isNullable: false,
          length: "150",
        },
        {
          name: "label",
          type: "varchar",
          isNullable: false,
          length: "200",
        },
        {
          name: "type",
          type: "varchar",
          isNullable: false,
          length: "10",
        },
        {
          name: "unite",
          type: "varchar",
          isNullable: false,
          length: "50",
        },
        {
          name: 'createdAt',
          type: 'timestamp',
          default: 'now()'
        },
        {
          name: 'updatedAt',
          type: 'timestamp',
          default: 'now()'
        }
      ]
    }), true)

    await queryRunner.createIndex("interventionQuestions", new TableIndex({
      columnNames: ["blockId"]
    }))
    await queryRunner.createForeignKey("interventionQuestions", new TableForeignKey({
      columnNames: ["blockId"],
      referencedColumnNames: ["id"],
      referencedTableName: "interventionBlocks",
      onDelete: "CASCADE",
    }))
    await queryRunner.createIndex("interventionQuestions", new TableIndex({
      columnNames: ["key"]
    }))
    await queryRunner.createIndex("interventionQuestions", new TableIndex({
      columnNames: ["blockId", "position"],
      isUnique: true
    }))

    await queryRunner.createTable(new Table({
      name: "interventions",
      columns: [
        {
          name: "id",
          type: "int",
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: "interventionTypeId",
          type: "int",
          isNullable: false,
        },
        {
          name: "siteId",
          type: "int",
          isNullable: false,
        },
        {
          name: "utilisateurId",
          type: "int",
          isNullable: false,
        },
        {
          name: "passedAt",
          type: "timestamp",
          default: null,
          isNullable: true
        },
        {
          name: "leavingTimeAt",
          type: "timestamp",
          default: null,
          isNullable: true
        },
        {
          name: "status",
          type: "int",
          default: 0,
          isNullable: false,
        },
        {
          name: 'signature',
          type: 'longtext',
          isNullable: true,
        },
        {
          name: 'signatureTech',
          type: 'longtext',
          isNullable: true,
        },
        {
          name: 'createdAt',
          type: 'timestamp',
          default: 'now()'
        },
        {
          name: 'updatedAt',
          type: 'timestamp',
          default: 'now()'
        }
      ]
    }), true)

    await queryRunner.createIndex("interventions", new TableIndex({
      columnNames: ["interventionTypeId"]
    }))
    await queryRunner.createForeignKey("interventions", new TableForeignKey({
      columnNames: ["interventionTypeId"],
      referencedColumnNames: ["id"],
      referencedTableName: "interventionTypes",
      onDelete: "CASCADE",
    }))

    await queryRunner.createIndex("interventions", new TableIndex({
      columnNames: ["siteId"]
    }))
    await queryRunner.createForeignKey("interventions", new TableForeignKey({
      columnNames: ["siteId"],
      referencedColumnNames: ["id"],
      referencedTableName: "sites",
      onDelete: "CASCADE",
    }))

    await queryRunner.createIndex("interventions", new TableIndex({
      columnNames: ["utilisateurId"]
    }))
    await queryRunner.createForeignKey("interventions", new TableForeignKey({
      columnNames: ["utilisateurId"],
      referencedColumnNames: ["id"],
      referencedTableName: "utilisateurs",
      onDelete: "CASCADE",
    }))

    await queryRunner.createTable(new Table({
      name: "reportEntries",
      columns: [
        {
          name: "id",
          type: "int",
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: "interventionId",
          type: "int",
          isNullable: false,
        },
        {
          name: "key",
          type: "varchar",
          length: "150",
          default: null,
          isNullable: false,
        },
        {
          name: "value",
          type: "varchar",
          length: "500",
          default: null,
          isNullable: false,
        },
        {
          name: 'createdAt',
          type: 'timestamp',
          default: 'now()',
          isNullable: false,
        },
        {
          name: 'updatedAt',
          type: 'timestamp',
          default: 'now()',
          isNullable: false,
        }
      ]
    }), true)

    await queryRunner.createIndex("reportEntries", new TableIndex({
      columnNames: ["interventionId"]
    }))
    await queryRunner.createForeignKey("reportEntries", new TableForeignKey({
      columnNames: ["interventionId"],
      referencedColumnNames: ["id"],
      referencedTableName: "interventions",
      onDelete: "CASCADE",
    }))

    await queryRunner.createIndex("reportEntries", new TableIndex({
      columnNames: ["key"]
    }))
    await queryRunner.createForeignKey("reportEntries", new TableForeignKey({
      columnNames: ["key"],
      referencedColumnNames: ["key"],
      referencedTableName: "interventionQuestions",
      onDelete: "CASCADE",
    }))

    await queryRunner.createIndex("reportEntries", new TableIndex({
      columnNames: ["interventionId", "key"],
      isUnique: true,
    }))

    await queryRunner.createTable(new Table({
      name: "files",
      columns: [
        {
          name: "id",
          type: "varchar",
          length: "36",
          isPrimary: true,
          isGenerated: false,
        },
        {
          name: "interventionId",
          type: "int",
          isNullable: false,
        },
        {
          name: 'createdAt',
          type: 'timestamp',
          default: 'now()'
        },
        {
          name: 'updatedAt',
          type: 'timestamp',
          default: 'now()'
        }
      ]
    }), true)
    await queryRunner.createIndex("files", new TableIndex({
      columnNames: ["interventionId"]
    }))
    await queryRunner.createForeignKey("files", new TableForeignKey({
      columnNames: ["interventionId"],
      referencedColumnNames: ["id"],
      referencedTableName: "interventions",
      onDelete: "CASCADE",
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.query("DROP TABLE reportEntries;");
    await queryRunner.manager.query("DROP TABLE interventions;");
    await queryRunner.manager.query("DROP TABLE interventionQuestions;");
    await queryRunner.manager.query("DROP TABLE interventionBlocks;");
    await queryRunner.manager.query("DROP TABLE interventionSections;");
    await queryRunner.manager.query("DROP TABLE interventionTypes;");
    await queryRunner.manager.query("DROP TABLE sites;");
    await queryRunner.manager.query("DROP TABLE clients;");
    await queryRunner.manager.query("DROP TABLE utilisateurs;");
    await queryRunner.manager.query("DROP TABLE villes;");
    await queryRunner.manager.query("DROP TABLE departements;");
    await queryRunner.manager.query("DROP TABLE migrations;");
  }

}
