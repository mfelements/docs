# What is it?

**MFElements** is a Web UI Platform As A Service made for creating service applications.  
Originally created to provide developers an easy access for [Metapolis Freeland](https://freeland.land/) infrastructure.  
Has **very** simple JSON API and provides convenient way to design your own services without looking for compatibility issues.

# Server side
## How it works?

Let's explore it with a simple example.  
Client (which is a browser located at https://mfelements.github.io/service.com) simply calls the API method `getIndex()` with no parameters. The method **must** return an object of main page.

Request:
```http
GET /getIndex HTTP/1.1
Host: service.com
```

Response:
```http
HTTP/1.1 200 OK
Content-Type: application/json
Access-Control-Allow-Origin: *
Access-Control-Allow-Headers: *

{
	"type": "page",
	"children": [
		"Hello MFElements!"
	],
	"title": "MFElements Hello Page"
}
```

**Page** object is an entrypoint. There is a lot more objects that described with own classes which may be inserted to **Page.children** array to be shown on page. All of them can be [found here](./modules/_elements_d_.html)

## Usage

### Request

Request method could be **GET**, **POST** or **OPTIONS** (last one automatically made by browsers before POST for optimization).

**OPTIONS**: just reply with 200 code.

**POST**: server should read request path as method name and body as JSON-formatted array of arguments.  
Example:
```http
POST /getIndex HTTP/1.1
Host: service.com

["first arg", 2, null, false]
```

**GET**: server should need to process request like in **POST** but completely without arguments.

### Response

The response should contain next http headers:
```http
HTTP/1.1 200 OK
Content-Type: application/json
Access-Control-Allow-Origin: *
Access-Control-Allow-Headers: *
```

Response body - encoded object in JSON with just one field - **error** or **data**.

**error** should be returned only when exception occurs on backend side and represents a string with error description for user. Example:
```json
{
	"error": "User VPupkin does not exist"
}
```

**data** should be returned when the execution was success. It represents the massive of elements, lines or pages, that will be displayed as a result. Example:
```json
{
	"data": {
		"type": "page",
		"children": [
			"Some page text",
			{
				"type": "button",
				"onClick": {
					"action": "getPage",
					"args": [
						"main"
					]
				},
				"text": "⬅️ Back"
			}
		]
	}
}
```
