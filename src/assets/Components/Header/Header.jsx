import React from 'react'
import S from '../Header/Header.module.css'

const Header = () => {
    return (
        <header className={S.header}>

            <nobr><h2 className={S.h2}>uma seleção de produtos</h2></nobr>
            <h1 className={S.h1}>especial para você</h1>
            <nobr><p className={S.p}>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p></nobr>
            <div>
                <button className={S.button}>Conheça a Linx</button>
                <button className={S.button}>Ajude o algoritmo</button>
                <button className={S.button}>Seus produtos</button>
                <button className={S.button}>Compartilhe</button>
            </div>
        </header>
    )
}

export default Header