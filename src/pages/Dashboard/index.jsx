import React from "react";
import Header from "../../components/Header/Header";
import { Container, Accordion } from "react-bootstrap";
import "./Dashboard.css";
import {CarouselComponent} from '../../components/Carousel'


export function Dashboard() {
  return (
    <>
      <Header />
      <div className='contentCarousel'>
        <CarouselComponent/>
      </div>
      <Container defaultActiveKey='0' flush>
        <h1 id='noticia'>Notícias:</h1>
        <Accordion>
          <Accordion.Item>
            <Accordion.Header>
              10 maneiras de seguir uma alimentação saudável
            </Accordion.Header>
            <Accordion.Body>
              <img
                src={
                  "https://www.centralnacionalunimed.com.br/documents/20182/11762772/como-come%C3%A7ar.jpg/d88927aa-092f-49b6-aeb4-350dc365f17a?t=1599143323681"
                }
              ></img>
              <br></br>
              Confira nossas 10 dicas para uma alimentação saudável e adequada:
              <br></br>
              <br></br>
              1. Faça dos alimentos in natura ou minimamente processados a base
              da alimentação Predominantemente de origem vegetal, são a base
              ideal para uma alimentação nutricionalmente balanceada, saborosa,
              culturalmente apropriada e promotora de um sistema alimentar
              sustentável. Inclui variedades de todos os tipos de grãos, raízes,
              tubérculos, farinhas, legumes, verduras, frutas, castanhas, leite,
              ovos e carnes. Também inclui variedades dentro de cada tipo de
              feijão, arroz, milho, batata, mandioca, tomate, abóbora, laranja,
              banana, frango, peixes etc. <br></br>
              <br></br>2. Utilize óleos, gorduras, sal e açúcar em pequenas
              quantidades Utilizados com moderação ao temperar e cozinhar
              alimentos in natura ou minimamente processados, esses ingredientes
              contribuem para tornar a alimentação mais saborosa sem torná-la
              nutricionalmente desbalanceada. <br></br>
              <br></br> 3. Limite o consumo de processados Ingredientes e
              métodos usados na fabricação de alimentos como conservas de
              legumes, compota de frutas, pães e queijos alteram de modo
              desfavorável a composição nutricional dos alimentos dos quais
              derivam. Podem ser consumidos (em pequenas quantidades) como
              ingredientes de preparações culinárias ou parte de refeições
              baseadas em alimentos in natura ou minimamente processados.{" "}
              <br></br>
              <br></br> 4. Evite o consumo de ultraprocessados O consumo de
              ultraprocessados é desencorajado por diversos motivos: são
              nutricionalmente desbalanceados, favorecem o consumo excessivo de
              calorias, contém aditivos industriais e excesso de gordura,
              açúcar, sódio, entre outras substâncias nocivas à saúde. São
              produtos como biscoitos doces e salgados, sucos em pó,
              refrigerantes, temperos prontos, embutidos, salgadinhos de pacote
              e guloseimas, entre outros. DICA: De acordo com a cartilha
              Alimentação cardioprotetora, uma boa forma de identificar um
              alimento ultraprocessado é observar a lista de ingredientes na
              embalagem do produto. Em geral, se são descritos cinco
              ingredientes ou mais, o alimento é classificado como
              ultraprocessado, especialmente quando os ingredientes são
              basicamente formulações industriais ou com nomes desconhecidos.
              Confira aqui. <br></br>
              <br></br>5. Coma com regularidade e atenção, em ambientes
              apropriados, sempre que possível, com companhia Procure fazer suas
              refeições em horários semelhantes todos os dias e evite “beliscar”
              nos intervalos entre as refeições. Coma sempre devagar e desfrute
              o que está comendo, sem se envolver em outra atividade. Procure
              comer em locais limpos, confortáveis e tranquilos e onde não haja
              estímulos para o consumo de quantidades ilimitadas de alimento.
              Sempre que possível, coma em companhia e amplie o desfrute o
              prazer da alimentação. <br></br>
              <br></br> 6. Faça compras em locais que ofertem variedades de
              alimentos in natura ou minimamente processados Procure fazer
              compras de alimentos em mercados, feiras livres e feiras de
              produtores e outros locais que comercializam variedades de
              alimentos in natura ou minimamente processados. Prefira verduras e
              frutas da estação e cultivados localmente. Sempre que possível,
              adquira alimentos orgânicos e de base agroecológica, de
              preferência diretamente dos produtores.
              <br></br>
              <br></br> 7. Desenvolva, exercite e partilhe habilidades
              culinárias Se você tem habilidades culinárias, procure
              desenvolvê-las e partilhá-las, principalmente com crianças e
              jovens, sem distinção de gênero. Se você não tem habilidades
              culinárias, procure adquiri-las. Para isso, converse com as
              pessoas que sabem cozinhar, peça receitas a familiares, amigos e
              colegas, leia livros, consulte a internet, eventualmente faça
              cursos e comece a cozinhar. Aprenda receita fácil e rápida de
              iogurte caseiro<br></br>
              <br></br> 8. Planeje o uso do tempo parar dar à alimentação o
              espaço que ela merece Planeje as compras de alimentos, organize a
              despensa doméstica e defina com antecedência o cardápio da semana.
              Divida com os membros de sua família a responsabilidade por todas
              as atividades domésticas relacionadas ao preparo de refeições.
              Faça da preparação de refeições e do ato de comer momentos
              privilegiados de convivência e prazer. Reavalie como você tem
              usado o tempo e identifique quais atividades poderiam ceder espaço
              para a alimentação. <br></br>
              <br></br>9. Quando estiver fora de casa, dê preferência a locais
              que servem refeições feitas na hora No dia a dia, procure locais
              que servem refeições feitas na hora e a preço justo. Restaurantes
              de comida a quilo podem ser boas opções, assim como refeitórios
              que servem comida caseira em escolas ou no local de trabalho.
              Evite redes de fast-food. Veja as dicas para se alimentar fora de
              casa de forma saudável <br></br>
              <br></br>10. Seja crítico quanto a informações, orientações e
              mensagens sobre alimentação veiculadas em propagandas Lembre-se de
              que a função essencial da publicidade é aumentar a venda de
              produtos, e não informar ou, menos ainda, educar as pessoas.
              Avalie criticamente o que você lê, vê e ouve sobre alimentação em
              propagandas comerciais e estimule outras pessoas, principalmente
              crianças e jovens, a fazerem o mesmo.
            </Accordion.Body>
          </Accordion.Item>
          <br></br>

          <Accordion.Item eventKey='1'>
            <Accordion.Header>
              Como começar a praticar exercícios físicos Benefícios da atividade
              física para a saúde
            </Accordion.Header>
            <Accordion.Body>
              <img
                src={
                  "https://media.istockphoto.com/photos/assortment-of-colorful-ripe-tropical-fruits-top-view-picture-id995518546?k=20&m=995518546&s=612x612&w=0&h=yPdMHr-CL9JD8eLnyBr2_hFpx6l3jUBU9UEwwdnNfAU="
                }
              ></img>
              <br></br>
              Parece clichê, mas é verdade: o primeiro passo para praticar
              atividade física é querer. Chegando aqui, você já deu um grande
              passo! Preparamos um miniguia com 10 dicas para ajudar você, olha
              só:
              <br></br>
              <br></br>
              1- Iniciantes devem começar com atividades mais leves. Vá aos
              poucos e aumente a intensidade ou o ritmo com o passar das semanas
              <br></br>
              <br></br> 2- Vale chamar quem mora com você ou algum amigo para
              entrar nessa também, mesmo que seja cada um em sua casa: assim
              vocês motivam um ao outro! <br></br>
              <br></br>3- Crie metas realistas para si mesmo. Você não vai ser
              atleta na primeira semana, e tudo bem. Fazer algo é melhor do que
              não fazer nada <br></br>
              <br></br>4- Use o tempo dos afazeres domésticos para se exercitar
              se preferir. Coloque uma música e deixe o corpo se mexer <br></br>
              <br></br>5- Sua prática deve ser regular para ter efeito na saúde.
              No mínimo 30 minutos por dia, cinco vezes na semana é a
              recomendação da Organização Mundial da Saúde (OMS) <br></br>
              <br></br>6- Respeite os limites do seu próprio corpo. O incômodo
              muscular no começo é normal, mas se estiver sentindo muitas dores,
              como na região lombar, por exemplo, algo está errado <br></br>
              <br></br>7- Se sua cidade está em quarentena, procure por
              exercício s que possam ser feitos em casa. Se está em processo de
              reabertura, dê preferência para lugares abertos <br></br>
              <br></br>8- Procure lugares próximos à sua casa se for treinar em
              academias. Não depender de grandes deslocamentos facilita a
              manutenção do hábito <br></br>
              <br></br>9- Alongamento também é um exercício importante. Separe
              um momento ou alguns dos dias de exercício para essa prática{" "}
              <br></br>
              <br></br>10- Mantenha o corpo hidratado, o suor faz o organismo
              perder água E, se você funciona melhor com prazos, vale determinar
              dias e horários fixos da semana para fazer seus exercícios. Do
              contrário, faça na hora que tiver tempo, pois o importante é
              praticar! O autoconhecimento é fundamental nessa hora.
            </Accordion.Body>
          </Accordion.Item>
          <br></br>

          <Accordion.Item eventKey='2'>
            <Accordion.Header>
              A gordofobia no ambiente de trabalho
            </Accordion.Header>
            <Accordion.Body>
              <img src='https://saude.abril.com.br/wp-content/uploads/2022/03/obesidade-1.jpg?quality=85&strip=info&resize=680,453'></img>
              <p>
                Vivemos – e não é de hoje – em uma sociedade que impõe um padrão
                estético que parece incluir a magreza como um valor. Ser magra é
                visto como algo saudável, bonito e, pasme, até capaz de gerar
                oportunidades de <strong>trabalho</strong>. Quando alguém{" "}
                <strong>perde peso</strong>, é logo elogiado por amigos,
                parentes e colegas de escritório.
              </p>
              <p>
                No entanto, poucos se importam em questionar se a perda de peso
                está associada a alguma doença ou transtorno alimentar.
                Emagrecer é visto com um olhar positivo e pronto.
              </p>
              <p>
                Por outro lado, quando alguém , é recriminado, tido como
                descuidado, estigmatizado como alguém desatento à saúde. Também
                aí não se cogitam problemas e/ou tratamentos de saúde nem a
                constituição física, a genética e as condições socioeconômicas
                daquela pessoa.&nbsp;Simplesmente não é tolerado estar fora do
                chamado “peso ideal”, seja lá o que isso possa significar.
              </p>
              <p>
                Apesar de essa “lógica” ser cruel e absolutamente equivocada,
                verdade é que cotidianamente ela induz à ocorrência de uma série
                de situações de{" "}
                <strong>
                  desrespeito, afronta à dignidade, à intimidade, à vida
                  privada, à honra e à imagem
                </strong>{" "}
                de milhões de pessoas.
              </p>
              <p>
                Como não poderia ser diferente, essa questão está também
                presente nas relações de . Pessoas não enquadradas no “padrão
                estético” e no “peso ideal” relatam casos em que foram
                preteridas em entrevistas de emprego, além de uma infinidade de
                exemplos de agressões no dia a dia de trabalho, incluindo piadas
                e insultos relacionados ao corpo, à aparência e ao peso.
              </p>

              <p>
                Incidentes dessa natureza têm sido cada vez mais reportados em
                canais de denúncias e há inúmeras discussões, em ações
                trabalhistas, envolvendo discriminação em razão do peso, a
                chamada <strong>gordofobia</strong>.
              </p>

              <p>
                Ora, como um empregador pode avaliar um candidato e/ou um
                empregado por suas características físicas, sejam elas quais
                forem? Por que o peso pode impactar na escolha de um candidato
                em detrimento de outro? Como um empregador pode ousar manter um
                programa de metas de emagrecimento destinado a seus empregados?
              </p>
              <p>
                Como o ambiente de trabalho pode autorizar ou tolerar insultos
                velados ou declarados em razão do peso? Quer exemplos? Eles
                estão em frases do tipo: “tem um rosto lindo, pena que está
                acima do peso”; “sabia que o plano de saúde cobre cirurgia
                bariátrica?”; “você deveria comer menos”…
              </p>
              <p>
                Evidentemente, não pode! Todas essas situações mostram práticas
                abusivas e discriminatórias e não é necessário ir muito longe
                para concluir que geram constrangimento, aborrecimento,
                humilhação, vergonha do corpo e/ou da condição física.
              </p>

              <div>
                <p>
                  Nenhuma dessas atitudes deve ser aceita e todas elas se
                  classificam como gordofobia, a aversão a pessoas gordas,
                  materializada em preconceito, intolerância ou exclusão. Sendo
                  uma forma de discriminação, cabe à empresa e ao seu time
                  coibir comportamentos dessa natureza no ambiente de trabalho.
                  Essa é uma <strong>obrigação legal</strong> e um{" "}
                  <strong>dever constitucional</strong> previsto em vários
                  artigos da legislação brasileira.
                </p>
                <p>
                  Quem negligencia esse tema pode ficar sujeito a ações
                  trabalhistas na medida em que toda prática discriminatória e
                  limitativa de acesso ao trabalho pode levar à obrigação de
                  indenizar a vítima da conduta. Sim, o combate à gordofobia
                  conta com o suporte da{" "}
                </p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
}
