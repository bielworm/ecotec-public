'use client'
import React from 'react'
import { Container } from '../Partials/Container'

export default function SectionFormulario() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    cidade: '',
    uf: '',
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleChangePhone = (e: any) => {
    const { value } = e.target
    const maskedValue = value
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3')
    setFormData((prevState) => ({
      ...prevState,
      phone: maskedValue,
    }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    if (
      formData.name.trim() === '' ||
      formData.email.trim() === '' ||
      formData.phone.trim() === ''
    ) {
      return alert('Por favor, preencha todos os campos obrigatórios.')
    }

    try {
      const response = await fetch('https://formspree.io/f/mbjnnbvk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Formulário enviado com sucesso!')
      } else {
        alert(
          'Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.',
        )
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error)
      alert(
        'Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.',
      )
    }
  }

  return (
    <Container>
      <div className="bg-white p-8" id="contato">
        <h2 className="poppins-semibold text-center text-3xl text-brand-blue-800">
          Realize uma simulação gratuita
        </h2>
        <form
          className="mx-auto mt-8 grid max-w-[480px] gap-4 md:grid-cols-2"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Seu Nome*"
              value={formData.name}
              onChange={handleChange}
              required
              className="poppins-regular w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              placeholder="Seu Telefone*"
              onChange={handleChangePhone}
              required
              className="poppins-regular w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
          <div className="col-span-2 mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Seu E-mail*"
              value={formData.email}
              onChange={handleChange}
              required
              className="poppins-regular w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <input
              type="cidade"
              id="cidade"
              name="cidade"
              placeholder="Cidade*"
              value={formData.cidade}
              onChange={handleChange}
              required
              className="poppins-regular w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <input
              type="uf"
              id="uf"
              name="uf"
              placeholder="UF*"
              value={formData.uf}
              onChange={handleChange}
              required
              className="poppins-regular w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
          <div className="col-span-2 mb-4 border-t border-t-zinc-300 pt-4">
            <input
              type="uf"
              id="uf"
              name="uf"
              placeholder="UF*"
              value={formData.uf}
              onChange={handleChange}
              required
              className="poppins-regular w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>
          <div className="col-span-2 flex justify-center">
            <button
              type="submit"
              className="poppins-bold mx-auto w-[240px] rounded-md bg-brand-yellow-600 py-3 text-white transition-all duration-200 hover:bg-opacity-80"
            >
              Realizar Simulação
            </button>
          </div>
        </form>
      </div>
    </Container>
  )
}
