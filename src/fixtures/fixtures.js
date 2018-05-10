import fetchMock from "fetch-mock";
import * as user from "./users";

fetchMock.get(/\/users/, user.getUsers);
fetchMock.put(/\/posts\/(\w+)/, user.putUser);
