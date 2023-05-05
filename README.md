# Food Explorer

![Logo](https://raw.githubusercontent.com/GomidesTs/food-explorer-back-end/17c651de31265dcc961c11b01d309fbd9bfa14b8/.github/logo.svg)

## Sobre

O Food Explorer é uma aplicação web desenvolvida com tecnologias como React.js no front-end e Node.js no [back-end](https://github.com/GomidesTs/food-explorer-back-end) que proporciona uma experiência completa de navegação e compra de alimentos para clientes de um restaurante. Com funcionalidades como customização de perfil, filtragem de favoritos e carrinho 100% funcional com opções de pagamento em cartão ou Pix, o projeto oferece segurança e praticidade aos usuários.

Além disso, o administrador tem acesso para criar, editar e remover pratos, além de poder alterar o status dos pedidos, que são imediatamente atualizados na tela dos consumidores. O destaque é a responsividade do projeto, que se adapta a diversos tipos de dispositivos, incluindo desktops, tablets e smartphones.

Os usuários precisam se cadastrar para utilizar os serviços disponibilizados na plataforma, que conta ainda com recursos adicionais, como customização do perfil do usuário (avatar, nome e senha) e diversos efeitos visuais que tornam a navegação mais agradável e intuitiva.

Em resumo, o Food Explorer é uma plataforma completa e eficiente para navegar e realizar compras de alimentos de forma segura, prática e intuitiva, que proporciona uma experiência agradável e personalizada aos seus usuários.

## Tecnologias

As seguintes tecnologias foram empregadas na no desenvolvimento do front-end:

- axios
- react
- react-dom
- react-icons
- react-router-dom
- styled-components
- swiper
- vite

## Como utilizar

Clone o projeto para o local desejado em seu computador.

```bash
git clone https://github.com/GomidesTs/food-explorer-front-end.git
```

Execute o front-end

```bash
# Na raiz do projeto renomeie o arquivo .env.example para .env e insira a vite url
VITE_URL =

# Navegue até o diretório do front-end
cd food-explorer-frontend

# Instale as dependências necessárias
npm install

# Agora inicie o servidor do frontEnd
npm run dev

# O terminal irá exibir o endereço local onde a aplicação está sendo executada. Basta digitar o mesmo endereço em seu navegador preferido. O endereço usado na criação do projeto foi este:

# http://localhost:5173/
```

## Veja o resultado final

Você observará a união desse repositório com o [back-end](https://github.com/GomidesTs/food-explorer-back-end), crie uma conta e desfrute da aplicação.

### Quer ver como a aplicação funciona vista pelo administrador? Use a conta a seguir

  `e-mail: admin@foodexplorer.com`  `senha: rocketseat`

O servidor deste projeto foi hospedado no [Render](https://render.com/), um serviço de hospedagem gratuito. É importante ressaltar que, por estar hospedado em um serviço gratuito, o back-end entra em estado de hibernação após 15 minutos sem utilização. Caso o usuário tente acessar o site e o back-end não responda, é necessário aguardar um pouco, pois ele estará "inicializando" os serviços novamente. Essa etapa pode levar até 1 minuto, dependendo da carga nos servidores do Render. É importante destacar que esse tempo de inicialização pode afetar o desempenho da aplicação, especialmente em períodos de alta demanda.

Por outro lado, o front-end foi hospedado na plataforma [Netlify](https://www.netlify.com/), que permite hospedar sites e aplicativos web de forma gratuita. Para que o front-end funcione corretamente, é fundamental que o servidor de back-end esteja em funcionamento e respondendo corretamente. Caso contrário, o front-end pode apresentar erros ou comportamentos inesperados.

[O resultado FINAL pode ser visto aqui](https://delicate-belekoy-60cb5c.netlify.app/)

## Capturas de tela

A interface da aplicação terá mudanças de layout dependendo do usuário logado e de suas restrições, o que afetará a exibição de mecânicas e ícones na tela. Abaixo estão apresentados gifs e capturas de tela que demonstram os diferentes estados separados por usuários padrão e administradores. Essas alterações no layout visam oferecer uma experiência mais personalizada e adequada às necessidades de cada tipo de usuário. Além disso, é importante ressaltar que essas mudanças estão diretamente relacionadas às permissões de acesso definidas para cada tipo de usuário, garantindo assim maior segurança e privacidade no uso da aplicação.

### Usuário padrão

- Página home
![Home](https://github.com/GomidesTs/-food-explorer-front-end/blob/main/.github/home%20user.png?raw=true)

- Página favoritos
![Favorites](https://github.com/GomidesTs/-food-explorer-front-end/blob/main/.github/favoritos.png?raw=true)

- Aplicação segundo usuário padrão
![User](https://github.com/GomidesTs/-food-explorer-front-end/blob/main/.github/gifUser.gif?raw=true)

### Usuário administrador

- Página home
![Home](https://github.com/GomidesTs/-food-explorer-front-end/blob/main/.github/homeAdin.png?raw=true)

- Aplicação segundo usuário administrador
![Admin](https://github.com/GomidesTs/-food-explorer-front-end/blob/main/.github/gitAdmin.gif?raw=true)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Authors

- [@GomidesTs](https://github.com/GomidesTs)
