FROM  quay.io/sampandey001/secktor
RUN git clone https://github.com/akshitbhatia2004/WHATSAPP_AKBOT /root/akshitbhatia2004/
WORKDIR /root/akshitbhatia2004/
ENV TZ=Asia/Kolkata
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
