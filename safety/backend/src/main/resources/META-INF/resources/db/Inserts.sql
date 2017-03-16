/* INSERTS WIDGETS */;
INSERT INTO `widgets` (`id`, `widget`, `summary`, `dir`, `icon`) VALUES
	(1, 'COACH', 'Para as diversas iterações com o Coach', 'coach', 'icon.png'),
	(2, 'DICAS DO DIA', 'Dicas em diferentes âmbitos do bem estar', 'dicas', 'icon.png'),
	(3, 'JORNADA DO USUÁRIO', 'Funcinalidades da jornada do usuário aaaa aaaa aaaa aaaa aaaa aaaa', 'journey', 'icon.png'),
	(4, 'WIDGET1', 'descrição....', 'coach', 'icon.png'),
	(5, 'WIDGET2', 'descrição....', 'coach', 'icon.png'),
	(7, 'WIDGET3', 'descrição....', 'coach', 'icon.png'),
	(8, 'WIDGET4', 'descrição....', 'coach', 'icon.png'),
	(9, 'WIDGET5', 'descrição....', 'coach', 'icon.png'),
	(10, 'WIDGET6', 'descrição....', 'coach', 'icon.png'),
	(11, 'WIDGET7', 'descrição....', 'coach', 'icon.png'),
	(12, 'WIDGET8', 'descrição....', 'coach', 'icon.png'),
	(13, 'WIDGET9', 'descrição....', 'coach', 'icon.png'),
	(14, 'WIDGET10', 'descrição....', 'coach', 'icon.png'),
	(15, 'WIDGET11', 'descrição....', 'coach', 'icon.png'),
	(16, 'WIDGET12', 'descrição....', 'coach', 'icon.png'),
	(17, 'WIDGET13', 'descrição....', 'coach', 'icon.png'),
	(18, 'WIDGET14', 'descrição....', 'coach', 'icon.png'),
	(19, 'WIDGET15', 'descrição....', 'coach', 'icon.png'),
	(22, 'WIDGET16', 'descrição....', 'coach', 'icon.png');
	
