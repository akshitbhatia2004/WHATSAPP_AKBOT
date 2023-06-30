FROM fusuf/whatsasena:latest
RUN git clone https://github.com/akshitbhatia/WHATSAPP_AKBOT /root/SamPandey001/
WORKDIR /root/SamPandey001/
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]
