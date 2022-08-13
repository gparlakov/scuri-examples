FROM node:8-alpine
WORKDIR /angular-5-app
COPY . .
RUN ["npm", "install"]
EXPOSE 4200
ENTRYPOINT [ "npm i scuri && cd src && npx ng g scuri:autospy && cd .." ]
