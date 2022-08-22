import React from 'react'
import S from './Cards.module.css'

const Cards = ({imagem, titulo, descricao, preco, precoDesc, qtdParcela, valorParcela}) => {
  return (
    <div className={S.card}>
      <img src={imagem} alt="" className={S.img}/>
      <h4 className={S.font}>{titulo}</h4><br/>
      <p className={S.font} >{descricao}</p><br/>
      <p className={S.font} >De: R${preco}</p>
      <h3 className={S.h3}>Por: R${precoDesc}</h3>
      <p className={S.font} >{qtdParcela}X de R${valorParcela}</p><br/>
      
      <button className={S.button}>Comprar</button>
    </div>
  )
}

export default Cards