# Na Brasa

Aplicacao web de uma churrascaria desenvolvida com Next.js, React e SASS.

## Visao geral

O projeto apresenta uma landing page com secoes de:

- navegacao principal com menu responsivo
- cardapio (pratos e bebidas) com slides
- sobre
- equipe
- cozinha
- depoimentos
- contato
- rodape e botao de voltar ao topo

## Tecnologias

- Next.js 16
- React 19
- TypeScript
- SASS
- Swiper
- Lucide React
- Font Awesome

## Requisitos

- Node.js 20+
- pnpm 12+

## Como executar

Instale as dependencias:

```bash
pnpm install
```

Inicie o ambiente de desenvolvimento:

```bash
pnpm dev
```

Abra em:

```text
http://localhost:3000
```

## Scripts disponiveis

```bash
pnpm dev    # executa em modo desenvolvimento
pnpm build  # gera build de producao
pnpm start  # sobe a aplicacao em modo producao
pnpm lint   # executa o lint
```

## Estrutura principal

```text
src/
	app/
		layout.tsx
		page.tsx
	components/
		about/
		button/
		contact/
		footer/
		icon-button-back-to-top/
		kitchen/
		menu-card-item/
		menu-nav/
		navigation/
		slide/
		team-card/
		testimonial-card/
		menu-slide.tsx
		section-header.tsx
		testimonials-slide.tsx
	data/
	sass/
public/
	images/
```

## Design e estilos

- Os estilos globais estao em `src/sass/global.sass`.
- O projeto utiliza arquitetura por componente, com arquivo SASS local em cada pasta de componente.

## Licenca

Uso interno do projeto.
