package br.sc.org.sesi.smart.root.dao.questionarioResposta;

public interface QuestionarioRespostaDAO {
	
//	INSERT RESPOSTA COMPORTAMENTAL
	public void insertRespostaComportamental(Long idUsuario, Long idPergunta, Long idQuestionario, String resposta);	

}
