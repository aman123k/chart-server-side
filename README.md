# Chart Data Server

This server application is designed to handle chart data using a MongoDB database. It provides endpoints to insert and retrieve chart data.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [License](#license)

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and set the following environment variables:
   ```env
   PORT="8000"
   DATABASE_URL="your_mongodb_connection_string"
   RequestPort="http://localhost:3000"
   ```

## Environment Variables

- `PORT`: The port on which the server will run (default is 8000).
- `DATABASE_URL`: The connection string for your MongoDB database.
- `RequestPort`: The origin for CORS requests.

## Usage

To start the server, run the following command:

```bash
npm start
```

The server will be running at `http://localhost:8000`.

## Endpoints

- **Insert Chart Data**

  - **Method**: `POST`
  - **URL**: `/insert`
  - **Description**: Inserts chart data from a JSON file into the database.

- **Retrieve Chart Data**
  - **Method**: `GET`
  - **URL**: `/retrieve`
  - **Description**: Retrieves chart data from the database. Supports query parameters for filtering.

## License

This project is licensed under the MIT License.
