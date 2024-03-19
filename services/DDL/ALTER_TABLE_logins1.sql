ALTER TABLE IF EXISTS public."Logins"
    ADD COLUMN email character varying(100)
    ADD COLUMN uuid uuid;

-- We need the business to tell us how we update the email addresses in production
-- for now we do it ourselves as the developers. 
UPDATE public."Logins" SET email='lskywalker@example.com' WHERE id = 1;
UPDATE public."Logins" SET email='bilbob@example.com' WHERE id = 2;
UPDATE public."Logins" SET email='frodob@example.com' WHERE id = 3;
UPDATE public."Logins" SET email='suki@example.com' WHERE id = 4;

-- Lucky you DBA you need to write a script to update all the UUID in production
UPDATE public."Logins" SET uuid='8dead2d0-6325-400b-b729-c3403138f153' WHERE id = 1;
UPDATE public."Logins" SET uuid='9bab95ce-aa25-4bd0-a2ac-415d6b5db530' WHERE id = 1;
UPDATE public."Logins" SET uuid='4f76a591-a3a5-4d6e-a96e-9eee310d4afe' WHERE id = 2;
UPDATE public."Logins" SET uuid='2e67b10e-9a3c-4993-994e-5754c88d08bd' WHERE id = 3;
UPDATE public."Logins" SET uuid='1af4de74-2401-4d07-9685-438c7dce7442' WHERE id = 4;
UPDATE public."Logins" SET uuid='829fceb9-82ae-495b-99b0-60cc7329f2e4' WHERE id = 5;
	
ALTER TABLE IF EXISTS public."Logins"
    ALTER COLUMN email SET NOT NULL
    ALTER COLUMN uuid SET NOT NULL;
	
ALTER TABLE IF EXISTS public."Logins"
    ADD CONSTRAINT uq_logins_email UNIQUE (email)
    ADD CONSTRAINT uq_logins_uuid UNIQUE (uuid);