/* INSERTS WIDGET DESCRIPTION */;
INSERT INTO `widget_descriptions` (`id`, `widget`, `description`) VALUES
	(1, 'COACH', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'),
	(2, 'COACH', 'Etiam eget ligula eu lectus lobortis condimentum'),
	(3, 'COACH', 'Aliquam nonummy auctor massa'),
	(4, 'COACH', 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas'),
	(5, 'DICAS DO DIA', 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas'),
	(6, 'DICAS DO DIA', 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas'),
	(7, 'JORNADA DO USUÁRIO', '(jornadad do usuario) Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas'),
	(8, 'JORNADA DO USUÁRIO', 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas'),
	(9, 'WIDGET1', 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas'),
	(10, 'WIDGET1', 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas'),
	(11, 'WIDGET2', 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas'),
	(12, 'WIDGET3', 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas');
	
/* INSERTS WIDGETS IMAGES */;
INSERT INTO `widget_images` (`id`, `widget`, `dir`, `image`) VALUES
	(1, 'COACH', 'coach', '1.jpg'),
	(2, 'COACH', 'coach', '2.jpg'),
	(3, 'COACH', 'coach', '3.jpg'),
	(4, 'COACH', 'coach', '4.jpg'),
	(5, 'COACH', 'coach', '5.jpg'),
	(6, 'DICAS DO DIA', 'dicas', '1.jpg'),
	(7, 'DICAS DO DIA', 'dicas', '2.jpg'),
	(8, 'DICAS DO DIA', 'dicas', '3.jpg'),
	(9, 'JORNADA DO USUÁRIO', 'journey', '6.jpg'),
	(10, 'JORNADA DO USUÁRIO', 'journey', '4.jpg'),
	(11, 'JORNADA DO USUÁRIO', 'journey', '2.jpg'),
	(12, 'WIDGET1', 'journey', '2.jpg'),
	(13, 'WIDGET1', 'journey', '2.jpg'),
	(14, 'WIDGET2', 'journey', '2.jpg');
	
/* INSERTS WIDGET PERMISSIONS */;
INSERT INTO `widget_permissions` (`id`, `widget`, `permission`) VALUES
	(1, 'COACH', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'),
	(2, 'COACH', 'Etiam eget ligula eu lectus lobortis condimentum'),
	(3, 'COACH', 'Aliquam nonummy auctor massa'),
	(4, 'COACH', 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas'),
	(5, 'COACH', 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas'),
	(6, 'DICAS DO DIA', '(dica) Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas'),
	(7, 'DICAS DO DIA', '(dica) Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas'),
	(8, 'DICAS DO DIA', '(dica) Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas'),
	(9, 'JORNADA DO USUÁRIO', 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas'),
	(10, 'JORNADA DO USUÁRIO', 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas'),
	(11, 'JORNADA DO USUÁRIO', 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas');
	
/* INSERTS COACH */
INSERT INTO `smart_master`.`coach` (`nome`, `email`, `senha`, `cpf`, `sexo`, `data_nascimento`, `formacao`, `empresa_vinculo`, `sobre`) VALUES ('Marcela da Silva', 'marcela.silva@sc.sesi.com', 'sesisc', '337.806.148-04', 'Feminino', '01/01/1990', 'Bacharel em EducaÃ§Ã£o FÃ­sica', 'SESI', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium, dolor a sagittis faucibus, nunc nunc pellentesque turpis, ullamcorper eleifend felis ligula sed ante.');
INSERT INTO `smart_master`.`coach` (`nome`, `email`, `senha`, `cpf`, `sexo`, `data_nascimento`, `formacao`, `empresa_vinculo`, `sobre`) VALUES ('Rodrigo Junior', 'rodrigo.junior@sc.sesi.com', 'sesisc', '045.228.277-25', 'Masculino', '02/02/1980', 'Doutorado em ', 'SESI', 'Donec tempus vitae purus sit amet bibendum. Ut bibendum mattis nibh, at euismod risus interdum ac. Fusce mollis');
INSERT INTO `smart_master`.`coach` (`nome`, `email`, `senha`, `cpf`, `sexo`, `data_nascimento`, `formacao`, `empresa_vinculo`, `sobre`) VALUES ('Bruna Hortencia', 'bruna.ho@sc.sesi.com.br', 'sesisc', '076.917.758-14', 'Feminino', '01/03/1997', 'TÃ©cnico em Alimentos', 'SESI', 'Feminino');

/* INSERTS COACHEES */
INSERT INTO `smart_master`.`coachee` (`id`, `nome_coachee`, `perfil_coachee`, `empresa_coachee`, `funcao_coachee`, `localidade_coachee`, `peso_coachee`, `altura_coachee`, `cintura_coachee`, `imc_coachee`, `foco_alimentacao`, `foco_exercicio`, `foco_estresse`, `foco_prevencao`, `foco_relacionamento`, `min_sessao`, `max_sessao`) VALUES ('1', 'Maria Teixeira', 'Investigativo', 'Intelbrás', 'Operadora de Caixa', 'Florianópolis', '62', '1.67', '160', '16', '45', '80', '90', '70', '35', '1', '10');

/* INSERT METAS */
INSERT INTO meta (usuario_id, progresso, comprometimento, troca_data, meta, categoria_id, data_criacao) VALUES
('1', '60', '80', '1', 'Descansar 30 minutos por dia', '3', '2017-03-03 00:00:00'),
('1', '70', '90', '1', 'Correr 3 km por semana', '2', '2017-03-03 00:00:00'),
('1', '80', '70', '1', 'Comer fruta 3 vezes por semana', '1', '2017-03-03 00:00:00'),
('1', '90', '60', '1', 'Comer fruta 10 vezes por semana', '1', '2017-03-03 00:00:00');

/* INSERT CATEGORIAS */
INSERT INTO categoria (descricao_categoria) VALUES ('Alimentação'), ('Atividade Física'), ('Estresse'), ('Relacionamento Social'), ('Ações Preventivas');

/* INSERT QUESTIONARIO */
INSERT INTO `smart_master`.`questionario` (`id`, `descricao`) VALUES ('1', 'Perfil Comportamental');
INSERT INTO `smart_master`.`questionario` (`descricao`) VALUES ('Perfil Bem Estar');

/* INSERTS QUESTIONÁRIO PERGUNTAS */
INSERT INTO `smart_master`.`questionario_pergunta` (`id_questionario`, `descricao`, `tipo_perfil`, `ordem`) VALUES ('1', 'Interagir com várias pessoas', 'Social', '1');
INSERT INTO `smart_master`.`questionario_pergunta` (`id_questionario`, `descricao`, `tipo_perfil`, `ordem`) VALUES ('1', 'Trabalhar com ferramentas', 'Realista', '2');
INSERT INTO `smart_master`.`questionario_pergunta` (`id_questionario`, `descricao`, `tipo_perfil`, `ordem`) VALUES ('1', 'Atividades com liberdade para criar', 'Artístico', '3');
INSERT INTO `smart_master`.`questionario_pergunta` (`id_questionario`, `descricao`, `tipo_perfil`, `ordem`) VALUES ('1', 'Liderar pessoas', 'Empreendedor', '4');
INSERT INTO `smart_master`.`questionario_pergunta` (`id_questionario`, `descricao`, `tipo_perfil`, `ordem`) VALUES ('1', 'Entender como determinado fenômeno funciona', 'Investigativo', '5');
INSERT INTO `smart_master`.`questionario_pergunta` (`id_questionario`, `descricao`, `tipo_perfil`, `ordem`) VALUES ('1', 'Categorizar precisamente informações', 'Convencional', '6');
INSERT INTO `smart_master`.`questionario_pergunta` (`id_questionario`, `descricao`, `tipo_perfil`, `ordem`) VALUES ('1', 'Fazer trabalho voluntário', 'Social', '7');
INSERT INTO `smart_master`.`questionario_pergunta` (`id_questionario`, `descricao`, `tipo_perfil`, `ordem`) VALUES ('1', 'Construir coisas manualmente', 'Realista', '8');
INSERT INTO `smart_master`.`questionario_pergunta` (`id_questionario`, `descricao`, `tipo_perfil`, `ordem`) VALUES ('1', 'Organizar dados detalhadamente', 'Convencional', '9');
INSERT INTO `smart_master`.`questionario_pergunta` (`id_questionario`, `descricao`, `tipo_perfil`, `ordem`) VALUES ('1', 'Fazer arte (pintar, escrever, compor músicas...)', 'Artístico', '10');
INSERT INTO `smart_master`.`questionario_pergunta` (`id_questionario`, `descricao`, `tipo_perfil`, `ordem`) VALUES ('1', 'Estudar um novo assunto desconhecido', 'Investigativo', '11');
INSERT INTO `smart_master`.`questionario_pergunta` (`id_questionario`, `descricao`, `tipo_perfil`, `ordem`) VALUES ('1', 'Gerir um negócio próprio', 'Empreendedor', '12');
INSERT INTO `smart_master`.`questionario_pergunta` (`id_questionario`, `descricao`, `tipo_perfil`, `ordem`) VALUES ('1', 'Trabalhar ao ar livre', 'Realista', '13');
INSERT INTO `smart_master`.`questionario_pergunta` (`id_questionario`, `descricao`, `tipo_perfil`, `ordem`) VALUES ('1', 'Assumir riscos', 'Empreendedor', '14');
INSERT INTO `smart_master`.`questionario_pergunta` (`id_questionario`, `descricao`, `tipo_perfil`, `ordem`) VALUES ('1', 'Atividades que envolvam imaginação e criatividade', 'Artístico', '15');
INSERT INTO `smart_master`.`questionario_pergunta` (`id_questionario`, `descricao`, `tipo_perfil`, `ordem`) VALUES ('1', 'Trabalhar com ideias e teorias', 'Investigativo', '16');
INSERT INTO `smart_master`.`questionario_pergunta` (`id_questionario`, `descricao`, `tipo_perfil`, `ordem`) VALUES ('1', 'Montar planilhas de controle', 'Convencional', '17');
INSERT INTO `smart_master`.`questionario_pergunta` (`id_questionario`, `descricao`, `tipo_perfil`, `ordem`) VALUES ('1', 'Auxiliar pessoas com dificuldade', 'Social', '18');



/* ADICIONAR OS FUTUROS INSERTS ABAIXO....... */