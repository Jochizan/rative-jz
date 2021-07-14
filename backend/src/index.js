import app from './app';

app.set('PORT', 5200);

app.listen(app.get('PORT'), () => {
  console.log('Server listen on http://localhost:' + app.get('PORT'));
})