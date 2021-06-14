FROM node:12-alpine

# Copy in all necessary files.
COPY index.js .
COPY controllers ./controllers
COPY models ./models
COPY routes ./routes
COPY server ./server
COPY build/node_modules node_modules/

# Expose the environment and ports
ENV PORT 3000
EXPOSE 3000

# Run our app.
CMD ["node", "index.js"]