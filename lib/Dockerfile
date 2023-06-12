FROM quay.io/akshitbhatia2004/whatsapp_akbot
RUN git clone https://github.com/akshitbhatia/WHATSAPP_AKBOT /root/akshitbhatia2004
WORKDIR /root/akshitbhatia2004/
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]
