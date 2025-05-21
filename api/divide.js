export default function handler(req, res) {
  const { a, b } = req.query;
  if (!a || !b) return res.status(400).json({ error: 'Parâmetros obrigatórios' });
  if (parseFloat(b) === 0) return res.status(400).json({ error: 'Divisão por zero' });
  res.status(200).json({ result: parseFloat(a) / parseFloat(b) });
}
