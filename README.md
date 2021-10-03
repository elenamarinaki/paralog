# Paralog 🪵

An app to log the unlikely.-

<img src='https://media.giphy.com/media/3oxHQyRR6Jq3MCQQvK/giphy.gif' width=300/>

## 😉

---

## Things I am learning while building the application ✨

### Sample `API` 😃

- Array of objects as data:

```js
const items = [
  {
    id: 1,
    name: 'item1',
    status: 'active',
  },
  {
    id: 2,
    name: 'item2',
    status: 'active',
  },
  {
    id: 3,
    name: 'item3',
    status: 'inactive',
  },
];
```

- Access it on the server!

```js
server.get('/api/items', (req, res) => {
  res.json(items);
});
```

### Deploying to `Heroku` 🏮

[Heroku Documentation](https://devcenter.heroku.com/articles/git#deploying-code)

```terminal
heroku login
```

> create `Procfile` and add the _text_ **_web: node server.js_**

```
heroku create
git remote -v
git push heroku main
```
