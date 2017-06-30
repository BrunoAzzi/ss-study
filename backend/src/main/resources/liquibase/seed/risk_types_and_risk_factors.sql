INSERT INTO risk_types (id, name) VALUES (1, 'Químico');
INSERT INTO risk_types (id, name) VALUES (2, 'Acidente');
INSERT INTO risk_types (id, name) VALUES (3, 'Ergônômico');
INSERT INTO risk_types (id, name) VALUES (4, 'Biológico');
INSERT INTO risk_types (id, name) VALUES (5, 'Físico');

INSERT INTO risk_factors (risk_type_id, name) VALUES (1, 'Ruído');
INSERT INTO risk_factors (risk_type_id, name) VALUES (2, 'Vibração');
INSERT INTO risk_factors (risk_type_id, name) VALUES (3, 'Radiação Ionizante e Não-ionizante');
INSERT INTO risk_factors (risk_type_id, name) VALUES (4, 'Temperaturas Extremas (frio e calor)');
INSERT INTO risk_factors (risk_type_id, name) VALUES (5, 'Pressão Atmosférica Anorma');