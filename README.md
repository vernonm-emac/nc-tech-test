### INTRODUCTION

EMaC tech test designed to meet the requirements of the TASK_BRIEF.md.

### FUNCTION

This is a RESTful API backend with two end-points for a fictional Greeting Cards Website.

### USER STORIES

: The ability to get a list of all of the cards on offer.
: The ability to get the details of one card by ID number
: The abulity to post the details for a new card.
: The ability to delete an individial card.

### FEATURES

### CODING CONVENTIONS

### SCRIPTS

### END-POINTS

: GET `/cards`:
This endpoint returns a single card identified by its `id`.

Expected JSON response:

```json
[
  {
    "title": "card 1 title",
    "imageUrl": "/front-cover-portrait-1.jpg",
    "card_id": "card001"
  },
  {
    "title": "card 2 title",
    "imageUrl": "/front-cover-portrait-2.jpg",
    "card_id": "card002"
  },
  {
    "title": "card 3 title",
    "imageUrl": "/front-cover-landscape.jpg",
    "card_id": "card003"
  }
]
```

: GET `/cards/:cardId`

```json
{
  "title": "card 3 title",
  "imageUrl": "/front-cover-landscape.jpg",
  "card_id": "card003",
  "base_price": 200,
  "availableSizes": [
    {
      "id": "sm",
      "title": "Small"
    },
    {
      "id": "md",
      "title": "Medium"
    },
    {
      "id": "gt",
      "title": "Giant"
    }
  ],
  "pages": [
    {
      "title": "Front Cover",
      "templateId": "template001"
    },
    {
      "title": "Inside Left",
      "templateId": "template002"
    },
    {
      "title": "Inside Right",
      "templateId": "template003"
    },
    {
      "title": "Back Cover",
      "templateId": "template004"
    }
  ]
}
```

: POST `/cards`

Format of JSON request:

```json
{
  "title": "example title",
  "sizes": ["sm", "md", "gt"],
  "basePrice": 200,
  "pages": [
    {
      "title": "Front Cover",
      "templateId": "template001"
    },
    {
      "title": "Inside Left",
      "templateId": "template002"
    },
    {
      "title": "Inside Right",
      "templateId": "template003"
    },
    {
      "title": "Back Cover",
      "templateId": "template004"
    }
  ]
}
```

: DELETE `/cards/:cardId`

Expected response:

```json
[
  {
    "Operation": "Successful"
  }
]
```
