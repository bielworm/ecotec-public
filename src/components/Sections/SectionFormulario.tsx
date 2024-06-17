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
      <div className="contato">
        <div id="form-safe"></div>{' '}
        <script src="https://ecotecsolar.api.safeleads.app/api/ConfiguracaoSimulador/FormularioJS/1?titulo=&subtitulo=&jquery=true&comEndereco=true&apenasCidade=true&redirectURL="></script>
      </div>
    </Container>
  )
}
