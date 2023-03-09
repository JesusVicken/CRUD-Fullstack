import { useEffect, useState } from 'react'

const atividadeInicial = {
  id: 0,
  titulo: "",
  prioridade: 0,
  descrição: ""
};

export default function AtividadeForm(props) {
  const [atividade, setAtividade] = useState(atividadeAtual());

  useEffect(() => {
    if (props.ativSelecionada.id !== 0)
      setAtividade(props.ativSelecionada);
  }, [props.ativSelecionada]);

  const inputTextHandler = (e) => {
    const { name, value } = e.target;

    setAtividade({ ...atividade, [name]: value });
  };
  const handlerSubmit = (e) => {
    e.preventDefault();

    if (props.ativSelecionada.id !== 0)
      props.atualizarAtividade(atividade);
    else
      props.addAtividade(atividade);

    setAtividade(atividadeInicial);
  }

  const handlerCancelar = (e) => {
    e.preventDefault();

    props.cancelarAtividade();

    setAtividade(atividadeInicial);
  };

  function atividadeAtual() {
    if (props.ativSelecionada.id !== 0) {
      return props.ativSelecionada;
    }
    else {
      return atividadeInicial;

    };
  };


  return (
    <>
      <h1>Atividade {atividade.id !== 0 ? atividade.id : ''}</h1>
      <form className="row g-3" onSubmit={handlerSubmit}>
        <div className="col-md-6">
          <label className="form-label">
            Título
          </label>
          <input
            name="titulo"
            value={atividade.titulo}
            onChange={inputTextHandler}
            id='titulo'
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Prioridade</label>
          <select
            name="prioridade"
            value={atividade.prioridade}
            onChange={inputTextHandler}
            id="prioridade"
            className="form-select"
          >

            <option defaultValue="0">Selecione</option>
            <option value="1">BAIXA</option>
            <option value="2">NORMAL</option>
            <option value="3">ALTA</option>
          </select>
        </div>

        <div className="col-md-12">
          <label className="form-label">
            Descrição
          </label>
          <textarea
            name="descricao"
            value={atividade.descricao}
            onChange={inputTextHandler}
            id='descricao'
            type="text"
            className="form-control"
          />
          <hr />
        </div>
        <div className="col-12 mt-0">
          {
            atividade.id === 0 ? (
              //então vou imprimir o botao abaixo
              <button
                className="btn btn-secondary"
                type='submit'
                onClick={props.addAtividade}
              >
                <i className='fas fa-plus me-2'></i>
                Atividade
              </button>
            ) : (
              //senão vou imprimir outros 2 botões
              <>

                <button className="btn btn-outline-success me-2"
                  type='submit'>
                  <i className='fas fa-plus me-2'></i>
                  Salvar
                </button>

                <button
                  className="btn btn-outline-warning me-2"
                  onClick={handlerCancelar}
                >
                  <i className='fas fa-plus me-2'></i>
                  Cancelar
                </button>
              </>
            )}
        </div>
      </form>
    </>
  )
}
