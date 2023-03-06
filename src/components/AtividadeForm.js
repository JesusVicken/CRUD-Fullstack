import React from 'react'

export default function AtividadeForm(props) {
  return (
    <form className="row g-3">
      <div className="col-md-6">
        <label className="form-label">
          ID
        </label>
        <input
          id='id'
          type="text"
          className="form-control"
          readOnly
          value={
            Math.max.apply(
              Math,
              props.atividades.map(item => item.id)
            ) + 1
          }
        />
      </div>
      <div className="col-md-6">
        <label className="form-label">Prioridade</label>
        <select id="prioridade" className="form-select">
          <option defaultValue="0">Selecione</option>
          <option value="1">BAIXA</option>
          <option value="2">NORMAL</option>
          <option value="3">ALTA</option>
        </select>
      </div>
      <div className="col-md-6">
        <label className="form-label">
          Título
        </label>
        <input
          id='titulo'
          type="text"
          className="form-control"
        />
      </div>
      <div className="col-md-6">
        <label className="form-label">
          Descrição
        </label>
        <input
          id='descricao'
          type="text"
          className="form-control"
        />
      </div>
      <hr />
      <div className="col-12">
        <button
          className="btn btn-secondary"
          onClick={props.addAtividade}
        >
          + Atividade
        </button>
      </div>
    </form>
  )
}
