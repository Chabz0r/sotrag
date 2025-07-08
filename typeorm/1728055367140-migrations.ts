import {MigrationInterface, QueryRunner} from "typeorm";
import {DepartementEntity} from "../src/villes/entity/departement.entity";
import {Role} from "../src/utilisateurs/entity/utilisateur.entity";
import * as bcrypt from "bcrypt";

export class Migrations1728055367140 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {

    const utilisateurs = [
      {
        role: "Technicien",
        nom: "AMIEMBA",
        prenom: "Oscar",
        tel: "+594694220346",
        mail: "oscar.amiemba@sotrag.eu",
        departmentCode: 973
      },
      {
        role: "Technicien",
        nom: "ANCIVAL",
        prenom: "Stéphane",
        tel: "+596696808988",
        mail: "stephane.ancival@sotrag.eu",
        departmentCode: 972
      },
      {
        role: "Admin",
        nom: "CLAUSIER",
        prenom: "Franck",
        tel: "+590690391312",
        mail: "franck.clausier@sotrag.eu",
        departmentCode: 971
      },
      {
        role: "Admin",
        nom: "DE LAFARGUE",
        prenom: "Bertrand",
        tel: "+596696720102",
        mail: "bertrand.de-lafargue@sotrag.eu",
        departmentCode: 972
      },
      {
        role: "Admin",
        nom: "DE LAFARGUE",
        prenom: "Gilles",
        tel: "+596696970102 ",
        mail: "gilles.de-lafargue@sotrag.eu",
        departmentCode: 972
      },
      {
        role: "Admin",
        nom: "ELOY",
        prenom: "Rémi",
        tel: "+590690830102",
        mail: "remi.eloy@sotrag.eu",
        departmentCode: 971
      },
      {
        role: "Technicien",
        nom: "MAGUIRE",
        prenom: "Bryan",
        tel: "+596696955100",
        mail: "bryan,maguire@sotrag.eu",
        departmentCode: 972
      },
      {
        role: "Admin",
        nom: "MARTIN",
        prenom: "Steven",
        tel: "+596696394774",
        mail: "steven.martin@sotrag.eu",
        departmentCode: 972
      },
      {
        role: "Technicien",
        nom: "MERT",
        prenom: "Maurice",
        tel: "+594694444776",
        mail: "maurice.mert@sotrag.eu",
        departmentCode: 973
      },
      {
        role: "Technicien",
        nom: "PLOCOSTE",
        prenom: "Ruddy",
        tel: "+590690367368",
        mail: "ruddy.plocoste@sotrag.eu",
        departmentCode: 971
      }
    ];

    const password = await bcrypt.hash('123456', 10);

    for (let utilisateur of utilisateurs) {
      const departmentEntity = await queryRunner.manager.findOneBy(
        DepartementEntity,
        {
          code: `${utilisateur.departmentCode}`,
        },
      );

      await queryRunner.manager.save('utilisateurs', {
        password: password,
        sessionToken: null,
        code: utilisateur.mail?.trim(),
        nom: utilisateur.nom?.trim(),
        prenom: utilisateur.prenom?.trim(),
        tel: utilisateur.tel?.trim(),
        mail: utilisateur.mail?.trim(),
        departementId: departmentEntity.id,
        role: utilisateur.role === "Admin" ? Role.Administrateur : Role.Technicien,
      });
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
  }

}
