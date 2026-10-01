export default {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "comments": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "auth": {
      "type": "boolean"
    }
  },
  "required": [
    "comments",
    "auth"
  ]
};
