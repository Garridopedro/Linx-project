import React from "react";
import S from "./Produtos.module.css";
import Cards from "../Cards/Cards";


const Produtos = () => {
    return (
        <div className={S.div}>
            <div className={S.divHr}>
                <hr className={S.hr1} />
                <nobr><h2>Sua seleção especial</h2></nobr>
                <hr className={S.hr1} />
            </div>
            <div className={S.cards}>
                    <Cards
                        imagem={'https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/c/e/celular-smartphone-galaxy-a32-6-4-128gb-samsung_472403.jpg'}
                        titulo={'Samsung M23'}
                        descricao={'Smartphone Samsung Galaxy M23 5G 128GB Processador Snapdragon Tela 6.6" Dual Chip 6GB RAM Câmera Tripla '}
                        precoAntes={'899,90'}
                        precoAtual={'699,90'}
                        precoParcela={'69,00'}
                        numParcela={'10'}
                    />
                    <Cards
                        imagem={'https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/c/e/celular-smartphone-galaxy-a32-6-4-128gb-samsung_472403.jpg'}
                        titulo={'Samsung M23'}
                        descricao={'Smartphone Samsung Galaxy M23 5G 128GB Processador Snapdragon Tela 6.6" Dual Chip 6GB RAM Câmera Tripla '}
                        precoAntes={'899,90'}
                        precoAtual={'699,90'}
                        precoParcela={'69,00'}
                        numParcela={'10'}
                    />
                    <Cards
                        imagem={'https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/c/e/celular-smartphone-galaxy-a32-6-4-128gb-samsung_472403.jpg'}
                        titulo={'Samsung M23'}
                        descricao={'Smartphone Samsung Galaxy M23 5G 128GB Processador Snapdragon Tela 6.6" Dual Chip 6GB RAM Câmera Tripla '}
                        precoAntes={'899,90'}
                        precoAtual={'699,90'}
                        precoParcela={'69,00'}
                        numParcela={'10'}
                    />
                    <Cards
                        imagem={'https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/c/e/celular-smartphone-galaxy-a32-6-4-128gb-samsung_472403.jpg'}
                        titulo={'Samsung M23'}
                        descricao={'Smartphone Samsung Galaxy M23 5G 128GB Processador Snapdragon Tela 6.6" Dual Chip 6GB RAM Câmera Tripla '}
                        precoAntes={'899,90'}
                        precoAtual={'699,90'}
                        precoParcela={'69,00'}
                        numParcela={'10'}
                    />
            </div>
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