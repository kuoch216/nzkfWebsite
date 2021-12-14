FROM node:16.13.1

# Create app directory

WORKDIR /nzkfWebsite/
RUN ls -al
# Bundle app source
COPY . /nzkfWebsite

# Install app dependencies
COPY package.json /
#RUN npm install

EXPOSE 3000
CMD ["npm", "start"]