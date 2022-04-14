import React from 'react'

function Form() {
  return (
    <div className='container'>

      <form className="row g-3 mt-5 needs-validation d-flex" noValidate>
        
      <div className="col-md-12 text-center">
        <label className='fw-bold'>User Github</label>
        <input type="text" className='form-control' />
      </div>
      <div className="col-md-12 text-center">
        <button className='btn btn-primary' type='submit'>
          Buscar Repositorios
        </button>
      </div>
    </form>
    </div>
  );
}

export default Form