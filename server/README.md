## FRONTEND ##

npm create vite@latest

## TAILWINDCSS ##
npm install -D tailwindcss
npx tailwindcss init -p
npm install -D postcss autoprefixer

## PHOSPHOR REACT ##
npm install phosphor-react
npm install @headlessuit/react
npm install -D @tailwindcss/forms


## BACKEND ##
npm init -y

npm i typescript @types/node ts-node-dev -D
npx tsc --init

npm i -D express
npm i -D @types/express

## PRISMA ##
npx prisma init
npm i @prisma/client
npm i prisma -D
npx prisma migrate dev
npx prisma studio

## NODEMAILER ##
npm install nodemailer
npm install @types/nodemailer -D

## JEST ##
npm install jest -D
npx jest --init
npm install ts-node -D

## SWC ##
npm i -D jest @swc/core @swc/jest

transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },

  npm i @types/jest -D