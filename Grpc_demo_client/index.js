const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const packageDefinition = protoLoader.loadSync("./todo.proto", {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
var todoService = protoDescriptor.TodoService;

const client = new todoService(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

client.listTodo({}, (err, todos) => {
  if (!err) {
    console.log(todos);
    client.createTodo(
      { id: 4, title: "third todo", content: "yooo" },
      (err, todo) => {
        if (!err) {
          console.log("created a new todo");
          client.listTodo({}, (err, todos) => {
            console.log("after insertion", todos);
          });
        } else {
          console.log(err);
        }
      }
    );
  }
});
