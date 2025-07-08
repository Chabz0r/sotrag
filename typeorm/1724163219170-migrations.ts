import {MigrationInterface, QueryRunner} from "typeorm";

export class Migrations1724163219170 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {

    const datas = [
      [
        {
          label: 'Type d\'ouvrage',
          blocks: [
            {
              label: '',
              questions: [
                {name: 'surpresseur_eau_potable', label: 'SURPRESSEUR EAU POTABLE', type: 'text', unite: ''},
                {name: 'pompe_de_forage', label: 'POMPE DE FORAGE', type: 'text', unite: ''},
                {name: 'autres', label: 'AUTRES', type: 'text', unite: ''},
              ]
            }
          ]
        },
        {
          label: 'Aspect general',
          blocks: [
            {
              label: '',
              questions: [
                {name: 'debroussaillage', label: 'DEBROUSSAILLAGE', type: 'yesno', unite: ''},
                {
                  name: 'traitement_anti_corrosion',
                  label: 'TRAITEMENT ANTI-CORROSION',
                  type: 'yesno',
                  unite: ''
                },
                {name: 'verif_fermeture', label: 'VERIF. FERMETURE', type: 'yesno', unite: ''},
                {name: 'nettoyage', label: 'NETTOYAGE', type: 'yesno', unite: ''},
              ]
            }
          ]
        },
        {
          label: 'Armoire de commande',
          blocks: [
            {
              label: '',
              questions: [
                {
                  name: 'mensuel_verif_telegestion',
                  label: 'MENSUEL VERIF. TELEGESTION',
                  type: 'yesno',
                  unite: ''
                },
                {
                  name: 'mensuel_verif_contact_sur_appareil',
                  label: 'MENSUEL VERIF. CONTACT SUR APPAREIL',
                  type: 'yesno',
                  unite: ''
                },
                {
                  name: 'mensuel_verif_signalisation',
                  label: 'MENSUEL VERIF. FERMETURE',
                  type: 'yesno',
                  unite: ''
                },
                {
                  name: 'mensuel_verif_protection_depart',
                  label: 'MENSUEL VERIF. PROTECTION DÉPART',
                  type: 'yesno',
                  unite: ''
                },
              ],
            },
            {
              label: '',
              questions: [
                {
                  name: 'semestriel_resserage_connexions',
                  label: 'SEMESTRIEL RESSERAGE CONNEXIONS',
                  type: 'yesno',
                  unite: ''
                },
                {
                  name: 'semestriel_verif_isolement_cables',
                  label: 'SEMESTRIEL VERIF. ISOLEMENT CABLES',
                  type: 'yesno',
                  unite: ''
                },
                {
                  name: 'semestriel_verif_etoupe',
                  label: 'SEMESTRIEL VERIF. ÉTOUPE',
                  type: 'yesno',
                  unite: ''
                },
              ],
            },
            {
              label: '',
              questions: [
                {name: 'annuel_verif_general', label: 'ANNUEL VERIF. GÉNÉRALE', type: 'yesno', unite: ''},
              ],
            },
          ]
        },
        {
          label: 'Partie pompage',
          blocks: [
            {
              label: '',
              questions: [
                {name: 'seuil_arret', label: 'SEUIL D\'ARRET', type: 'number', unite: 'Bars'},
                {name: 'seuil_demarrage', label: 'SEUIL DE DEMARRAGE', type: 'number', unite: 'Bars'},
                {
                  name: 'consigne_pression_de_service',
                  label: 'CONSIGNE PRESSION DE SERVICE',
                  type: 'number',
                  unite: 'Bars'
                },
              ],
            },
            {
              label: '',
              questions: [
                {
                  name: 'pompe_1_compteur_horaire',
                  label: 'POMPE 1 COMPTEUR HORAIRE',
                  type: 'number',
                  unite: 'h'
                },
                {
                  name: 'pompe_1_amperage_si_precostat',
                  label: 'POMPE 1 AMPERAGE SI PRECOSTAT',
                  type: 'text',
                  unite: ''
                },
                {
                  name: 'pompe_2_compteur_horaire',
                  label: 'POMPE 2 COMPTEUR HORAIRE',
                  type: 'number',
                  unite: 'h'
                },
                {
                  name: 'pompe_2_amperage_si_precostat',
                  label: 'POMPE 2 AMPERAGE SI PRECOSTAT',
                  type: 'text',
                  unite: ''
                },
                {
                  name: 'pompe_3_compteur_horaire',
                  label: 'POMPE 3 COMPTEUR HORAIRE',
                  type: 'number',
                  unite: 'h'
                },
                {
                  name: 'pompe_3_amperage_si_precostat',
                  label: 'POMPE 3 AMPERAGE SI PRECOSTAT',
                  type: 'text',
                  unite: ''
                },
              ],
            },
            {
              label: '',
              questions: [
                {name: 'calpet_anti_retour_ppe1', label: 'CALPET ANTI-RETOUR PPE1', type: 'text', unite: ''},
                {name: 'calpet_anti_retour_ppe2', label: 'CALPET ANTI-RETOUR PPE2', type: 'text', unite: ''},
                {name: 'calpet_anti_retour_ppe3', label: 'CALPET ANTI-RETOUR PPE3', type: 'text', unite: ''},
              ],
            },
            {
              label: '',
              questions: [
                {name: 'sonde_de_mesure_debit', label: 'Sonde de mesure de débit', type: 'text', unite: ''},
              ],
            },
          ],
        },
        {
          label: 'Pression',
          blocks: [
            {
              label: '',
              questions: [
                {name: 'pression_ballon', label: 'Pression ballon', type: 'number', unite: 'Bars'},
              ]
            }
          ]
        },
        {
          label: 'Énergie',
          blocks: [
            {
              label: '',
              questions: [
                {name: 'releve_edf', label: 'Relevé EDF', type: 'number', unite: 'Kw/H'},
                {name: 'releve_eau', label: 'Relevé EAU', type: 'number', unite: 'M³'},
              ]
            }
          ]
        },
        {
          label: 'Observations',
          blocks: [
            {
              label: '',
              questions: [
                {name: 'observations', label: '', type: 'textarea', unite: ''},
              ]
            }
          ]
        },
      ],
      [
        {
          label: 'Type d\'ouvrage',
          blocks: [
            {
              label: '',
              questions: [
                {name: 'step', label: 'STEP', type: 'text', unite: ''},
                {name: 'poste_de_relevage', label: 'POSTE DE RELEVAGE', type: 'text', unite: ''},
                {name: 'autres', label: 'AUTRES', type: 'text', unite: ''},
              ]
            }
          ]
        },
        {
          label: 'Aspect general',
          blocks: [
            {
              label: '',
              questions: [
                {name: 'debroussaillage', label: 'DEBROUSSAILLAGE', type: 'yesno', unite: ''},
                {
                  name: 'traitement_anti_corrosion',
                  label: 'TRAITEMENT ANTI-CORROSION',
                  type: 'yesno',
                  unite: ''
                },
                {name: 'verif_fermeture', label: 'VERIF. FERMETURE', type: 'yesno', unite: ''},
                {name: 'nettoyage', label: 'NETTOYAGE', type: 'yesno', unite: ''},
              ]
            }
          ]
        },
        {
          label: 'Armoire de commande',
          blocks: [
            {
              label: '',
              questions: [
                {
                  name: 'mensuel_verif_telegestion',
                  label: 'MENSUEL VERIF. TELEGESTION',
                  type: 'yesno',
                  unite: ''
                },
                {
                  name: 'mensuel_verif_contact_sur_appareil',
                  label: 'MENSUEL VERIF. CONTACT SUR APPAREIL',
                  type: 'yesno',
                  unite: ''
                },
                {
                  name: 'mensuel_verif_signalisation',
                  label: 'MENSUEL VERIF. FERMETURE',
                  type: 'yesno',
                  unite: ''
                },
                {
                  name: 'mensuel_verif_protection_depart',
                  label: 'MENSUEL VERIF. PROTECTION DÉPART',
                  type: 'yesno',
                  unite: ''
                },
              ],
            },
            {
              label: '',
              questions: [
                {
                  name: 'semestriel_resserage_connexions',
                  label: 'SEMESTRIEL RESSERAGE CONNEXIONS',
                  type: 'yesno',
                  unite: ''
                },
                {
                  name: 'semestriel_verif_isolement_cables',
                  label: 'SEMESTRIEL VERIF. ISOLEMENT CABLES',
                  type: 'yesno',
                  unite: ''
                },
                {
                  name: 'semestriel_verif_etoupe',
                  label: 'SEMESTRIEL VERIF. ÉTOUPE',
                  type: 'yesno',
                  unite: ''
                },
              ],
            },
            {
              label: '',
              questions: [
                {name: 'annuel_verif_general', label: 'ANNUEL VERIF. GÉNÉRALE', type: 'yesno', unite: ''},
              ],
            },
          ]
        },
        {
          label: 'PRÉ-TRAITEMENT',
          blocks: [
            {
              label: '',
              questions: [
                {name: 'poste_de_relevage_pre_traitement', label: 'POSTE DE RELEVAGE', type: 'text', unite: ''},
                {name: 'panier_degrilleur', label: 'Panier Dégrilleur', type: 'text', unite: ''},
                {name: 'poires_de_niveau_bas', label: 'Poires de niveau bas', type: 'text', unite: ''},
                {name: 'poires_de_niveau_haut', label: 'Poires de niveau  Haut', type: 'text', unite: ''},
                {name: 'poires_de_niveau_tres_haut', label: 'Poires de niveau Très Haut', type: 'text', unite: ''},
                {name: 'poires_de_niveau__alarme', label: 'Poires de niveau Alarme', type: 'text', unite: ''},
                {name: 'sonde_de_niveau', label: 'Sonde de niveau', type: 'text', unite: ''},
              ],
            },
            {
              label: '',
              questions: [
                {name: 'pompe_1', label: 'Pompe n°1', type: 'text', unite: ''},
                {name: 'pompe_1_compteur_horaire', label: 'Pompe n°1 - Compteur horaire', type: 'number', unite: 'h'},
              ],
            },
            {
              label: '',
              questions: [
                {name: 'pompe_2', label: 'Pompe n°2', type: 'text', unite: ''},
                {name: 'pompe_2_compteur_horaire', label: 'Pompe n°1 - Compteur horaire', type: 'number', unite: 'h'},
              ],
            },
            {
              label: '',
              questions: [
                {name: 'pompe_3', label: 'Pompe n°3', type: 'text', unite: ''},
                {name: 'pompe_3_compteur_horaire', label: 'Pompe n°1 - Compteur horaire', type: 'number', unite: 'h'},
              ],
            },
            {
              label: '',
              questions: [
                {name: 'controle_etancheite_gc', label: 'Contrôle Etanchéité GC', type: 'text', unite: ''},
                {name: 'dessableur', label: 'DESSABLEUR', type: 'text', unite: ''},
                {name: 'dessableur_controle_etancheite_gc', label: 'Contrôle Etanchéité GC', type: 'text', unite: ''},
                {name: 'degraisseur', label: 'DÉGRAISSEUR', type: 'text', unite: ''},
                {name: 'degraisseur_pompe', label: 'pompe', type: 'text', unite: ''},
                {name: 'degraisseur_bache', label: 'Bâche', type: 'text', unite: ''},
                {name: 'degraisseur_controle_etancheite_gc', label: 'Contrôle Etanchéité GC', type: 'text', unite: ''},
                {name: 'niveau_de_boue', label: 'Niveau de boue', type: 'text', unite: ''},
              ],
            },
          ],
        },
        {
          label: 'ENTRÉE OUVRAGE',
          blocks: [
            {
              label: '',
              questions: [
                {name: 'canal_debimetrique', label: 'Canal Débimétrique', type: 'text', unite: ''},
                {name: 'debit_entrant', label: 'Débit entrant', type: 'number', unite: 'M³'},
                {name: 'sonde_de_mesure_debit', label: 'Sonde de mesure débit', type: 'text', unite: ''},
              ]
            }
          ]
        },
        {
          label: 'AERATION',
          blocks: [
            {
              label: '',
              questions: [
                {name: 'aeration_automatisme', label: 'Automatisme (Horloges, basculements)', type: 'text', unite: ''},
                {name: `aeration_aerateur_1`, label: 'Aérateur N°1', type: 'text', unite: ''},
                {name: `aeration_aerateur_1_motoreducteur`, label: 'Motoréducteur', type: 'text', unite: ''},
                {name: `aeration_aerateur_1_support_flottant`, label: 'Support flottant', type: 'text', unite: ''},
                {name: `aeration_aerateur_2`, label: 'Aérateur N°2', type: 'text', unite: ''},
                {name: `aeration_aerateur_2_motoreducteur`, label: 'Motoréducteur', type: 'text', unite: ''},
                {name: `aeration_aerateur_2_turbine`, label: 'Roue', type: 'text', unite: ''},
                {name: `aeration_aerateur_2_support_flottant`, label: 'Support flottant', type: 'text', unite: ''},
                {name: `aeration_aerateur_3`, label: 'Aérateur N°3', type: 'text', unite: ''},
                {name: `aeration_aerateur_3_motoreducteur`, label: 'Motoréducteur', type: 'text', unite: ''},
                {name: `aeration_aerateur_3_turbine`, label: 'Turbine', type: 'text', unite: ''},
                {name: `aeration_aerateur_3_etancheite_cg`, label: 'Contrôle Etanchéité GC', type: 'text', unite: ''},
                {name: `aeration_degazeur`, label: 'DEGAZEUR', type: 'text', unite: ''},
                {name: `aeration_degazeur_etancheite_cg`, label: 'Contrôle Etanchéité GC', type: 'text', unite: ''},
              ]
            },
          ]
        },
        {
          label: 'CLARIFICATION',
          blocks: [
            {
              label: '',
              questions: [
                {name: 'pont_racleur', label: 'PONT RACLEUR', type: 'text', unite: ''},
                {name: `pont_racleur_motoreducteur`, label: 'Motoréducteur', type: 'text', unite: ''},
                {name: `pont_racleur_roue`, label: 'Roue', type: 'text', unite: ''},
                {name: `decanteur_lamellaire`, label: 'DECANTEUR LAMELLAIRE', type: 'text', unite: ''},
                {name: `recuperateur_de_flottant`, label: 'RECUPERATEUR DE FLOTTANT', type: 'text', unite: ''},
                {name: `goulotte`, label: 'GOULOTTE', type: 'text', unite: ''},
              ]
            },
          ]
        },
        {
          label: 'RECIRCULATION',
          blocks: [
            {
              label: '',
              questions: [
                {
                  name: 'recirculation_automatisme',
                  label: 'Automatisme (Horloges, basculements)',
                  type: 'text',
                  unite: ''
                },
                {name: `recirculation_pompe_1`, label: 'Pompe n°1', type: 'text', unite: ''},
                {name: `recirculation_pompe_2`, label: 'Pompe n°2', type: 'text', unite: ''},
                {name: `recirculation_pompe_3`, label: 'Pompe n°3', type: 'text', unite: ''},
                {name: `recirculation_bache`, label: 'Bâche', type: 'text', unite: ''},
              ]
            },
          ]
        },
        {
          label: 'SORTIE OUVRAGE',
          blocks: [
            {
              label: '',
              questions: [
                {
                  name: 'sortie_ouvrage_canal_debitmétrique',
                  label: 'Automatisme (Horloges, basculements)',
                  type: 'text',
                  unite: ''
                },
                {name: `sortie_ouvrage_debit_sortant`, label: 'Débit sortant', type: 'number', unite: 'M³'},
              ]
            },
            {
              label: '',
              questions: [
                {name: 'controle_rendement_epurateur', label: 'Contrôle rendement épuratoire', type: 'text', unite: ''},
                {name: `controle_rendement_claire`, label: 'EAU Claire', type: 'yesno', unite: ''},
                {name: `controle_rendement_trouble`, label: 'EAU Trouble', type: 'yesno', unite: ''},
                {name: `controle_rendement_chargee`, label: 'EAU Chargée', type: 'yesno', unite: ''},
              ]
            },
          ]
        },
        {
          label: 'Énergie',
          blocks: [
            {
              label: '',
              questions: [
                {name: 'releve_edf', label: 'Relevé EDF', type: 'number', unite: 'Kw/H'},
                {name: 'releve_eau', label: 'Relevé EAU', type: 'number', unite: 'M³'},
              ]
            }
          ]
        },
        {
          label: 'Ballon',
          blocks: [
            {
              label: '',
              questions: [
                {name: 'ballon', label: 'ballon', type: 'number', unite: 'bar'},
              ]
            }
          ]
        },
        {
          label: 'Boues',
          blocks: [
            {
              label: 'Aspect',
              questions: [
                {name: 'aspect_aeration', label: 'Aération', type: 'text', unite: ''},
                {name: 'aspect_aeration_taux', label: 'Taux', type: 'number', unite: '%'},
                {name: 'aspect_clarificateur', label: 'Clarificateur', type: 'text', unite: ''},
                {name: 'aspect_clarificateur_taux', label: 'Taux', type: 'number', unite: '%'},
              ]
            },
            {
              label: 'Évacuation',
              questions: [
                {name: 'evacuation_poste_de_relevage', label: 'Poste de relevage', type: 'yesno', unite: ''},
                {name: 'evacuation_dessableur', label: 'Dessableur', type: 'yesno', unite: ''},
                {name: 'evacuation_degraisseur', label: 'Dégraisseur', type: 'yesno', unite: ''},
                {name: 'evacuation_clarificateur_surface', label: 'Clarificateur Surface', type: 'yesno', unite: ''},
                {
                  name: 'evacuation_clarificateur_vers_silo',
                  label: 'Clarificateur Vers silo',
                  type: 'yesno',
                  unite: ''
                },
                {name: 'evacuation_clarificateur_pompage', label: 'Clarificateur Pompage', type: 'yesno', unite: ''},
                {name: 'evacuation_silo_a_boues_surface', label: 'Silo à boues Surface', type: 'yesno', unite: ''},
                {name: 'evacuation_silo_a_boues_pompage', label: 'Silo à boues Pompage', type: 'yesno', unite: ''},
              ]
            }
          ]
        },
        {
          label: 'Observations',
          blocks: [
            {
              label: '',
              questions: [
                {name: 'observations', label: '', type: 'textarea', unite: ''},
              ]
            }
          ]
        },
      ],
      [
        {
          label: 'Période',
          blocks: [
            {
              label: '',
              questions: [
                {name: 'mois_de_debut', label: 'Mois de début', type: 'text', unite: ''},
                {name: 'mois_de_fin', label: 'Mois de fin', type: 'text', unite: ''},
                {name: 'km', label: 'Kilométrage', type: 'text', unite: ''},
                {name: 'duree_totale', label: 'Durée Totale', type: 'text', unite: ''},
              ]
            }
          ]
        },
        ...Array.from({length: 6})
          .map((_, index) => ({
            label: `Jour ${index + 1}`,
            blocks: [
              {
                label: '',
                questions: [
                  {name: `jour_${index + 1}_date`, label: 'Date', type: 'date', unite: ''},
                  {name: `jour_${index + 1}_preparation_materiel`, label: 'Prépa. Matériel', type: 'text', unite: ''},
                  {name: `jour_${index + 1}_temps_achat`, label: 'Temps achat', type: 'text', unite: ''},
                  {name: `jour_${index + 1}_temps_trajet`, label: 'Temps trajet', type: 'text', unite: ''},
                  {name: `jour_${index + 1}_arrive_sur_site`, label: 'Arrivée sur site', type: 'time', unite: ''},
                  {name: `jour_${index + 1}_depart_du_site`, label: 'Départ du site', type: 'time', unite: ''},
                  {name: `jour_${index + 1}_interv`, label: 'Interv', type: 'text', unite: ''},
                  {name: `jour_${index + 1}_travaux`, label: 'Travaux réalisés sur site', type: 'textarea', unite: ''},
                ]
              }
            ]
          })),
        {
          label: 'Observations',
          blocks: [
            {
              label: '',
              questions: [
                {name: 'observations', label: 'Observations', type: 'textarea', unite: ''},
              ]
            }
          ]
        },
      ]
    ];

    let sectionId = 1;
    let blockId = 1;
    let questionId = 1;
    for (let i in datas) {
      const entry = datas[i];
      const index = parseInt(i) + 1;

      for (let j in entry) {
        const section = entry[j];
        const sectionIndex = parseInt(j) + 1;
        await queryRunner.manager.query(`INSERT INTO interventionSections (id, interventionTypeId, position, label)
                                         VALUES (${sectionId}, ${index}, ${sectionIndex}, "${section.label ?? ''}");`);

        for (let k in section.blocks) {
          const block = section.blocks[k];
          const blockIndex = parseInt(k) + 1;
          await queryRunner.manager.query(`INSERT INTO interventionBlocks (id, sectionId, position, label)
                                           VALUES (${blockId}, ${sectionId}, ${blockIndex}, "${block.label ?? ''}");`);

          for (let f in block.questions) {
            const question = block.questions[f];
            const questionIndex = parseInt(f) + 1;
            await queryRunner.manager.query(`INSERT INTO interventionQuestions (id, blockId, position, \`key\`, label, \`type\`, unite)
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

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}
