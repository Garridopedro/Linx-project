import React, { useState } from 'react'
import S from '../Form/Form.module.css'
import Label from '../Label/Label'

export const Form = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')

    const inputName = (e)=>{
        setNome(e.target.value)
        console.log(nome);
    }
    const inputEmail = (e)=>{
        setEmail(e.target.value)
        console.log(email);
    }
    const inputCpf = (e)=>{
        setCpf(e.target.value)
        console.log(cpf);
    }
    const retornoForms = (e)=>{
        e.preventDefault()
        console.log(nome, email, cpf);
    }

    return (
        <div className={S.div}>
            <div className={S.texto}>
                <nobr><h2 className={S.h2}>Ajude o algoritmo a ser mais certeiro</h2></nobr>
                <p className={S.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit esse, fugiat repellat, architecto reiciendis magni ad velit cum asperiores nemo dolore, at provident. Reprehenderit quisquam accusantium quod cum quos fugit?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aliquid est in vel, ullam excepturi at, ducimus non nobis quaerat molestias repudiandae, neque beatae quasi deleniti eveniet necessitatibus. Illum, reprehenderit!
                    <br/> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius esse suscipit excepturi corrupti incidunt odit quo, in, aspernatur eos, dignissimos quibusdam perspiciatis laudantium pariatur perferendis omnis. Facere officiis ex ea.
                </p>
            </div>
            <div>
                <form action="">
                    <Label texto={"Seu nome:"} />
                    <input type="text" className={S.input} onChange={inputName} /><br />
                    <Label texto={"E-mail:"} />
                    <input type="email" className={S.input} onChange={inputEmail} /><br />
                    <Label texto={"CPF:"} />
                    <input type="text" className={S.input} onChange={inputCpf} /><br />
                    <div>
                        <input className={S.radio} type="radio"></input>
                        <Label className={S.radioTxt} texto={"Masculino"} />
                        <input className={S.radio} type="radio"></input>
                        <Label className={S.radioTxt} texto={"Feminino"} />
                    </div>
                    <button onClick={retornoForms} className={S.button}>Enviar</button>
                </form>
            </div>
        </div>
    )
}
