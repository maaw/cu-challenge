import { createServer } from './server';

const PORT = 3000;

createServer().listen(PORT, () => {
  console.log(
    `Server is running on localhost:${PORT}, graphql ui endpoint: http://localhost:3000/graphql`
  );
});
