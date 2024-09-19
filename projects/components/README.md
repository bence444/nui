# Nui Components

## Important Note: This package is currently a concept.

## Installation

To get started, please install Tailwind CSS by running the following commands:
```bash
$ npm install tailwindcss postcss autoprefixer --save-dev
$ npx tailwindcss init
```

Next, install Angular CDK:
```bash
$ npm install @angular/cdk
```

Finally, install NuiComponents:
```bash
$ npm install nui-components
```

## Usage

In your `styles.css`, you can apply the components you want to use in your project with the `@use` directive. For example:
```css
@use 'nui-components/src/assets/button.component';

@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Customizing Components

You can customize the components by applying any Tailwind class using `@apply`, or by writing standard CSS. For example:
```css
._n_button-rounded-auto {
  @apply rounded-none;
}
```
Alternatively:
```css
._n_button-rounded-auto {
  border-radius: 0;
}
```
