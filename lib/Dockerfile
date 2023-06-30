FROM fusuf/whatsasena:latest
RUN git clone https://github.com/akshitbhatia2004/WHATSAPP_AKBOT /root/akshitbhatia2004/
WORKDIR /root/akshitbhatia2004/
RUN npm install -g npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]
