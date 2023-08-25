const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const packageDefinition = protoLoader.loadSync("./todo.proto", {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const todoProto = grpc.loadPackageDefinition(packageDefinition);
// const todoProto = grpc.load("todo.proto");
const todoService = todoProto.TodoService;
const server = new grpc.Server();

const todos = [
  {
    id: "1",
    title: "todo 1",
    content: "Content of todo 1",
  },
  {
    id: "2",
    title: "todo 2",
    content: "Content of todo 2",
  },
  {
    id: "3",
    title: "todo 3",
    content: "Content of todo 3",
  },
];

server.addService(todoService.service, {
  ListTodo: (call, callback) => {
    callback(null, { todos: todos });
  },
  createTodo: (call, callback) => {
    let incomingNewTodo = call.request;
    todos.push(incomingNewTodo);
    callback(null, incomingNewTodo);
  },
  GetTodo: (call, callback) => {
    let todoId = call.request.id;
    const response = todos.filter((todo) => todo.id == todoId);
    if (response.length > 0) {
      callback(null, response);
    } else {
      callback(
        {
          message: "Todo not found",
        },
        null
      );
    }
  },
});

server.bindAsync(
  "127.0.0.1:5001",
  grpc.ServerCredentials.createInsecure(),
  () => {
    console.log("Server started");
    server.start();
  }
);
