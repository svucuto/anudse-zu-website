# ANUDSE-ZU — Website institucional

Website estático da Associação Zumbo Unido – Nativos Unidos para o Desenvolvimento Solidário e Empreendedorismo. As oito páginas usam HTML5 semântico, Bootstrap 5, CSS e JavaScript Vanilla. A edição e a publicação dispensam uma etapa de compilação.

## Abrir e testar localmente

Abra `index.html` para consultar o conteúdo. Para testar em HTTP, execute na raiz do projecto, com Python 3 instalado:

```sh
python -m http.server 8080 --bind 127.0.0.1
```

Abra `http://127.0.0.1:8080/`. Termine o servidor com Ctrl+C. Os recursos do site são servidos localmente.

## Arquitectura

| Página | Conteúdo e percurso |
| --- | --- |
| `index.html` | Apresentação, objectivos, missão, projectos e três formas de participar |
| `sobre.html` | Enquadramento, natureza, missão, visão e valores e objectivos estatutários |
| `areas.html` | Cinco áreas com exemplos de iniciativas possíveis |
| `projectos.html` | Catálogo com estado vazio e suporte a filtros, detalhes e galerias |
| `associados.html` | Categorias, direitos, deveres, quota e informações sobre adesão |
| `estrutura.html` | Organograma, responsabilidades e composição estatutária |
| `transparencia.html` | Categorias de documentos e informação sobre disponibilidade |
| `contactos.html` | Sede, canais, preparação de mensagem e propostas de colaboração |

A estrutura da página inicial segue esta ordem. Cabeçalho → abertura ilustrada → factos institucionais → quem somos → cinco áreas → missão → projectos → participação → contacto → rodapé. Nas páginas internas, o percurso de navegação antecede o título, o conteúdo principal e a ligação para o próximo passo.

## Design system

- Verde institucional `#176B45` nos botões, ícones e ligações. Azul profundo `#173B63` nos convites institucionais. Dourado `#D6A64C` nas linhas, detalhes e realces.
- Branco, creme e verde muito claro como fundos. Cinza escuro `#27313B` no texto corrido. Manrope nos títulos e Inter no corpo, com fontes de sistema como alternativa.
- Títulos e margens usam escalas fluidas. Cartões, estados vazios, selos, botões e molduras de imagem partilham os estilos em `assets/css/site.css`.
- O grafismo e as ilustrações editoriais são provisórios. As ilustrações assinaladas são composições vectoriais e não documentam locais, pessoas ou actividades.

## Actualizar conteúdos

Edite as páginas HTML directamente. Mantenha o cabeçalho e o rodapé consistentes nas oito páginas, bem como `aria-current="page"` na ligação correspondente. A navegação, os filtros e a preparação de email partilham `assets/js/site.js`.

- **Conteúdo institucional.** O preâmbulo e os artigos 1.º a 11.º do Estatuto de 2025 fundamentam a apresentação, os objectivos, as categorias de membros, a quota e os órgãos sociais. Valide a formulação da missão e aprove a visão, os valores e a marca antes de os apresentar como oficiais.
- **Projectos.** Em `projectos.html`, copie o modelo comentado para dentro de `.projects-list`. Preencha o título, as fotografias autorizadas com texto alternativo, a descrição e os detalhes. Use o estado apenas quando confirmado. Em `data-project-area`, indique uma ou mais categorias, separadas por espaços, usando os valores dos botões `data-filter`. Com cartões publicados, acrescente uma ligação de destaque ao catálogo em `index.html` e retire os avisos de estado vazio do HTML. Os filtros são um melhoramento em JavaScript e as fichas são legíveis com JavaScript desactivado.
- **Estrutura.** Utilize o modelo comentado em `estrutura.html` para divulgar apenas os titulares, cargos e imagens autorizados. A composição estatutária está separada da identificação dos titulares.
- **Documentos.** Coloque ficheiros autorizados em `assets/documents/` e use o modelo de ligações de visualização e download em `transparencia.html`. Prefira PDFs com texto pesquisável e estrutura acessível. A aprovação do Estatuto e a autorização de divulgar a sua cópia digital são decisões distintas.
- **Contactos.** Após aprovação do endereço institucional, preencha o atributo `data-email` do formulário em `contactos.html` com esse endereço. Para assegurar o acesso sem JavaScript, preencha também a ligação `data-email-link` com o texto do endereço e o respectivo `href="mailto:…"`, retire `hidden` e remova o aviso `data-email-pending`. Actualize as mensagens de disponibilidade em `associados.html` e `contactos.html`. O formulário valida os campos obrigatórios e abre um rascunho no programa de email da pessoa. A transmissão acontece quando a pessoa envia a mensagem através do seu programa. A configuração inicial mantém os campos desactivados. Acrescente telefone, redes oficiais e horário apenas depois da respectiva confirmação. Inclua um mapa apenas depois de confirmar as coordenadas e aprovar o seu uso.
- **Imagens e marca.** Substitua a proposta de marca em `assets/icons/marca.svg` pela versão aprovada e actualize a nota no rodapé. Antes de substituir as ilustrações, registe a autoria, a licença, a localização e as autorizações de uso de imagem aplicáveis. Para fotografias novas, use WebP ou AVIF e mantenha dimensões explícitas no HTML. Use carregamento diferido fora da abertura.

