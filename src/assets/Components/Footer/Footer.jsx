import React from 'react'
import Label from '../Label/Label'
import S from "./Footer.module.css"

const Footer = () => {
  return (
    <div>
        <p className={S.p}>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
        <div className={S.form}>
            <div className={S.divInput}>
            <form  action="">
                <Label className={S.descricao} texto={"Nome do seu amigo:"}/>
                <input className={S.input} type="text" required/>
            </form>
            </div>
            <div className={S.divInput}>
                <form action="">
                <Label className={S.descricao} texto={"E-mail:"}/>
                <input className={S.input} type="email" required/>
                </form>
            </div>
        </div>
        <div className={S.divBtn}>
        <button className={S.btn} >Enviar agora</button>
        </div>
        <footer>
        <p>Testando suas habilidades em HTML, CSS e JS.</p>
        <p>Linx Impulse</p>
        <p>2019</p>  
    </footer>
    </div>
  )
}

export default Footer