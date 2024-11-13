import { Section } from '@/components/Section'
import { Template } from '@/components/Template'

export const StorePolicies = () => {
  return (
    <Template pageTitle="Políticas da Loja">
      <Section className="p-6 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Políticas da Loja</h1>
        <p className="text-gray-700 mb-6">
          Agradecemos por escolher nossa plataforma de cursos. Esta seção descreve as políticas da loja para garantir uma experiência transparente e segura em suas compras.
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">1. Políticas de Compra</h2>
            <p className="text-gray-700">
              Todos os cursos disponíveis na plataforma podem ser adquiridos diretamente por meio do nosso site. A Fase 2 só pode ser comprada após a aquisição da Fase 1, devido à sequência pedagógica necessária para a compreensão completa do conteúdo.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">2. Processamento de Pagamentos</h2>
            <p className="text-gray-700">
              Aceitamos pagamentos por meio de métodos seguros e confiáveis. Todas as transações são processadas em ambiente seguro, com proteção de dados e criptografia para garantir a segurança das suas informações.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">3. Política de Reembolso</h2>
            <p className="text-gray-700">
              Oferecemos reembolsos em determinadas situações, como problemas técnicos significativos que impeçam o acesso ao curso. As solicitações de reembolso devem ser feitas em até 7 dias após a compra, e serão analisadas caso a caso. Para solicitar um reembolso, entre em contato com nossa equipe de suporte.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">4. Trocas e Cancelamentos</h2>
            <p className="text-gray-700">
              Não é permitida a troca de cursos adquiridos. Cancelamentos só serão aceitos antes do início do uso do curso, e poderão resultar em um reembolso parcial ou total, dependendo das circunstâncias. Após o início do curso, cancelamentos não serão reembolsados.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">5. Acesso aos Cursos</h2>
            <p className="text-gray-700">
              O acesso ao curso é concedido imediatamente após a confirmação do pagamento. O usuário terá acesso ilimitado ao curso adquirido pelo período especificado no momento da compra. Compartilhamento de acesso ou redistribuição dos conteúdos são estritamente proibidos e podem resultar em cancelamento da conta.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">6. Atendimento ao Cliente</h2>
            <p className="text-gray-700">
              Nossa equipe de suporte está disponível para ajudá-lo com qualquer dúvida ou problema relacionado às suas compras e cursos. Entre em contato conosco pelo e-mail <span className="font-medium text-blue-600">suporte@plataformadecursos.com</span> para obter assistência.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">7. Alterações nas Políticas</h2>
            <p className="text-gray-700">
              Reservamo-nos o direito de atualizar ou modificar estas políticas a qualquer momento. Alterações significativas serão comunicadas por meio de avisos na plataforma ou por e-mail.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">8. Contato</h2>
            <p className="text-gray-700">
              Para mais informações sobre nossas políticas ou para esclarecer dúvidas, entre em contato com nosso suporte por e-mail: <span className="font-medium text-blue-600">suporte@plataformadecursos.com</span>.
            </p>
          </div>
        </div>
      </Section>
    </Template>
  )
}