## Publicação no GitHub Pages

O endereço previsto é `https://svucuto.github.io/anudse-zu-website/`. O projecto serve `index.html` e os recursos directamente a partir da raiz do ramo de publicação. O ficheiro `.nojekyll` permite servir os ficheiros estáticos como estão.

1. Confirme os conteúdos, os canais de contacto e os ficheiros autorizados. Mantenha os avisos para a informação pendente.
2. No repositório GitHub, abra **Settings → Pages** e seleccione **Deploy from a branch**. Escolha `main` e `/ (root)` e guarde.
3. Depois de o site estar disponível, confirme HTTPS, abra as oito páginas e verifique os recursos, as ligações internas e as âncoras. Repita a auditoria Lighthouse no endereço público.
4. Se mudar o proprietário, o nome do repositório ou o domínio, actualize as URLs em `sitemap.xml`, `robots.txt` e nos metadados canonical e Open Graph das oito páginas.

O sitemap está na pasta pública do projecto. Para regras de rastreio ao nível do domínio, o `robots.txt` tem de estar em `https://svucuto.github.io/robots.txt`. O ficheiro do subdirectório é uma referência para essa configuração.

A hospedagem serve recursos locais, sem cookies de marketing ou rastreadores. O formulário aguarda um canal autorizado. Numa eventual migração para outra hospedagem estática, mantenha HTTPS, active compressão de texto e configure os cabeçalhos de segurança, incluindo `X-Content-Type-Options: nosniff` e uma política CSP adequada.

### Informações a confirmar

- Aprovação do endereço de publicação e email institucional autorizado. Telefone, horário, redes oficiais e coordenadas só entram quando confirmados.
- Aprovação da marca, da visão e dos valores. Validação institucional da formulação da missão e autorização das fotografias que venham a substituir as ilustrações.
- Autorização específica para divulgar a cópia do Estatuto e outros documentos, para identificar os titulares e para publicar fichas de projectos. Confirmação do valor mensal em vigor caso a associação queira divulgá-lo.

## Verificações finais

### Lighthouse

Auditoria local de 8 de Novembro de 2026 em Windows, com Lighthouse 12.8.2 e Chrome Headless 156.0.8078.81. O site foi servido pelo `http.server` do Python no endereço de loopback, sem compressão HTTP. A emulação móvel usou 412 × 823 px, 150 ms de latência, 1638 kbit/s, CPU 4× mais lenta, limitação simulada e reposição de armazenamento activa. O ensaio de desktop usou o perfil predefinido do Lighthouse. As auditorias correram em série. Projectos e Associados foram medidos três vezes, com ordem alternada. Início, Áreas de actuação e Contactos tiveram duas repetições no mesmo perfil depois de uma leitura abaixo de 90.

O desempenho de referência é a mediana quando existem três amostras. Acessibilidade, boas práticas e SEO apresentam o valor mínimo medido. Todas as amostras da verificação final constam da tabela.

