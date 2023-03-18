import { MigrationInterface, QueryRunner } from 'typeorm';

export class insertIntoCity1679115185576 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `
    INSERT INTO public.city (id, state_id, name)
    VALUES
    (1, 25, 'São Paulo'),
    (2, 25, 'Campinas'),
    (3, 25, 'São José dos Campos'),
    (4, 25, 'Santo André'),
    (5, 25, 'São Bernardo do Campo'),
    (6, 25, 'Santos'),
    (7, 25, 'Ribeirão Preto'),
    (8, 25, 'Osasco'),
    (9, 25, 'Sorocaba'),
    (10, 25, 'Mogi das Cruzes');
    (11, 25, 'Taboão da Serra'),
    (12, 25, 'Barueri'),
    (13, 25, 'São Caetano do Sul'),
    (14, 25, 'Guarulhos'),
    (15, 25, 'São Vicente'),
    (16, 25, 'Araraquara'),
    (17, 25, 'Presidente Prudente'),
    (18, 25, 'Catanduva'),
    (19, 25, 'Piracicaba'),
    (20, 25, 'Jundiaí');
    (21, 33, 'Rio de Janeiro'),
    (22, 33, 'Niterói'),
    (23, 33, 'São Gonçalo'),
    (24, 33, 'Duque de Caxias'),
    (25, 33, 'Nova Iguaçu'),
    (26, 33, 'Belford Roxo'),
    (27, 33, 'Campos dos Goytacazes'),
    (28, 33, 'Volta Redonda'),
    (29, 33, 'Macaé'),
    (30, 33, 'Angra dos Reis');
    (31, 33, 'Cabo Frio'),
    (32, 33, 'Itaboraí'),
    (33, 33, 'Resende'),
    (34, 33, 'Teresópolis'),
    (35, 33, 'Barra Mansa'),
    (36, 33, 'Araruama'),
    (37, 33, 'Queimados'),
    (38, 33, 'Petrópolis'),
    (39, 33, 'Nilópolis'),
    (40, 33, 'Magé');
    (41, 1, 'Rio Branco'),
    (42, 1, 'Cruzeiro do Sul'),
    (43, 1, 'Sena Madureira'),
    (44, 1, 'Tarauacá'),
    (45, 1, 'Feijó'),
    (46, 1, 'Brasiléia'),
    (47, 1, 'Plácido de Castro'),
    (48, 1, 'Mâncio Lima'),
    (49, 1, 'Xapuri'),
    (50, 1, 'Porto Walter'),
    (51, 1, 'Epitaciolândia'),
    (52, 1, 'Cruzeiro do Sul'),
    (53, 1, 'Manoel Urbano'),
    (54, 1, 'Assis Brasil'),
    (55, 1, 'Bujari'),
    (56, 1, 'Capixaba'),
    (57, 1, 'Jordão'),
    (58, 1, 'Marechal Thaumaturgo'),
    (59, 1, 'Rodrigues Alves'),
    (60, 1, 'Santa Rosa do Purus');
    `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DELETE * FROM public.city
    `);
  }
}
