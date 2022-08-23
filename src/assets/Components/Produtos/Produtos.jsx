import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import S from "./Produtos.module.css";
import Cards from "../Cards/Cards";

const arr = []

const Produtos = () => {

    const [produto, setProduto] = useState([])
    const [pag, setPag] = useState(1)

    async function handleApi() {
        const response = await fetch(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${pag}`)
        const json = await response.json()
        arr.push(json.products)
        setProduto(arr)
        console.log(json);
    }

    useEffect(() => {
        handleApi()
    }, [pag])

    return (
        <div className={S.div}>
            <div className={S.divHr}>
                <hr className={S.hr1} />
                <nobr><h2>Sua seleção especial</h2></nobr>
                <hr className={S.hr1} />
            </div>
            {produto.map((div, index) => {
                return (
                    <div className={S.cards} key={index}>
                        {div.map((produto) => {
                            return (
                                <Cards key={produto.id}
                                    imagem={produto.image}
                                    titulo={produto.name}
                                    descricao={produto.description}
                                    preco={produto.oldPrice}
                                    precoDesc={produto.price}
                                    qtdParcela={produto.installments.value}
                                    valorParcela={produto.installments.count}
                                />
                            )
                        })}
                    </div>
                )
            })}
            <div className={S.divBotao}>
                <button className={S.btnMaisProdutos} >Ainda mais produtos aqui!</button>
            </div>
            <div className={S.divHr}>
                <hr className={S.hr2} />
                <h2>Compartilhe a novidade</h2>
                <hr className={S.hr2} />
            </div>
        </div>
    )
}



export default Produtos;