import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1737464854669 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.query(`INSERT INTO interventionTypes (id, nom)
                                     VALUES (4, 'MAINTENANCE PREVENTIVE - POSTE DE RELEVAGE'),
                                            (5, 'MAINTENANCE PREVENTIVE - GROUPE SURPRESSEUR'),
                                            (6, 'MAINTENANCE PREVENTIVE - STEP')`);

    const datas = [
      [
        {
          label: 'Electrotechnique',
          blocks: [
            {
              label: '',
              questions: [
                {
                  name: 'electrotechnique_armoire_electrique',
                  label:
                    "Vérification du bon fonctionnement dans l'armoire électrique (disjoncteurs, voyants, sectionneur, transformateur, automatisme)",
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'electrotechnique_equipments_electromécanique',
                  label: 'Vérification du bon fonctionnement des pompes',
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'electrotechnique_option_1_label',
                  label: 'Option 1',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'electrotechnique_option_1_yes',
                  label: 'Option 1',
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'electrotechnique_option_2_label',
                  label: 'Option 2',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'electrotechnique_option_2_yes',
                  label: 'Option 2',
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'electrotechnique_poires_sondes_niveau',
                  label:
                    'Vérification du bon fonctionnement des poires de niveaux / sonde de niveau',
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'electrotechnique_coffrest_electrique_interieur_exterieur',
                  label:
                    "Vérification de l'état des coffrets électrique intérieur et extérieur",
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'electrotechnique_cables_connexion_electrique',
                  label:
                    "Vérification de l'état des câbles de connexions électrique",
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'electrotechnique_commentaires',
                  label: 'Commentaires',
                  type: 'textarea',
                  unite: '',
                },
                {
                  name: 'electrotechnique_preconisations',
                  label: 'Préconisations',
                  type: 'textarea',
                  unite: '',
                },
              ],
            },
          ],
        },
        {
          label: 'Hydraulique',
          blocks: [
            {
              label: '',
              questions: [
                {
                  name: 'hydraulique_canalisations',
                  label: 'Vérification des canalisations',
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'hydraulique_vannes',
                  label: 'Vérifications des vannes',
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'hydraulique_fonctionnement_clapets_anti_retour',
                  label:
                    'Vérification du bon fonctionnement des clapets anti retour',
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'hydraulique_panier_degrilleur',
                  label: 'Nettoyage du panier dégrilleur',
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'hydraulique_commentaires',
                  label: 'Commentaires',
                  type: 'textarea',
                  unite: '',
                },
                {
                  name: 'hydraulique_preconisations',
                  label: 'Préconisations',
                  type: 'textarea',
                  unite: '',
                },
              ],
            },
          ],
        },
        {
          label: 'GAMME DE MAINTENANCE REALISEES',
          blocks: [
            {
              label: '',
              questions: [
                {
                  name: 'maintenance_realisees_connection_equipment_armoire',
                  label: 'Resserage des connections équipements dans armoire',
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'maintenance_resserrage_voyants_commutateurs',
                  label: 'Resserrage des voyants et commutateurs',
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'maintenance_traitement_anti_corrosion_points_rouille',
                  label: 'Traitement anti-corrosion des points de rouille',
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'maintenance_lubrication_serrures',
                  label: 'Lubrification des serrures',
                  type: 'yesno',
                  unite: '',
                },
              ],
            },
            {
              label: '',
              questions: [
                {
                  name: 'maintenance_realisees_prise_pompe_1_intensite',
                  label: 'Pompe 1 (intensité)',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'maintenance_realisees_prise_pompe_1_compteurs',
                  label: 'Pompe 1 (compteurs)',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'maintenance_realisees_prise_pompe_1_ancien_releve',
                  label: 'Pompe 1 (ancien relevé)',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'maintenance_realisees_prise_pompe_2_intensite',
                  label: 'Pompe 2 (intensité)',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'maintenance_realisees_prise_pompe_2_compteurs',
                  label: 'Pompe 2 (compteurs)',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'maintenance_realisees_prise_pompe_2_ancien_releve',
                  label: 'Pompe 2 (ancien relevé)',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'maintenance_realisees_prise_option_one_intensite',
                  label: 'Option 1 (intensité)',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'maintenance_realisees_prise_option_one_compteurs',
                  label: 'Option 1 (compteurs)',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'maintenance_realisees_prise_option_one_ancien_releve',
                  label: 'Option 1 (ancien relevé)',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'maintenance_realisees_prise_option_deux_intensite',
                  label: 'Option 2 (intensité)',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'maintenance_realisees_prise_option_deux_compteurs',
                  label: 'Option 2 (compteurs)',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'maintenance_realisees_prise_option_deux_ancien_releve',
                  label: 'Option 2 (ancien relevé)',
                  type: 'text',
                  unite: '',
                },
              ],
            },
            {
              label: '',
              questions: [
                {
                  name: 'maintenance_installation_alentours',
                  label:
                    "Vérification de l'état de l'installation et des alentours (corrosion, végétation, affaissement, accès, …)",
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'maintenance_cloture_portail',
                  label: 'Vérification de la clôture et portail',
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'maintenance_commentaires',
                  label: 'Commentaires',
                  type: 'textarea',
                  unite: '',
                },
                {
                  name: 'maintenance_preconisations',
                  label: 'Préconisations',
                  type: 'textarea',
                  unite: '',
                },
              ],
            },
          ],
        },
        {
          label: 'PIECES REMPLACEES',
          blocks: [
            {
              label: 'Pièce N°1',
              questions: [
                {
                  name: 'piece_remplacee_1_nom',
                  label: 'Nom',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'piece_remplacee_1_reference',
                  label: 'Référence',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'piece_remplacee_1_quantite',
                  label: 'Quantité',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'piece_remplacee_1_dimensions',
                  label: 'Dimensions',
                  type: 'text',
                  unite: '',
                },
              ],
            },
            {
              label: 'Pièce N°2',
              questions: [
                {
                  name: 'piece_remplacee_2_nom',
                  label: 'Nom',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'piece_remplacee_2_reference',
                  label: 'Référence',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'piece_remplacee_2_quantite',
                  label: 'Quantité',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'piece_remplacee_2_dimensions',
                  label: 'Dimensions',
                  type: 'text',
                  unite: '',
                },
              ],
            },
          ],
        },
        {
          label: 'PIECES A REMPLACER',
          blocks: [
            {
              label: 'Pièce N°1',
              questions: [
                {
                  name: 'piece_a_remplacee_1_nom',
                  label: 'Nom',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'piece_a_remplacee_1_reference',
                  label: 'Référence',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'piece_a_remplacee_1_quantite',
                  label: 'Quantité',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'piece_a_remplacee_1_dimensions',
                  label: 'Dimensions',
                  type: 'text',
                  unite: '',
                },
              ],
            },
            {
              label: 'Pièce N°2',
              questions: [
                {
                  name: 'piece_a_remplacee_2_nom',
                  label: 'Nom',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'piece_a_remplacee_2_reference',
                  label: 'Référence',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'piece_a_remplacee_2_quantite',
                  label: 'Quantité',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'piece_a_remplacee_2_dimensions',
                  label: 'Dimensions',
                  type: 'text',
                  unite: '',
                },
              ],
            },
          ],
        },
      ],
      [
        {
          label: 'Electrotechnique',
          blocks: [
            {
              label: '',
              questions: [
                {
                  name: 'electrotechnique_armoire_electrique',
                  label:
                    "Vérification du bon fonctionnement dans l'armoire électrique (disjoncteurs, voyants, sectionneur, transformateur, automatisme)",
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'electrotechnique_equipments_electromécanique',
                  label: 'Vérification du bon fonctionnement des pompes',
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'electrotechnique_equipments_sonde_pression',
                  label: 'Vérification de la sonde de pression',
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'electrotechnique_poires_sondes_niveau',
                  label:
                    'Vérification ouverture/fermeture vanne motorisée (si présente)',
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'electrotechnique_coffrest_electrique_interieur_exterieur',
                  label:
                    "Vérification de l'état des coffrets électrique intérieur et extérieur",
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'electrotechnique_cables_connexion_electrique',
                  label:
                    "Vérification de l'état des câbles de connexions électrique",
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'electrotechnique_commentaires',
                  label: 'Commentaires',
                  type: 'textarea',
                  unite: '',
                },
                {
                  name: 'electrotechnique_preconisations',
                  label: 'Préconisations',
                  type: 'textarea',
                  unite: '',
                },
              ],
            },
          ],
        },
        {
          label: 'Hydraulique',
          blocks: [
            {
              label: '',
              questions: [
                {
                  name: 'hydraulique_canalisations',
                  label: 'Vérification des canalisations',
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'hydraulique_vannes',
                  label: 'Vérifications des vannes, manomètres',
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'hydraulique_fonctionnement_tampons_turdibite',
                  label:
                    "Vérification état des baches tampons et turbidité de l'eau dans les baches",
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'hydraulique_fonctionnement_clapets_anti_retour',
                  label:
                    'Vérification du bon fonctionnement des clapets anti retour',
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'hydraulique_pression_eau',
                  label: "Vérification stabilité pression de l'eau",
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'hydraulique_robinet_flotteur',
                  label: 'Vérification fonctionnement robinet flotteur',
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'hydraulique_pression_reservoir_vessie',
                  label: 'Vérification de la pression du reservoir à vessie',
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'hydraulique_commentaires',
                  label: 'Commentaires',
                  type: 'textarea',
                  unite: '',
                },
                {
                  name: 'hydraulique_preconisations',
                  label: 'Préconisations',
                  type: 'textarea',
                  unite: '',
                },
              ],
            },
          ],
        },
        {
          label: 'GAMME DE MAINTENANCE REALISEES',
          blocks: [
            {
              label: '',
              questions: [
                {
                  name: 'maintenance_realisees_connection_equipment_armoire',
                  label: 'Resserage des connections équipements dans armoire',
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'maintenance_resserrage_voyants_commutateurs',
                  label: 'Resserrage des voyants et commutateurs',
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'maintenance_traitement_anti_corrosion_points_rouille',
                  label: 'Traitement anti-corrosion des points de rouille',
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'maintenance_ajustement_ballon',
                  label: 'Ajustement pression du ballon',
                  type: 'yesno',
                  unite: '',
                },
              ],
            },
            {
              label: '',
              questions: [
                {
                  name: 'maintenance_realisees_ballon_surpresseur_1_intensite',
                  label: 'Surpresseur 1 (intensité)',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'maintenance_realisees_ballon_surpresseur_1_compteurs',
                  label: 'Surpresseur 1 (compteurs)',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'maintenance_realisees_ballon_surpresseur_1_ancien_releve',
                  label: 'Surpresseur 1 (ancien relevé)',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'maintenance_realisees_ballon_surpresseur_2_intensite',
                  label: 'Surpresseur 2 (intensité)',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'maintenance_realisees_ballon_surpresseur_2_compteurs',
                  label: 'Surpresseur 2 (compteurs)',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'maintenance_realisees_ballon_surpresseur_2_ancien_releve',
                  label: 'Surpresseur 2 (ancien relevé)',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'maintenance_realisees_ballon_surpresseur_3_intensite',
                  label: 'Surpresseur 3 (intensité)',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'maintenance_realisees_ballon_surpresseur_3_compteurs',
                  label: 'Surpresseur 3 (compteurs)',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'maintenance_realisees_ballon_surpresseur_3_ancien_releve',
                  label: 'Surpresseur 3 (ancien relevé)',
                  type: 'text',
                  unite: '',
                },
              ],
            },
            {
              label: '',
              questions: [
                {
                  name: 'maintenance_installation_locaux',
                  label:
                    "Vérification de l'état général du local (corrosion, accès, éclairage, …)",
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'maintenance_presence_nuisibles',
                  label: 'Vérification présence nuisibles',
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'maintenance_commentaires',
                  label: 'Commentaires',
                  type: 'textarea',
                  unite: '',
                },
                {
                  name: 'maintenance_preconisations',
                  label: 'Préconisations',
                  type: 'textarea',
                  unite: '',
                },
              ],
            },
          ],
        },
        {
          label: 'PIECES REMPLACEES',
          blocks: [
            {
              label: 'Pièce N°1',
              questions: [
                {
                  name: 'piece_remplacee_1_nom',
                  label: 'Nom',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'piece_remplacee_1_reference',
                  label: 'Référence',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'piece_remplacee_1_quantite',
                  label: 'Quantité',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'piece_remplacee_1_dimensions',
                  label: 'Dimensions',
                  type: 'text',
                  unite: '',
                },
              ],
            },
            {
              label: 'Pièce N°2',
              questions: [
                {
                  name: 'piece_remplacee_2_nom',
                  label: 'Nom',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'piece_remplacee_2_reference',
                  label: 'Référence',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'piece_remplacee_2_quantite',
                  label: 'Quantité',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'piece_remplacee_2_dimensions',
                  label: 'Dimensions',
                  type: 'text',
                  unite: '',
                },
              ],
            },
          ],
        },
        {
          label: 'PIECES A REMPLACER',
          blocks: [
            {
              label: 'Pièce N°1',
              questions: [
                {
                  name: 'piece_a_remplacee_1_nom',
                  label: 'Nom',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'piece_a_remplacee_1_reference',
                  label: 'Référence',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'piece_a_remplacee_1_quantite',
                  label: 'Quantité',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'piece_a_remplacee_1_dimensions',
                  label: 'Dimensions',
                  type: 'text',
                  unite: '',
                },
              ],
            },
            {
              label: 'Pièce N°2',
              questions: [
                {
                  name: 'piece_a_remplacee_2_nom',
                  label: 'Nom',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'piece_a_remplacee_2_reference',
                  label: 'Référence',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'piece_a_remplacee_2_quantite',
                  label: 'Quantité',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'piece_a_remplacee_2_dimensions',
                  label: 'Dimensions',
                  type: 'text',
                  unite: '',
                },
              ],
            },
          ],
        },
      ],
      [
        {
          label: 'Electrotechnique',
          blocks: [
            {
              label: '',
              questions: [
                {
                  name: 'electrotechnique_armoire_electrique',
                  label:
                    "Vérification du bon fonctionnement dans l'armoire électrique (disjoncteurs, voyants, sectionneur, transformateur, automatisme)",
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'electrotechnique_equipments_electromécanique',
                  label:
                    'Vérification du bon fonctionnement des équipements électromécanique (relevage, aération, diffusion, recirculation)',
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'electrotechnique_organes_pilotage',
                  label:
                    'Vérification du bon fonctionnement des organes de pilotage',
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'electrotechnique_coffrest_electrique_interieur_exterieur',
                  label:
                    "Vérification de l'état des coffrets électrique intérieur et extérieur",
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'electrotechnique_cables_connexion_electrique',
                  label:
                    "Vérification de l'état des câbles de connexions électrique",
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'electrotechnique_commentaires',
                  label: 'Commentaires',
                  type: 'textarea',
                  unite: '',
                },
                {
                  name: 'electrotechnique_preconisations',
                  label: 'Préconisations',
                  type: 'textarea',
                  unite: '',
                },
              ],
            },
          ],
        },
        {
          label: 'Hydraulique',
          blocks: [
            {
              label: '',
              questions: [
                {
                  name: 'hydraulique_canalisations',
                  label: 'Vérification des canalisations',
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'hydraulique_vannes',
                  label: 'Vérifications des vannes',
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'hydraulique_taux_charge_boue',
                  label: 'Vérifications taux de charge / boue dans décanteur',
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'hydraulique_fonctionnement_dispositif_bullage',
                  label:
                    'Vérification du bon fonctionnement du dispositif de bullage / aération',
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'hydraulique_fonctionnement_dispositif_recirculation',
                  label:
                    'Vérification du bon fonctionnement du dispositif de recirculation',
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'hydraulique_visuel_olfactif_eau_sortie_station',
                  label:
                    "Contrôle visuel et olfactif de l'eau en sortie de station",
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'hydraulique_commentaires',
                  label: 'Commentaires',
                  type: 'textarea',
                  unite: '',
                },
                {
                  name: 'hydraulique_preconisations',
                  label: 'Préconisations',
                  type: 'textarea',
                  unite: '',
                },
              ],
            },
          ],
        },
        {
          label: 'GAMME DE MAINTENANCE REALISEES',
          blocks: [
            {
              label: '',
              questions: [
                {
                  name: 'maintenance_realisees_connection_equipment_armoire',
                  label: 'Resserage des connections équipements dans armoire',
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'maintenance_resserrage_voyants_commutateurs',
                  label: 'Resserrage des voyants et commutateurs',
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'maintenance_traitement_anti_corrosion_points_rouille',
                  label: 'Traitement anti-corrosion des points de rouille',
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'maintenance_lubrication_serrures',
                  label: 'Lubrification des serrures',
                  type: 'yesno',
                  unite: '',
                },
              ],
            },
            {
              label: '',
              questions: [
                {
                  name: 'maintenance_realisees_prise_pompe_relevage_intensite',
                  label: 'Pompe relevage (intensité)',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'maintenance_realisees_prise_pompe_relevage_compteurs',
                  label: 'Pompe relevage (compteurs)',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'maintenance_realisees_prise_pompe_relevage_ancien_releve',
                  label: 'Pompe relevage (ancien relevé)',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'maintenance_realisees_prise_option_one_intensite',
                  label: 'Option 1 (intensité)',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'maintenance_realisees_prise_option_one_compteurs',
                  label: 'Option 1 (compteurs)',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'maintenance_realisees_prise_option_one_ancien_releve',
                  label: 'Option 1 (ancien relevé)',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'maintenance_realisees_prise_aerateur_intensite',
                  label: 'Aérateur (intensité)',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'maintenance_realisees_prise_aerateur_compteurs',
                  label: 'Aérateur (compteurs)',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'maintenance_realisees_prise_aerateur_ancien_releve',
                  label: 'Aérateur (ancien relevé)',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'maintenance_realisees_prise_option_deux_intensite',
                  label: 'Option 2 (intensité)',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'maintenance_realisees_prise_option_deux_compteurs',
                  label: 'Option 2 (compteurs)',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'maintenance_realisees_prise_option_deux_ancien_releve',
                  label: 'Option 2 (ancien relevé)',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'maintenance_realisees_prise_pompe_recirculation_intensite',
                  label: 'Pompte de recirculation (intensité)',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'maintenance_realisees_prise_pompe_recirculation_compteurs',
                  label: 'Pompte de recirculation (compteurs)',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'maintenance_realisees_prise_pompe_recirculation_ancien_releve',
                  label: 'Pompte de recirculation (ancien relevé)',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'maintenance_realisees_prise_option_trois_intensite',
                  label: 'Option 3 (intensité)',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'maintenance_realisees_prise_option_trois_compteurs',
                  label: 'Option 3 (compteurs)',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'maintenance_realisees_prise_option_trois_ancien_releve',
                  label: 'Option 3 (ancien relevé)',
                  type: 'text',
                  unite: '',
                },
              ],
            },
            {
              label: '',
              questions: [
                {
                  name: 'maintenance_installation_alentours',
                  label:
                    "Vérification de l'état de l'installation et des alentours (corrosion, végétation, affaissement, accès, …)",
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'maintenance_cloture_portail',
                  label: 'Vérification de la clôture et portail',
                  type: 'yesno',
                  unite: '',
                },
                {
                  name: 'maintenance_commentaires',
                  label: 'Commentaires',
                  type: 'textarea',
                  unite: '',
                },
                {
                  name: 'maintenance_preconisations',
                  label: 'Préconisations',
                  type: 'textarea',
                  unite: '',
                },
              ],
            },
          ],
        },
        {
          label: 'PIECES REMPLACEES',
          blocks: [
            {
              label: 'Pièce N°1',
              questions: [
                {
                  name: 'piece_remplacee_1_nom',
                  label: 'Nom',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'piece_remplacee_1_reference',
                  label: 'Référence',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'piece_remplacee_1_quantite',
                  label: 'Quantité',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'piece_remplacee_1_dimensions',
                  label: 'Dimensions',
                  type: 'text',
                  unite: '',
                },
              ],
            },
            {
              label: 'Pièce N°2',
              questions: [
                {
                  name: 'piece_remplacee_2_nom',
                  label: 'Nom',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'piece_remplacee_2_reference',
                  label: 'Référence',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'piece_remplacee_2_quantite',
                  label: 'Quantité',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'piece_remplacee_2_dimensions',
                  label: 'Dimensions',
                  type: 'text',
                  unite: '',
                },
              ],
            },
          ],
        },
        {
          label: 'PIECES A REMPLACER',
          blocks: [
            {
              label: 'Pièce N°1',
              questions: [
                {
                  name: 'piece_a_remplacee_1_nom',
                  label: 'Nom',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'piece_a_remplacee_1_reference',
                  label: 'Référence',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'piece_a_remplacee_1_quantite',
                  label: 'Quantité',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'piece_a_remplacee_1_dimensions',
                  label: 'Dimensions',
                  type: 'text',
                  unite: '',
                },
              ],
            },
            {
              label: 'Pièce N°2',
              questions: [
                {
                  name: 'piece_a_remplacee_2_nom',
                  label: 'Nom',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'piece_a_remplacee_2_reference',
                  label: 'Référence',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'piece_a_remplacee_2_quantite',
                  label: 'Quantité',
                  type: 'text',
                  unite: '',
                },
                {
                  name: 'piece_a_remplacee_2_dimensions',
                  label: 'Dimensions',
                  type: 'text',
                  unite: '',
                },
              ],
            },
          ],
        },
      ],
    ];

    let sectionId = 29;
    let blockId = 42;
    let questionId = 172;
    for (const i in datas) {
      const entry = datas[i];
      const index = parseInt(i) + 1 + 3;

      for (const j in entry) {
        const section = entry[j];
        const sectionIndex = parseInt(j) + 1;
        await queryRunner.manager
          .query(`INSERT INTO interventionSections (id, interventionTypeId, position, label)
                  VALUES (${sectionId}, ${index}, ${sectionIndex}, "${section.label ?? ''}");`);

        for (const k in section.blocks) {
          const block = section.blocks[k];
          const blockIndex = parseInt(k) + 1;
          await queryRunner.manager
            .query(`INSERT INTO interventionBlocks (id, sectionId, position, label)
                    VALUES (${blockId}, ${sectionId}, ${blockIndex}, "${block.label ?? ''}");`);

          for (const f in block.questions) {
            const question = block.questions[f];
            const questionIndex = parseInt(f) + 1;
            await queryRunner.manager
              .query(`INSERT INTO interventionQuestions (id, blockId, position, \`key\`, label, \`type\`, unite)
                      VALUES (${questionId}, ${blockId}, ${questionIndex}, "${question.name}",
                              "${question.label}", "${question.type}", "${question.unite}");`);
            questionId += 1;
          }

          blockId += 1;
        }

        sectionId += 1;
      }
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
