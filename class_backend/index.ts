import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import { Board } from "./Board.postgres";

const typeDefs = gql`
  type Board {
    number: Int
    writer: String
    title: String
    age: Int
  }

  input CreateBoardInput {
    writer: String!
    title: String!
    age: Int!
  }

  type Query {
    fetchBoards: [Board]
  }

  type Mutation {
    createBoard(createBoardInput: CreateBoardInput!): String
    deleteBoard(number: Int!): String
  }
`;

// API = 함수(function)
const resolvers = {
  Query: {
    fetchBoards: async () => {
      // DB와 연결
      const result = await Board.find({
        where: { writer: "낭콩", deletedAt: null },
      });
      // find() 만 입력 할 경우 데이터를 다 찾아 올수 있음
      // findOne() => 목록 조회
      console.log(result);

      return result;
      // result 안에는 number, writer, title, age가 다 들어있음
    },
  },

  Mutation: {
    createBoard: async (_: any, args: any) => {
      // parent인데 아직 사용하지 않아 _으로 표시함 = 데이터가 많을 때 사용한다고 함
      // DB와 연결
      await Board.insert({
        ...args.createBoardInput,
        // ↑위 또는 ↓아래 둘 중 하나만 입력하면 됨
        /* writer: args.createBoardInput.writer,
        title: args.createBoardInput.title,
        age: args.createBoardInput.age, */
      });
      return "createBoard를 요청하셨습니다.";
    },
    deleteBoard: (_: any, args: any) => {
      args.boardId;
      Board.update({ number: args.number }, { deletedAt: new Date() });
      // Board.delete({ writer: "낭콩" });

      return "삭제가 완료되었습니다";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  /* key와 value가 같기 때문에 생략 가능함 */
  cors: true, // 선택적으로 true를 하고 싶다면 true를 지우고 { origin:"" } url을 삽입하면 된다
  /* typeDefs: typeDefs,
  resolvers: resolvers, */
});

console.log("Hello Typescript");

createConnection({
  type: "postgres",
  database: "postgres",
  username: "postgres",
  password: "postgres2021",
  port: 5018, // 각자의 포트로 입력
  host: "34.64.187.209",
  entities: ["./*.postgres.ts"],
  logging: true,
  synchronize: true,
})
  .then(() => {
    // 연결 성공시 실행
    console.log("접속 완료");

    server.listen({ port: 4000 });
  })
  .catch((error) => {
    // 연결 실패시 실행
    console.log(error);
  });