| Página | Perfil | Medições de desempenho | Referência | Acessibilidade | Boas práticas | SEO |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| Início | Móvel | 76, 98, 96 | 96 | 100 | 100 | 100 |
| Sobre nós | Móvel | 99 | 99 | 100 | 100 | 100 |
| Áreas de actuação | Móvel | 81, 100, 98 | 98 | 100 | 100 | 100 |
| Projectos | Móvel | 98, 99, 99 | 99 | 100 | 100 | 100 |
| Associados | Móvel | 99, 96, 99 | 99 | 100 | 100 | 100 |
| Estrutura | Móvel | 99 | 99 | 100 | 100 | 100 |
| Transparência | Móvel | 100 | 100 | 100 | 100 | 100 |
| Contactos | Móvel | 79, 100, 99 | 99 | 100 | 100 | 100 |
| Início | Desktop | 100 | 100 | 100 | 100 | 100 |

### Variação em Projectos

As leituras históricas de 75 e 80 coincidiram com tempos de bloqueio (TBT) de 1 290 ms e 820 ms, respectivamente. A leitura de 99 ficou sem penalização de TBT. Uma série anterior num perfil separado deu 93, 100 e 50. Na última leitura dessa série, o primeiro conteúdo visível (FCP) e o maior elemento visível (LCP) foram ambos de cerca de 10 s, com TBT de 280 ms.

| Ensaio final | Desempenho | FCP (ms) | LCP (ms) | TBT (ms) |
| --- | ---: | ---: | ---: | ---: |
| 1 | 98 | 1068 | 1218 | 139 |
| 2 | 99 | 1656 | 1731 | 0 |
| 3 | 99 | 1660 | 1810 | 0 |

Nos três ensaios finais, os pedidos foram locais, devolveram HTTP 200 e transferiram o mesmo volume, cerca de 117 kB com cabeçalhos. O último CSS terminou entre 102 e 269 ms na cronologia de rede. A análise e execução de JavaScript atribuídas à página ficaram entre 5,6 e 22,3 ms. O catálogo vazio apenas consulta o DOM e a lógica de filtragem fica inactiva até existirem fichas. As maiores tarefas dos traços foram classificadas como `Other`, categoria genérica do navegador. Também surgiram picos da mesma categoria em Início, Áreas de actuação e Contactos, após o carregamento do CSS e do JavaScript.

O padrão é compatível com variação do navegador ou do ambiente de testes. Os registos das amostras históricas de 75 e 80 não guardaram traços completos para atribuir a causa exacta. A análise não demonstrou um defeito reproduzível no JavaScript, no CSS ou nos recursos do catálogo. O código, os conteúdos e os recursos do site foram preservados. Os resultados são de laboratório e devem ser repetidos no domínio publicado, com o perfil e as condições registados.

### Navegação, acessibilidade e conteúdos

- Oito páginas testadas em Chrome a 320, 390, 768, 1024, 1041, 1100 e 1440 px, sem transbordo horizontal. A navegação de base também foi testada sem JavaScript a 320 px.
- 176 ligações e âncoras verificadas no navegador. A verificação estática validou 249 referências, incluindo recursos e metadados, e as oito entradas do modelo de sitemap.
- Teclado verificado no atalho para o conteúdo e na abertura, navegação e fecho do menu móvel. Axe-core 4.10.3 passou nas oito páginas em desktop e no menu móvel aberto para as regras WCAG 2.0 e 2.1 A/AA abrangidas pela ferramenta. A análise foi automatizada e complementada por testes por teclado.
- Catálogo vazio, navegação para adesão e formulário desactivado verificados. Os filtros e o rascunho de email foram exercitados com dados temporários interceptados pelo teste.
- O catálogo público contém o estado vazio, as cinco áreas apresentam exemplos como possibilidades, a quota indica o intervalo estatutário e o valor em vigor está por confirmar. As propostas de visão e valores e a marca estão assinaladas. A verificação do HTML público confirmou que os dados de teste, os contactos por confirmar, os titulares e os PDFs por autorizar ficaram fora dos conteúdos publicados.

## Licenças de terceiros

Os avisos de licença de Bootstrap, Bootstrap Icons, Manrope e Inter estão junto dos recursos correspondentes em `assets/`.
