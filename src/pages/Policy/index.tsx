import { Section } from '@/components/Section'
import { Template } from '@/components/Template'

export const Policy = () => {
  return (
    <Template pageTitle="Política de Privacidade">
      <Section className="p-6 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Política de Privacidade</h1>
        <p className="text-gray-700 mb-6">
          A sua privacidade é importante para nós. Esta política explica como coletamos, usamos, compartilhamos e protegemos as informações pessoais dos usuários da nossa plataforma de cursos.
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">1. Informações Coletadas</h2>
            <p className="text-gray-700">
              Coletamos informações pessoais fornecidas pelo usuário, como nome, endereço de e-mail, número de telefone e dados de pagamento, quando ele se cadastra, faz login ou realiza compras. Também coletamos dados de uso e estatísticas sobre como os usuários interagem com a nossa plataforma.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">2. Uso das Informações</h2>
            <p className="text-gray-700 mb-4">
              Utilizamos as informações coletadas para:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Fornecer e melhorar os serviços da plataforma;</li>
              <li>Processar transações e gerenciar o acesso aos cursos adquiridos;</li>
              <li>Personalizar a experiência do usuário;</li>
              <li>Enviar comunicações relevantes, como confirmações de pedidos, atualizações de cursos e newsletters (com consentimento).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">3. Compartilhamento de Informações</h2>
            <p className="text-gray-700 mb-4">
              Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Cumprir com obrigações legais;</li>
              <li>Processar pagamentos por meio de provedores de pagamento seguros;</li>
              <li>Proteger nossos direitos e segurança ou a de outros usuários.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">4. Proteção de Dados</h2>
            <p className="text-gray-700">
              Implementamos medidas de segurança para proteger as suas informações contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui criptografia de dados, firewalls e outras tecnologias de segurança de ponta.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">5. Seus Direitos</h2>
            <p className="text-gray-700">
              O usuário tem o direito de acessar, corrigir ou excluir suas informações pessoais. Além disso, pode solicitar a exclusão de sua conta e de seus dados armazenados a qualquer momento, entrando em contato com nossa equipe de suporte.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">6. Alterações nesta Política</h2>
            <p className="text-gray-700">
              Podemos atualizar esta política periodicamente para refletir mudanças em nossas práticas de privacidade. Os usuários serão notificados sobre alterações significativas por meio de um aviso na plataforma ou por e-mail.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">7. Contato</h2>
            <p className="text-gray-700">
              Se você tiver dúvidas ou preocupações sobre esta política de privacidade, entre em contato conosco pelo e-mail: <span className="font-medium text-blue-600">suporte@plataformadecursos.com</span>.
            </p>
          </div>
        </div>
      </Section>
    </Template>
  )
}
