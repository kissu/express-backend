import express from 'express'
const app = express()
const port = 3000

const todos = [
  {
    title: "Todo 1",
    desc: "This is my first Todo",
    completed: true,
  },

  {
    title: "Todo 2",
    desc: "This is my second Todo",
    completed: true,
  },

  {
    title: "Todo 3",
    desc: "This is my third Todo",
    completed: true,
  },

  {
    title: "Todo 4",
    desc: "This is my fourth Todo",
    completed: true,
  },

  {
    title: "Todo 5",
    desc: "This is my fifth Todo",
    completed: true,
  },
]

app.get("/", (request, response) => {
  response.status(200).json(todos);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
