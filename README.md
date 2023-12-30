# Simplicity Embed React Example (React + Vite + Typescript)

This project demonstrates the use of the Simplicity Embed&trade; web component in a React starter project using Vite.

## Free Test License
To use the Simplicity Embed&trade; web component you first need to obtain a free trial license or purchase a license. This is available at: <https://www.simplicitywebtools.com>.

## Sample Widget
This example references a vanilla JavaScript widget example that demonstrates 
<https://github.com/mfoitzik/SimplicityEmbedVanillaJS>
```
git clone https://github.com/mfoitzik/SimplicityEmbedVanillaJS
```
Open the project in Visual Studio Code and run Live Server or run the code in your dev server of choice. You just need to pay attention to the URL/port it is running on as you will need top reference it later.

## Instructions
You can follow the instructions in the Simplicity Embed&trade; documentation found on the <https://www.simplicitywebtools.com> website. These instructions will walk you through starting a React project from scratch and then integrating the Simplicity Embed&trade; web component.

Alternatively you can just clone the sample repo and check out how it works:

```
git clone https://github.com/mfoitzik/simplicity-embed-angular-standalone-example.git
npm install
ng serve --open
```

Please note: The <simplicity-embed> component in the App.tsx file references the setup file being at: http://localhost:5500/config.json, you may need to change the port numnber depending on what Live Server (or your dev server of choice) assigns as the port number.
