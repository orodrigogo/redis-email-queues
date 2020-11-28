import Mail from '../lib/Mail';

export default {
  key: 'RegistrationMail',
  options: {
    delay: 5000,
    priority: 3
  },
  async handle({ data }){
    const { user } = data;

    await Mail.sendMail ({
      from: 'DIO <contato@dio.com.br>',
      to: `${user.name} <${user.email}>`,
      subject: 'Cadastro de Usuário',
      html: `Olá, ${user.name}, bem-vindo a DIO.`
    })
  }
}