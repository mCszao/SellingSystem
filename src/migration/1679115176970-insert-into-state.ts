import { MigrationInterface, QueryRunner } from 'typeorm';

export class insertIntoState1679115176970 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        INSERT INTO state (id, name, region, abbreviation)
VALUES
   (1, 'Acre', 'North', 'AC'),
   (2, 'Alagoas', 'Northeast', 'AL'),
   (3, 'Amapá', 'North', 'AP'),
   (4, 'Amazonas', 'North', 'AM'),
   (5, 'Bahia', 'Northeast', 'BA'),
   (6, 'Ceará', 'Northeast', 'CE'),
   (7, 'Distrito Federal', 'Central-West', 'DF'),
   (8, 'Espírito Santo', 'Southeast', 'ES'),
   (9, 'Goiás', 'Central-West', 'GO'),
   (10, 'Maranhão', 'Northeast', 'MA'),
   (11, 'Mato Grosso', 'Central-West', 'MT'),
   (12, 'Mato Grosso do Sul', 'Central-West', 'MS'),
   (13, 'Minas Gerais', 'Southeast', 'MG'),
   (14, 'Pará', 'North', 'PA'),
   (15, 'Paraíba', 'Northeast', 'PB'),
   (16, 'Paraná', 'South', 'PR'),
   (17, 'Pernambuco', 'Northeast', 'PE'),
   (18, 'Piauí', 'Northeast', 'PI'),
   (19, 'Rio de Janeiro', 'Southeast', 'RJ'),
   (20, 'Rio Grande do Norte', 'Northeast', 'RN'),
   (21, 'Rio Grande do Sul', 'South', 'RS'),
   (22, 'Rondônia', 'North', 'RO'),
   (23, 'Roraima', 'North', 'RR'),
   (24, 'Santa Catarina', 'South', 'SC'),
   (25, 'São Paulo', 'Southeast', 'SP'),
   (26, 'Sergipe', 'Northeast', 'SE'),
   (27, 'Tocantins', 'North', 'TO');
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
