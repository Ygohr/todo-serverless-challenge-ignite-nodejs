import { APIGatewayProxyHandler } from "aws-lambda";
import { document } from "src/utils/dynamoDbClient";
import { v4 as uuidV4 } from "uuid";

interface ITodo {
    tittle: string;
    deadline: string
};

export const handle: APIGatewayProxyHandler = async (event) => {
    const { user_id } = event.pathParameters;
    const { tittle, deadline } = JSON.parse(event.body) as ITodo;

    await document.put({
        TableName: "todos",
        Item: {
            id: uuidV4(),
            user_id: user_id,
            tittle,
            done: false,
            deadline
        }
    }).promise();

    return {
        statusCode: 201,
        body: JSON.stringify({
            message: `Todo ${tittle} created!`
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }
}