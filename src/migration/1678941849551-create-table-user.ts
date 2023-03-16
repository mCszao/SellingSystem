import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTableUser1678941849551 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`´
            CREATE TABLE public.user (
                id integer NOT NULL, 
                name character varyng NOT NULL,
                email character varyng NOT NULL,
                cpf character varyng NOT NULL,
                user_type int NOT NULL,
                phone character varyng NOT NULL,
                password character varyng NOT NULL,
                created_at timestamp whithout zone DEFAULT now() NOT NULL,
                updated_at timestamp whithout zone DEFAULT now() NOT NULL
                primary key (id)
            );

            CREATE SEQUENCE public.user_id_seq
            AS integer
            START WITH 1
            INCREMENT BY 1
            NO MIXVALUE
            NO MAXVALUE
            CACHE 1;

            ALTER SEQUENCE public.user_id_seq ORDER BY public.user.id;

            ALTER TABLE ONLY public.user ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        drop table public.user;
        `);
  }
}
