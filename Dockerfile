FROM node:latest
RUN git clone https://github.com/akshitbhatia2004/WHATSAPP_AKBOT /root/akshitbhatia2004/
WORKDIR /root/akshitbhatia2004/
ENV TZ=Asia/Kolkata
RUN npm install -g yarn
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]
