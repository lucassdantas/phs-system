import { Section } from '@/components/Section'
import { Template } from '@/components/Template'

export const Terms = () => {
  return (
    <Template pageTitle="Termos e Condições de Uso">
      <Section className="p-6 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Termos e Condições de Uso</h1>
        <p className="text-gray-700 mb-6">
          Bem-vindo à nossa plataforma de cursos online. Ao acessar e usar nossa plataforma, você concorda com os seguintes Termos e Condições de Uso. Por favor, leia atentamente antes de se cadastrar ou fazer uma compra.
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">1. Aceitação dos Termos</h2>
            <p className="text-gray-700">
              O uso da plataforma está condicionado à aceitação dos termos, políticas e avisos contidos neste documento. Se você não concorda com qualquer parte destes termos, não deve utilizar a plataforma.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">2. Cadastro e Contas de Usuário</h2>
            <p className="text-gray-700">
              Para acessar os cursos, você deve criar uma conta com informações precisas e atualizadas. É sua responsabilidade manter a confidencialidade das credenciais de login e notificar-nos imediatamente em caso de uso não autorizado da sua conta.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">3. Compras e Pagamentos</h2>
            <p className="text-gray-700">
              A plataforma oferece três produtos: Fase 1, Fase 2 e um combo contendo ambas as fases. A Fase 2 só pode ser adquirida após a compra da Fase 1, devido à sequência pedagógica dos conteúdos. Pagamentos devem ser realizados por meio de métodos seguros oferecidos pela plataforma.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">4. Uso Permitido</h2>
            <p className="text-gray-700 mb-4">
              Você concorda em utilizar a plataforma apenas para fins legais e de acordo com estes termos. É estritamente proibido:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Reproduzir, distribuir ou modificar os conteúdos sem autorização;</li>
              <li>Usar a plataforma para qualquer atividade ilícita ou que infrinja direitos de terceiros;</li>
              <li>Compartilhar o acesso aos cursos com terceiros.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">5. Direitos de Propriedade Intelectual</h2>
            <p className="text-gray-700">
              Todos os materiais e conteúdos da plataforma, incluindo textos, vídeos, imagens e logotipos, são protegidos por leis de propriedade intelectual e são de nossa propriedade ou licenciados para nós. O uso não autorizado pode resultar em penalidades legais.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">6. Limitação de Responsabilidade</h2>
            <p className="text-gray-700">
              Embora nos esforcemos para fornecer conteúdos precisos e atualizados, não garantimos que a plataforma estará livre de erros ou interrupções. Não nos responsabilizamos por qualquer dano indireto, incidental ou consequencial resultante do uso ou da incapacidade de usar a plataforma.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">7. Rescisão</h2>
            <p className="text-gray-700">
              Reservamo-nos o direito de suspender ou encerrar sua conta e acesso à plataforma a qualquer momento, sem aviso prévio, caso você viole estes termos.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">8. Alterações aos Termos</h2>
            <p className="text-gray-700">
              Podemos modificar estes Termos e Condições periodicamente. Quaisquer alterações serão comunicadas por meio da plataforma ou por e-mail, e continuar a usar a plataforma após tais alterações constitui aceitação dos novos termos.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">9. Contato</h2>
            <p className="text-gray-700">
              Em caso de dúvidas sobre estes Termos e Condições de Uso, entre em contato pelo e-mail: <span className="font-medium text-blue-600">suporte@plataformadecursos.com</span>.
            </p>
          </div>
        </div>
      </Section>
    </Template>
  )
}
