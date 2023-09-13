# NFT-AUCTION
​
## Prerequisites
​
-Node.js (v18.14.2)
-yarn or npm
​
## Installation
​
```yarn install```

1.This command will read package.json file and it will install all the  necessary specified dependencies
2.Yarn will download and install the required packages from package registry and will store them in 'node_modules' directory
​
## Setting Redis on Docker
​
Install Docker and then follow these steps to setup Redis using Docker

1.Ensure that Docker is installed:
```docker -v```

2.Pull the Redis Docker Image:
```docker pull redis```

3.Run a Redis Container:
```docker run -d -p 6379:6379 --name my-redis redis```

4.Verify that the redis container is running:
```docker ps```

## Environment Setup

1. Create a ```.env``` file and copy content from ```.env.example``` into it
2. Run command ```yarn start:dev``` to run the server

​
## Api Call in Curl Format
​
To create an auction use the following example call:
​
Example API call :
````
curl -X POST -H "Content-Type: application/json" -d '{
  "seller": "0x0123456789abcdef0123456789abcdef0123456",
  "tokenId": "token123",
  "displayPrice": 100,
  "actualPrice": 150,
  "status": "STATUS_OPEN",
  "startAt": "2023-06-28T10:00:00Z",
  "endAt": "2023-06-30T10:00:00Z"
}' <http://localhost:5000/auction/create>
````
​
## Testing
​
To run tests for the project ,run the following command:

```yarn test```

This command will execute the tests and will provide the test results


## System Diagram

System Diagram is present in ```./auction.png``` file