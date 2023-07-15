FROM node:18-alpine
WORKDIR ./
COPY  . .
RUN npm install --omit=dev
CMD ["node","server.js"]
EXPOSE 8000
