import express, { json, urlencoded } from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import figlet from 'figlet';
import gradient from 'gradient-string';
import boxen from 'boxen';
import projectRoutes from './routes/projectRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

app.use('/api/projects', projectRoutes);

app.get('/', (req, res) => {
  res.json({
    message: 'Ceci est la route principale de mon API de gestion scolaire',
    version: '1.0.0',
  });
});

app.get('/test-route', (req, res) => {
  res.json({
    message: 'Ceci est la route test de mon API de gestion scolaire',
    version: '1.0.1',
  });
});

app.listen(PORT, () => {
  const msg = figlet.textSync('Serveur Lancer!', {
    font: 'Standard',
    horizontalLayout: 'default',
    verticalLayout: 'default',
  });

  const gradientMsg = gradient.rainbow.multiline(msg);

  const boxedMessage = boxen(
    `🎉 Serveur démarré avec succès!\n👉 URL: http://localhost:${PORT}`,
    {
      padding: 1,
      margin: 1,
      borderStyle: 'round',
      borderColor: 'green',
    }
  );

  console.log(gradientMsg);
  console.log(boxedMessage);
});
