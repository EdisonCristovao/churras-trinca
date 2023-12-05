# Churras-trinca

Disponivel em - [Churras-trinca live](https://churras-trinca.cristovao.codes/)

Foi usado `Next-Auth` para controle de sessão. As credenciais se encontram estaticas dentro do projeto em `users.json` apenas para testes, esse arquivo pode ser editado ou usar as credenciais ja configuradas.

```json
{
  "users": [
    { "login": "trinca01", "password": "semsenha" },
    { "login": "trinca02", "password": "comsenha" }
  ]
}
```

<p align="center">
  <img src="docs/login.png" width="250" />
  <img src="docs/churrasList.png" width="250" />
  <img src="docs/ChurrasDetail.png" width="250" />
</p>

## Como rodar

Primero instale os pacotes, então rode no servidor local

```bash
yarn install
yarn dev
# http://localhost:3000
```

## Environment Variables

Para rodar o projeto será necessário 2 variaveis de ambiente

`NEXTAUTH_URL`

`NEXTAUTH_SECRET`

## Pacotes usados

- Next 13.4
- next-auth
- tailwindcss
- date-fns
- lodash
- react-hook-form
- yup
- react-input-mask
- react-toastify

## Informações relevantes

- O projeto armazena os churras no localstorage, foi criado uma camada de abstração `src/service/{churras e person}` para lidar com isso. Caso precisasse ser integrado com alguma api ou BAAS seria muito mais simples, só atualizar os services.

## Dificuldades

- Minha primeira grande decisão foi usar ou não o next com app router (app folder), usando next 13 com app router, nao poderia usar um `chakra` por limitações da própria lib. Então usei o `tailwindcss`
- Iniciei o projeto com `Next 14`, porem tive um problema com `next-auth` que precisou ser feito um downground para a 13, afinal, muita coisa e sem tempo a perder não é :D
- Não entendi muito bem a diferença da descrição do churras para observações, acabei não mostrando isso na tela na página de detalhes do churrasco.

## Melhorias

- Aproveitaria mais os server side components.
- Melhoraria as validações de formulários e mensagens de feedback.
- Melhor uso de loadings
